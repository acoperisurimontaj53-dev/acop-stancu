'use client';

import { useState } from 'react';
import { m, AnimatePresence } from 'framer-m';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FloatingContact } from '@/components/floating-contact';
import { Button } from '@/components/ui/button';
import { projectImages } from '@/lib/services-data';
import { X, ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Renovare Completă Casă Familială',
    location: 'București',
    category: 'Renovare',
    description: 'Renovare completă a acoperișului cu montaj de țiglă ceramică și hidroizolație nouă.',
    images: [projectImages[1], projectImages[3], projectImages[9]],
  },
  {
    id: 2,
    title: 'Mansardare Vilă',
    location: 'Cluj-Napoca',
    category: 'Mansardare',
    description: 'Mansardare completă cu izolație termică și ferestre Velux.',
    images: [projectImages[2], projectImages[5], projectImages[0]],
  },
  {
    id: 3,
    title: 'Acoperiș Nou Casă Modernă',
    location: 'Timișoara',
    category: 'Montaj',
    description: 'Montaj acoperiș nou cu țiglă metalică și sistem complet de drenaj.',
    images: [projectImages[11], projectImages[4], projectImages[8]],
  },
  {
    id: 4,
    title: 'Renovare Clădire Istorică',
    location: 'Brașov',
    category: 'Renovare',
    description: 'Renovare șarpantă și învelitoare pentru clădire de patrimoniu.',
    images: [projectImages[5], projectImages[3], projectImages[6]],
  },
  {
    id: 5,
    title: 'Hidroizolație Terasă',
    location: 'Constanța',
    category: 'Hidroizolație',
    description: 'Aplicare membrane hidroizolante pentru terasă mare de bloc.',
    images: [projectImages[0], projectImages[7], projectImages[2]],
  },
  {
    id: 6,
    title: 'Finisaje Lambriu Metalic',
    location: 'Sibiu',
    category: 'Finisaje',
    description: 'Montaj lambriu metalic pentru streșini și fațadă.',
    images: [projectImages[6], projectImages[10], projectImages[1]],
  },
];

const categories = ['Toate', 'Renovare', 'Mansardare', 'Montaj', 'Hidroizolație', 'Finisaje'];

export function PortofoliuClient() {
  const [selectedCategory, setSelectedCategory] = useState('Toate');
  const [lightboxProject, setLightboxProject] = useState<typeof projects[0] | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredProjects = selectedCategory === 'Toate' 
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const openLightbox = (project: typeof projects[0], imageIndex: number = 0) => {
    setLightboxProject(project);
    setLightboxIndex(imageIndex);
  };

  const closeLightbox = () => {
    setLightboxProject(null);
    setLightboxIndex(0);
  };

  const nextImage = () => {
    if (lightboxProject) {
      setLightboxIndex((prev) => (prev + 1) % lightboxProject.images.length);
    }
  };

  const prevImage = () => {
    if (lightboxProject) {
      setLightboxIndex((prev) => (prev - 1 + lightboxProject.images.length) % lightboxProject.images.length);
    }
  };

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
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-accent font-medium mb-4 tracking-wider uppercase text-sm">
              Portofoliu
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif text-balance">
              Portofoliu Acoperișuri: Proiecte de Montaj, Renovare și Mansardare
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Descoperă câteva dintre cele mai recente lucrări de acoperișuri finalizate cu succes,
              în toată România. Fiecare acoperiș are o poveste, iar noi suntem mândri de fiecare.
            </p>
          </m.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-secondary border-b border-border sticky top-[72px] z-30 backdrop-blur-md bg-secondary/95">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide justify-center">
            {categories.map((category) => (
              <m.button
                key={category}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full whitespace-nowrap font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-foreground hover:bg-card/80 border border-border'
                }`}
              >
                {category}
              </m.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="sr-only">Lucrări recente de acoperișuri</h2>
          <m.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <m.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(project)}
                >
                  <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                    {/* Main Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.images[0]}
                        alt={`${project.title} - ${project.location}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-accent/90 backdrop-blur-sm rounded-full text-sm font-medium text-accent-foreground">
                        {project.category}
                      </div>

                      {/* Image Count */}
                      <div className="absolute top-4 right-4 px-3 py-1 bg-foreground/80 backdrop-blur-sm rounded-full text-sm font-medium text-background">
                        {project.images.length} poze
                      </div>

                      {/* Hover Text */}
                      <div className="absolute bottom-6 left-6 right-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-background text-sm">Click pentru galerie</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full" />
                        {project.location}
                      </p>
                      <p className="text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </m.div>
              ))}
            </AnimatePresence>
          </m.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif">
              Vrei un Acoperiș ca în Portofoliul Nostru? Cere o Ofertă
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contactează-ne acum și hai să discutăm despre montajul sau renovarea acoperișului tău.
              Fiecare acoperiș poate fi transformat.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+40799676512">
                <Button size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                  <Phone className="w-5 h-5" />
                  +40 799 676 512
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full">
                  Solicită Ofertă
                </Button>
              </Link>
            </div>
          </m.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxProject && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-background" />
            </button>

            {/* Navigation Arrows */}
            {lightboxProject.images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-background" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-background" />
                </button>
              </>
            )}

            {/* Image */}
            <m.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[80vh] w-full h-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxProject.images[lightboxIndex]}
                alt={`${lightboxProject.title} - ${lightboxProject.location}, poza ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </m.div>

            {/* Info */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-background">
              <h3 className="text-xl font-semibold mb-1">{lightboxProject.title}</h3>
              <p className="text-background/70 text-sm">
                {lightboxIndex + 1} / {lightboxProject.images.length} - {lightboxProject.location}
              </p>
            </div>

            {/* Thumbnails */}
            {lightboxProject.images.length > 1 && (
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
                {lightboxProject.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setLightboxIndex(idx); }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === lightboxIndex ? 'bg-accent w-8' : 'bg-background/50 hover:bg-background/70'
                    }`}
                    aria-label={`View image ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </m.div>
        )}
      </AnimatePresence>

      <Footer />
      <FloatingContact />
    </main>
  );
}
