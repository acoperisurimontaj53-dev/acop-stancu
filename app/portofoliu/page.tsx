import { JsonLd } from '@/components/json-ld';
import { absoluteUrl, breadcrumbJsonLd, buildMetadata, WEBSITE_ID } from '@/lib/seo';
import { projectImages } from '@/lib/services-data';
import { PortofoliuClient } from './portofoliu-client';

export const metadata = buildMetadata({
  title: 'Portofoliu Acoperișuri: Montaj și Renovări',
  description:
    'Vezi lucrări reale de acoperișuri realizate de AcoperiRO: renovări, mansardări, montaj țiglă metalică și ceramică, hidroizolații și finisaje, în toată România.',
  path: '/portofoliu',
  image: projectImages[3],
});

export default function PortofoliuPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Portofoliu acoperișuri AcoperiRO',
      url: absoluteUrl('/portofoliu'),
      inLanguage: 'ro-RO',
      isPartOf: { '@id': WEBSITE_ID },
    },
    breadcrumbJsonLd([
      ['Acasă', '/'],
      ['Portofoliu', '/portofoliu'],
    ]),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <PortofoliuClient />
    </>
  );
}
