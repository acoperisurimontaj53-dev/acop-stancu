export const CONSENT_STORAGE_KEY = 'cookie-consent';
/** Consent is asked again after this long (6 months). */
export const CONSENT_MAX_AGE_MS = 180 * 24 * 60 * 60 * 1000;
/** Window event used to reopen the cookie settings from the footer / privacy page. */
export const OPEN_COOKIE_SETTINGS_EVENT = 'open-cookie-settings';

export type ConsentChoice = {
  /** Google Ads: advertising cookies and conversion measurement. */
  marketing: boolean;
};

type StoredConsent = ConsentChoice & { ts: number };

/** Runs in the browser: returns the saved choice, or null when nothing valid is stored. */
export function readConsent(): ConsentChoice | null {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const stored = JSON.parse(raw) as StoredConsent;
    if (typeof stored.marketing !== 'boolean' || typeof stored.ts !== 'number') return null;
    if (Date.now() - stored.ts > CONSENT_MAX_AGE_MS) return null;
    return { marketing: stored.marketing };
  } catch {
    return null;
  }
}

/** Runs in the browser: saves the choice and tells Google (Consent Mode v2). */
export function saveConsent(choice: ConsentChoice) {
  try {
    const stored: StoredConsent = { ...choice, ts: Date.now() };
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(stored));
  } catch {
    // storage blocked: the choice only lasts until the page is closed
  }
  updateGoogleConsent(choice);
}

export function updateGoogleConsent(choice: ConsentChoice) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  const state = choice.marketing ? 'granted' : 'denied';
  window.gtag('consent', 'update', {
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
  });
}
