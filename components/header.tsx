'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { m, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ChevronDown, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { serviceCategories, services } from '@/lib/services-data';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    (href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)) ? 'page' : undefined;

  const navLinkClass = (href: string) =>
    `transition-colors font-medium ${
      isActive(href) ? 'text-primary' : 'text-foreground/80 hover:text-foreground'
    }`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Servicii în toată România</span>
            </div>
          </div>
          <a 
            href="tel:+40743364243" 
            className="flex items-center gap-2 font-semibold hover:opacity-80 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            <span>+40 743 364 243</span>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-lg'
            : 'bg-background'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2" aria-label="AcoperiRO - Acasă">
              <m.div 
                className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </m.div>
              <div className="hidden sm:block">
                <span className="block text-xl font-bold text-foreground font-serif">AcoperiRO</span>
                <p className="text-xs text-muted-foreground -mt-1">Experți în acoperișuri</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav aria-label="Meniu principal" className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                aria-current={isActive('/')}
                className={navLinkClass('/')}
              >
                Acasă
              </Link>
              
              {/* No `relative` here: the mega menu is positioned against the sticky header.
                  Stretched to the header's bottom edge (pb-4 -mb-4) so hover is not lost on the way to the panel. */}
              <div
                className="self-stretch flex items-center pb-4 -mb-4"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link
                  href="/servicii"
                  aria-current={isActive('/servicii')}
                  aria-haspopup="true"
                  aria-expanded={isServicesOpen}
                  className={`flex items-center gap-1 ${navLinkClass('/servicii')}`}
                >
                  Servicii
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </Link>
                
                <AnimatePresence>
                  {isServicesOpen && (
                    <m.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 right-0 bg-card border-b border-border shadow-xl max-h-[calc(100vh-8rem)] overflow-y-auto"
                    >
                      <div className="max-w-7xl mx-auto px-4 py-6">
                        <div className="grid grid-cols-6 gap-6">
                          {serviceCategories.map((category) => (
                            <div key={category.id}>
                              <Link
                                href={`/servicii#${category.id}`}
                                onClick={() => setIsServicesOpen(false)}
                                className="block mb-2 pb-2 border-b border-border text-sm font-semibold text-foreground hover:text-primary transition-colors"
                              >
                                {category.name}
                              </Link>
                              <ul className="space-y-0.5">
                                {services
                                  .filter((service) => service.category === category.id)
                                  .map((service) => (
                                    <li key={service.id}>
                                      <Link
                                        href={`/servicii/${service.slug}`}
                                        onClick={() => setIsServicesOpen(false)}
                                        className="block py-1 text-[13px] leading-snug text-foreground/70 hover:text-primary transition-colors"
                                      >
                                        {service.name}
                                      </Link>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="border-t border-border mt-6 pt-4 flex justify-end">
                          <Link
                            href="/servicii"
                            onClick={() => setIsServicesOpen(false)}
                            className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                          >
                            Vezi toate serviciile
                          </Link>
                        </div>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/portofoliu"
                aria-current={isActive('/portofoliu')}
                className={navLinkClass('/portofoliu')}
              >
                Portofoliu
              </Link>

              <Link
                href="/despre"
                aria-current={isActive('/despre')}
                className={navLinkClass('/despre')}
              >
                Despre Noi
              </Link>

              <Link
                href="/contact"
                aria-current={isActive('/contact')}
                className={navLinkClass('/contact')}
              >
                Contact
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <a 
                href="tel:+40743364243"
                className="hidden sm:flex"
              >
                <Button variant="outline" className="rounded-full gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="hidden md:inline">+40 743 364 243</span>
                  <span className="md:hidden">Sună</span>
                </Button>
              </a>
              
              <Link href="/contact">
                <Button className="rounded-full bg-primary hover:bg-primary/90">
                  Solicită Ofertă
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Închide meniul' : 'Deschide meniul'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <m.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border"
            >
              <nav aria-label="Meniu principal mobil" className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-4">
                <Link 
                  href="/" 
                  aria-current={isActive('/')}
                  className={`py-2 font-medium ${isActive('/') ? 'text-primary' : 'text-foreground'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Acasă
                </Link>
                <Link 
                  href="/servicii" 
                  aria-current={isActive('/servicii')}
                  className={`py-2 font-medium ${isActive('/servicii') ? 'text-primary' : 'text-foreground'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Servicii
                </Link>
                <Link 
                  href="/portofoliu" 
                  aria-current={isActive('/portofoliu')}
                  className={`py-2 font-medium ${isActive('/portofoliu') ? 'text-primary' : 'text-foreground'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Portofoliu
                </Link>
                <Link 
                  href="/despre" 
                  aria-current={isActive('/despre')}
                  className={`py-2 font-medium ${isActive('/despre') ? 'text-primary' : 'text-foreground'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Despre Noi
                </Link>
                <Link 
                  href="/contact" 
                  aria-current={isActive('/contact')}
                  className={`py-2 font-medium ${isActive('/contact') ? 'text-primary' : 'text-foreground'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <a 
                  href="tel:+40743364243" 
                  className="flex items-center gap-2 py-2 text-primary font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  +40 743 364 243
                </a>
              </nav>
            </m.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
