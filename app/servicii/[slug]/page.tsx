import { notFound } from 'next/navigation';
import { services, getServiceBySlug, getServicesByCategory, serviceCategories } from '@/lib/services-data';
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return {
      title: 'Serviciu Negasit | AcoperiRO',
    };
  }

  return {
    title: `${service.name} | AcoperiRO - Servicii Acoperisuri Romania`,
    description: service.fullDescription,
    keywords: `${service.name}, acoperisuri, ${service.features.join(', ')}, Romania`,
  };
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

  return (
    <ServicePageClient 
      service={service} 
      relatedServices={relatedServices}
      categoryName={categoryName}
    />
  );
}
