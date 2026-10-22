'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, ArrowUp } from 'lucide-react';
import { services, serviceCategories } from '@/lib/services-data';

const quickLinks = [
  { label: 'Acasa', href: '/' },
  { label: 'Servicii', href: '/servicii' },
  { label: 'Portofoliu', href: '/portofoliu' },
  { label: 'Despre Noi', href: '/despre' },
  { label: 'Contact', href: '/contact' },
];

const featuredServices = services.slice(0, 6);

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-accent-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div>
                <span className="block text-xl font-bold font-serif">AcoperiRO</span>
                <p className="text-xs text-background/60 -mt-1">Experti in acoperisuri</p>
              </div>
            </Link>
            <p className="text-background/70 mb-6 leading-relaxed">
              Firma de acoperisuri cu echipe in toata Romania: montaj acoperisuri, reparatii,
              mansardari, dulgherie si hidroizolatii. Cu peste 15 ani de experienta, garantam calitate si satisfactie.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-lg font-semibold mb-6">Navigare Rapida</p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-background/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-lg font-semibold mb-6">Servicii Populare</p>
            <ul className="space-y-3">
              {featuredServices.map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/servicii/${service.slug}`}
                    className="text-background/70 hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/servicii"
                  className="text-accent hover:text-accent/80 transition-colors font-medium"
                >
                  Vezi toate serviciile →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-lg font-semibold mb-6">Contact</p>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+40799676512" 
                  className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors"
                >
                  <div className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-background/50">Telefon</div>
                    <div className="font-semibold text-background">+40 799 676 512</div>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@acoperiro.ro" 
                  className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors"
                >
                  <div className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-background/50">Email</div>
                    <div className="font-semibold text-background">contact@acoperiro.ro</div>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <div className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-background/50">Zona de Acoperire</div>
                  <div className="font-semibold text-background">Toata Romania</div>
                </div>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <div className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-background/50">Program</div>
                  <div className="font-semibold text-background">Luni - Sambata: 07:00 - 19:00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} AcoperiRO. Toate drepturile rezervate.
          </p>
          <div className="flex items-center gap-6 text-sm text-background/60">
            <Link href="/confidentialitate" className="hover:text-background transition-colors">
              Politica de Confidentialitate
            </Link>
            <Link href="/termeni" className="hover:text-background transition-colors">
              Termeni si Conditii
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button: shown only after scrolling, sits above the floating contact button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-28 right-8 md:right-6 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-accent/90 transition-colors z-40"
            aria-label="Scroll to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
