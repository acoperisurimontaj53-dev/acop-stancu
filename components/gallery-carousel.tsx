'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { projectImages } from '@/lib/services-data';

const galleryImages = projectImages.map((src, index) => ({
  id: index + 1,
  src,
  title: [
    'Montaj membrane hidroizolante',
    'Renovare acoperis tigla ceramica',
    'Izolatie termica mansarda',
    'Constructie acoperis casa',
    'Montaj coama metalica',
    'Renovare sarpanta cladire',
    'Finisaje lambriu metalic',
    'Montaj sindrila bituminoasa',
    'Acoperis tabla faltuita',
    'Tigla ceramica noua',
    'Montaj jgheaburi si burlane',
    'Acoperis tigla metalica',
  ][index] || `Proiect ${index + 1}`,
}));

export function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const handleDragEnd = () => {
    const currentX = x.get();
    const newIndex = Math.round(-currentX / 320);
    setCurrentIndex(Math.max(0, Math.min(newIndex, galleryImages.length - 1)));
  };

  const goTo = (index: number) => {
    const newIndex = Math.max(0, Math.min(index, galleryImages.length - 1));
    setCurrentIndex(newIndex);
    controls.start({ x: -newIndex * 320 });
  };

  const prev = () => goTo(currentIndex - 1);
  const next = () => goTo(currentIndex + 1);

  return (
    <section className="py-20 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <span className="inline-block text-accent font-medium mb-4 tracking-wider uppercase text-sm">
              Portofoliu
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-serif">
              Proiectele Noastre
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              disabled={currentIndex >= galleryImages.length - 3}
              className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div 
          ref={carousel} 
          className="cursor-grab overflow-hidden"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            onDragEnd={handleDragEnd}
            animate={controls}
            style={{ x }}
            className="flex gap-6"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative min-w-[300px] md:min-w-[400px] h-[300px] md:h-[400px] rounded-2xl overflow-hidden group"
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 300px, 400px"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Expand Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setLightboxImage(image.src)}
                  className="absolute top-4 right-4 w-10 h-10 bg-background/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Expand image"
                >
                  <Expand className="w-5 h-5 text-foreground" />
                </motion.button>
                
                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-background font-semibold text-lg">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-primary' 
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-background" />
          </button>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage}
              alt="Gallery image"
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
