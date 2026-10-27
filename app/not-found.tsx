import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Home, Phone } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FloatingContact } from '@/components/floating-contact';
import { Button } from '@/components/ui/button';
import { services } from '@/lib/services-data';
import { SITE_PHONE, SITE_PHONE_DISPLAY } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Pagina nu a fost găsită',
  description: 'Pagina pe care o cauți nu există sau a fost mutată. Vezi serviciile noastre sau întoarce-te la prima pagină.',
  robots: { index: false, follow: true },
};

const popularServices = services.slice(0, 6);

const usefulLinks = [
  { label: 'Servicii', href: '/servicii' },
  { label: 'Portofoliu', href: '/portofoliu' },
  { label: 'Despre Noi', href: '/despre' },
  { label: 'Contact', href: '/contact' },
];

export default function NotFound() {
  return (
    <main>
      <Header />

      <section className="relative py-20 md:py-28 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-background rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center max-w-2xl mx-auto">
            <p
              className="text-8xl md:text-9xl font-bold font-serif text-accent leading-none mb-6"
              aria-hidden="true"
            >
              404
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif text-balance">
              Pagina nu a fost găsită
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Se pare că acoperișul acestei pagini a fost mutat sau adresa nu mai există. Te ajutăm să ajungi unde
              trebuie.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2 w-full sm:w-auto"
              >
                <Link href="/">
                  <Home className="w-5 h-5" />
                  Înapoi la prima pagină
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground gap-2 w-full sm:w-auto"
              >
                <Link href="/servicii">
                  Vezi serviciile
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block text-accent font-medium mb-2 tracking-wider uppercase text-sm">
              Poate te interesează
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground font-serif text-balance">
              Servicii de acoperișuri populare
            </h2>
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularServices.map((service) => (
              <li key={service.id}>
                <Link
                  href={`/servicii/${service.slug}`}
                  className="group flex items-center justify-between gap-3 bg-card rounded-2xl border border-border p-5 hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.name}
                  </span>
                  <ArrowRight className="w-4 h-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>

          <nav aria-label="Pagini utile" className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {usefulLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-12 bg-secondary rounded-3xl border border-border p-8 text-center">
            <p className="text-lg text-foreground font-semibold mb-2">Nu ai găsit ce căutai?</p>
            <p className="text-muted-foreground mb-6">
              Sună-ne și îți spunem direct cum te putem ajuta, luni – sâmbătă, între 07:00 și 19:00.
            </p>
            <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
              <a href={`tel:${SITE_PHONE}`}>
                <Phone className="w-5 h-5" />
                {SITE_PHONE_DISPLAY}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
