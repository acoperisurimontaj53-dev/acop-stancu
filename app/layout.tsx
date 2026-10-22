import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { JsonLd } from '@/components/json-ld'
import { ORGANIZATION_ID, SITE_EMAIL, SITE_NAME, SITE_PHONE, SITE_URL, WEBSITE_ID } from '@/lib/seo'
import './globals.css'

const siteJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/apple-icon.png`,
    image: `${SITE_URL}/apple-icon.png`,
    description: 'Firma de acoperisuri: montaj, reparatii, mansardari, dulgherie si hidroizolatii in toata Romania.',
    telephone: SITE_PHONE,
    email: SITE_EMAIL,
    foundingDate: '2009',
    areaServed: { '@type': 'Country', name: 'Romania' },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '19:00',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: 'ro-RO',
    publisher: { '@id': ORGANIZATION_ID },
  },
]

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'AcoperiRO | Montaj si Reparatii Acoperisuri in Toata Romania',
    template: '%s | AcoperiRO',
  },
  description: 'Firma de acoperisuri cu peste 15 ani experienta: montaj, reparatii, mansardari, dulgherie si hidroizolatii in toata Romania. Oferta gratuita.',
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { telephone: true, email: true, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    siteName: SITE_NAME,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#8B4513',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <JsonLd data={siteJsonLd} />
        <Analytics />
      </body>
    </html>
  )
}
