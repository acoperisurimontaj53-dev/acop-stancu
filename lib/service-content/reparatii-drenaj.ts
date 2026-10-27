import type { BaseServiceContent } from './types';

/** Categories: reparatii, drenaj. */
export const reparatiiDrenajContent: Record<string, BaseServiceContent> = {
  'reparatii-acoperis': {
    intro: [
      'Un acoperiș care curge are rareori o singură cauză evidentă. De cele mai multe ori apa intră pe la coame, racorduri, jgheaburi sau din cauza unor țigle deplasate, iar petele de pe tavan sunt departe de locul real al infiltrației. De aceea începem cu diagnosticul, nu cu reparația.',
      'Verificăm învelitoarea, șarpanta, hidroizolația și zonele de racord, apoi îți spunem ce trebuie făcut acum și ce poate aștepta. Dacă situația e gravă, intervenim prin [reparații urgente](reparatii-urgente). Pentru infiltrații repetate folosim [etanșări](etansari-acoperis), iar dacă nu ești sigur de starea acoperișului, poți cere o [expertiză tehnică](expertiza-tehnica).',
    ],
    whenNeeded: [
      'Apar pete de apă pe tavan sau pe pereți',
      'După furtună lipsesc țigle sau foi de tablă',
      'Observi mușchi, rugină sau învelitoare decolorată',
      'Jgheaburile sau burlanele nu mai duc apa unde trebuie',
    ],
    faqs: [
      {
        question: 'Merită să repar acoperișul sau e mai bine să îl schimb?',
        answer:
          'Dacă problemele sunt locale și structura e sănătoasă, reparația costă mult mai puțin. Dacă degradarea e generală, îți spunem sincer că înlocuirea e mai economică pe termen lung.',
      },
      {
        question: 'Faceți diagnostic gratuit?',
        answer: 'Da, evaluăm situația și îți spunem ce se poate face, înainte să te angajezi la ceva.',
      },
      {
        question: 'Cât durează o reparație de acoperiș?',
        answer:
          'De la câteva ore pentru o intervenție mică, la câteva zile pentru reparații mai ample. Termenul îl stabilim după ce vedem acoperișul.',
      },
    ],
  },

  'reparatii-urgente': {
    intro: [
      'După o furtună, grindină sau o ploaie torențială nu poți aștepta câteva săptămâni. Intervenim cât mai repede, mai întâi ca apa să nu mai intre în casă, apoi cu reparația definitivă, după ce ai văzut oferta.',
      'La prima intervenție acoperim cu prelată, etanșăm provizoriu sau înlocuim piesele dislocate, cu prioritate pentru zonele care pot produce pagube. Apoi facem o evaluare completă și stabilim, dacă e cazul, [reparații de acoperiș](reparatii-acoperis) sau [înlocuire de țiglă](inlocuire-tigla).',
    ],
    whenNeeded: [
      'Vântul a smuls țigle sau foi de tablă',
      'Grindina a spart învelitoarea',
      'Apa intră în casă în timpul ploii',
      'Un copac sau o creangă a căzut pe acoperiș',
    ],
    faqs: [
      {
        question: 'Ce fac până ajunge echipa?',
        answer:
          'Mută lucrurile din zona afectată, pune găleți și folie sub infiltrație și nu urca singur pe acoperișul ud sau acoperit cu gheață. Sună-ne și îți spunem ce poți face în siguranță.',
      },
      {
        question: 'Se rezolvă totul din prima zi?',
        answer:
          'Prima intervenție oprește pătrunderea apei. Reparația definitivă depinde de amploarea stricăciunilor și de materialele necesare.',
      },
      {
        question: 'Ajungeți în toată țara?',
        answer: 'Avem echipe mobile în toată România. La telefon îți spunem în cât timp putem ajunge la tine.',
      },
    ],
  },

  'inlocuire-tigla': {
    intro: [
      'Câteva țigle sparte sau alunecate pot lăsa apa să ajungă la șipci, la izolație și la tavan. Se rezolvă ieftin dacă se intervine devreme, înainte ca lemnul de dedesubt să putrezească.',
      'Scoatem piesele deteriorate, verificăm șipcile și membrana de sub ele și montăm țigle noi, cât mai apropiate de cele existente ca model și nuanță. Dacă țigla e veche și greu de găsit, propunem alternative sau refacerea unei zone mai mari. Pentru situații mai grave vezi [reparații acoperiș](reparatii-acoperis) sau montajul complet de [țiglă ceramică](tigla-ceramica).',
    ],
    whenNeeded: [
      'După o furtună au rămas țigle sparte sau căzute',
      'Apar pete de umezeală sub o zonă a acoperișului',
      'Țigla veche s-a crăpat de la îngheț și dezgheț',
      'Vrei să repari acoperișul fără să schimbi tot ce e deasupra',
    ],
    faqs: [
      {
        question: 'Găsiți țigle identice cu cele de pe acoperiș?',
        answer:
          'Pentru modele uzuale da. La modele vechi sau rare căutăm cea mai apropiată variantă sau folosim piese de pe o zonă mai puțin vizibilă.',
      },
      {
        question: 'Se va vedea diferența de culoare?',
        answer:
          'Țigla nouă poate părea mai vie decât una expusă ani de zile la soare. Diferența se estompează în timp, iar noi alegem nuanța cea mai apropiată.',
      },
      {
        question: 'Cât durează înlocuirea?',
        answer:
          'Pentru câteva piese, de obicei o zi sau mai puțin. Dacă trebuie refăcute și șipcile sau membrana, durează mai mult, iar îți spunem asta de la început.',
      },
    ],
  },

  'curatare-acoperis': {
    intro: [
      'Mușchiul, lichenii și depunerile rețin umezeala pe învelitoare și o uzează mai repede. Pe țiglă ceramică se pot înfunda canalele de scurgere, iar pe tablă încep să apară coroziuni sub depuneri.',
      'Curățăm cu spălare controlată, cu presiune adaptată materialului, apoi aplicăm tratament anti-mușchi și, unde e cazul, un strat de protecție. Se combină bine cu [vopsirea acoperișului](vopsire-acoperis), cu curățarea [jgheaburilor și burlanelor](jgheaburi-burlane) și cu un plan de [întreținere periodică](intretinere-acoperis).',
    ],
    whenNeeded: [
      'Acoperișul e acoperit de mușchi, licheni sau depuneri verzi',
      'Țigla și-a pierdut culoarea și arată murdar',
      'Ai copaci în apropiere și frunzele se adună pe acoperiș',
      'Vrei să prelungești viața învelitorii înainte de o reparație mare',
    ],
    faqs: [
      {
        question: 'Poate strica presiunea apei țigla?',
        answer:
          'Presiunea se reglează după material. La țigla ceramică și la șindrilă lucrăm blând, ca să nu desprindem stratul de protecție.',
      },
      {
        question: 'Cât de des trebuie curățat un acoperiș?',
        answer:
          'Depinde de zonă și de umbra copacilor. În general, la câțiva ani, sau când apar depuneri vizibile.',
      },
      {
        question: 'Faceți și tratament preventiv?',
        answer:
          'Da, după curățare aplicăm un tratament care întârzie apariția mușchiului și a lichenilor, ca rezultatul să dureze.',
      },
    ],
  },

  'demolare-acoperis': {
    intro: [
      'Demontarea unui acoperiș vechi este primul pas al unei renovări serioase. Se face în ordine: învelitoare, șipci, apoi, dacă e nevoie, părți din șarpantă. Fără protejarea casei și a zonei de lucru pot apărea accidente sau pagube.',
      'Demontăm în siguranță, separăm materialele, evacuăm deșeurile și lăsăm structura pregătită pentru noul acoperiș, adică [renovarea șarpantei](renovare-sarpanta) sau [montajul unui acoperiș nou](montaj-acoperisuri). Dacă acoperișul vechi conține materiale speciale, îți spunem la vizită cum se procedează conform reglementărilor.',
    ],
    whenNeeded: [
      'Acoperișul e degradat și nu mai poate fi reparat',
      'Faci o renovare completă sau o mansardare',
      'Vrei să schimbi tipul de învelitoare',
      'Șarpanta trebuie întărită sau înlocuită parțial',
    ],
    faqs: [
      {
        question: 'Pot sta în casă cât se demontează acoperișul?',
        answer:
          'De obicei da, dar acoperim bine casa și protejăm podul. La lucrări mari recomandăm să muți lucrurile din pod și din mansardă.',
      },
      {
        question: 'Ce se întâmplă cu materialele vechi?',
        answer:
          'Se evacuează sau se reciclează, în funcție de tip. Unele materiale pot fi refolosite, dacă sunt în stare bună.',
      },
      {
        question: 'Ce se întâmplă dacă plouă în timpul lucrării?',
        answer:
          'Lucrăm pe vreme potrivită și acoperim zonele deschise la sfârșitul fiecărei zile, ca apa să nu ajungă în casă.',
      },
    ],
  },

  'expertiza-tehnica': {
    intro: [
      'Expertiza tehnică îți spune exact în ce stare e acoperișul, înainte să cheltui bani pe o reparație sau pe o înlocuire. E utilă când cumperi o casă, când apar infiltrații fără cauză clară sau când vrei un al doilea punct de vedere.',
      'Inspectăm învelitoarea, șarpanta, izolația, racordurile și evacuarea apei, facem fotografii și îți dăm un raport cu recomandări și o estimare de costuri. Pe baza lui poți alege între [reparații](reparatii-acoperis), [renovarea șarpantei](renovare-sarpanta) sau o [înlocuire completă](montaj-acoperisuri).',
    ],
    whenNeeded: [
      'Cumperi sau vinzi o casă și vrei să știi în ce stare e acoperișul',
      'Ai infiltrații și nu înțelegi de unde vin',
      'Vrei o a doua părere înainte de o lucrare scumpă',
      'După o furtună nu știi cât de mari sunt stricăciunile',
    ],
    faqs: [
      {
        question: 'Se poate face expertiza doar după poze?',
        answer:
          'Un prim răspuns se poate da după poze, dar o evaluare corectă cere inspecție la fața locului.',
      },
      {
        question: 'Primesc un raport scris?',
        answer: 'Da, cu constatări, fotografii și recomandări, ca să poți decide cu toate informațiile în față.',
      },
      {
        question: 'Sunt obligat să fac lucrarea cu voi după expertiză?',
        answer: 'Nu. Raportul e al tău, îl poți folosi cu noi sau cu altă echipă.',
      },
    ],
  },

  'consultanta-proiectare': {
    intro: [
      'Un acoperiș bine ales ține zeci de ani, dar o alegere greșită, de exemplu o pantă nepotrivită pentru material sau o izolație incompletă, se plătește în fiecare iarnă. Consultanța te ajută să iei deciziile corecte înainte de a comanda materiale.',
      'Te ajutăm să alegi forma acoperișului, învelitoarea, izolația și detaliile, în funcție de buget și de proiectul casei. Dacă ai nevoie de planuri, facem proiecte 2D și 3D și devize, iar apoi putem executa lucrarea: [șarpantă](constructie-sarpanta), [mansardare](mansardari) sau [montaj de acoperiș](montaj-acoperisuri).',
    ],
    whenNeeded: [
      'Plănuiești o casă nouă sau o extindere și vrei să alegi corect acoperișul',
      'Compari mai multe materiale și nu știi pe care să îl alegi',
      'Vrei un deviz detaliat înainte de a începe lucrarea',
      'Ai o idee de mansardare și vrei să vezi cum ar arăta',
    ],
    faqs: [
      {
        question: 'Pot veni cu proiectul făcut de arhitect?',
        answer: 'Da, îl analizăm și îți spunem ce se poate optimiza la nivelul acoperișului.',
      },
      {
        question: 'Faceți devize detaliate?',
        answer: 'Da, cu materiale și manoperă pe categorii, ca să poți compara corect cu alte oferte.',
      },
      {
        question: 'Lucrarea cere autorizație?',
        answer:
          'Depinde de tipul lucrării. Dacă schimbi structura sau volumul casei, de obicei da, iar noi te îndrumăm către pașii necesari.',
      },
    ],
  },

  'intretinere-acoperis': {
    intro: [
      'Un acoperiș întreținut ține mult mai mult decât unul lăsat în voia sorții. Problemele mici, o țiglă mutată, un jgheab înfundat, o garnitură uscată, costă puțin acum și mult dacă le lași să crească.',
      'Contractul de întreținere include inspecții periodice, curățare, verificarea jgheaburilor și racordurilor și reparații minore preventive. Se leagă de [curățarea acoperișului](curatare-acoperis) și de [jgheaburi și burlane](jgheaburi-burlane), iar dacă apare ceva mai serios, trecem la [reparații](reparatii-acoperis).',
    ],
    whenNeeded: [
      'Ai un acoperiș nou și vrei să îl ții în stare bună',
      'Ai o clădire cu acoperiș greu de verificat singur',
      'Administrezi mai multe clădiri sau o pensiune',
      'Vrei să eviți reparațiile mari prin intervenții mici, la timp',
    ],
    faqs: [
      {
        question: 'Cât de des se face întreținerea?',
        answer:
          'De obicei o dată sau de două ori pe an, de preferință primăvara și toamna, plus după furtuni puternice.',
      },
      {
        question: 'Ce include contractul anual?',
        answer:
          'Se stabilește în funcție de acoperiș: numărul de vizite, ce se verifică și ce reparații minore intră. Îl discutăm la ofertă.',
      },
      {
        question: 'Merită întreținerea la un acoperiș nou?',
        answer:
          'Da, o inspecție anuală simplă prinde din timp problemele de montaj sau de ventilație, în perioada de garanție.',
      },
    ],
  },

  'jgheaburi-burlane': {
    intro: [
      'Jgheaburile și burlanele duc apa de ploaie departe de casă. Dacă lipsesc, sunt înfundate sau montate fără pantă, apa se scurge pe fațadă, atacă tencuiala și ajunge la fundație.',
      'Instalăm sisteme din PVC, aluminiu, zinc sau cupru, dimensionate după suprafața acoperișului și cantitatea de apă. Verificăm panta, suporturile și racordurile și le potrivim cu [șorțurile](sorturi-acoperis), cu [streșinile](stresini) și cu învelitoarea, de exemplu [țiglă metalică](tigla-metalica).',
    ],
    whenNeeded: [
      'Casa nouă nu are încă sistem de scurgere a apei',
      'Jgheaburile vechi sunt crăpate, rupte sau înfundate',
      'Fațada se udă și se murdărește de la apa care se scurge pe ea',
      'Vrei să schimbi sistemul cu unul din alt material',
    ],
    faqs: [
      {
        question: 'PVC sau metal?',
        answer:
          'PVC-ul e ieftin și ușor, metalul rezistă mai bine la temperaturi și arată mai bine pe case de calitate. Alegem în funcție de buget și de acoperiș.',
      },
      {
        question: 'Cât de des se curăță jgheaburile?',
        answer: 'De obicei de două ori pe an, mai des dacă ai copaci în apropiere.',
      },
      {
        question: 'Se pot monta jgheaburi noi pe o casă existentă?',
        answer: 'Da, fără să atingem restul acoperișului, dacă streașina e în stare bună.',
      },
    ],
  },

  parazapezi: {
    intro: [
      'Zăpada care alunecă brusc de pe acoperiș poate răni oameni, strica mașini și rupe jgheaburile. Parazăpezii rețin stratul de zăpadă și îl lasă să se topească treptat sau să cadă în bucăți mici.',
      'Montăm sisteme tubulare, tip bară sau cu cuie, potrivite cu învelitoarea, mai ales pentru [țiglă metalică](tigla-metalica) și [tablă fălțuită](tabla-faltuita). Se fixează în structură, nu doar în tablă, ca să țină greutatea zăpezii, și se completează cu [jgheaburi](jgheaburi-burlane) întărite unde e nevoie.',
    ],
    whenNeeded: [
      'Sub streașină trec oameni sau sunt parcate mașini',
      'Locuiești într-o zonă cu multă zăpadă',
      'Zăpada a rupt jgheaburile sau a căzut în bloc de pe acoperiș',
      'Ai o învelitoare lucioasă pe care zăpada alunecă ușor',
    ],
    faqs: [
      {
        question: 'Sunt obligatorii parazăpezii?',
        answer:
          'Sunt recomandați mai ales în zonele cu multă zăpadă și acolo unde sub streașină trec oameni sau sunt parcate mașini. Îți spunem la vizită dacă e nevoie la casa ta.',
      },
      {
        question: 'Câte rânduri de parazăpezi sunt necesare?',
        answer: 'Depinde de lungimea pantei, de înclinare și de cantitatea de zăpadă din zonă. Stabilim la vizită.',
      },
      {
        question: 'Se pot monta pe un acoperiș existent?',
        answer: 'În general da, fără să schimbi învelitoarea, cu fixări etanșate în structură.',
      },
    ],
  },

  'sorturi-acoperis': {
    intro: [
      'Șorțurile sunt benzile de tablă de la marginile acoperișului și de la îmbinările cu pereți, coșuri și ferestre. Fără ele, apa ajunge pe sub învelitoare tocmai în punctele cele mai vulnerabile.',
      'Le croim și le montăm pe măsura acoperișului, din tablă vopsită, aluminiu sau zinc, cu îmbinări etanșe. Lucrează împreună cu [jgheaburile și burlanele](jgheaburi-burlane), cu [coamele](coame-acoperis) și, la coșuri, cu lucrările de [coș de fum](cosuri-fum).',
    ],
    whenNeeded: [
      'Apa intră pe lângă coș sau pe lângă un perete',
      'Marginile acoperișului nu sunt protejate',
      'Șorțurile vechi sunt ruginite, rupte sau desprinse',
      'Montezi un acoperiș nou și vrei finisaj complet',
    ],
    faqs: [
      {
        question: 'De ce se infiltrează apa pe lângă coș?',
        answer:
          'Cel mai des din cauza șorțului lipsă sau prost etanșat. Se reface cu tablă și bandă de etanșare, corect suprapuse.',
      },
      {
        question: 'Pot schimba doar șorțurile?',
        answer: 'Da, dacă învelitoarea e în stare bună. Le racordăm corect la țiglă sau tablă.',
      },
      {
        question: 'Din ce material sunt șorțurile?',
        answer:
          'Din tablă vopsită, aluminiu sau zinc, potrivite cu învelitoarea și cu jgheaburile, ca să nu apară probleme de compatibilitate între metale.',
      },
    ],
  },
};
