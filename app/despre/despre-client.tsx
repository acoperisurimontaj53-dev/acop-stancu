'use client';

import { m } from 'framer-m';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FloatingContact } from '@/components/floating-contact';
import { Button } from '@/components/ui/button';
import { projectImages } from '@/lib/services-data';
import { 
  Phone,
  Award,
  Users,
  MapPin,
  Target,
  Heart,
  Shield,
  Clock,
  CheckCircle
} from 'lucide-react';

const stats = [
  { value: '15+', label: 'Ani Experiență', icon: Clock },
  { value: '2000+', label: 'Proiecte Finalizate', icon: Award },
  { value: '98%', label: 'Clienți Mulțumiți', icon: Heart },
  { value: '42', label: 'Tipuri de Servicii', icon: Target },
];

const values = [
  {
    icon: Shield,
    title: 'Calitate',
    description: 'Folosim doar materiale certificate și aplicăm cele mai bune practici din industrie.',
  },
  {
    icon: Users,
    title: 'Profesionalism',
    description: 'Echipa noastră este formată din specialiști cu experiență și certificări relevante.',
  },
  {
    icon: Heart,
    title: 'Dedicare',
    description: 'Tratăm fiecare proiect cu aceeași dedicare, indiferent de dimensiunea să.',
  },
  {
    icon: Target,
    title: 'Precizie',
    description: 'Atenție la detalii și execuție impecabilă pentru rezultate de lungă durată.',
  },
];

const timeline = [
  { year: '2009', title: 'Începuturi', description: 'Am început ca o mică echipă de 3 dulgheri pasionați.' },
  { year: '2013', title: 'Prima Extindere', description: 'Am ajuns la 15 angajați și am deschis primul depozit.' },
  { year: '2017', title: 'Extindere Națională', description: 'Am început să oferim servicii în toată România.' },
  { year: '2020', title: 'Diversificare', description: 'Am adăugat hidroizolații și izolații termice la servicii.' },
  { year: '2024', title: 'Prezent', description: 'Peste 2000 de proiecte finalizate și o echipă de 50+ specialiști.' },
];

export function DespreClient() {
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
              Despre Noi
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif text-balance">
              Despre AcoperiRO: Firmă de Acoperișuri cu Peste 15 Ani de Experiență
            </h1>
            <p className="text-xl text-primary-foreground/80">
              De peste 15 ani montăm, reparăm și renovăm acoperișuri în toată România,
              cu dedicare și profesionalism.
            </p>
          </m.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 -mt-28 relative z-10">
            {stats.map((stat, index) => (
              <m.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <m.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src={projectImages[10]}
                  alt="Echipa AcoperiRO la lucru pe un acoperiș"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              
              {/* Accent Shape */}
              <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full bg-accent/20 rounded-3xl" />
              
              {/* Experience Badge */}
              <m.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-2xl"
              >
                <div className="text-4xl font-bold">15+</div>
                <div className="text-sm text-primary-foreground/80">Ani de Experiență</div>
              </m.div>
            </m.div>

            {/* Content */}
            <m.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block text-accent font-medium mb-4 tracking-wider uppercase text-sm">
                Povestea Noastră
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif text-balance">
                De la o Echipă de Dulgheri la Firmă de Acoperișuri din Toată România
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  AcoperiRO a început în 2009 ca o mică echipă de trei dulgheri pasionați,
                  cu un vis simplu: să ofere servicii de acoperișuri de cea mai înaltă calitate
                  la prețuri corecte, de la montaj acoperiș până la reparații și dulgherie.
                </p>
                <p>
                  De-a lungul anilor, am crescut organic, bazându-ne pe recomandări și pe
                  reputația construită proiect după proiect. Astăzi, suntem o echipă de peste
                  50 de specialiști, cu capacitatea de a executa proiecte în toată România.
                </p>
                <p>
                  Principiile noastre au rămas aceleași: calitate fără compromis, comunicare
                  transparentă și respect pentru fiecare client. Credem că fiecare casă merită
                  un acoperiș care să o protejeze generații de-a rândul.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-foreground font-medium">Certificați ISO</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-foreground font-medium">Asigurați</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-foreground font-medium">Garanție Extinsă</span>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-accent font-medium mb-4 tracking-wider uppercase text-sm">
              Valorile Noastre
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif">
              Principiile După Care Lucrăm la Fiecare Acoperiș
            </h2>
          </m.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <m.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-accent font-medium mb-4 tracking-wider uppercase text-sm">
              Istoria Noastră
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif">
              Evoluția AcoperiRO din 2009 până Astăzi
            </h2>
          </m.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {timeline.map((item, index) => (
              <m.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background" />
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
              Cere o Consultație Gratuită pentru Acoperișul Tău
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Contactează-ne acum pentru o consultație gratuită. Suntem aici să te ajutăm
              cu orice proiect legat de acoperișuri: montaj, reparații, mansardări sau hidroizolații.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+40799676512">
                <Button size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2 w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  +40 799 676 512
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto">
                  Trimite un Mesaj
                </Button>
              </Link>
            </div>
          </m.div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  );
}
