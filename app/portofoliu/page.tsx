import { JsonLd } from '@/components/json-ld';
import { absoluteUrl, breadcrumbJsonLd, buildMetadata, WEBSITE_ID } from '@/lib/seo';
import { projectImages } from '@/lib/services-data';
import { PortofoliuClient } from './portofoliu-client';

export const metadata = buildMetadata({
  title: 'Portofoliu Acoperisuri: Montaj si Renovari',
  description:
    'Vezi lucrari reale de acoperisuri realizate de AcoperiRO: renovari, mansardari, montaj tigla metalica si ceramica, hidroizolatii si finisaje, in toata Romania.',
  path: '/portofoliu',
  image: projectImages[3],
});

export default function PortofoliuPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Portofoliu acoperisuri AcoperiRO',
      url: absoluteUrl('/portofoliu'),
      inLanguage: 'ro-RO',
      isPartOf: { '@id': WEBSITE_ID },
    },
    breadcrumbJsonLd([
      ['Acasa', '/'],
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
