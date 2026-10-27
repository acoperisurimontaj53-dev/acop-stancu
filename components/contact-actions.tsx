import Link from 'next/link';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_PHONE, SITE_PHONE_DISPLAY, SITE_WHATSAPP_URL } from '@/lib/seo';

interface ContactActionsProps {
  /** `onDark` for sections with a dark / primary background. */
  variant?: 'default' | 'onDark';
  /** Pre-filled WhatsApp message, e.g. "Bună ziua, vreau o ofertă pentru mansardări." */
  whatsappMessage?: string;
  /** Show the number inside the call button (hidden on small screens). */
  showNumber?: boolean;
  className?: string;
}

/** Call + WhatsApp + quote form: the three ways to reach us, used in every call-to-action block. */
export function ContactActions({ variant = 'default', whatsappMessage, showNumber = true, className = '' }: ContactActionsProps) {
  const whatsappHref = whatsappMessage ? `${SITE_WHATSAPP_URL}?text=${encodeURIComponent(whatsappMessage)}` : SITE_WHATSAPP_URL;
  const outlineClass =
    variant === 'onDark'
      ? 'border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground dark:bg-transparent'
      : '';

  return (
    <div className={`flex flex-col sm:flex-row sm:flex-wrap gap-3 ${className}`}>
      <a href={`tel:${SITE_PHONE}`}>
        <Button size="lg" className="w-full sm:w-auto rounded-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
          <Phone className="w-5 h-5" />
          Sună acum
          {showNumber && <span className="hidden md:inline">· {SITE_PHONE_DISPLAY}</span>}
        </Button>
      </a>
      <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
        <Button size="lg" variant="outline" className={`w-full sm:w-auto rounded-full gap-2 ${outlineClass}`}>
          <MessageCircle className="w-5 h-5" />
          Scrie pe WhatsApp
        </Button>
      </a>
      <Link href="/contact">
        <Button size="lg" variant="outline" className={`w-full sm:w-auto rounded-full gap-2 ${outlineClass}`}>
          Cere ofertă gratuită
          <ArrowRight className="w-5 h-5" />
        </Button>
      </Link>
    </div>
  );
}

interface ContactBannerProps {
  title: string;
  text?: string;
  whatsappMessage?: string;
}

/** Compact call-to-action band to drop between the sections of a long page. */
export function ContactBanner({ title, text, whatsappMessage }: ContactBannerProps) {
  return (
    <section className="py-10 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="max-w-2xl">
          <p className="text-2xl md:text-3xl font-bold font-serif text-balance">{title}</p>
          {text && <p className="mt-2 text-primary-foreground/80">{text}</p>}
        </div>
        <ContactActions variant="onDark" whatsappMessage={whatsappMessage} showNumber={false} />
      </div>
    </section>
  );
}
