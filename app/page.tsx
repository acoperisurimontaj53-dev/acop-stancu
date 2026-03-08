import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { ServicesOverview } from '@/components/services-overview';
import { GalleryCarousel } from '@/components/gallery-carousel';
import { WhyChooseUs } from '@/components/why-choose-us';
import { Testimonials } from '@/components/testimonials';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';
import { FloatingContact } from '@/components/floating-contact';

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
