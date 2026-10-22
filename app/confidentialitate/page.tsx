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
  title: 'Politica de Confidențialitate și Cookie-uri',
  description:
    'Află cum prelucrează AcoperiRO datele tale personale, ce drepturi ai conform GDPR și ce cookie-uri folosește site-ul specialisti-acoperis.ro.',
  path: '/confidentialitate',
});

const email = (
  <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
);

const sections: LegalSection[] = [
  {
    id: 'operator',
    title: 'Cine suntem și cum ne poți contacta',
    body: (
      <>
        <p>
          Site-ul <a href={SITE_URL}>{SITE_URL.replace('https://', '')}</a> este operat de <strong>AcoperiRO</strong>,
          firmă de acoperișuri care oferă servicii de montaj, reparații, dulgherie, mansardări, hidroizolații și izolații
          termice în toată România. În această politică, „AcoperiRO", „noi" și „Operatorul" desemnează operatorul site-ului,
          iar „tu" desemnează persoana care vizitează site-ul sau ne contactează.
        </p>
        <p>
          Respectăm confidențialitatea datelor tale și le prelucrăm în conformitate cu Regulamentul (UE) 2016/679 (GDPR),
          cu Legea nr. 190/2018 și cu Legea nr. 506/2004 privind prelucrarea datelor cu caracter personal în sectorul
          comunicațiilor electronice.
        </p>
        <p>Pentru orice întrebare legată de datele tale personale, ne poți contacta astfel:</p>
        <ul>
          <li>
            Email: {email}
          </li>
          <li>
            Telefon: <a href={`tel:${SITE_PHONE}`}>{SITE_PHONE_DISPLAY}</a>
          </li>
          <li>Program: luni – sâmbătă, 07:00 – 19:00</li>
          <li>Zona de acoperire: toată România</li>
        </ul>
      </>
    ),
  },
  {
    id: 'date-colectate',
    title: 'Ce date colectăm',
    body: (
      <>
        <h3>Date pe care ni le transmiți direct</h3>
        <p>
          Când completezi formularul de contact de pe pagina <Link href="/contact">Contact</Link>, colectăm datele introduse de tine:
        </p>
        <ul>
          <li>nume complet (obligatoriu);</li>
          <li>număr de telefon (obligatoriu);</li>
          <li>adresă de email (opțională);</li>
          <li>serviciul dorit (opțional);</li>
          <li>mesajul tău, în care descrii proiectul sau problema (obligatoriu).</li>
        </ul>
        <p>
          Dacă ne suni, ne scrii pe email sau pe WhatsApp, prelucrăm numărul de telefon sau adresa de email de pe care ne
          contactezi, precum și informațiile pe care ni le comunici (de exemplu localitatea, tipul de acoperiș sau
          detalii despre lucrare).
        </p>

        <h3>Date tehnice colectate automat</h3>
        <p>
          Când vizitezi site-ul, serverele de găzduire și serviciul de statistici procesează date tehnice de bază: adresa IP,
          tipul de browser și de dispozitiv, sistemul de operare, pagina vizitată, data și ora accesării. Aceste date sunt
          necesare pentru funcționarea și securitatea site-ului, iar statisticile le folosim în formă agregată, fără să te
          identificăm personal.
        </p>

        <h3>Date pe care nu le colectăm</h3>
        <p>
          Nu îți cerem și nu prelucrăm date sensibile (de exemplu date privind sănătatea sau convingerile) și nu îți cerem
          datele cardului bancar prin intermediul site-ului. Nu creăm profiluri ale vizitatorilor în scopuri de publicitate.
        </p>
      </>
    ),
  },
  {
    id: 'scopuri',
    title: 'De ce folosim datele tale și pe ce temei legal',
    body: (
      <>
        <ul>
          <li>
            <strong>Răspunsul la solicitările tale și transmiterea unei oferte</strong> (consultație, evaluare, ofertă
            personalizată). Temei: măsuri precontractuale luate la cererea ta, art. 6 alin. (1) lit. b) GDPR.
          </li>
          <li>
            <strong>Încheierea și executarea contractului de lucrări</strong>, inclusiv programare, comunicare pe parcursul
            proiectului și garanție. Temei: executarea contractului, art. 6 alin. (1) lit. b) GDPR.
          </li>
          <li>
            <strong>Respectarea obligațiilor legale</strong>, de exemplu cele contabile și fiscale. Temei: obligație legală,
            art. 6 alin. (1) lit. c) GDPR.
          </li>
          <li>
            <strong>Securitatea și buna funcționare a site-ului</strong>, prevenirea abuzurilor și statistici agregate despre
            utilizare. Temei: interesul nostru legitim, art. 6 alin. (1) lit. f) GDPR.
          </li>
          <li>
            <strong>Comunicări comerciale</strong>, doar dacă îți dai acordul separat. Temei: consimțământul tău, art. 6
            alin. (1) lit. a) GDPR, pe care îl poți retrage oricând. Nu îți trimitem mesaje promoționale fără acordul tău.
          </li>
        </ul>
        <p>Nu luăm decizii bazate exclusiv pe prelucrare automată și nu vindem datele tale personale.</p>
      </>
    ),
  },
  {
    id: 'destinatari',
    title: 'Cui putem transmite datele',
    body: (
      <>
        <p>Datele tale pot fi accesate, strict în măsura necesară, de:</p>
        <ul>
          <li>
            <strong>furnizorul de găzduire a site-ului</strong> (Vercel Inc.), care livrează site-ul și imaginile din galerie
            și procesează date tehnice precum adresa IP;
          </li>
          <li>
            <strong>furnizorul serviciului de email și de comunicare</strong> prin care primim și răspundem solicitărilor
            tale;
          </li>
          <li>
            <strong>furnizori de servicii contabile, juridice sau fiscale</strong>, dacă încheiem un contract de lucrări;
          </li>
          <li>
            <strong>autorități publice</strong>, atunci când legea ne obligă să le comunicăm datele.
          </li>
        </ul>
        <p>
          Furnizorii noștri acționează ca persoane împuternicite și prelucrează datele doar conform instrucțiunilor noastre și
          pe baza unor acorduri care respectă GDPR.
        </p>
        <h3>Transferuri în afara Spațiului Economic European</h3>
        <p>
          Unii furnizori, precum Vercel Inc., au sediul în Statele Unite ale Americii. Transferurile de date se fac pe baza
          garanțiilor prevăzute de GDPR, respectiv decizia de adecvare a Comisiei Europene privind cadrul UE–SUA de
          protecție a datelor (EU–US Data Privacy Framework) și/sau clauzele contractuale standard.
        </p>
      </>
    ),
  },
  {
    id: 'stocare',
    title: 'Cât timp păstrăm datele',
    body: (
      <>
        <ul>
          <li>
            <strong>Solicitările de ofertă și mesajele</strong> care nu duc la un contract: cât timp este necesar pentru a
            răspunde și a purta discuția cu tine, apoi le ștergem sau le anonimizăm.
          </li>
          <li>
            <strong>Datele din contractele de lucrări</strong>: pe durata contractului și a garanției acordate, iar
            documentele justificative, pe durata prevăzută de legislația contabilă și fiscală în vigoare.
          </li>
          <li>
            <strong>Datele tehnice din jurnalele serverelor și statisticile agregate</strong>: pe perioada stabilită de
            furnizorii de găzduire și de statistici, care este limitată.
          </li>
          <li>
            <strong>Datele prelucrate pe baza consimțământului</strong>: până la retragerea acestuia.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'drepturi',
    title: 'Drepturile tale',
    body: (
      <>
        <p>În legătură cu datele tale personale, ai următoarele drepturi:</p>
        <ul>
          <li>dreptul de acces la datele pe care le prelucrăm;</li>
          <li>dreptul la rectificarea datelor inexacte sau incomplete;</li>
          <li>dreptul la ștergerea datelor („dreptul de a fi uitat"), în condițiile legii;</li>
          <li>dreptul la restricționarea prelucrării;</li>
          <li>dreptul la portabilitatea datelor;</li>
          <li>dreptul de opoziție față de prelucrările bazate pe interesul legitim;</li>
          <li>dreptul de a-ți retrage consimțământul oricând, fără ca retragerea să afecteze prelucrările anterioare;</li>
          <li>dreptul de a nu fi supus unei decizii bazate exclusiv pe prelucrare automată.</li>
        </ul>
        <p>
          Pentru a-ți exercita drepturile, scrie-ne la {email} sau sună la{' '}
          <a href={`tel:${SITE_PHONE}`}>{SITE_PHONE_DISPLAY}</a>. Îți răspundem în cel mult 30 de zile de la primirea
          cererii. Putem solicita informații suplimentare pentru a-ți verifica identitatea.
        </p>
        <h3>Plângeri la autoritatea de supraveghere</h3>
        <p>
          Dacă consideri că prelucrarea datelor tale încalcă legea, ai dreptul să depui o plângere la Autoritatea Națională
          de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP), B-dul General Gheorghe Magheru nr. 28–30,
          Sector 1, București, cod poștal 010336, email{' '}
          <a href="mailto:anspdcp@dataprotection.ro">anspdcp@dataprotection.ro</a>, site{' '}
          <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">
            www.dataprotection.ro
          </a>
          . Te invităm însă să ne contactezi mai întâi, pentru a încerca să rezolvăm împreună problema.
        </p>
      </>
    ),
  },
  {
    id: 'securitate',
    title: 'Securitatea datelor',
    body: (
      <>
        <p>
          Luăm măsuri tehnice și organizatorice rezonabile pentru a proteja datele tale împotriva accesului neautorizat, a
          pierderii sau a distrugerii: site-ul este accesibil prin conexiune criptată (HTTPS), accesul la datele primite este
          limitat la persoanele care au nevoie de ele, iar furnizorii noștri aplică propriile măsuri de securitate.
        </p>
        <p>
          Nicio transmitere de date prin internet nu este însă complet lipsită de risc. Te rugăm să nu ne transmiți prin
          formular informații care nu sunt necesare pentru solicitarea ta.
        </p>
      </>
    ),
  },
  {
    id: 'minori',
    title: 'Minori',
    body: (
      <p>
        Serviciile noastre se adresează persoanelor majore. Nu colectăm în mod intenționat date de la persoane sub 16 ani. Dacă
        ai aflat că un minor ne-a transmis date personale fără acordul părinților, scrie-ne la {email} și le vom șterge.
      </p>
    ),
  },
  {
    id: 'cookie-uri',
    title: 'Politica de cookie-uri',
    body: (
      <>
        <h3>Ce sunt cookie-urile</h3>
        <p>
          Cookie-urile sunt fișiere text mici pe care un site le salvează în browserul tău. Ele pot reține preferințe, pot
          asigura funcționarea unor servicii sau pot măsura utilizarea site-ului. Se aplică Legea nr. 506/2004 și GDPR.
        </p>

        <h3>Ce cookie-uri folosim</h3>
        <p>
          <strong>Site-ul nu folosește cookie-uri de marketing, de publicitate sau de urmărire a vizitatorilor</strong>, nici
          proprii, nici ale terților. Pentru că nu folosim cookie-uri care necesită consimțământul tău, nu afișăm un banner
          de cookie-uri.
        </p>
        <ul>
          <li>
            <strong>Statistici de vizitare:</strong> folosim Vercel Web Analytics, un serviciu care măsoară vizitele în mod
            agregat, fără cookie-uri și fără să te urmărească între site-uri. Nu stocăm în browserul tău identificatori
            pentru urmărire.
          </li>
          <li>
            <strong>Fonturi:</strong> fonturile sunt servite direct de pe domeniul nostru, prin Next.js, deci browserul tău nu
            trimite cereri către Google Fonts.
          </li>
          <li>
            <strong>Imagini:</strong> imaginile din galerie sunt livrate prin infrastructura Vercel, care poate procesa
            adresa IP pentru a transmite conținutul.
          </li>
        </ul>

        <h3>Linkuri către servicii externe</h3>
        <p>
          Butonul de contact prin WhatsApp te trimite către WhatsApp (Meta Platforms), iar linkul „WebBase" din subsolul
          paginii te duce pe site-ul <a href="https://webbase.ro" target="_blank" rel="noopener">webbase.ro</a>. Aceste
          servicii au propriile politici de confidențialitate și de cookie-uri, pentru care nu răspundem. Linkurile
          telefonice (<code>tel:</code>) și de email (<code>mailto:</code>) deschid aplicațiile instalate pe dispozitivul
          tău.
        </p>

        <h3>Cum controlezi cookie-urile din browser</h3>
        <p>
          Poți vedea, bloca sau șterge cookie-urile din setările browserului (Chrome, Firefox, Safari, Edge). Blocarea
          cookie-urilor nu afectează funcționarea acestui site, pentru că nu depinde de ele.
        </p>

        <h3>Modificări</h3>
        <p>
          Dacă vom introduce în viitor cookie-uri care necesită consimțământul tău (de exemplu pentru statistici sau
          reclame), vom actualiza această politică și vom afișa un mecanism prin care îți poți da sau retrage acordul.
        </p>
      </>
    ),
  },
  {
    id: 'modificari',
    title: 'Modificări ale politicii',
    body: (
      <p>
        Putem actualiza această politică pentru a reflecta schimbări legislative sau modificări ale site-ului. Versiunea în
        vigoare este cea publicată pe această pagină, iar data ultimei actualizări apare la începutul ei. Te încurajăm să
        o consulți periodic.
      </p>
    ),
  },
];

export default function ConfidentialitatePage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Politica de Confidențialitate și Cookie-uri',
      url: absoluteUrl('/confidentialitate'),
      inLanguage: 'ro-RO',
      isPartOf: { '@id': WEBSITE_ID },
    },
    breadcrumbJsonLd([
      ['Acasă', '/'],
      ['Politica de Confidențialitate', '/confidentialitate'],
    ]),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <LegalPage
        eyebrow="Informații legale"
        title="Politica de Confidențialitate și Cookie-uri"
        intro="Cum folosim și protejăm datele tale personale, ce drepturi ai și ce cookie-uri folosește site-ul AcoperiRO."
        updatedAt="22 octombrie 2026"
        sections={sections}
      />
    </>
  );
}
