import { serviceCategories, services } from '@/lib/services-data';
import { absoluteUrl, SITE_EMAIL, SITE_NAME, SITE_PHONE_DISPLAY } from '@/lib/seo';

export const dynamic = 'force-static';

export function GET() {
  const serviceSections = serviceCategories.map((category) => {
    const items = services
      .filter((service) => service.category === category.id)
      .map((service) => `- [${service.name}](${absoluteUrl(`/servicii/${service.slug}`)}): ${service.shortDescription}`);
    return `### ${category.name}\n\n${items.join('\n')}`;
  });

  const body = `# ${SITE_NAME}

> ${SITE_NAME} este o firmă de acoperișuri din România, activă din 2009. Oferă montaj acoperișuri, reparații, dulgherie, mansardări, hidroizolații, izolații termice, tablă, țiglă și jgheaburi, în toată țara. Consultația și evaluarea inițială sunt gratuite.

Site-ul prezintă ${services.length} de servicii, proiecte din portofoliu și datele de contact. Prețurile nu sunt afișate, pentru că se stabilesc în oferta personalizată, după evaluarea lucrării.

## Pagini principale

- [Prima pagină](${absoluteUrl('/')}): prezentarea firmei, serviciile principale, galerie și păreri ale clienților
- [Servicii](${absoluteUrl('/servicii')}): lista completă a serviciilor de acoperișuri, pe categorii
- [Portofoliu](${absoluteUrl('/portofoliu')}): lucrări realizate (renovări, mansardări, montaj, hidroizolații, finisaje)
- [Despre noi](${absoluteUrl('/despre')}): povestea firmei, valori și istoric
- [Contact](${absoluteUrl('/contact')}): formular de ofertă, telefon, email și program

## Servicii

${serviceSections.join('\n\n')}

## Contact

- Telefon: ${SITE_PHONE_DISPLAY}
- Email: ${SITE_EMAIL}
- Program: luni – sâmbătă, 07:00 – 19:00
- Zona de acoperire: toată România

## Informații legale

- [Politica de Confidențialitate și Cookie-uri](${absoluteUrl('/confidentialitate')})
- [Termeni și Condiții](${absoluteUrl('/termeni')})
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
