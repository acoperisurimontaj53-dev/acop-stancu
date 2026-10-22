import { JsonLd } from '@/components/json-ld';
import { absoluteUrl, breadcrumbJsonLd, buildMetadata, ORGANIZATION_ID, WEBSITE_ID } from '@/lib/seo';
import { projectImages } from '@/lib/services-data';
import { DespreClient } from './despre-client';

export const metadata = buildMetadata({
  title: 'Despre Noi: Firmă de Acoperișuri din 2009',
  description:
    'Află povestea AcoperiRO: din 2009 montăm și reparăm acoperișuri în toată România, cu o echipă de specialiști, materiale certificate și garanție extinsă.',
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
      ['Acasă', '/'],
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
