import type { Metadata } from 'next';
import { projectImages } from '@/lib/services-data';

// The production domain (without www; www redirects here in Vercel). Override with NEXT_PUBLIC_SITE_URL if it ever changes.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://specialisti-acoperis.ro').replace(/\/$/, '');
export const SITE_NAME = 'Specialiști Acoperișuri';
export const SITE_PHONE = '+40743364243';
export const SITE_PHONE_DISPLAY = '+40 743 364 243';
export const SITE_WHATSAPP_URL = 'https://wa.me/40743364243';
export const SITE_EMAIL ='acoperisurimontaj53@gmail.com';
export const DEFAULT_OG_IMAGE = projectImages[1];

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

interface PageMetaInput {
  /** Page title without the site suffix; the layout template appends " | Specialiști Acoperișuri". */
  title: string;
  description: string;
  /** Path of the page, e.g. "/servicii". Used for canonical, og:url and the sitemap. */
  path: string;
  image?: string;
  /** Use the title exactly as given, without the template suffix. */
  absoluteTitle?: boolean;
}

export function buildMetadata({ title, description, path, image, absoluteTitle }: PageMetaInput): Metadata {
  const ogImage = image || DEFAULT_OG_IMAGE;
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'ro_RO',
      siteName: SITE_NAME,
      url: path,
      title: fullTitle,
      description,
      images: [{ url: ogImage, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path === '/' ? '' : path}`;
}

/** Breadcrumb structured data from an ordered list of [name, path] pairs. */
export function breadcrumbJsonLd(items: Array<[name: string, path: string]>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, path], index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      item: absoluteUrl(path),
    })),
  };
}
