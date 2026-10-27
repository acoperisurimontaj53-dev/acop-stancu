import Link from 'next/link';
import { JsonLd } from '@/components/json-ld';
import { LegalPage, type LegalSection } from '@/components/legal-page';
import {
  absoluteUrl,
  breadcrumbJsonLd,
  buildMetadata,
  SITE_EMAIL,
  SITE_PHONE,
  SITE_PHONE_DISPLAY,
  SITE_URL,
  WEBSITE_ID,
} from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Termeni și Condiții',
  description:
    'Termenii și condițiile de utilizare a site-ului specialisti-acoperis.ro: informații despre servicii, oferte, garanții, drepturile consumatorilor și legea aplicabilă.',
  path: '/termeni',
});

const email = <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>;

const sections: LegalSection[] = [
  {
    id: 'despre-site',
    title: 'Despre site și acceptarea termenilor',
    body: (
      <>
        <p>
          Acești termeni și condiții reglementează utilizarea site-ului <a href={SITE_URL}>{SITE_URL.replace('https://', '')}</a>,
          operat de <strong>Specialiști Acoperișuri</strong>, firmă de acoperișuri care oferă servicii de montaj, reparații, dulgherie,
          mansardări, hidroizolații, izolații termice și alte lucrări conexe în toată România.
        </p>
        <p>
          Prin accesarea și utilizarea site-ului, confirmi că ai citit și ai înțeles acești termeni și că ești de acord cu ei.
          Dacă nu ești de acord, te rugăm să nu folosești site-ul. Modul în care îți prelucrăm datele personale este explicat în{' '}
          <Link href="/confidentialitate">Politica de Confidențialitate și Cookie-uri</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'servicii',
    title: 'Serviciile prezentate pe site',
    body: (
      <>
        <p>
          Site-ul prezintă serviciile noastre, grupate pe categorii: montaj acoperișuri, reparații, izolații, structuri,
          finisaje și drenaj, împreună cu proiecte din portofoliul nostru. Descrierile, imaginile și caracteristicile
          afișate au caracter informativ și nu reprezintă o ofertă fermă.
        </p>
        <p>
          Pe site nu sunt afișate prețuri fixe, pentru că valoarea unei lucrări depinde de dimensiunea și complexitatea
          acoperișului, de materialele alese, de accesul la locație și de starea construcției. Prețul final se stabilește
          numai în oferta personalizată și în contractul încheiat cu tine.
        </p>
        <p>
          Ne rezervăm dreptul de a modifica, completa sau retrage oricând serviciile și informațiile de pe site, fără o
          notificare prealabilă.
        </p>
      </>
    ),
  },
  {
    id: 'oferta',
    title: 'Cum soliciți o ofertă',
    body: (
      <>
        <p>Poți solicita o ofertă în mai multe moduri:</p>
        <ul>
          <li>
            prin formularul de pe pagina <Link href="/contact">Contact</Link>;
          </li>
          <li>
            telefonic, la <a href={`tel:${SITE_PHONE}`}>{SITE_PHONE_DISPLAY}</a>;
          </li>
          <li>prin email, la {email};</li>
          <li>prin WhatsApp, folosind butonul de contact de pe site.</li>
        </ul>
        <p>
          Consultația și evaluarea inițială sunt gratuite și fără nicio obligație din partea ta. Ne propunem să îți răspundem
          în cel mult 24 de ore, în programul nostru de lucru (luni – sâmbătă, 07:00 – 19:00). Oferta primită de la noi se
          adaptează proiectului tău și rămâne valabilă pe perioada menționată în ea.
        </p>
        <p>
          Trimiterea unui mesaj sau acceptarea unei estimări orale nu creează un contract. Raportul contractual se naște doar
          după acceptarea de către ambele părți a unei oferte sau a unui contract scris.
        </p>
      </>
    ),
  },
  {
    id: 'contracte',
    title: 'Contractarea și execuția lucrărilor',
    body: (
      <>
        <p>
          Lucrările se execută pe baza unui contract sau a unei oferte scrise acceptate, care stabilește cel puțin obiectul
          lucrării, materialele, prețul, modalitatea de plată, termenele de execuție și condițiile de garanție.
        </p>
        <p>
          Termenele comunicate depind de condițiile meteorologice, de disponibilitatea materialelor și de accesul în
          șantier. Dacă apar situații care impun modificarea termenelor sau a lucrărilor, te vom anunța și vom stabili
          împreună soluția.
        </p>
        <p>
          Ne angajăm să executăm lucrările cu materiale de calitate, respectând normele tehnice și de siguranță în vigoare.
          Beneficiarul se obligă să asigure accesul la acoperiș și să furnizeze informațiile necesare executării lucrării.
        </p>
      </>
    ),
  },
  {
    id: 'garantie',
    title: 'Garanții',
    body: (
      <>
        <p>
          Oferim garanție pentru lucrările executate și, acolo unde producătorul o acordă, pentru materialele montate.
          Durata, acoperirea și excluderile garanției depind de tipul lucrării și de materialele folosite și se
          stabilesc în contract și în documentele de garanție.
        </p>
        <p>
          Duratele și caracteristicile menționate pe site (de exemplu „garanție extinsă" sau perioade orientative pentru
          anumite materiale) au caracter informativ. Condițiile obligatorii sunt cele din contractul încheiat cu tine.
          Garanția nu acoperă deteriorările cauzate de intervenții neautorizate, de lipsa întreținerii sau de evenimente
          meteorologice extreme, în măsura în care contractul sau legea nu prevăd altfel.
        </p>
      </>
    ),
  },
  {
    id: 'proprietate-intelectuala',
    title: 'Proprietate intelectuală',
    body: (
      <>
        <p>
          Conținutul site-ului (texte, imagini, fotografii din portofoliu, logo, denumirea Specialiști Acoperișuri, grafică și structură)
          aparține operatorului site-ului sau este folosit cu acordul titularilor drepturilor și este protejat de legislația privind
          dreptul de autor și proprietatea intelectuală.
        </p>
        <p>
          Nu ai voie să copiezi, să reproduci, să distribui sau să modifici conținutul site-ului în scopuri comerciale fără
          acordul nostru scris. Poți folosi informațiile pentru uz personal și poți distribui linkuri către pagini ale
          site-ului.
        </p>
      </>
    ),
  },
  {
    id: 'utilizare',
    title: 'Reguli de utilizare a site-ului',
    body: (
      <>
        <p>Te angajezi să folosești site-ul în mod legal și de bună-credință. Este interzis:</p>
        <ul>
          <li>să transmiți prin formular informații false sau date ale altor persoane fără acordul lor;</li>
          <li>să trimiți mesaje abuzive, în masă sau cu conținut ilegal;</li>
          <li>
            să încerci să afectezi securitatea sau funcționarea site-ului (atacuri informatice, accesare neautorizată,
            încărcare excesivă a serverelor);
          </li>
          <li>să extragi automat conținutul site-ului în alte scopuri decât cele permise de lege.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'linkuri-externe',
    title: 'Linkuri către alte site-uri',
    body: (
      <p>
        Site-ul poate conține linkuri către pagini ale unor terți, de exemplu WhatsApp sau{' '}
        <a href="https://webbase.ro" target="_blank" rel="noopener">webbase.ro</a>, firma care a optimizat și actualizat
        site-ul. Nu controlăm conținutul acestor pagini și nu răspundem pentru informațiile sau practicile lor.
      </p>
    ),
  },
  {
    id: 'raspundere',
    title: 'Limitarea răspunderii',
    body: (
      <>
        <p>
          Depunem eforturi pentru ca informațiile de pe site să fie corecte și actuale, dar nu putem garanta că sunt complet
          lipsite de erori sau că site-ul va fi disponibil permanent, fără întreruperi. Pot apărea întreruperi pentru
          mentenanță sau din motive independente de voința noastră.
        </p>
        <p>
          În măsura permisă de lege, nu răspundem pentru daune indirecte sau pierderi rezultate din utilizarea site-ului ori
          din imposibilitatea de a-l utiliza. Nicio prevedere din acești termeni nu limitează răspunderea noastră pentru
          dol sau culpă gravă și nici drepturile pe care legea ți le recunoaște ca persoană fizică sau consumator.
        </p>
      </>
    ),
  },
  {
    id: 'consumatori',
    title: 'Drepturile consumatorilor și soluționarea litigiilor',
    body: (
      <>
        <p>
          Dacă ești consumator, beneficiezi de drepturile prevăzute de legislația română și europeană privind protecția
          consumatorilor, care se aplică indiferent de acești termeni.
        </p>
        <p>
          Încercăm să rezolvăm orice nemulțumire pe cale amiabilă. Scrie-ne la {email} sau sună la{' '}
          <a href={`tel:${SITE_PHONE}`}>{SITE_PHONE_DISPLAY}</a> și vom analiza reclamația ta. Dacă nu ajungem la o soluție,
          poți apela la:
        </p>
        <ul>
          <li>
            Autoritatea Națională pentru Protecția Consumatorilor (ANPC):{' '}
            <a href="https://anpc.ro" target="_blank" rel="noopener noreferrer">anpc.ro</a>;
          </li>
          <li>
            platforma europeană de soluționare online a litigiilor (SOL):{' '}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
              ec.europa.eu/consumers/odr
            </a>
            ;
          </li>
          <li>instanțele judecătorești competente din România.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'date-personale',
    title: 'Datele personale',
    body: (
      <p>
        Datele pe care ni le transmiți prin formular, telefon, email sau WhatsApp sunt prelucrate conform{' '}
        <Link href="/confidentialitate">Politicii de Confidențialitate și Cookie-uri</Link>, unde găsești detalii despre
        scopurile prelucrării, durata de stocare și drepturile tale.
      </p>
    ),
  },
  {
    id: 'modificari',
    title: 'Modificarea termenilor',
    body: (
      <p>
        Putem modifica acești termeni oricând. Versiunea în vigoare este cea publicată pe această pagină, iar data ultimei
        actualizări apare la începutul ei. Continuarea utilizării site-ului după publicarea modificărilor înseamnă că
        le accepți. Modificările nu afectează contractele de lucrări deja încheiate.
      </p>
    ),
  },
  {
    id: 'lege-aplicabila',
    title: 'Legea aplicabilă',
    body: (
      <p>
        Acești termeni sunt guvernați de legea română. Orice litigiu care nu poate fi rezolvat pe cale amiabilă va fi
        soluționat de instanțele române competente, fără a aduce atingere drepturilor tale de consumator.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    body: (
      <>
        <p>Pentru întrebări legate de acești termeni sau de serviciile noastre, ne poți contacta la:</p>
        <ul>
          <li>Email: {email}</li>
          <li>
            Telefon: <a href={`tel:${SITE_PHONE}`}>{SITE_PHONE_DISPLAY}</a>
          </li>
          <li>Program: luni – sâmbătă, 07:00 – 19:00</li>
          <li>Zona de acoperire: toată România</li>
        </ul>
      </>
    ),
  },
];

export default function TermeniPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Termeni și Condiții',
      url: absoluteUrl('/termeni'),
      inLanguage: 'ro-RO',
      isPartOf: { '@id': WEBSITE_ID },
    },
    breadcrumbJsonLd([
      ['Acasă', '/'],
      ['Termeni și Condiții', '/termeni'],
    ]),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <LegalPage
        eyebrow="Informații legale"
        title="Termeni și Condiții de Utilizare"
        intro="Regulile de utilizare a site-ului nostru, informații despre oferte, contracte și garanții și drepturile tale ca beneficiar."
        updatedAt="22 octombrie 2026"
        sections={sections}
      />
    </>
  );
}
