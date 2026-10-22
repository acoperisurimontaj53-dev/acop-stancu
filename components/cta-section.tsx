'use client';

import { motion } from 'framer-motion';
import { Phone, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-3xl p-8 md:p-12 lg:p-16 border border-border relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="inline-block text-accent font-medium mb-4 tracking-wider uppercase text-sm"
              >
                Contacteaza-ne
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-serif text-balance"
              >
                Ai un Proiect de Acoperis? Cere o Oferta Gratuita
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-lg text-muted-foreground mb-8"
              >
                Suna-ne acum pentru o consultatie gratuita si o oferta personalizata de montaj sau
                reparatii acoperis. Echipa noastra este pregatita sa te ajute cu orice proiect, mare sau mic.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a href="tel:+40799676512">
                  <Button size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-lg px-8 w-full sm:w-auto">
                    <Phone className="w-5 h-5" />
                    +40 799 676 512
                  </Button>
                </a>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="rounded-full gap-2 text-lg px-8 w-full sm:w-auto">
                    <MessageCircle className="w-5 h-5" />
                    Trimite Mesaj
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-primary/5 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">24h</div>
                <div className="text-sm text-muted-foreground">Timp de Raspuns</div>
              </div>
              <div className="bg-accent/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfactie Garantata</div>
              </div>
              <div className="bg-accent/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">42</div>
                <div className="text-sm text-muted-foreground">Tipuri de Servicii</div>
              </div>
              <div className="bg-primary/5 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">RO</div>
                <div className="text-sm text-muted-foreground">Toata Romania</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
