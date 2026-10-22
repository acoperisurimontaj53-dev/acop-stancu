import { JsonLd } from '@/components/json-ld';
import { services } from '@/lib/services-data';
import { absoluteUrl, breadcrumbJsonLd, buildMetadata, ORGANIZATION_ID, WEBSITE_ID } from '@/lib/seo';
import { ServiciiClient } from './servicii-client';

export const metadata = buildMetadata({
  title: 'Servicii pentru Acoperișuri: Montaj și Reparații',
  description:
    'Servicii de acoperișuri în toată România: montaj, reparații, dulgherie, mansardări, hidroizolații și izolații termice. Alege serviciul și cere oferta gratuită.',
  path: '/servicii',
});

export default function ServiciiPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Servicii de acoperișuri',
      url: absoluteUrl('/servicii'),
      inLanguage: 'ro-RO',
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': ORGANIZATION_ID },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: services.map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: absoluteUrl(`/servicii/${service.slug}`),
          name: service.name,
        })),
      },
    },
    breadcrumbJsonLd([
      ['Acasă', '/'],
      ['Servicii', '/servicii'],
    ]),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <ServiciiClient />
    </>
  );
}
