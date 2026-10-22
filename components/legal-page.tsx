import type { ReactNode } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FloatingContact } from '@/components/floating-contact';

export interface LegalSection {
  id: string;
  title: string;
  body: ReactNode;
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  intro: string;
  updatedAt: string;
  sections: LegalSection[];
}

export function LegalPage({ eyebrow, title, intro, updatedAt, sections }: LegalPageProps) {
  return (
    <main>
      <Header />

      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-background rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-accent font-medium mb-4 tracking-wider uppercase text-sm">
              {eyebrow}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif text-balance">
              {title}
            </h1>
            <p className="text-xl text-primary-foreground/80">{intro}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-sm text-muted-foreground mb-8">Ultima actualizare: {updatedAt}</p>

          <nav aria-label="Cuprins" className="bg-secondary rounded-2xl p-6 mb-12 border border-border">
            <p className="font-semibold text-foreground mb-3">Cuprins</p>
            <ol className="list-decimal list-inside space-y-1.5 text-muted-foreground">
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="hover:text-primary transition-colors">
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-12">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-serif">
                  {section.title}
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed [&_a]:text-primary [&_a]:font-medium [&_a:hover]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:pt-2 [&_strong]:text-foreground">
                  {section.body}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
