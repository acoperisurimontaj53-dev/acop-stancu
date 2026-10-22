'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Shield, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { projectImages } from '@/lib/services-data';

const heroSlides = [
  {
    image: projectImages[1],
    title: 'Montaj Acoperisuri cu Materiale Premium',
    subtitle: 'Instalare profesionala, garantie extinsa si echipe cu peste 15 ani de experienta',
  },
  {
    image: projectImages[3],
    title: 'Renovari si Reparatii de Acoperisuri',
    subtitle: 'Transformam acoperisul tau in doar cateva zile',
  },
  {
    image: projectImages[9],
    title: 'Tigla Ceramica si Tigla Metalica',
    subtitle: 'Diversitate de modele si culori pentru orice casa',
  },
];

const stats = [
  { icon: Shield, value: '15+', label: 'Ani Experienta' },
  { icon: Award, value: '2000+', label: 'Proiecte Finalizate' },
  { icon: Clock, value: '24h', label: 'Raspuns Rapid' },
];

export function Hero() {
  const [{ currentSlide, previousSlide }, setSlides] = useState({ currentSlide: 0, previousSlide: -1 });

  const goToSlide = (next: number) => {
    setSlides((s) => (s.currentSlide === next ? s : { currentSlide: next, previousSlide: s.currentSlide }));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSlides((s) => ({
        currentSlide: (s.currentSlide + 1) % heroSlides.length,
        previousSlide: s.currentSlide,
      }));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-foreground">
      {/* Background Image Carousel: the previous slide stays fully opaque underneath
          while the new one fades in on top, so the page background never shows through */}
      {heroSlides.map((slide, index) => (
        <motion.div
          key={slide.image}
          initial={false}
          animate={{ opacity: index === currentSlide || index === previousSlide ? 1 : 0 }}
          transition={{ duration: index === currentSlide ? 1 : 0 }}
          style={{ zIndex: index === currentSlide ? 2 : index === previousSlide ? 1 : 0 }}
          className="absolute inset-0 bg-foreground"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-primary-foreground text-sm font-medium">
              Servicii in toata Romania
            </span>
          </motion.div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 font-serif leading-tight text-balance">
            Firma de Acoperisuri in Toata Romania: Montaj, Reparatii si Renovari
          </h1>

          <div className="grid mb-8">
            {heroSlides.map((slide, index) => (
              <motion.div
                key={slide.title}
                initial={false}
                animate={{ opacity: index === currentSlide ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                className="col-start-1 row-start-1"
                aria-hidden={index !== currentSlide}
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-background mb-2 font-serif leading-snug text-balance">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-background/80">
                  {slide.subtitle}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a href="tel:+40799676512">
              <Button size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-lg px-8">
                <Phone className="w-5 h-5" />
                Suna Acum
              </Button>
            </a>
            <Link href="/servicii">
              <Button size="lg" variant="outline" className="rounded-full border-background/30 bg-transparent dark:bg-transparent text-background hover:bg-background/10 hover:text-background dark:hover:bg-background/10 gap-2 text-lg px-8">
                Vezi Serviciile
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 md:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-xl bg-background/10 backdrop-blur-sm flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-background">{stat.value}</div>
                  <div className="text-xs md:text-sm text-background/70">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 bg-accent' 
                : 'bg-background/50 hover:bg-background/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 right-8 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-background/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-background/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
