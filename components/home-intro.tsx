import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { JsonLd } from '@/components/json-ld';
import { SITE_PHONE_DISPLAY } from '@/lib/seo';

const steps = [
  {
    title: 'Consultație și evaluare gratuită',
    text: 'Ne descrii proiectul prin telefon sau prin formular, iar noi evaluăm acoperișul și nevoile tale, fără nicio obligație.',
  },
  {
    title: 'Ofertă personalizată',
    text: 'Primești o ofertă adaptată lucrării, cu materiale, termene și preț stabilite clar.',
  },
  {
    title: 'Execuția lucrării',
    text: 'Echipa montează sau repară acoperișul, respectă termenele stabilite și comunică transparent pe tot parcursul proiectului.',
  },
  {
    title: 'Predare și garanție',
    text: 'Predăm lucrarea curată și îți oferim garanție, în condițiile stabilite prin contract.',
  },
];

const faqs = [
  {
    question: 'Cât costă montajul unui acoperiș?',
    answer:
      'Prețul depinde de suprafață, de complexitatea acoperișului, de materialele alese și de accesul la locație, de aceea nu afișăm prețuri fixe. După o evaluare gratuită îți trimitem o ofertă personalizată.',
  },
  {
    question: 'Lucrați în toată țara?',
    answer: 'Da. Avem echipe mobile care ajung în toată România, iar consultația inițială se poate face și telefonic.',
  },
  {
    question: 'În cât timp primesc o ofertă?',
    answer:
      'Răspundem la orice solicitare în cel mult 24 de ore, în programul nostru de lucru: luni – sâmbătă, între 07:00 și 19:00.',
  },
  {
    question: 'Oferiți garanție pentru lucrări?',
    answer:
      'Da, oferim garanție extinsă pentru lucrările executate. Durata și condițiile se stabilesc în contract, în funcție de lucrare și de materialele folosite.',
  },
  {
    question: 'Ce tipuri de acoperișuri montați?',
    answer:
      'Montăm acoperișuri din țiglă metalică, țiglă ceramică, tablă fălțuită și șindrilă bituminoasă, precum și acoperișuri pentru terase, hale și clădiri tradiționale.',
  },
  {
    question: 'Faceți și reparații urgente?',
    answer: `Da, intervenim rapid pentru reparații după furtuni, grindină sau infiltrații. Sună-ne la ${SITE_PHONE_DISPLAY}.`,
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

const linkClass = 'text-primary font-medium hover:underline';

export function HomeIntro() {
  return (
    <section className="py-20 bg-background">
      <JsonLd data={faqJsonLd} />
      <div className="max-w-4xl mx-auto px-4">
        <span className="inline-block text-accent font-medium mb-4 tracking-wider uppercase text-sm">
          Despre lucrările noastre
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif text-balance">
          Montaj și reparații de acoperișuri, de la prima consultație la garanție
        </h2>

        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            AcoperiRO este o firmă de acoperișuri activă din 2009, cu echipe care lucrează în toată România. Executăm{' '}
            <Link href="/servicii/montaj-acoperisuri" className={linkClass}>montaj de acoperișuri noi</Link>,{' '}
            <Link href="/servicii/reparatii-acoperis" className={linkClass}>reparații și renovări</Link>,{' '}
            <Link href="/servicii/dulgherie" className={linkClass}>dulgherie</Link> și șarpante,{' '}
            <Link href="/servicii/mansardari" className={linkClass}>mansardări</Link>,{' '}
            <Link href="/servicii/hidroizolatii" className={linkClass}>hidroizolații</Link> și{' '}
            <Link href="/servicii/izolatie-termica-acoperis" className={linkClass}>izolații termice</Link>, iar pentru
            scurgerea apei instalăm{' '}
            <Link href="/servicii/jgheaburi-burlane" className={linkClass}>jgheaburi și burlane</Link>.
          </p>
          <p>
            Lucrăm cu{' '}
            <Link href="/servicii/tigla-metalica" className={linkClass}>țiglă metalică</Link>,{' '}
            <Link href="/servicii/tigla-ceramica" className={linkClass}>țiglă ceramică</Link>,{' '}
            <Link href="/servicii/tabla-faltuita" className={linkClass}>tablă fălțuită</Link> și{' '}
            <Link href="/servicii/sindrila-bituminoasa" className={linkClass}>șindrilă bituminoasă</Link>, alese împreună
            cu tine în funcție de tipul casei, de buget și de aspectul dorit. Folosim materiale certificate de la
            producători de top, iar lucrările sunt acoperite de garanție, cu condiții stabilite în contract. Dacă ai o
            problemă gravă, ne poți suna pentru{' '}
            <Link href="/servicii/reparatii-urgente" className={linkClass}>reparații urgente</Link>.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-foreground mt-14 mb-6 font-serif">Cum lucrăm</h3>
        <ol className="grid sm:grid-cols-2 gap-4">
          {steps.map((step, index) => (
            <li key={step.title} className="bg-card border border-border rounded-2xl p-6">
              <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold mb-3">
                {index + 1}
              </span>
              <p className="font-semibold text-foreground mb-1">{step.title}</p>
              <p className="text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>

        <h3 className="text-2xl font-bold text-foreground mt-14 mb-6 font-serif">Întrebări frecvente</h3>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group bg-card border border-border rounded-2xl p-5">
              <summary className="flex items-center justify-between gap-4 font-semibold text-foreground list-none [&::-webkit-details-marker]:hidden">
                {faq.question}
                <ChevronDown
                  className="w-5 h-5 shrink-0 text-primary transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
