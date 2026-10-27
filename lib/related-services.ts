import { getServiceBySlug, getServicesByCategory, type Service } from '@/lib/services-data';

/**
 * Hand-picked "goes together" links between services: what a customer asking for one of them
 * usually needs next (materials, structure, finishing, repairs). Order = priority.
 */
const RELATED_SLUGS: Record<string, string[]> = {
  'montaj-acoperisuri': ['tigla-metalica', 'tigla-ceramica', 'constructie-sarpanta', 'membrane-respirante'],
  'reparatii-acoperis': ['reparatii-urgente', 'inlocuire-tigla', 'etansari-acoperis', 'expertiza-tehnica'],
  dulgherie: ['constructie-sarpanta', 'renovare-sarpanta', 'sipci-contra-sipci', 'mansardari'],
  mansardari: ['izolatie-termica-acoperis', 'ferestre-mansarda', 'lucarne', 'bariera-vapori'],
  hidroizolatii: ['acoperisuri-terase', 'etansari-acoperis', 'acoperisuri-hale', 'izolatie-termica-acoperis'],
  'tigla-metalica': ['montaj-acoperisuri', 'parazapezi', 'jgheaburi-burlane', 'coame-acoperis'],
  'tigla-ceramica': ['montaj-acoperisuri', 'coame-acoperis', 'inlocuire-tigla', 'acoperisuri-traditionale'],
  'tabla-faltuita': ['montaj-acoperisuri', 'sorturi-acoperis', 'jgheaburi-burlane', 'acoperisuri-biserici'],
  'sindrila-bituminoasa': ['montaj-acoperisuri', 'izolatie-termica-acoperis', 'ventilatie-acoperis', 'jgheaburi-burlane'],
  'lambriu-metalic': ['stresini', 'jgheaburi-burlane', 'vopsire-acoperis', 'sorturi-acoperis'],
  'jgheaburi-burlane': ['sorturi-acoperis', 'parazapezi', 'stresini', 'curatare-acoperis'],
  'coame-acoperis': ['tigla-ceramica', 'tigla-metalica', 'ventilatie-acoperis', 'montaj-acoperisuri'],
  'ferestre-mansarda': ['mansardari', 'lucarne', 'izolatie-termica-acoperis', 'etansari-acoperis'],
  'izolatie-termica-acoperis': ['bariera-vapori', 'membrane-respirante', 'mansardari', 'ventilatie-acoperis'],
  'bariera-vapori': ['izolatie-termica-acoperis', 'membrane-respirante', 'ventilatie-acoperis', 'mansardari'],
  'membrane-respirante': ['bariera-vapori', 'izolatie-termica-acoperis', 'sipci-contra-sipci', 'montaj-acoperisuri'],
  'reparatii-urgente': ['reparatii-acoperis', 'etansari-acoperis', 'inlocuire-tigla', 'expertiza-tehnica'],
  'inlocuire-tigla': ['reparatii-acoperis', 'tigla-ceramica', 'tigla-metalica', 'curatare-acoperis'],
  'curatare-acoperis': ['intretinere-acoperis', 'vopsire-acoperis', 'reparatii-acoperis', 'jgheaburi-burlane'],
  'vopsire-acoperis': ['curatare-acoperis', 'tigla-metalica', 'tabla-faltuita', 'intretinere-acoperis'],
  'renovare-sarpanta': ['dulgherie', 'constructie-sarpanta', 'expertiza-tehnica', 'demolare-acoperis'],
  'constructie-sarpanta': ['dulgherie', 'sipci-contra-sipci', 'montaj-acoperisuri', 'consultanta-proiectare'],
  'acoperisuri-terase': ['hidroizolatii', 'etansari-acoperis', 'izolatie-termica-acoperis', 'acoperisuri-verzi'],
  'acoperisuri-hale': ['montaj-acoperisuri', 'hidroizolatii', 'izolatie-termica-acoperis', 'ventilatie-acoperis'],
  lucarne: ['mansardari', 'ferestre-mansarda', 'dulgherie', 'izolatie-termica-acoperis'],
  'cosuri-fum': ['etansari-acoperis', 'reparatii-acoperis', 'sisteme-anti-incendiu', 'montaj-acoperisuri'],
  stresini: ['lambriu-metalic', 'jgheaburi-burlane', 'dulgherie', 'sorturi-acoperis'],
  parazapezi: ['tigla-metalica', 'jgheaburi-burlane', 'scari-acces-acoperis', 'montaj-acoperisuri'],
  'scari-acces-acoperis': ['parazapezi', 'intretinere-acoperis', 'montaj-acoperisuri', 'cosuri-fum'],
  'ventilatie-acoperis': ['izolatie-termica-acoperis', 'bariera-vapori', 'coame-acoperis', 'membrane-respirante'],
  'acoperisuri-verzi': ['acoperisuri-terase', 'hidroizolatii', 'izolatie-termica-acoperis', 'montaj-acoperisuri'],
  'demolare-acoperis': ['montaj-acoperisuri', 'renovare-sarpanta', 'constructie-sarpanta', 'expertiza-tehnica'],
  'expertiza-tehnica': ['reparatii-acoperis', 'renovare-sarpanta', 'consultanta-proiectare', 'etansari-acoperis'],
  'montaj-panouri-solare': ['montaj-acoperisuri', 'tigla-metalica', 'tabla-faltuita', 'consultanta-proiectare'],
  'acoperisuri-biserici': ['tabla-faltuita', 'tigla-ceramica', 'acoperisuri-traditionale', 'renovare-sarpanta'],
  'sorturi-acoperis': ['jgheaburi-burlane', 'tabla-faltuita', 'coame-acoperis', 'stresini'],
  'sipci-contra-sipci': ['constructie-sarpanta', 'membrane-respirante', 'tigla-ceramica', 'dulgherie'],
  'acoperisuri-traditionale': ['tigla-ceramica', 'dulgherie', 'constructie-sarpanta', 'acoperisuri-biserici'],
  'sisteme-anti-incendiu': ['dulgherie', 'cosuri-fum', 'acoperisuri-hale', 'izolatie-termica-acoperis'],
  'consultanta-proiectare': ['expertiza-tehnica', 'mansardari', 'constructie-sarpanta', 'montaj-acoperisuri'],
  'intretinere-acoperis': ['curatare-acoperis', 'reparatii-acoperis', 'expertiza-tehnica', 'jgheaburi-burlane'],
  'etansari-acoperis': ['hidroizolatii', 'reparatii-urgente', 'reparatii-acoperis', 'expertiza-tehnica'],
};

/** Services that logically go with `service`; falls back to its category when no list is defined. */
export function getRelatedServices(service: Service, limit = 4): Service[] {
  const curated = (RELATED_SLUGS[service.slug] ?? [])
    .map((slug) => getServiceBySlug(slug))
    .filter((related): related is Service => !!related && related.id !== service.id);

  const fallback = getServicesByCategory(service.category).filter(
    (related) => related.id !== service.id && !curated.some((c) => c.id === related.id),
  );

  return [...curated, ...fallback].slice(0, limit);
}
