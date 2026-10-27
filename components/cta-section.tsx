'use client';

import { m } from 'framer-motion';
import { ContactActions } from '@/components/contact-actions';

export function CTASection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <m.div
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
              <m.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="inline-block text-accent font-medium mb-4 tracking-wider uppercase text-sm"
              >
                Contactează-ne
              </m.span>
              <m.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-serif text-balance"
              >
                Ai un Proiect de Acoperiș? Cere o Ofertă Gratuită
              </m.h2>
              <m.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-lg text-muted-foreground mb-8"
              >
                Sună-ne acum pentru o consultație gratuită și o ofertă personalizată de montaj sau
                reparații acoperiș. Echipa noastră este pregătită să te ajute cu orice proiect, mare sau mic.
              </m.p>

              <m.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <ContactActions />
              </m.div>
            </div>

            {/* Stats Cards */}
            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-primary/5 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">24h</div>
                <div className="text-sm text-muted-foreground">Timp de Răspuns</div>
              </div>
              <div className="bg-accent/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfacție Garantată</div>
              </div>
              <div className="bg-accent/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">42</div>
                <div className="text-sm text-muted-foreground">Tipuri de Servicii</div>
              </div>
              <div className="bg-primary/5 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">RO</div>
                <div className="text-sm text-muted-foreground">Toată România</div>
              </div>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
