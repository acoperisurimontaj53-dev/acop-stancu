'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Service } from '@/lib/services-data';
import { 
  Phone, 
  ArrowRight, 
  ArrowLeft,
  Check, 
  MapPin, 
  Clock, 
  Shield,
  ChevronRight
} from 'lucide-react';

interface ServicePageClientProps {
  service: Service;
  relatedServices: Service[];
  categoryName: string;
}

export function ServicePageClient({ service, relatedServices, categoryName }: ServicePageClientProps) {
  return (
    <main>
      <Header />

      {/* Breadcrumb */}
      <section className="bg-secondary py-4 border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Acasa
            </Link>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
            <Link href="/servicii" className="hover:text-foreground transition-colors">
              Servicii
            </Link>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
            <span className="text-foreground font-medium" aria-current="page">{service.name}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-accent font-medium mb-4 tracking-wider uppercase text-sm">
                <span className="w-8 h-[2px] bg-accent" />
                {categoryName}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-serif text-balance">
                {service.name} in Toata Romania
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {service.fullDescription}
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+40799676512">
                  <Button size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2 w-full sm:w-auto">
                    <Phone className="w-5 h-5" />
                    Suna Acum
                  </Button>
                </a>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="rounded-full gap-2 w-full sm:w-auto">
                    Solicita Oferta
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.name} - lucrare realizata de AcoperiRO`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              </div>
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 left-6 right-6 lg:-left-6 lg:right-auto lg:w-80 bg-card rounded-2xl p-6 shadow-2xl border border-border"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Suna pentru detalii</div>
                    <a href="tel:+40799676512" className="text-lg font-bold text-foreground hover:text-primary transition-colors">
                      +40 799 676 512
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Servicii in toata Romania</span>
                </div>
              </motion.div>
              
              {/* Accent Shape */}
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-primary/10 rounded-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block text-accent font-medium mb-2 tracking-wider uppercase text-sm">
              De Ce AcoperiRO
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground font-serif text-balance">
              Ce Primesti cand Alegi {service.name}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Garantie</h3>
              <p className="text-muted-foreground">
                Oferim garantie extinsa pentru toate lucrarile executate si materialele montate.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Timp de Executie</h3>
              <p className="text-muted-foreground">
                Respectam termenele stabilite si comunicam transparent pe tot parcursul proiectului.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Acoperire Nationala</h3>
              <p className="text-muted-foreground">
                Echipe mobile disponibile in toata Romania, gata sa intervina rapid.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-between mb-10"
            >
              <div>
                <span className="inline-block text-accent font-medium mb-2 tracking-wider uppercase text-sm">
                  Servicii Similare
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground font-serif">
                  Alte Servicii din Categoria {categoryName}
                </h2>
              </div>
              <Link href="/servicii" className="hidden md:flex">
                <Button variant="outline" className="rounded-full gap-2">
                  Vezi toate serviciile
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((related, index) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/servicii/${related.slug}`}>
                    <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={related.image}
                          alt={`${related.name} - lucrare realizata de AcoperiRO`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {related.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                          {related.shortDescription}
                        </p>
                        <div className="flex items-center text-primary text-sm font-medium">
                          <span>Afla mai mult</span>
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Link href="/servicii">
                <Button variant="outline" className="rounded-full gap-2">
                  Vezi toate serviciile
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
              Ai Nevoie de {service.name}? Cere o Oferta Gratuita
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Contacteaza-ne acum pentru o consultatie gratuita si o oferta personalizata
              pentru {service.name.toLowerCase()}, oriunde in Romania.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+40799676512">
                <Button size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2 w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  +40 799 676 512
                </Button>
              </a>
              <Link href="/servicii">
                <Button size="lg" variant="outline" className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2 w-full sm:w-auto">
                  <ArrowLeft className="w-5 h-5" />
                  Inapoi la Servicii
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
