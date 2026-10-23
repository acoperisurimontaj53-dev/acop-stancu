import Script from 'next/script';
import { CONSENT_MAX_AGE_MS, CONSENT_STORAGE_KEY } from '@/lib/consent';
import { GOOGLE_ADS_ID } from '@/lib/tracking';

// Consent Mode v2: everything starts denied. A choice saved on a previous visit is applied
// before the tag configures itself, so returning visitors who accepted are measured from the first page view.
const initScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500
});
gtag('set', 'ads_data_redaction', true);
try {
  var c = JSON.parse(localStorage.getItem('${CONSENT_STORAGE_KEY}'));
  if (c && c.marketing === true && Date.now() - c.ts < ${CONSENT_MAX_AGE_MS}) {
    gtag('consent', 'update', { ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted' });
  }
} catch (e) {}
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_ID}');
`;

export function GoogleTag() {
  return (
    <>
      <Script id="google-consent-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: initScript }} />
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`} strategy="afterInteractive" />
    </>
  );
}
