export type LeadSourceData = {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  gclid?: boolean;
  fbclid?: boolean;
  referrerHost?: string;
  landingPath?: string;
};

const STORAGE_KEY = 'lead-source';

const SEARCH_ENGINES: Array<[RegExp, string]> = [
  [/(^|\.)google\./, 'Google'],
  [/(^|\.)bing\.com$/, 'Bing'],
  [/(^|\.)yahoo\./, 'Yahoo'],
  [/(^|\.)duckduckgo\.com$/, 'DuckDuckGo'],
  [/(^|\.)ecosia\.org$/, 'Ecosia'],
];

const SOCIAL: Array<[RegExp, string]> = [
  [/(^|\.)(facebook|fb)\.com$|(^|\.)fb\.me$/, 'Facebook'],
  [/(^|\.)instagram\.com$/, 'Instagram'],
  [/(^|\.)tiktok\.com$/, 'TikTok'],
  [/(^|\.)youtube\.com$|(^|\.)youtu\.be$/, 'YouTube'],
  [/(^|\.)(linkedin\.com|lnkd\.in)$/, 'LinkedIn'],
  [/(^|\.)(twitter\.com|x\.com|t\.co)$/, 'X (Twitter)'],
  [/(^|\.)pinterest\./, 'Pinterest'],
  [/(^|\.)(whatsapp\.com|wa\.me)$/, 'WhatsApp'],
];

/** Runs in the browser: remembers where the visit started (first touch of the session). */
export function captureLeadSource() {
  try {
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get('utm_source') || undefined;
    const utmMedium = params.get('utm_medium') || undefined;
    const utmCampaign = params.get('utm_campaign') || undefined;
    const gclid = params.has('gclid') || params.has('gbraid') || params.has('wbraid');
    const fbclid = params.has('fbclid');

    let referrerHost: string | undefined;
    if (document.referrer) {
      const host = new URL(document.referrer).hostname.replace(/^www\./, '');
      if (host && host !== window.location.hostname.replace(/^www\./, '')) referrerHost = host;
    }

    const hasMarker = Boolean(utmSource || utmMedium || utmCampaign || gclid || fbclid || referrerHost);
    if (!hasMarker && sessionStorage.getItem(STORAGE_KEY)) return;

    const data: LeadSourceData = {
      utmSource,
      utmMedium,
      utmCampaign,
      gclid: gclid || undefined,
      fbclid: fbclid || undefined,
      referrerHost,
      landingPath: window.location.pathname,
    };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // storage blocked or invalid referrer: the lead is then reported as "Direct / necunoscut"
  }
}

/** Runs in the browser: reads what captureLeadSource stored. */
export function readLeadSource(): LeadSourceData | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as LeadSourceData) : null;
  } catch {
    return null;
  }
}

function matchHost(host: string, list: Array<[RegExp, string]>) {
  return list.find(([pattern]) => pattern.test(host))?.[1];
}

function short(value: unknown, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

/** Runs on the server: turns the raw data into a readable label for the email. */
export function describeLeadSource(input: unknown): string {
  const data = (input && typeof input === 'object' ? input : {}) as Record<string, unknown>;
  const utmSource = short(data.utmSource, 60);
  const utmMedium = short(data.utmMedium, 60);
  const utmCampaign = short(data.utmCampaign, 100);
  const referrerHost = short(data.referrerHost, 100).toLowerCase();
  const landingPath = short(data.landingPath, 150);

  const campaign = utmCampaign ? `, campanie: ${utmCampaign}` : '';
  const landing = landingPath ? ` (a intrat pe ${landingPath})` : '';

  if (data.gclid === true) return `Google Ads (reclamă plătită)${campaign}${landing}`;

  if (data.fbclid === true || utmSource) {
    const hint = (utmSource || '').toLowerCase();
    const social = matchHost(hint.includes('.') ? hint : `${hint}.com`, SOCIAL);
    const paid = /cpc|paid|ppc|ads?|social_paid/i.test(utmMedium);
    if (data.fbclid === true && !utmSource) {
      return `Facebook / Instagram${paid ? ' (reclamă plătită)' : ''}${campaign}${landing}`;
    }
    const name = social ?? utmSource;
    return `${name}${utmMedium ? ` / ${utmMedium}` : ''}${paid ? ' (reclamă plătită)' : ''}${campaign}${landing}`;
  }

  if (referrerHost) {
    const engine = matchHost(referrerHost, SEARCH_ENGINES);
    if (engine) return `${engine} (căutare organică)${landing}`;
    const social = matchHost(referrerHost, SOCIAL);
    if (social) return `${social} (postare / link, nu reclamă)${landing}`;
    return `Alt site: ${referrerHost}${landing}`;
  }

  return `Direct sau necunoscut (link tastat, salvat, mesaj sau aplicație fără referrer)${landing}`;
}
