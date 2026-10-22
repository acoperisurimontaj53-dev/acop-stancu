'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Mihai Popescu',
    location: 'București',
    rating: 5,
    text: 'Echipa de la AcoperiRO a făcut o treabă excepțională cu acoperișul nostru. Profesionalism, punctualitate și calitate la cel mai înalt nivel. Recomand cu încredere!',
    project: 'Montaj țiglă metalică',
  },
  {
    id: 2,
    name: 'Ana Maria Ionescu',
    location: 'Cluj-Napoca',
    rating: 5,
    text: 'Mansardarea casei noastre a fost un vis devenit realitate datorită echipei AcoperiRO. Au transformat podul într-un spațiu magnific, cu atenție la fiecare detaliu.',
    project: 'Mansardare completă',
  },
  {
    id: 3,
    name: 'George Dumitrescu',
    location: 'Timișoara',
    rating: 5,
    text: 'Aveam probleme cu infiltrațiile de ani de zile. După ce au intervenit, nicio problemă. Hidroizolația făcută de ei e impecabilă. Mulțumim!',
    project: 'Hidroizolație terasă',
  },
  {
    id: 4,
    name: 'Elena Stănescu',
    location: 'Brașov',
    rating: 5,
    text: 'Am fost impresionată de rapiditatea cu care au lucrat și de curățenia pe care au lăsat-o după finalizarea proiectului. O firmă serioasă și de încredere.',
    project: 'Renovare acoperiș',
  },
  {
    id: 5,
    name: 'Andrei Marin',
    location: 'Iași',
    rating: 5,
    text: 'Prețul a fost corect, comunicarea excelentă și rezultatul final a depășit așteptările. Cu siguranță voi apela la ei și pentru viitoarele proiecte.',
    project: 'Învelitoare nouă casă',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-medium mb-4 tracking-wider uppercase text-sm">
            Testimoniale
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif">
            Ce Spun Clienții Despre Lucrările AcoperiRO
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10 w-16 h-16 bg-accent rounded-full flex items-center justify-center">
            <Quote className="w-8 h-8 text-accent-foreground" />
          </div>

          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 pt-14 relative overflow-hidden">
            {/* Fixed min height so the navigation below doesn't jump between testimonials of different length */}
            <div className="min-h-[300px] md:min-h-[240px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-xl md:text-2xl leading-relaxed mb-8 opacity-90">
                  &ldquo;{currentTestimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div>
                  <div className="font-semibold text-lg">{currentTestimonial.name}</div>
                  <div className="text-primary-foreground/70">
                    {currentTestimonial.location} &bull; {currentTestimonial.project}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(-1)}
                className="w-10 h-10 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'w-6 bg-accent' 
                        : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(1)}
                className="w-10 h-10 rounded-full border-2 border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
