export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceSection {
  /** Keyword-oriented H2 of an SEO text block. */
  heading: string;
  paragraphs: string[];
}

/**
 * Unique SEO copy for a service page. Strings may contain internal links written as
 * `[anchor text](service-slug)`; they are rendered as links to /servicii/service-slug.
 */
export interface ServiceContent {
  /** Two short paragraphs shown under the hero. */
  intro: string[];
  /** Situations in which a customer needs this service. */
  whenNeeded: string[];
  faqs: ServiceFaq[];
  /** Longer text blocks with headings, shown below the hero content. */
  sections: ServiceSection[];
}

/** Extra copy kept in separate files and merged into ServiceContent by `getServiceContent`. */
export interface ServiceSeo {
  sections: ServiceSection[];
  /** Appended after the FAQs of the base content (cost, timing, area). */
  extraFaqs: ServiceFaq[];
}

export type BaseServiceContent = Omit<ServiceContent, 'sections'>;
