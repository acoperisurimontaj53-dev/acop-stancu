'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Clock, Award, Wrench, MapPin } from 'lucide-react';
import Image from 'next/image';
import { projectImages } from '@/lib/services-data';

const features = [
  {
    icon: Shield,
    title: 'Garantie Extinsa',
    description: 'Oferim garantie de pana la 30 de ani pentru materialele montate si lucrarile executate.',
  },
  {
    icon: Users,
    title: 'Echipa Profesionista',
    description: 'Specialisti cu experienta de peste 15 ani in domeniul constructiilor de acoperisuri.',
  },
  {
    icon: Clock,
    title: 'Livrare la Timp',
    description: 'Respectam termenele stabilite si comunicam transparent pe tot parcursul proiectului.',
  },
  {
    icon: Award,
    title: 'Calitate Premium',
    description: 'Folosim doar materiale de la producatori de top, certificate si testate.',
  },
  {
    icon: Wrench,
    title: 'Servicii Complete',
    description: 'De la consultanta si proiectare pana la executie si intretinere post-montaj.',
  },
  {
    icon: MapPin,
    title: 'Acoperire Nationala',
    description: 'Oferim servicii in toata Romania, cu echipe mobile disponibile rapid.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <Image
                src={projectImages[3]}
                alt="Echipa noastra la lucru"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 md:right-8 bg-card border border-border rounded-2xl p-6 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">98%</div>
                  <div className="text-sm text-muted-foreground">Clienti Multumiti</div>
                </div>
              </div>
            </motion.div>
            
            {/* Accent Shape */}
            <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full bg-accent/20 rounded-3xl" />
          </motion.div>

          {/* Content Side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-accent font-medium mb-4 tracking-wider uppercase text-sm">
                De Ce Noi
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-serif text-balance">
                Incredere Construita pe Experienta
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Suntem dedicati sa oferim cele mai bune solutii pentru acoperisul tau, 
                combinand expertiza tehnica cu materiale de calitate si servicii exceptionale.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
