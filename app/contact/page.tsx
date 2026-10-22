import { JsonLd } from '@/components/json-ld';
import { absoluteUrl, breadcrumbJsonLd, buildMetadata, ORGANIZATION_ID, WEBSITE_ID } from '@/lib/seo';
import { ContactClient } from './contact-client';

export const metadata = buildMetadata({
  title: 'Contact și Ofertă Gratuită pentru Acoperiș',
  description:
    'Sună la +40 799 676 512 sau cere o ofertă gratuită pentru montaj, reparații ori renovare acoperiș. Răspundem în maximum 24 de ore, în toată România.',
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
      ['Acasă', '/'],
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
