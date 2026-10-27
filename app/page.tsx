import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { ServicesOverview } from '@/components/services-overview';
import { GalleryCarousel } from '@/components/gallery-carousel';
import { WhyChooseUs } from '@/components/why-choose-us';
import { Testimonials } from '@/components/testimonials';
import { CTASection } from '@/components/cta-section';
import { ContactBanner } from '@/components/contact-actions';
import { HomeIntro } from '@/components/home-intro';
import { Footer } from '@/components/footer';
import { FloatingContact } from '@/components/floating-contact';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'AcoperiRO | Montaj și Reparații Acoperișuri în Toată România',
  absoluteTitle: true,
  description:
    'Firmă de acoperișuri cu peste 15 ani experiență: montaj, reparații, mansardări, dulgherie și hidroizolații în toată România. Ofertă gratuită: +40 743 364 243.',
  path: '/',
});

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <ServicesOverview />
      <ContactBanner
        title="Ai nevoie de un acoperiș nou sau de o reparație?"
        text="Descrie-ne lucrarea prin telefon, WhatsApp sau formular. Ofertă gratuită, fără obligații."
      />
      <WhyChooseUs />
      <GalleryCarousel />
      <Testimonials />
      <HomeIntro />
      <CTASection />
      <Footer />
      <FloatingContact />
    </main>
  );
}
