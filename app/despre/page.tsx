import { JsonLd } from '@/components/json-ld';
import { absoluteUrl, breadcrumbJsonLd, buildMetadata, ORGANIZATION_ID, WEBSITE_ID } from '@/lib/seo';
import { projectImages } from '@/lib/services-data';
import { DespreClient } from './despre-client';

export const metadata = buildMetadata({
  title: 'Despre Noi: Firma de Acoperisuri din 2009',
  description:
    'Afla povestea AcoperiRO: din 2009 montam si reparam acoperisuri in toata Romania, cu o echipa de specialisti, materiale certificate si garantie extinsa.',
  path: '/despre',
  image: projectImages[10],
});

export default function DesprePage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'Despre AcoperiRO',
      url: absoluteUrl('/despre'),
      inLanguage: 'ro-RO',
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': ORGANIZATION_ID },
    },
    breadcrumbJsonLd([
      ['Acasa', '/'],
      ['Despre Noi', '/despre'],
    ]),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <DespreClient />
    </>
  );
}
