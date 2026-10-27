'use client';

import { useState } from 'react';
import { m } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FloatingContact } from '@/components/floating-contact';
import { Button } from '@/components/ui/button';
import { COUNTIES } from '@/lib/counties';
import { readLeadSource } from '@/lib/lead-source';
import { trackConversion } from '@/lib/tracking';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  User,
  MessageSquare
} from 'lucide-react';

export function ContactClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const serviceSelect = form.elements.namedItem('service') as HTMLSelectElement;

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          phone: data.get('phone'),
          email: data.get('email'),
          county: data.get('county'),
          service: serviceSelect.value ? serviceSelect.selectedOptions[0].text : '',
          message: data.get('message'),
          website: data.get('website'),
          source: readLeadSource(),
        }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || 'Mesajul nu a putut fi trimis. Te rugăm să încerci din nou.');
      }

      trackConversion('form');
      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Mesajul nu a putut fi trimis. Te rugăm să încerci din nou.');
    } finally {
      setIsSubmitting(false);
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
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif text-balance">
              Contact: Cere o Ofertă Gratuită pentru Acoperișul Tău
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Suntem aici să te ajutăm cu montaj, reparații sau renovare acoperiș. Contactează-ne
              prin telefon sau completează formularul și te vom contacta în cel mai scurt timp.
            </p>
          </m.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="sr-only">Date de contact Specialiști Acoperișuri</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-28 relative z-10">
            <m.a
              href="tel:+40743364243"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all hover:shadow-xl group"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Phone className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Telefon</h3>
              <p className="text-muted-foreground mb-1">Sună-ne oricând</p>
              <p className="text-xl font-bold text-primary">+40 743 364 243</p>
            </m.a>

            <m.a
              href="mailto:acoperisurimontaj53@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all hover:shadow-xl group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground mb-1">Scrie-ne un mesaj</p>
              <p className="text-primary font-medium [overflow-wrap:anywhere]">acoperisurimontaj53@gmail.com</p>
            </m.a>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Locație</h3>
              <p className="text-muted-foreground mb-1">Zona de acoperire</p>
              <p className="text-foreground font-medium">Toată România</p>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Program</h3>
              <p className="text-muted-foreground mb-1">Luni - Sâmbătă</p>
              <p className="text-foreground font-medium">07:00 - 19:00</p>
            </m.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <m.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-accent font-medium mb-4 tracking-wider uppercase text-sm">
                Formular de Contact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif">
                Cere o Ofertă pentru Montaj sau Reparații Acoperiș
              </h2>
              <p className="text-muted-foreground mb-8">
                Completează formularul și te vom contacta în cel mult 24 de ore pentru
                a discuta despre proiectul tău și a-ți trimite o ofertă gratuită.
              </p>

              {isSubmitted ? (
                <m.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card rounded-2xl p-8 border border-border text-center"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    Mesaj Trimis cu Succes!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Mulțumim pentru mesaj. Te vom contacta în cel mai scurt timp posibil.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="rounded-full"
                  >
                    Trimite alt mesaj
                  </Button>
                </m.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field: hidden from people, filled in by bots */}
                  <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="relative">
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nume Complet *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="Ion Popescu"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Telefon *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="0743 123 456"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="email@exemplu.ro"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="county" className="block text-sm font-medium text-foreground mb-2">
                        Județ *
                      </label>
                      <select
                        id="county"
                        name="county"
                        required
                        defaultValue=""
                        className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      >
                        <option value="" disabled>Selectează județul</option>
                        {COUNTIES.map((county) => (
                          <option key={county} value={county}>
                            {county}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        Serviciu Dorit
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      >
                        <option value="">Selectează un serviciu</option>
                        <option value="montaj">Montaj Acoperișuri</option>
                        <option value="reparatii">Reparații Acoperiș</option>
                        <option value="dulgherie">Dulgherie</option>
                        <option value="mansardari">Mansardări</option>
                        <option value="hidroizolatii">Hidroizolații</option>
                        <option value="tigla-metalica">Țiglă Metalică</option>
                        <option value="altele">Altele</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mesaj *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        placeholder="Descrieți proiectul sau problema..."
                      />
                    </div>
                  </div>

                  {error && (
                    <p role="alert" className="rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                      {error}
                    </p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <m.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full"
                        />
                        Se trimite...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Trimite Mesajul
                      </>
                    )}
                  </Button>
                </form>
              )}
            </m.div>

            {/* Info Side */}
            <m.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <div className="bg-card rounded-3xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6 font-serif">
                  De Ce Să Ne Alegi
                </h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Consultație Gratuită</h3>
                      <p className="text-muted-foreground text-sm">
                        Oferim consultație și evaluare gratuită pentru orice proiect.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Răspuns în 24h</h3>
                      <p className="text-muted-foreground text-sm">
                        Răspundem la orice solicitare în maximum 24 de ore.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Ofertă Personalizată</h3>
                      <p className="text-muted-foreground text-sm">
                        Fiecare proiect primește o ofertă adaptată nevoilor specifice.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Fără Obligații</h3>
                      <p className="text-muted-foreground text-sm">
                        Nu există nicio obligație până când nu ești mulțumit de oferta noastră.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Preferi să vorbești direct cu noi?
                  </p>
                  <a href="tel:+40743364243">
                    <Button className="w-full rounded-xl bg-primary hover:bg-primary/90 gap-2">
                      <Phone className="w-5 h-5" />
                      +40 743 364 243
                    </Button>
                  </a>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
