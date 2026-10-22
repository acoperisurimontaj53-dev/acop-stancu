import { notFound } from 'next/navigation';
import { services, getServiceBySlug, getServicesByCategory, serviceCategories, type Service } from '@/lib/services-data';
import { JsonLd } from '@/components/json-ld';
import { absoluteUrl, breadcrumbJsonLd, buildMetadata, ORGANIZATION_ID } from '@/lib/seo';
import { ServicePageClient } from './service-page-client';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

const DESCRIPTION_MAX_LENGTH = 160;
const DESCRIPTION_CTA = 'Oferta gratuita, toata Romania.';

/** Meta description: short description + as many features as fit in 160 characters. */
function buildServiceDescription(service: Service) {
  for (let count = Math.min(3, service.features.length); count >= 0; count--) {
    const features = count > 0 ? ` ${service.features.slice(0, count).join(', ')}.` : '';
    const description = `${service.shortDescription}${features} ${DESCRIPTION_CTA}`;
    if (description.length <= DESCRIPTION_MAX_LENGTH) return description;
  }
  return service.shortDescription;
}

/** Keeps the full title (name + " | AcoperiRO" from the layout template) within ~60 characters. */
function buildServiceTitle(service: Service) {
  return service.name.length <= 24 ? `${service.name} - Servicii Profesionale` : service.name;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Serviciu Negasit',
      robots: { index: false, follow: false },
    };
  }

  return buildMetadata({
    title: buildServiceTitle(service),
    description: buildServiceDescription(service),
    path: `/servicii/${service.slug}`,
    image: service.image,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getServicesByCategory(service.category)
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  const categoryName = serviceCategories.find(c => c.id === service.category)?.name || service.category;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      serviceType: service.name,
      description: service.fullDescription,
      url: absoluteUrl(`/servicii/${service.slug}`),
      image: service.image,
      category: categoryName,
      provider: { '@id': ORGANIZATION_ID },
      areaServed: { '@type': 'Country', name: 'Romania' },
    },
    breadcrumbJsonLd([
      ['Acasa', '/'],
      ['Servicii', '/servicii'],
      [service.name, `/servicii/${service.slug}`],
    ]),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <ServicePageClient
        service={service}
        relatedServices={relatedServices}
        categoryName={categoryName}
      />
    </>
  );
}
