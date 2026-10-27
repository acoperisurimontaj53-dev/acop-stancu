import Link from 'next/link';
import { Check, ChevronDown } from 'lucide-react';
import type { ServiceContent } from '@/lib/service-content';

const linkClass = 'text-primary font-medium hover:underline';
const LINK_PATTERN = /\[([^\]]+)\]\(([a-z0-9-]+)\)/g;

/** Renders text where `[anchor](service-slug)` becomes a link to that service page. */
function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  const pattern = new RegExp(LINK_PATTERN.source, 'g');
  let last = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    parts.push(
      <Link key={`${match[2]}-${match.index}`} href={`/servicii/${match[2]}`} className={linkClass}>
        {match[1]}
      </Link>,
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));

  return <>{parts}</>;
}

/** Text under the hero: what the service is about and when a customer needs it. */
export function ServiceIntro({ name, content }: { name: string; content: ServiceContent }) {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 space-y-4 text-lg text-muted-foreground leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground font-serif text-balance">
            {name}: ce trebuie să știi înainte de lucrare
          </h2>
          {content.intro.map((paragraph) => (
            <p key={paragraph}>
              <RichText text={paragraph} />
            </p>
          ))}
        </div>

        <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-6 self-start">
          <h3 className="text-lg font-semibold text-foreground mb-4">Când ai nevoie de {name.toLowerCase()}</h3>
          <ul className="space-y-3">
            {content.whenNeeded.map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-0.5 w-6 h-6 shrink-0 bg-accent/10 rounded-full flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** Longer keyword-oriented text blocks, each under its own H2. */
export function ServiceSeoSections({ content }: { content: ServiceContent }) {
  if (content.sections.length === 0) return null;

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 space-y-10">
        {content.sections.map((section) => (
          <div key={section.heading}>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-serif text-balance">{section.heading}</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  <RichText text={paragraph} />
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/** FAQ dedicated to this service (the matching FAQPage structured data is added by the page). */
export function ServiceFaqSection({ name, content }: { name: string; content: ServiceContent }) {
  if (content.faqs.length === 0) return null;

  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 font-serif text-balance">
          Întrebări frecvente despre {name.toLowerCase()}
        </h2>
        <div className="space-y-3">
          {content.faqs.map((faq) => (
            <details key={faq.question} className="group bg-card border border-border rounded-2xl p-5">
              <summary className="flex items-center justify-between gap-4 font-semibold text-foreground list-none [&::-webkit-details-marker]:hidden cursor-pointer">
                {faq.question}
                <ChevronDown className="w-5 h-5 shrink-0 text-primary transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                <RichText text={faq.answer} />
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
