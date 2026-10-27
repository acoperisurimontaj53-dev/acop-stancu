import type { BaseServiceContent } from './types';

/** Categories: izolatie, structuri. */
export const izolatieStructuriContent: Record<string, BaseServiceContent> = {
  hidroizolatii: {
    intro: [
      'Apa nu iartă: o hidroizolație făcută prost se vede în timp, prin pete pe tavan, igrasie sau beton degradat. Se aplică la terase, acoperișuri plane, balcoane și fundații, acolo unde apa stă sau lovește direct.',
      'Lucrăm cu membrane bituminoase, membrane PVC și hidroizolații lichide, alese după suprafață, utilizare și buget. Pregătim stratul de bază, tratăm îmbinările și racordurile și verificăm scurgerile. Se leagă direct de [acoperișurile de tip terasă](acoperisuri-terase) și de [etanșări](etansari-acoperis).',
    ],
    whenNeeded: [
      'Terasa, balconul sau acoperișul plat infiltrează',
      'Construiești o casă cu acoperiș plat sau o extindere',
      'Hidroizolația veche s-a crăpat, s-a umflat sau s-a dezlipit',
      'Apare igrasie sau mucegai pe tavan sau pe pereți',
    ],
    faqs: [
      {
        question: 'Ce tip de hidroizolație e mai bun?',
        answer:
          'Depinde de suprafață, de circulația pe ea și de expunere. Membranele bituminoase și PVC se folosesc pe suprafețe mari, cele lichide pe detalii și forme neregulate. Recomandăm la vizită.',
      },
      {
        question: 'Se poate aplica peste hidroizolația veche?',
        answer:
          'Uneori da, dacă stratul vechi e aderent și suportul e uscat. Dacă nu, îl îndepărtăm, fiindcă o izolație nouă peste una umedă nu ține.',
      },
      {
        question: 'De ce apar infiltrații după o hidroizolație nouă?',
        answer:
          'De cele mai multe ori din cauza racordurilor, a scurgerilor sau a muchiilor tratate prost, nu a suprafeței întregi. De aceea acordăm atenție detaliilor.',
      },
    ],
  },

  'izolatie-termica-acoperis': {
    intro: [
      'Pe la acoperiș se pierde o parte importantă din căldura unei case. O izolație corectă înseamnă mai puțină energie consumată iarna și un pod sau o mansardă mai răcoroase vara.',
      'Folosim vată minerală, polistiren sau spumă poliuretanică, în funcție de tipul acoperișului. Izolația nu stă singură: are nevoie de [barieră de vapori](bariera-vapori), [membrană respirantă](membrane-respirante) și [ventilație](ventilatie-acoperis), altfel apare condensul. Este esențială la [mansardări](mansardari).',
    ],
    whenNeeded: [
      'Mansardezi podul și vrei să îl faci locuibil',
      'Casa se răcește repede iarna sau se supraîncălzește vara',
      'Facturile de încălzire sunt mari și acoperișul nu e izolat',
      'Înlocuiești acoperișul și vrei să refaci și izolația',
    ],
    faqs: [
      {
        question: 'Cât de gros trebuie să fie stratul de izolație?',
        answer:
          'Depinde de material, de zonă și de cât vrei să economisești la încălzire. Calculăm grosimea împreună cu structura acoperișului, la ofertă.',
      },
      {
        question: 'Vată minerală sau spumă poliuretanică?',
        answer:
          'Vata minerală e flexibilă și izolează bine și fonic. Spuma etanșează fără îmbinări și intră în zone greu accesibile. Alegem după structura acoperișului și buget.',
      },
      {
        question: 'Se poate izola acoperișul fără să îl desfaci?',
        answer:
          'Da, dinspre interior, la mansardă sau în pod. Dacă înlocuiești oricum învelitoarea, e mai eficient să o faci dinspre exterior.',
      },
    ],
  },

  'bariera-vapori': {
    intro: [
      'Aerul cald din casă conține vapori de apă. Dacă ajung în izolație sau în lemnul șarpantei, se condensează, iar rezultatul e umezeală, mucegai și putrezire. Bariera de vapori îi oprește.',
      'O montăm pe partea caldă a izolației, cu îmbinări lipite și racorduri etanșe la pereți și ferestre. Detaliile fac diferența: un singur gol poate anula efectul. Merge împreună cu [izolația termică](izolatie-termica-acoperis), cu [membranele respirante](membrane-respirante) și cu [ventilația](ventilatie-acoperis).',
    ],
    whenNeeded: [
      'Izolezi o mansardă sau un pod',
      'Apare condens pe fața interioară a acoperișului',
      'Lemnul șarpantei e umed sau cu urme de mucegai',
      'Refaci finisajele interioare și vrei să corectezi și izolația',
    ],
    faqs: [
      {
        question: 'Care e diferența dintre bariera de vapori și membrana respirantă?',
        answer:
          'Bariera de vapori se pune pe partea caldă și oprește vaporii să intre în izolație. Membrana respirantă se pune pe partea rece, sub învelitoare, și lasă vaporii să iasă, dar nu și apa.',
      },
      {
        question: 'Mansarda mea are nevoie de barieră de vapori?',
        answer: 'Dacă are izolație termică, da. Fără ea, umezeala din locuință ajunge în izolație și o degradează.',
      },
      {
        question: 'Se poate monta ulterior, la o mansardă existentă?',
        answer:
          'De obicei se face odată cu refacerea finisajelor interioare, fiindcă se montează înaintea gips-cartonului sau a lambriului.',
      },
    ],
  },

  'membrane-respirante': {
    intro: [
      'Sub orice învelitoare ajunge puțină apă: picături de condens, ploaie purtată de vânt, zăpadă pudră. Membrana respirantă o oprește și o duce spre streașină, dar lasă vaporii din izolație să iasă.',
      'O montăm pe șarpantă, sub contra-șipci, cu suprapuneri și îmbinări etanșe, ținând cont de direcția apei. Face parte din sistemul complet cu [șipci și contra-șipci](sipci-contra-sipci), [bariera de vapori](bariera-vapori) și [izolația termică](izolatie-termica-acoperis), fiind recomandată cu tărie sub [țigla metalică](tigla-metalica), unde condensul apare ușor.',
    ],
    whenNeeded: [
      'Montezi un acoperiș nou, mai ales din tablă',
      'Ai condens sau picături sub învelitoare',
      'Înlocuiești învelitoarea și vrei să refaci și protecția de dedesubt',
      'Izolezi mansarda și vrei să protejezi izolația de umezeală',
    ],
    faqs: [
      {
        question: 'E obligatorie membrana sub învelitoare?',
        answer:
          'Nu e cerută în toate situațiile, dar fără ea riscurile cresc: condens, umezeală în izolație, putrezirea lemnului. La tablă o recomandăm de fiecare dată.',
      },
      {
        question: 'Pot monta membrana pe un acoperiș existent?',
        answer:
          'Doar dacă desfacem învelitoarea, fiindcă se montează pe șarpantă, sub șipci. De aceea se face de obicei odată cu înlocuirea acoperișului.',
      },
      {
        question: 'Cum se alege membrana potrivită?',
        answer:
          'După tipul acoperișului, panta și existența izolației. Îți recomandăm modelul care se potrivește situației tale.',
      },
    ],
  },

  'ventilatie-acoperis': {
    intro: [
      'Un acoperiș trebuie să respire. Aerul care circulă pe sub învelitoare scoate umezeala, răcorește podul vara și previne gheața la streașină iarna.',
      'Prevedem intrare de aer la streașină și ieșire la coamă, cu aeratoare, coame ventilate sau grile, dimensionate după suprafață și formă. Se completează cu [izolația termică](izolatie-termica-acoperis), cu [membranele respirante](membrane-respirante) și cu [coame](coame-acoperis) potrivite.',
    ],
    whenNeeded: [
      'Podul e umed, are miros de mucegai sau condens',
      'Mansarda se supraîncălzește vara',
      'Iarna se formează gheață la streașină',
      'Izolezi sau schimbi acoperișul și vrei ventilație corectă',
    ],
    faqs: [
      {
        question: 'De ce are nevoie acoperișul de ventilație?',
        answer:
          'Ca să evacueze umezeala și căldura acumulată sub învelitoare. Fără aer în mișcare apar condensul, mucegaiul și degradarea lemnului.',
      },
      {
        question: 'Se poate adăuga ventilație la un acoperiș existent?',
        answer:
          'Da, cu aeratoare, grile sau coame ventilate. Stabilim soluția după ce vedem cum e făcută învelitoarea.',
      },
      {
        question: 'Cât de multă ventilație e suficientă?',
        answer:
          'Depinde de suprafață, de pantă și de izolație. Calculăm raportul dintre intrările și ieșirile de aer, ca circulația să funcționeze.',
      },
    ],
  },

  'sisteme-anti-incendiu': {
    intro: [
      'Lemnul șarpantei e combustibil, iar acoperișul e locul pe care se poate răspândi rapid un incendiu venit din exterior sau dintr-un coș. Tratamentele și soluțiile de protecție la foc încetinesc propagarea și dau timp de intervenție.',
      'Aplicăm ignifugarea lemnului și montăm bariere și materiale rezistente, cu atenție la zonele din jurul [coșurilor de fum](cosuri-fum). Folosim produse și soluții conforme cu normele în vigoare. Dacă lucrarea cere documente sau avize, te îndrumăm către pașii necesari. Se leagă de [dulgherie](dulgherie) și de [izolația acoperișului](izolatie-termica-acoperis).',
    ],
    whenNeeded: [
      'Construiești sau renovezi o clădire cu cerințe de protecție la foc',
      'Ai șarpantă din lemn și vrei să o ignifugezi',
      'Coșurile de fum sunt aproape de structura din lemn',
      'Proiectul sau asigurarea cer măsuri de siguranță suplimentare',
    ],
    faqs: [
      {
        question: 'Se vede ignifugarea pe lemn?',
        answer:
          'Depinde de produs. Unele lasă lemnul aproape neschimbat, altele îi dau o nuanță ușoară. Îți spunem înainte ce rezultat vei avea.',
      },
      {
        question: 'Cât timp ține tratamentul de ignifugare?',
        answer:
          'Depinde de produs și de condițiile din pod. Urmăm indicațiile producătorului și îți spunem când trebuie reaplicat.',
      },
      {
        question: 'Este obligatorie ignifugarea?',
        answer:
          'Depinde de tipul clădirii și de proiect. La clădirile publice există cerințe stricte, iar la o casă îți recomandăm după caz.',
      },
    ],
  },

  'etansari-acoperis': {
    intro: [
      'Infiltrațiile nu se rezolvă cu silicon dat peste tot. Apa merge prin acoperiș pe drumuri neașteptate, așa că mai întâi o găsim, apoi o oprim exact acolo de unde vine.',
      'Căutăm sursa: racorduri la coș, coame, ferestre, șorțuri, țigle sparte, membrane degradate. Apoi etanșăm cu materiale potrivite, de la benzi și membrane la hidroizolații lichide. Dacă acoperișul e în stare proastă, îți spunem sincer și propunem [reparații](reparatii-acoperis) mai ample sau [hidroizolații](hidroizolatii).',
    ],
    whenNeeded: [
      'Apa intră în casă pe lângă coș, fereastră sau perete',
      'Infiltrațiile apar doar la anumite ploi sau la vânt',
      'Ai încercat reparații „de moment” și problema s-a întors',
      'Vrei să oprești infiltrațiile înainte să strice izolația',
    ],
    faqs: [
      {
        question: 'Cum găsiți sursa infiltrației?',
        answer:
          'Verificăm punctele slabe, urmărim urmele de apă din pod și, la nevoie, facem teste cu apă controlată, ca să nu etanșăm la întâmplare.',
      },
      {
        question: 'Cu ce etanșați?',
        answer:
          'Cu benzi, membrane sau hidroizolații lichide, în funcție de loc și de material. La detalii, de exemplu lângă coș, folosim și tablă de racord.',
      },
      {
        question: 'Garantați lucrarea?',
        answer: 'Da, în condițiile stabilite prin contract. Garanția depinde de tipul lucrării și de materialele folosite.',
      },
    ],
  },

  dulgherie: {
    intro: [
      'Șarpanta este scheletul acoperișului. Dacă lemnul e prost ales, insuficient uscat sau montat fără calcul, acoperișul se deformează în câțiva ani, iar învelitoarea de deasupra nu mai poate fi etanșă oricât ar fi de bună.',
      'Executăm șarpante tradiționale, structuri din lemn și grinzi lamelare, cu lemn tratat împotriva insectelor, ciupercilor și focului. Putem lucra pe baza proiectului tău sau te ajutăm prin [consultanță și proiectare](consultanta-proiectare). Pentru lucrări complete vezi [construcția șarpantei](constructie-sarpanta) și [renovarea șarpantei](renovare-sarpanta). Structura susține apoi [mansardarea](mansardari).',
    ],
    whenNeeded: [
      'Construiești o casă și ai nevoie de șarpantă',
      'Vrei o structură de lemn pentru terasă, foișor sau anexă',
      'Șarpanta existentă s-a deformat sau are lemn degradat',
      'Pregătești podul pentru mansardare',
    ],
    faqs: [
      {
        question: 'Ce lemn folosiți pentru șarpantă?',
        answer:
          'De obicei rășinoase, uscate și tratate, precum bradul sau molidul. La cerere putem lucra și cu alte esențe, dacă proiectul o cere.',
      },
      {
        question: 'Ce înseamnă lemn tratat?',
        answer:
          'Impregnare împotriva ciupercilor și insectelor și, unde e nevoie, ignifugare. Tratamentul prelungește mult viața șarpantei.',
      },
      {
        question: 'Lucrați după proiect sau fără?',
        answer:
          'Putem lucra după proiectul tău, iar dacă lipsește te ajutăm cu dimensionarea și cu planurile.',
      },
    ],
  },

  mansardari: {
    intro: [
      'Mansardarea transformă podul nefolosit în camere locuibile, fără a extinde amprenta casei. Reușește doar dacă acoperișul, izolația, ventilația și ferestrele sunt gândite împreună. Un spațiu cu înălțime mică și fără izolație nu face o mansardă.',
      'Facem lucrarea de la structură la finisaje: verificarea șarpantei, [izolație termică](izolatie-termica-acoperis), [barieră de vapori](bariera-vapori), [ferestre de mansardă](ferestre-mansarda), [lucarne](lucarne) pentru spațiu și lumină, apoi finisaje interioare. Dacă vrei, pornim cu [consultanță și proiectare](consultanta-proiectare), inclusiv planuri 3D.',
    ],
    whenNeeded: [
      'Vrei camere în plus fără să extinzi casa',
      'Podul e folosit doar ca depozit și poate deveni locuibil',
      'Faci o renovare mare și vrei să schimbi și acoperișul',
      'Ai nevoie de un birou, un dormitor sau un apartament separat',
    ],
    faqs: [
      {
        question: 'Am nevoie de autorizație pentru mansardare?',
        answer:
          'Mansardarea modifică de obicei construcția, așa că în majoritatea cazurilor se cere autorizație de construire. Te îndrumăm către pașii necesari.',
      },
      {
        question: 'Poate casa mea susține o mansardă?',
        answer:
          'Se verifică structura, planșeul și fundația. Uneori sunt necesare întăriri, iar noi îți spunem asta înainte de ofertă.',
      },
      {
        question: 'Cât durează o mansardare?',
        answer:
          'Depinde de suprafață și de finisaje. Pentru o mansardă obișnuită vorbim de câteva săptămâni, iar termenul îl stabilim în ofertă.',
      },
    ],
  },

  'ferestre-mansarda': {
    intro: [
      'Fereastra de mansardă aduce lumină și aer exact acolo unde pereții verticali lipsesc. Dar e și punctul cel mai sensibil al acoperișului: o etanșare slabă în jurul ei înseamnă infiltrații.',
      'Montăm ferestre Velux, Fakro și Roto, cu rame de etanșare potrivite învelitorii, bariera de vapori racordată corect și izolație în jurul ramei. Merg bine cu [mansardarea](mansardari), cu [lucarnele](lucarne) și cu [izolația acoperișului](izolatie-termica-acoperis). La ferestre vechi care picură, vezi și [etanșări](etansari-acoperis).',
    ],
    whenNeeded: [
      'Mansarda e întunecoasă și are nevoie de lumină naturală',
      'Fereastra veche de acoperiș infiltrează sau se condensează',
      'Vrei ventilație în mansardă',
      'Mansardezi podul și ai nevoie de ferestre noi',
    ],
    faqs: [
      {
        question: 'Câte ferestre de mansardă am nevoie?',
        answer:
          'Depinde de suprafața camerei, de orientare și de cum o folosești. Calculăm la vizită, ținând cont și de ventilație.',
      },
      {
        question: 'Se pot monta pe un acoperiș existent?',
        answer:
          'Da. Se face deschiderea în acoperiș, se întărește cadrul și se montează rama de etanșare, cu atenție la hidroizolație.',
      },
      {
        question: 'Ce marcă să aleg: Velux, Fakro sau Roto?',
        answer:
          'Toate sunt branduri cunoscute. Diferențele sunt la preț, dotări și accesorii. Îți arătăm variantele potrivite pentru buget și proiect.',
      },
    ],
  },

  'renovare-sarpanta': {
    intro: [
      'Șarpanta veche poate fi salvată mai des decât se crede. Dacă lemnul e atacat doar în anumite zone, se înlocuiesc elementele afectate, se consolidează și se tratează, în loc să se refacă totul.',
      'Începem cu evaluarea: umiditate, atac de insecte sau ciuperci, deformări, îmbinări slăbite. Apoi înlocuim grinzile deteriorate, consolidăm structura și tratăm lemnul. Lucrarea cere de obicei [demolarea parțială a acoperișului](demolare-acoperis) și se încheie cu o [învelitoare nouă](montaj-acoperisuri). Dacă vrei întâi o părere, poți cere o [expertiză tehnică](expertiza-tehnica).',
    ],
    whenNeeded: [
      'Lemnul șarpantei e putrezit sau atacat de insecte',
      'Acoperișul s-a lăsat sau s-a deformat',
      'Casa e veche și vrei să prelungești viața acoperișului',
      'Înlocuiești învelitoarea și descoperi probleme la structură',
    ],
    faqs: [
      {
        question: 'Merită renovată șarpanta sau e mai bine refăcută?',
        answer:
          'Dacă degradarea e locală, renovarea costă mai puțin. Dacă lemnul e afectat pe scară largă, refacerea completă e mai sigură. Îți spunem după evaluare.',
      },
      {
        question: 'Cum se tratează lemnul afectat?',
        answer:
          'Îndepărtăm elementele degradate și tratăm restul împotriva ciupercilor și insectelor, apoi consolidăm zonele slăbite.',
      },
      {
        question: 'Pot sta în casă în timpul lucrării?',
        answer:
          'De obicei da, dacă acoperim bine zona de lucru. La lucrări mari recomandăm să muți lucrurile din pod.',
      },
    ],
  },

  'constructie-sarpanta': {
    intro: [
      'O șarpantă nouă se calculează în funcție de formă, deschideri, încărcarea din zăpadă și vânt și de materialul de acoperire. Dimensionarea greșită nu se vede în prima zi, dar apare în timp ca deformare, fisuri și infiltrații.',
      'Construim șarpante din lemn de calitate, cu tehnici tradiționale sau moderne, pentru case, anexe și hale mici. Lucrăm după proiectul tău sau te ajutăm să îl faci prin [consultanță și proiectare](consultanta-proiectare). Execuția se leagă de [dulgherie](dulgherie), apoi de [șipci și contra-șipci](sipci-contra-sipci) și de [montajul acoperișului](montaj-acoperisuri).',
    ],
    whenNeeded: [
      'Construiești o casă nouă sau o extindere',
      'Ai nevoie de șarpantă pentru o anexă, un garaj sau o hală',
      'Schimbi forma acoperișului sau adaugi un etaj',
      'Vrei o șarpantă din lemn tratat, cu durată mare de viață',
    ],
    faqs: [
      {
        question: 'Ce tipuri de șarpante construiți?',
        answer:
          'În două sau patru ape, cu mansardă, cu forme complexe sau pentru hale, în funcție de proiect. Alegem soluția după formă și buget.',
      },
      {
        question: 'Cât durează construcția unei șarpante?',
        answer:
          'Pentru o casă obișnuită, de obicei câteva zile până la două săptămâni de execuție, după ce lemnul e pregătit. Îți dăm un termen în ofertă.',
      },
      {
        question: 'Se poate construi șarpanta și iarna?',
        answer:
          'Da, atâta timp cât vremea permite lucrul la înălțime în siguranță. Evităm vântul puternic, polei și ploaia.',
      },
    ],
  },

  lucarne: {
    intro: [
      'Lucarna este o ieșire a acoperișului, de obicei cu fereastră, care mărește înălțimea și spațiul util din mansardă. Pare o lucrare simplă, dar presupune modificarea șarpantei și o etanșare foarte atentă la îmbinările cu acoperișul.',
      'Proiectăm și executăm lucarne personalizate, cu structură din lemn, hidroizolație, izolație termică și finisaj la tonul acoperișului. Se combină cu [mansardarea](mansardari), cu [ferestrele de mansardă](ferestre-mansarda) și cu lucrările de [dulgherie](dulgherie).',
    ],
    whenNeeded: [
      'Mansarda are puțin spațiu pe înălțime și vrei să îl mărești',
      'Vrei mai multă lumină naturală în camerele de la mansardă',
      'Vrei un balcon sau o ieșire pe acoperiș',
      'Mansardezi și vrei un aspect arhitectural mai bun',
    ],
    faqs: [
      {
        question: 'Ce tipuri de lucarne există?',
        answer:
          'Cu acoperiș în două ape, într-o apă, rotunde sau pentru ieșire pe acoperiș. Alegem tipul în funcție de acoperișul casei și de stilul dorit.',
      },
      {
        question: 'Lucarna cere autorizație?',
        answer:
          'Modifică structura acoperișului, deci de multe ori da. Te îndrumăm către pașii necesari înainte de a începe.',
      },
      {
        question: 'Cum se evită infiltrațiile la o lucarnă?',
        answer:
          'Prin hidroizolație continuă, șorțuri corect racordate și etanșarea atentă a îmbinărilor dintre lucarnă și acoperișul principal.',
      },
    ],
  },

  'cosuri-fum': {
    intro: [
      'Coșul de fum trece prin acoperiș, deci e un punct sensibil atât pentru siguranță, cât și pentru etanșeitate. Un coș prost izolat poate duce la infiltrații, condens în canal sau chiar la riscuri de incendiu.',
      'Construim coșuri noi și le reparăm pe cele existente: refacem corpul, căptușim canalul și etanșăm racordul cu acoperișul prin [șorțuri](sorturi-acoperis) și [etanșări](etansari-acoperis). La coșurile apropiate de lemn avem în vedere și [protecția la foc](sisteme-anti-incendiu).',
    ],
    whenNeeded: [
      'Se infiltrează apă pe lângă coș',
      'Coșul are crăpături, tencuială căzută sau fum care se întoarce în casă',
      'Construiești o casă cu centrală, șemineu sau sobă',
      'Vrei să căptușești un coș vechi',
    ],
    faqs: [
      {
        question: 'Faceți coșuri pentru șemineu și centrală?',
        answer:
          'Da, construim și căptușim coșuri pentru diferite tipuri de încălzire. Soluția depinde de combustibil și de aparatul racordat.',
      },
      {
        question: 'De ce se infiltrează apa pe lângă coș?',
        answer:
          'De obicei din cauza racordului cu acoperișul sau a corpului crăpat al coșului. Se rezolvă cu șorț, etanșare sau refacerea părții afectate.',
      },
      {
        question: 'Trebuie căptușit un coș vechi?',
        answer:
          'Dacă are crăpături sau trece fum sau condens prin pereți, da. Căptușirea îmbunătățește siguranța și durata de viață a coșului.',
      },
    ],
  },

  'scari-acces-acoperis': {
    intro: [
      'Urcatul pe acoperiș fără un acces sigur e una dintre cauzele frecvente ale accidentelor la întreținere. O scară de acces bine fixată face ca verificarea acoperișului, curățarea și reparațiile mici să se poată face în siguranță.',
      'Montăm scări fixe sau pliabile, din aluminiu sau oțel galvanizat, prinse în structură și etanșate la acoperiș. Merg bine cu [parazăpezii](parazapezi) și cu un plan de [întreținere periodică](intretinere-acoperis).',
    ],
    whenNeeded: [
      'Ai coș de fum sau instalații pe acoperiș care trebuie verificate',
      'Vrei acces sigur pentru curățare și întreținere',
      'Ai un acoperiș înalt sau cu pantă mare',
      'Administrezi o clădire cu acoperiș frecvent inspectat',
    ],
    faqs: [
      {
        question: 'Scară fixă sau pliabilă?',
        answer:
          'Scara fixă e potrivită pentru acces frecvent. Cea pliabilă ocupă mai puțin loc și se folosește ocazional. Alegem după clădire și utilizare.',
      },
      {
        question: 'Din ce materiale sunt scările?',
        answer:
          'Din aluminiu, ușor și rezistent la coroziune, sau din oțel galvanizat, mai robust. Alegem după locul de montaj.',
      },
      {
        question: 'Se pot monta pe un acoperiș existent?',
        answer: 'Da, cu fixări în structură și etanșare la învelitoare, fără să schimbi acoperișul.',
      },
    ],
  },

  'sipci-contra-sipci': {
    intro: [
      'Șipcile și contra-șipcile sunt scheletul pe care stă învelitoarea. Contra-șipcile, montate pe direcția pantei, creează un spațiu de aer sub țiglă sau tablă, iar șipcile, perpendicular, susțin efectiv materialul.',
      'Montăm lemn tratat sau profile metalice, cu pas calculat după tipul de învelitoare și cu fixare corectă în șarpantă. Ventilația de sub acoperiș depinde direct de ele. Se leagă de [membranele respirante](membrane-respirante), de [construcția șarpantei](constructie-sarpanta) și de montajul [țiglei ceramice](tigla-ceramica).',
    ],
    whenNeeded: [
      'Montezi un acoperiș nou și ai nevoie de structura pentru învelitoare',
      'Înlocuiești țigla și șipcile vechi sunt putrede',
      'Vrei ventilație corectă pe sub învelitoare',
      'Schimbi tipul de învelitoare și pasul șipcilor trebuie refăcut',
    ],
    faqs: [
      {
        question: 'Ce rol au contra-șipcile?',
        answer:
          'Creează un spațiu de aer între membrană și învelitoare, prin care apa se scurge și aerul circulă, ca acoperișul să nu rețină umezeală.',
      },
      {
        question: 'Lemn sau metal?',
        answer:
          'Lemnul tratat e cel mai folosit și mai accesibil. Profilele metalice se folosesc la anumite sisteme, unde cer greutate mică sau rezistență sporită.',
      },
      {
        question: 'Se pot reutiliza șipcile vechi?',
        answer:
          'Doar dacă sunt sănătoase și potrivite pentru noua învelitoare. La acoperișuri vechi, de obicei le înlocuim.',
      },
    ],
  },
};
