import type { BaseServiceContent } from './types';

/** Categories: montaj, finisaje. */
export const montajFinisajeContent: Record<string, BaseServiceContent> = {
  'montaj-acoperisuri': {
    intro: [
      'Un acoperiș nou se montează în etape, iar ordinea contează: structura din lemn, hidroizolația și bariera de vapori, șipcile, apoi învelitoarea și accesoriile. Dacă una dintre ele e făcută în grabă, defectul apare abia după prima iarnă sau după prima ploaie puternică.',
      'Montăm acoperișuri pentru case noi, extinderi și clădiri comerciale, cu [țiglă metalică](tigla-metalica), [țiglă ceramică](tigla-ceramica), [tablă fălțuită](tabla-faltuita) sau [șindrilă bituminoasă](sindrila-bituminoasa). Alegem materialul împreună cu tine, în funcție de panta acoperișului, de buget și de aspectul dorit, iar structura o pregătim prin [construcția șarpantei](constructie-sarpanta).',
    ],
    whenNeeded: [
      'Construiești o casă sau o extindere și ai nevoie de învelitoare nouă',
      'Acoperișul actual e foarte vechi și curge în mai multe locuri',
      'Vrei să schimbi materialul: de la tablă veche sau țiglă degradată la o învelitoare nouă',
      'Ai nevoie de acoperiș pentru o anexă, un garaj sau o clădire comercială',
    ],
    faqs: [
      {
        question: 'Cât durează montajul unui acoperiș?',
        answer:
          'Depinde de suprafață, de forma acoperișului și de material. La o casă simplă vorbim de câteva zile, iar la acoperișuri complexe poate dura câteva săptămâni. După vizită îți spunem un termen clar, în ofertă.',
      },
      {
        question: 'Se poate monta un acoperiș iarna?',
        answer:
          'Se poate lucra și pe vreme rece, dar nu pe ploaie, vânt puternic sau polei. Unele materiale, cum sunt șindrila bituminoasă și membranele lipite, cer o temperatură minimă la montaj, așa că programăm lucrarea în funcție de vreme.',
      },
      {
        question: 'Ce primesc în ofertă?',
        answer:
          'Lista materialelor, manopera, termenul de execuție și condițiile de garanție. Prețul final depinde de suprafață și de materialele alese, de aceea nu afișăm tarife fixe, ci le stabilim după o evaluare.',
      },
    ],
  },

  'tigla-metalica': {
    intro: [
      'Țigla metalică este una dintre cele mai folosite învelitori din România: e ușoară, se montează relativ repede și vine în multe culori și profile. Pune mai puțină încărcare pe șarpantă decât țigla ceramică, iar asta o face potrivită și pentru renovări.',
      'Calitatea se vede la detalii: suprapunerile, șuruburile cu garnituri, coamele, dolia și ventilația de sub tablă. Montăm [membrană respirantă](membrane-respirante) și [șipci](sipci-contra-sipci) corect dimensionate, ca să nu apară condens sub învelitoare, și completăm sistemul cu [jgheaburi și burlane](jgheaburi-burlane) și [parazăpezi](parazapezi).',
    ],
    whenNeeded: [
      'Construiești o casă nouă și cauți o învelitoare ușoară și durabilă',
      'Ai țiglă veche, spartă sau tablă ruginită și vrei să schimbi acoperișul',
      'Vrei un aspect modern, într-o culoare la alegere',
      'Șarpanta nu poate duce greutatea unei țigle ceramice',
    ],
    faqs: [
      {
        question: 'Face zgomot țigla metalică la ploaie?',
        answer:
          'Montată direct pe șipci, fără nimic dedesubt, se aude mai mult decât alte materiale. Cu membrană și izolație termică și fonică sub învelitoare, zgomotul scade mult, de aceea nu recomandăm montajul fără aceste straturi.',
      },
      {
        question: 'Se poate monta peste acoperișul vechi?',
        answer:
          'Uneori da, dar numai după ce verificăm șarpanta și starea ei. Dacă lemnul e degradat sau învelitoarea veche reține umezeală, recomandăm demontarea completă.',
      },
      {
        question: 'Cât timp ține o țiglă metalică?',
        answer:
          'Depinde de grosimea și stratul de protecție al tablei, de calitatea montajului și de zonă. Producătorul oferă o garanție pentru material, iar noi răspundem pentru lucrare, în condițiile stabilite prin contract.',
      },
    ],
  },

  'tigla-ceramica': {
    intro: [
      'Țigla ceramică este alegerea clasică pentru cine vrea un acoperiș care să dureze zeci de ani. Este un material natural, stabil la culoare și la temperaturi, dar și greu, ceea ce cere o șarpantă dimensionată corect.',
      'Lucrăm cu țiglă românească și din import, în funcție de model și buget. Montajul include [șipci și contra-șipci](sipci-contra-sipci), [membrană respirantă](membrane-respirante), coame și accesorii de ventilație. Dacă ai doar câteva țigle sparte, facem și [înlocuire de țiglă](inlocuire-tigla).',
    ],
    whenNeeded: [
      'Vrei un aspect tradițional și o durată mare de viață',
      'Construiești o casă într-o zonă cu clădiri clasice sau o casă de vacanță',
      'Ai o șarpantă solidă, care poate duce greutatea țiglei',
      'Vrei să înlocuiești o țiglă veche cu una nouă, în nuanță apropiată',
    ],
    faqs: [
      {
        question: 'Este țigla ceramică mai grea decât cea metalică?',
        answer:
          'Da, de câteva ori mai grea pe metru pătrat, de aceea șarpanta trebuie calculată pentru ea. La renovări verificăm structura înainte să dăm o ofertă.',
      },
      {
        question: 'Rezistă la grindină?',
        answer:
          'Țigla ceramică bună rezistă bine, dar o grindină puternică poate sparge piese izolate. Piesele sparte se înlocuiesc punctual, fără a schimba tot acoperișul.',
      },
      {
        question: 'Cum aleg culoarea și modelul?',
        answer:
          'Îți arătăm mostre și poze cu lucrări realizate. Culoarea se vede diferit la lumina zilei și lângă fațadă, de aceea merită privită în locul în care va sta.',
      },
    ],
  },

  'tabla-faltuita': {
    intro: [
      'Tabla fălțuită se îmbină prin falț, adică prin îndoirea marginilor foilor una în alta, fără șuruburi în suprafața vizibilă. Rezultatul e o învelitoare etanșă, cu linii curate, potrivită pentru acoperișuri cu pante mici sau cu forme complicate: turnuri, curbe, lucarne.',
      'Se execută în mare parte manual, pe șantier, de aceea contează experiența echipei. Folosim zinc-titan, cupru, aluminiu sau oțel, în funcție de proiect și de buget. Pentru clădiri speciale vezi și [acoperișuri de biserici](acoperisuri-biserici), iar pentru scurgerea apei montăm [jgheaburi și burlane](jgheaburi-burlane) din același material.',
    ],
    whenNeeded: [
      'Acoperișul are formă complexă, cu multe racorduri și ieșiri',
      'Panta este mică și o țiglă clasică nu e recomandată',
      'Vrei un aspect modern sau restaurezi o clădire veche',
      'Cauți o învelitoare cu durată mare de viață și întreținere redusă',
    ],
    faqs: [
      {
        question: 'Ce metal este mai bun: zincul sau cuprul?',
        answer:
          'Cuprul și zinc-titanul au durată mare și capătă în timp o patină naturală. Aluminiul și oțelul vopsit sunt variante mai accesibile. Alegerea depinde de buget și de aspectul dorit.',
      },
      {
        question: 'Se aude mai mult decât țigla la ploaie?',
        answer:
          'Nu, dacă tabla e montată pe un strat de bază potrivit, cu izolație sub ea. Fără aceste straturi, orice tablă se aude mai tare.',
      },
      {
        question: 'Se poate monta pe orice pantă?',
        answer:
          'Se folosește des pe pante mici, dar tipul de falț se alege în funcție de înclinare. O stabilim la vizită, după ce vedem acoperișul.',
      },
    ],
  },

  'sindrila-bituminoasa': {
    intro: [
      'Șindrila bituminoasă este o soluție economică și ușoară, potrivită pentru acoperișuri cu multe unghiuri, curbe sau lucarne, pentru că se taie ușor și se adaptează formei. Se montează pe un strat continuu de plăci OSB sau scândură, așa că suprafața de sub ea trebuie să fie netedă și uscată.',
      'Un montaj bun înseamnă fixare corectă cu cuie, suprapuneri respectate, folii de subacoperiș pe zonele sensibile și ventilarea podului. Alegem împreună culoarea și modelul, iar dacă ai și mansardă, o combinăm cu [izolație termică](izolatie-termica-acoperis) și [ventilație](ventilatie-acoperis).',
    ],
    whenNeeded: [
      'Ai un acoperiș cu formă complicată, cu multe racorduri',
      'Vrei o învelitoare mai accesibilă decât țigla ceramică sau tabla fălțuită',
      'Cauți un acoperiș care nu face zgomot la ploaie',
      'Șarpanta e mai ușoară și nu suportă greutate mare',
    ],
    faqs: [
      {
        question: 'Se poate monta șindrila iarna?',
        answer:
          'Șindrila are nevoie de o temperatură minimă ca să se lipească singură. Pe frig se poate monta cu fixări suplimentare, dar preferăm perioadele mai calde.',
      },
      {
        question: 'Rezistă la vânt?',
        answer:
          'Bine montată, cu fixarea indicată de producător, da. Problemele apar când se economisesc cuiele sau se montează pe un suport neregulat.',
      },
      {
        question: 'Cât timp ține?',
        answer:
          'Depinde de calitatea șindrilei, de expunerea la soare și de ventilația podului. Producătorul stabilește garanția materialului, iar noi răspundem pentru montaj.',
      },
    ],
  },

  'acoperisuri-terase': {
    intro: [
      'Pe o terasă, apa nu se scurge singură ca pe un acoperiș înclinat, iar un defect mic de etanșare ajunge repede în tavanul de dedesubt. De aceea terasa e, în esență, o lucrare de hidroizolație cu pante, scurgeri și straturi bine gândite.',
      'Executăm terase cu membrane PVC sau bituminoase, cu dale pe ploturi sau cu acoperiș verde, în funcție de cum vrei să folosești suprafața. La bază stau [hidroizolațiile](hidroizolatii) și [izolația termică](izolatie-termica-acoperis), iar pentru infiltrații vechi putem face [etanșări](etansari-acoperis).',
    ],
    whenNeeded: [
      'Terasa sau balconul infiltrează în apartamentul sau în camera de dedesubt',
      'Construiești o casă cu acoperiș plat sau o terasă circulabilă',
      'Hidroizolația veche s-a crăpat sau s-a dezlipit',
      'Vrei o terasă cu dale sau cu vegetație peste izolație',
    ],
    faqs: [
      {
        question: 'Ce soluție e mai bună pentru o terasă?',
        answer:
          'Depinde de cum o folosești. Pentru o terasă necirculată ajunge o membrană bine pusă, pentru una circulabilă adăugăm dale pe ploturi sau alte straturi de protecție. Recomandăm după ce vedem suprafața.',
      },
      {
        question: 'Se poate lucra peste hidroizolația veche?',
        answer:
          'Uneori da, dacă stratul vechi e aderent și suportul e uscat. Dacă nu, îl îndepărtăm, fiindcă o izolație nouă peste una umedă nu ține.',
      },
      {
        question: 'Ce se întâmplă cu apa de pe terasă?',
        answer:
          'Se dirijează prin pante către scurgeri și burlane, pe care le verificăm și le racordăm corect la hidroizolație, pentru că acolo apar cele mai multe infiltrații.',
      },
    ],
  },

  'acoperisuri-hale': {
    intro: [
      'La hale și clădiri comerciale, acoperișul înseamnă suprafețe mari, termene strânse și cerințe de izolație și de siguranță diferite față de o casă. O alegere greșită se simte în facturile de încălzire și în costul reparațiilor.',
      'Montăm panouri sandwich, tablă trapezoidală sau membrane, în funcție de proiectul clădirii și de modul în care e folosită. Ținem cont de [izolația termică](izolatie-termica-acoperis), de [ventilație](ventilatie-acoperis) și de [hidroizolație](hidroizolatii), iar execuția este organizată ca să deranjeze cât mai puțin activitatea din interior.',
    ],
    whenNeeded: [
      'Construiești o hală, un depozit sau o clădire comercială',
      'Acoperișul halei curge sau tabla s-a deteriorat',
      'Vrei să îmbunătățești izolația unei hale existente',
      'Ai nevoie de montaj rapid, pe suprafețe mari',
    ],
    faqs: [
      {
        question: 'Ce soluție e mai bună pentru o hală: panouri sandwich sau tablă?',
        answer:
          'Panourile sandwich includ izolația și se montează rapid, deci sunt potrivite pentru spații încălzite. Tabla trapezoidală e mai simplă și mai ieftină, potrivită pentru spații neîncălzite. Alegem după utilizare.',
      },
      {
        question: 'Puteți lucra fără să oprim activitatea din hală?',
        answer:
          'De cele mai multe ori da. Planificăm lucrarea pe zone și acoperim în fiecare zi ce am deschis, ca să nu intre apa în clădire.',
      },
      {
        question: 'Lucrați și în afara orașelor mari?',
        answer: 'Da, avem echipe mobile în toată România. Spune-ne unde se află clădirea și stabilim vizita.',
      },
    ],
  },

  'acoperisuri-verzi': {
    intro: [
      'Un acoperiș verde este o terasă cu un strat de vegetație deasupra hidroizolației. Reține apa de ploaie, ajută la izolare termică și are un aspect aparte, dar funcționează doar dacă straturile de dedesubt sunt corecte: hidroizolație, drenaj, strat de protecție și substrat.',
      'Realizăm sisteme extensive, ușoare, cu plante rezistente care cer puțină îngrijire, și sisteme intensive, mai groase, pentru grădini adevărate. Totul pornește de la structura [terasei](acoperisuri-terase) și de la o [hidroizolație](hidroizolatii) făcută cu atenție, fiindcă reparația ulterioară înseamnă scoaterea vegetației.',
    ],
    whenNeeded: [
      'Vrei vegetație pe terasă sau pe acoperișul unui garaj sau al unei anexe',
      'Cauți un acoperiș cu aspect natural și izolare termică suplimentară',
      'Construiești o casă modernă cu acoperiș plat',
      'Vrei să reții o parte din apa de ploaie',
    ],
    faqs: [
      {
        question: 'Ce diferență e între sistemul extensiv și cel intensiv?',
        answer:
          'Cel extensiv are un strat subțire și plante rezistente, precum sedum, cu întreținere minimă. Cel intensiv are substrat gros și permite iarbă, arbuști sau chiar o grădină, dar e mai greu și cere mai multă îngrijire.',
      },
      {
        question: 'Poate structura mea să susțină un acoperiș verde?',
        answer:
          'Depinde de greutatea sistemului, mai ales când e saturat cu apă. Verificăm structura înainte de ofertă și îți spunem ce variantă e potrivită.',
      },
      {
        question: 'Cere multă întreținere?',
        answer:
          'Sistemul extensiv foarte puțină: verificări periodice și curățarea scurgerilor. Cel intensiv cere îngrijire ca la o grădină obișnuită.',
      },
    ],
  },

  'montaj-panouri-solare': {
    intro: [
      'Panourile solare stau pe acoperiș ani la rând, deci felul în care sunt prinse contează mai mult decât pare. Fiecare fixare străpunge învelitoarea, iar un punct prost etanșat devine o infiltrație exact sub panouri, unde ajungi greu.',
      'Noi pregătim acoperișul și montăm structurile de susținere, integrate corect în învelitoare: [țiglă metalică](tigla-metalica), [tablă fălțuită](tabla-faltuita) sau alt material. Partea electrică și panourile le face instalatorul tău, cu care colaborăm pentru o soluție completă. Dacă acoperișul e vechi, e mai ieftin să îl reparăm înainte de montaj, prin [montaj sau reparații de acoperiș](montaj-acoperisuri).',
    ],
    whenNeeded: [
      'Vrei să montezi panouri fotovoltaice sau solare termice pe casă',
      'Instalatorul tău are nevoie de structuri de prindere pe acoperiș',
      'Acoperișul e aproape de finalul duratei de viață și vrei să îl schimbi înainte de panouri',
      'Vrei ca fixările să fie etanșate corect, fără riscul infiltrațiilor',
    ],
    faqs: [
      {
        question: 'Montați și panourile, nu doar structura?',
        answer:
          'Noi ne ocupăm de acoperiș: structuri de prindere și etanșare. Panourile și instalația electrică se fac de un instalator autorizat, iar noi ne coordonăm cu el.',
      },
      {
        question: 'E bine să schimb acoperișul înainte de panouri?',
        answer:
          'Dacă învelitoarea mai are puțini ani, da. Altfel va trebui să demontezi panourile ca să repari acoperișul, ceea ce costă dublu.',
      },
      {
        question: 'Pot apărea infiltrații din cauza panourilor?',
        answer:
          'Doar dacă prinderile sunt etanșate prost. De aceea folosim accesorii potrivite învelitorii și etanșăm fiecare punct de fixare.',
      },
    ],
  },

  'acoperisuri-biserici': {
    intro: [
      'Acoperișul unei biserici sau al unei clădiri de patrimoniu cere mai mult decât montaj obișnuit. Forme complicate, turle, curburi, materiale tradiționale și un aspect care trebuie păstrat fidel.',
      'Executăm lucrări cu tablă de cupru, [tablă fălțuită](tabla-faltuita) și [țiglă ceramică](tigla-ceramica) specială, folosind tehnici tradiționale acolo unde e nevoie. La restaurări, evaluăm mai întâi [șarpanta](renovare-sarpanta), iar pentru tradiție în arhitectura locală vezi și [acoperișuri tradiționale](acoperisuri-traditionale).',
    ],
    whenNeeded: [
      'Biserica sau mănăstirea are acoperișul degradat sau infiltrează',
      'Se face restaurarea unei clădiri de patrimoniu',
      'Turla sau acoperișul au forme care cer meșteri cu experiență',
      'Vrei să păstrezi materialul și aspectul original',
    ],
    faqs: [
      {
        question: 'Lucrați cu materiale tradiționale?',
        answer:
          'Da, folosim cupru, țiglă ceramică sau tablă fălțuită manual, după specificul clădirii. Alegem materialul împreună cu beneficiarul și cu cei care răspund de monument, dacă e cazul.',
      },
      {
        question: 'Lucrați și pe clădiri protejate?',
        answer:
          'Da, dar lucrările la monumente cer avize și respectarea unor reguli stricte. Te ajutăm cu partea de execuție și respectăm cerințele proiectului aprobat.',
      },
      {
        question: 'Cât durează o lucrare la o biserică?',
        answer:
          'Depinde de suprafață, de complexitatea formelor și de materiale. Stabilim termenul după ce vedem clădirea și proiectul.',
      },
    ],
  },

  'acoperisuri-traditionale': {
    intro: [
      'Casele și anexele în stil tradițional românesc au proporții, pante și materiale specifice: șarpantă din lemn masiv, țiglă ceramică sau șindrilă de lemn, streșini largi. Un acoperiș făcut după tipare moderne strică aspectul întregii construcții.',
      'Construim acoperișuri tradiționale, folosind materiale și tehnici autentice, potrivite pentru case de vacanță, pensiuni și gospodării. Pornim de la [dulgherie](dulgherie) și [șarpantă din lemn](constructie-sarpanta), apoi montăm [țiglă ceramică](tigla-ceramica) sau alt material ales împreună.',
    ],
    whenNeeded: [
      'Construiești o casă de vacanță sau o pensiune în stil tradițional',
      'Vrei să restaurezi o casă veche păstrând aspectul original',
      'Cauți lemn masiv și țiglă ceramică, nu materiale moderne',
      'Zona în care construiești cere un anumit aspect',
    ],
    faqs: [
      {
        question: 'Ce materiale se folosesc la un acoperiș tradițional?',
        answer:
          'Cel mai des lemn masiv pentru structură și țiglă ceramică pentru învelitoare, uneori șindrilă de lemn. Alegem în funcție de zonă, buget și aspect.',
      },
      {
        question: 'Pot avea un acoperiș tradițional și izolație modernă?',
        answer:
          'Da. Aspectul exterior rămâne tradițional, iar dedesubt se pot monta izolație termică, membrane și ventilație, ca la un acoperiș modern.',
      },
      {
        question: 'Lucrați și în zone izolate, la munte sau la țară?',
        answer: 'Da, echipele noastre se deplasează în toată România. Spune-ne locația și stabilim vizita.',
      },
    ],
  },

  'lambriu-metalic': {
    intro: [
      'Lambriul metalic se montează pe streșini, frontoane, atice și fațade. Protejează lemnul de ploaie și de insecte și nu mai cere vopsit la câțiva ani, cum se întâmplă cu lambriul din lemn.',
      'Se potrivește bine cu o [țiglă metalică](tigla-metalica) sau cu [streșini](stresini) executate corect, în aceeași gamă de culori. Montăm pe o structură de șipci cu ventilație, ca aerul să circule sub placare și să nu se adune umezeală.',
    ],
    whenNeeded: [
      'Streșinile din lemn sunt crăpate, putrezite sau vopseaua se cojește',
      'Vrei un finisaj curat, fără întreținere, la frontoane și la fațadă',
      'Renovezi casa și vrei ca acoperișul și fațada să se potrivească',
      'Ai lemn expus la ploaie, care are nevoie de protecție',
    ],
    faqs: [
      {
        question: 'Ruginește lambriul metalic?',
        answer:
          'Lambriul de calitate are strat de zinc și vopsea de protecție. Problemele apar la tăieturi neprotejate sau la tablă slabă calitativ, de aceea folosim materiale cu protecție corespunzătoare și tratăm marginile.',
      },
      {
        question: 'Pot alege orice culoare?',
        answer: 'Există o paletă largă de culori RAL. Alegi din mostre, potrivit cu acoperișul și fațada.',
      },
      {
        question: 'Se montează și pe case existente?',
        answer:
          'Da, după ce verificăm starea lemnului. Dacă unele părți sunt degradate, le înlocuim înainte de placare.',
      },
    ],
  },

  'coame-acoperis': {
    intro: [
      'Coama e linia de la vârful acoperișului, unde se întâlnesc două pante. Este una dintre zonele cele mai expuse la vânt și apă, iar o coamă montată prost lasă apa să intre sub învelitoare chiar dacă restul acoperișului e în regulă.',
      'Montăm coame ceramice sau metalice, în funcție de învelitoare, cu suporturi, benzi de etanșare și, unde e nevoie, elemente de ventilare. Se leagă direct de lucrări precum [țigla ceramică](tigla-ceramica), [țigla metalică](tigla-metalica) și [ventilația acoperișului](ventilatie-acoperis).',
    ],
    whenNeeded: [
      'Observi țigle de coamă desprinse sau mortar crăpat',
      'Se infiltrează apă sub vârful acoperișului',
      'Montezi un acoperiș nou și vrei coamă potrivită ca model și culoare',
      'Podul are condens și vrei coamă ventilată',
    ],
    faqs: [
      {
        question: 'Coama se montează cu mortar sau uscat?',
        answer:
          'Sistemul uscat, cu suporturi și benzi, e mai curat și rezistă mai bine la mișcările acoperișului. Mortarul se mai folosește la restaurări.',
      },
      {
        question: 'Pot schimba doar coama?',
        answer: 'Da, dacă restul acoperișului e în stare bună. Verificăm și racordurile învecinate, ca să nu rămână puncte slabe.',
      },
      {
        question: 'Ajută o coamă ventilată?',
        answer:
          'Ajută aerul să circule prin pod și reduce condensul, mai ales la acoperișuri izolate. Funcționează cel mai bine când există și intrare de aer la streașină.',
      },
    ],
  },

  'vopsire-acoperis': {
    intro: [
      'Vopsirea unui acoperiș metalic nu înseamnă doar culoare. Un strat nou de vopsea protejează tabla de rugină și de soare, iar dacă tabla e în stare bună, poate prelungi cu ani buni viața acoperișului față de o înlocuire completă.',
      'Pregătim suprafața înainte de orice: curățare, îndepărtarea ruginii și a vopselei desprinse, grunduire anticorozivă, apoi vopsele pentru exterior. Se leagă firesc de [curățarea acoperișului](curatare-acoperis), iar pentru acoperișuri foarte uzate evaluăm dacă merită vopsit sau înlocuit, ca să nu plătești de două ori.',
    ],
    whenNeeded: [
      'Tabla are pete de rugină sau vopseaua s-a decolorat',
      'Vrei să schimbi culoarea acoperișului fără să îl înlocuiești',
      'Acoperișul e vechi, dar structural sănătos',
      'Vrei protecție suplimentară înainte să apară coroziunea serioasă',
    ],
    faqs: [
      {
        question: 'Merită vopsit sau înlocuit acoperișul?',
        answer:
          'Dacă tabla e doar decolorată sau are rugină de suprafață, vopsirea e justificată. Dacă e perforată de rugină, înlocuirea e mai economică pe termen lung, iar noi îți spunem asta direct.',
      },
      {
        question: 'Cât ține vopseaua?',
        answer:
          'Depinde de vopsea, de pregătirea suprafeței și de zonă. Un strat bine aplicat, pe suprafață curățată corect, ține ani buni. Condițiile de garanție se stabilesc în ofertă.',
      },
      {
        question: 'Se poate vopsi pe orice vreme?',
        answer:
          'Nu. Vopselele au limite de temperatură și umiditate, iar pe ploaie sau ceață nu se aplică, așa că programăm lucrarea în perioade potrivite.',
      },
    ],
  },

  stresini: {
    intro: [
      'Streașina este partea acoperișului care iese în afara peretelui. Rolul ei este să ducă apa departe de fațadă și să protejeze lemnul șarpantei. Când e subdimensionată sau degradată, pereții se udă și apar igrasia și mucegaiul.',
      'Executăm streșini din lemn tratat, metal sau lambriu PVC, cu ventilație corectă pe sub ele, ca podul să respire. Se potrivesc cu [lambriul metalic](lambriu-metalic), cu [jgheaburile și burlanele](jgheaburi-burlane) și, la structură, cu lucrările de [dulgherie](dulgherie).',
    ],
    whenNeeded: [
      'Streșinile sunt putrede, crăpate sau vopseaua se cojește',
      'Pereții casei se udă la ploaie',
      'Construiești o casă nouă și vrei streșini finisate curat',
      'Intră păsări sau insecte în pod pe sub streașină',
    ],
    faqs: [
      {
        question: 'Ce lățime ar trebui să aibă streașina?',
        answer:
          'Depinde de înălțimea casei și de stilul ei. O streașină mai largă protejează mai bine fațada, dar o stabilim ținând cont de proiect și de structura existentă.',
      },
      {
        question: 'Lemn sau metal pentru streșini?',
        answer:
          'Lemnul tratat are aspect cald, dar cere întreținere periodică. Metalul și PVC-ul cer foarte puțină. Alegem după aspectul dorit și după buget.',
      },
      {
        question: 'Faceți și ventilația podului prin streașină?',
        answer:
          'Da, prevedem grile sau fante pentru intrarea aerului, ca să circule pe sub învelitoare, împreună cu ventilația de la coamă.',
      },
    ],
  },
};
