'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Clock, Award, Wrench, MapPin } from 'lucide-react';
import Image from 'next/image';
import { projectImages } from '@/lib/services-data';

const features = [
  {
    icon: Shield,
    title: 'Garanție Extinsă',
    description: 'Oferim garanție de până la 30 de ani pentru materialele montate și lucrările executate.',
  },
  {
    icon: Users,
    title: 'Echipă Profesionistă',
    description: 'Specialiști cu experiență de peste 15 ani în domeniul construcțiilor de acoperișuri.',
  },
  {
    icon: Clock,
    title: 'Livrare la Timp',
    description: 'Respectăm termenele stabilite și comunicăm transparent pe tot parcursul proiectului.',
  },
  {
    icon: Award,
    title: 'Calitate Premium',
    description: 'Folosim doar materiale de la producători de top, certificate și testate.',
  },
  {
    icon: Wrench,
    title: 'Servicii Complete',
    description: 'De la consultanță și proiectare până la execuție și întreținere post-montaj.',
  },
  {
    icon: MapPin,
    title: 'Acoperire Națională',
    description: 'Oferim servicii în toată România, cu echipe mobile disponibile rapid.',
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
                alt="Echipa AcoperiRO la montajul unui acoperiș"
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
                  <div className="text-sm text-muted-foreground">Clienți Mulțumiți</div>
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
                De Ce Să Alegi AcoperiRO pentru Acoperișul Tău
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Suntem o firmă de acoperișuri dedicată să ofere cele mai bune soluții pentru casa ta,
                combinând expertiză tehnică cu materiale de calitate și servicii excepționale.
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
