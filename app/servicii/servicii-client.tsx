'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FloatingContact } from '@/components/floating-contact';
import { services, serviceCategories } from '@/lib/services-data';
import { ArrowRight, Search, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ServiciiClient() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = services.filter((service) => {
    const matchesCategory = !selectedCategory || service.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-background rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-accent font-medium mb-4 tracking-wider uppercase text-sm">
              Serviciile Noastre
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif text-balance">
              Servicii de Acoperișuri: Montaj, Reparații, Izolații și Mansardări
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Alege dintre cele {services.length} servicii profesionale pentru acoperișul tău,
              în toată România: de la montaj acoperiș și reparații până la dulgherie,
              hidroizolații și izolații termice.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                aria-label="Caută servicii de acoperișuri"
                placeholder="Caută servicii..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-secondary border-b border-border sticky top-[72px] z-30 backdrop-blur-md bg-secondary/95">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-full whitespace-nowrap font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-foreground hover:bg-card/80 border border-border'
              }`}
            >
              Toate ({services.length})
            </motion.button>
            {serviceCategories.map((category) => {
              const count = services.filter(s => s.category === category.id).length;
              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full whitespace-nowrap font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card text-foreground hover:bg-card/80 border border-border'
                  }`}
                >
                  {category.name} ({count})
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="sr-only">Lista serviciilor de acoperișuri</h2>
          {filteredServices.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group"
                  >
                    <Link href={`/servicii/${service.slug}`}>
                      <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                        {/* Image */}
                        <div className="relative h-52 overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                          
                          {/* Category Badge */}
                          <div className="absolute top-4 left-4 px-3 py-1 bg-accent/90 backdrop-blur-sm rounded-full text-sm font-medium text-accent-foreground">
                            {serviceCategories.find(c => c.id === service.category)?.name || service.category}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-muted-foreground mb-4 flex-1 line-clamp-3">
                            {service.shortDescription}
                          </p>
                          
                          {/* Features Preview */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.features.slice(0, 2).map((feature) => (
                              <span 
                                key={feature}
                                className="text-xs bg-secondary px-2 py-1 rounded-full text-muted-foreground"
                              >
                                {feature}
                              </span>
                            ))}
                            {service.features.length > 2 && (
                              <span className="text-xs bg-secondary px-2 py-1 rounded-full text-muted-foreground">
                                +{service.features.length - 2}
                              </span>
                            )}
                          </div>
                          
                          <div className="flex items-center text-primary font-medium">
                            <span>Vezi detalii</span>
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                Nu am găsit niciun serviciu
              </h3>
              <p className="text-muted-foreground mb-6">
                Încearcă să modifici filtrul sau termenul de căutare
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery('');
                }}
                className="rounded-full"
              >
                Resetează filtrele
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Intro text: gives the listing page indexable copy and internal links to the main services */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif text-balance">
            Servicii de Acoperișuri pentru Case, Hale și Clădiri Speciale
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              AcoperiRO ofera servicii complete pentru acoperisuri, de la{' '}
              <Link href="/servicii/montaj-acoperisuri" className="text-primary font-medium hover:underline">montaj acoperișuri</Link>{' '}
              noi cu <Link href="/servicii/tigla-metalica" className="text-primary font-medium hover:underline">țiglă metalică</Link>,{' '}
              <Link href="/servicii/tigla-ceramica" className="text-primary font-medium hover:underline">țiglă ceramică</Link> sau{' '}
              <Link href="/servicii/tabla-faltuita" className="text-primary font-medium hover:underline">tablă fălțuită</Link>,
              pana la <Link href="/servicii/reparatii-acoperis" className="text-primary font-medium hover:underline">reparații acoperiș</Link>{' '}
              și intervenții urgente după furtuni sau infiltrații.
            </p>
            <p>
              Executam lucrari de <Link href="/servicii/dulgherie" className="text-primary font-medium hover:underline">dulgherie</Link>,{' '}
              <Link href="/servicii/mansardari" className="text-primary font-medium hover:underline">mansardări</Link>,{' '}
              <Link href="/servicii/hidroizolatii" className="text-primary font-medium hover:underline">hidroizolații</Link> si{' '}
              <Link href="/servicii/izolatie-termica-acoperis" className="text-primary font-medium hover:underline">izolație termică a acoperișului</Link>,
              iar pentru scurgerea apei montam{' '}
              <Link href="/servicii/jgheaburi-burlane" className="text-primary font-medium hover:underline">jgheaburi și burlane</Link>.
              Lucrăm în toată România, atât pentru locuințe, cât și pentru hale, terase și clădiri de patrimoniu.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif">
              Nu Găsești Serviciul Căutat? Sună-ne
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Sună-ne și discutăm despre proiectul tău. Oferim soluții personalizate
              pentru orice tip de acoperiș, cu ofertă gratuită.
            </p>
            <a href="tel:+40799676512">
              <Button size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                <Phone className="w-5 h-5" />
                +40 799 676 512
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
