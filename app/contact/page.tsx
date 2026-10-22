import { JsonLd } from '@/components/json-ld';
import { absoluteUrl, breadcrumbJsonLd, buildMetadata, ORGANIZATION_ID, WEBSITE_ID } from '@/lib/seo';
import { ContactClient } from './contact-client';

export const metadata = buildMetadata({
  title: 'Contact si Oferta Gratuita pentru Acoperis',
  description:
    'Suna la +40 799 676 512 sau cere o oferta gratuita pentru montaj, reparatii ori renovare acoperis. Raspundem in maximum 24 de ore, in toata Romania.',
  path: '/contact',
});

export default function ContactPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact AcoperiRO',
      url: absoluteUrl('/contact'),
      inLanguage: 'ro-RO',
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': ORGANIZATION_ID },
    },
    breadcrumbJsonLd([
      ['Acasa', '/'],
      ['Contact', '/contact'],
    ]),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <ContactClient />
    </>
  );
}
