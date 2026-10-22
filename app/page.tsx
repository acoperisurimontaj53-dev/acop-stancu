import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { ServicesOverview } from '@/components/services-overview';
import { GalleryCarousel } from '@/components/gallery-carousel';
import { WhyChooseUs } from '@/components/why-choose-us';
import { Testimonials } from '@/components/testimonials';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';
import { FloatingContact } from '@/components/floating-contact';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'AcoperiRO | Montaj si Reparatii Acoperisuri in Toata Romania',
  absoluteTitle: true,
  description:
    'Firma de acoperisuri cu peste 15 ani experienta: montaj, reparatii, mansardari, dulgherie si hidroizolatii in toata Romania. Oferta gratuita: +40 799 676 512.',
  path: '/',
});

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <GalleryCarousel />
      <Testimonials />
      <CTASection />
      <Footer />
      <FloatingContact />
    </main>
  );
}
