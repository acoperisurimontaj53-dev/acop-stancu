export const GOOGLE_ADS_ID = 'AW-18532968088';

/**
 * Conversion labels from Google Ads (Goals > Conversions > the action > Tag setup > Event snippet).
 * The snippet looks like: gtag('event', 'conversion', { 'send_to': 'AW-18532968088/LABEL' })
 * An action with an empty label is skipped.
 */
export const CONVERSION_LABELS = {
  call: 'Vt96CIW9h6cdEJjNmoVF',
  whatsapp: '',
  form: '',
} as const;

export type ConversionKind = keyof typeof CONVERSION_LABELS;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Runs in the browser. Consent Mode decides what Google actually stores, so this can fire at any time. */
export function trackConversion(kind: ConversionKind) {
  const label = CONVERSION_LABELS[kind];
  if (!label || typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'conversion', { send_to: `${GOOGLE_ADS_ID}/${label}` });
}
