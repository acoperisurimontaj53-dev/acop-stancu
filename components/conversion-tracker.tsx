'use client';

import { useEffect } from 'react';
import { trackConversion } from '@/lib/tracking';

/** One listener for the whole site: taps on phone and WhatsApp links count as conversions. */
export function ConversionTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const href = target.closest('a')?.getAttribute('href');
      if (!href) return;

      if (href.startsWith('tel:')) trackConversion('call');
      else if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) trackConversion('whatsapp');
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
