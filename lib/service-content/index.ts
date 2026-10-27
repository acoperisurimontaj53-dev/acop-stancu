import { izolatieStructuriContent } from './izolatie-structuri';
import { montajFinisajeContent } from './montaj-finisaje';
import { reparatiiDrenajContent } from './reparatii-drenaj';
import { seoIzolatieStructuri } from './seo-izolatie-structuri';
import { seoMontajFinisaje } from './seo-montaj-finisaje';
import { seoReparatiiDrenaj } from './seo-reparatii-drenaj';
import type { BaseServiceContent, ServiceContent, ServiceSeo } from './types';

export type { ServiceContent, ServiceFaq, ServiceSection } from './types';

const baseContent: Record<string, BaseServiceContent> = {
  ...montajFinisajeContent,
  ...reparatiiDrenajContent,
  ...izolatieStructuriContent,
};

const seoContent: Record<string, ServiceSeo> = {
  ...seoMontajFinisaje,
  ...seoReparatiiDrenaj,
  ...seoIzolatieStructuri,
};

/** Unique copy of a service page: intro, "when you need it", SEO text blocks and its own FAQ. */
export function getServiceContent(slug: string): ServiceContent | undefined {
  const base = baseContent[slug];
  if (!base) return undefined;

  const seo = seoContent[slug];
  return {
    ...base,
    sections: seo?.sections ?? [],
    faqs: [...base.faqs, ...(seo?.extraFaqs ?? [])],
  };
}

/** Removes the `[text](slug)` link markup, for places that need plain text (structured data). */
export function stripLinks(text: string): string {
  return text.replace(/\[([^\]]+)\]\([a-z0-9-]+\)/g, '$1');
}
