export interface TrainingSection {
  id: string;
  title: string;
  pages: TrainingPage[];
  quizQuestions: QuizQuestion[];
}

export interface TrainingPage {
  title: string;
  content: string[];
  highlights?: string[];
  warning?: string;
  image?: string;
  images?: string[];
  downloadUrl?: string;
  downloadLabel?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
}

export const trainingSections: TrainingSection[] = [
  {
    id: "einfuehrung",
    title: "Einführung – Arbeiten auf Dächern",
    pages: [
      {
        title: "Unfallbeispiel: Arbeiten auf Dächern",
        warning: "Tödlicher Unfall – So nicht!",
        image: "/images/seite2-unfall.png",
        content: [
          "Der Ort: Eine ältere Lager- und Garagenhalle. Sie wurde gerade umgebaut – mit Solaranlage auf dem Dach. Einige Trägerstangen dafür waren schon montiert.",
          "Die Situation: Ein Mitarbeiter sollte die restlichen Trägerstangen anbringen. Der Vorgesetzte wusste, dass das zu betretende Dach mit alten Wellasbestplatten gedeckt war, unterbrochen von instabilen Lichtkuppeln aus Kunststoff. Deshalb wies er den Beschäftigten darauf hin, unbedingt Laufbohlen auszulegen und ein Schutznetz anzubringen.",
          "Der Fehler: Der Mitarbeiter nahm das Netz zwar entgegen, brachte es jedoch nicht an. Er legte keine Laufbohlen aus, sondern benutzte wenige Schalbretter. Er bestieg das Dach ohne PSA gegen Absturz. Als er abrutschte und versehentlich auf die nicht tragfähige Lichtkuppel trat, brach diese durch.",
          "Die Folgen: Der Beschäftigte stürzte 5m tief auf den Betonfußboden und verstarb.",
        ],
      },
      {
        title: "So geht's richtig!",
        images: [
          "/images/seite3-leiter.png",
          "/images/seite3-laufbohlen.png",
          "/images/seite3-schutznetz.png",
          "/images/seite3-psa.png",
        ],
        content: [
          "Aufstiege und Zugänge zum Dach müssen sicher sein. So müssen z.B. Anlegeleitern gegen Ausgleiten, Umfallen, Abrutschen und Einsinken gesichert sein. Halten Sie den Anlegewinkel von 65–75 Grad ein.",
          "Nicht durchsturzsichere Dächer dürfen nur auf Laufbohlen oder Arbeitsstegen betreten werden. Diese müssen mindestens 0,5m breit sein.",
          "An Öffnungen von Dachflächen oder nicht durchsturzsicheren Lichtkuppeln müssen Sicherungen wie z.B. Schutznetze vorhanden sein, die ein Hineinfallen oder -treten verhindern.",
          "Sofern es die Umstände erfordern und keine Absturzsicherungen wie Dachfanggerüste zur Verfügung stehen, kann auch PSA gegen Absturz eingesetzt werden. Dies kann z.B. der Fall sein, wenn Schneelasten zu entfernen sind.",
        ],
        highlights: [
          "Anlegewinkel: 65–75 Grad",
          "Laufbohlen mind. 0,5 m breit",
          "Schutznetze an Öffnungen und Lichtkuppeln",
          "PSA gegen Absturz als letzte Maßnahme",
        ],
      },
    ],
    quizQuestions: [
      {
        id: "e1",
        question: "Sie sollen auf einem Dach mit alten Wellplatten und Lichtkuppeln arbeiten. Was tun Sie zuerst?",
        options: [
          "Sofort aufs Dach steigen und vorsichtig gehen",
          "Laufbohlen auslegen, Schutznetz anbringen und PSA anlegen",
          "Nur Handschuhe anziehen und loslegen",
          "Einen Kollegen bitten aufzupassen",
        ],
        correctIndex: 1,
      },
      {
        id: "e2",
        question: "Sie stellen eine Anlegeleiter auf. Wie prüfen Sie den korrekten Anlegewinkel?",
        options: [
          "Die Leiter möglichst steil anlegen",
          "Den Winkel auf 65–75° einstellen und mind. 1 m Überstand sicherstellen",
          "Einfach anlehnen, solange sie nicht wackelt",
          "Den Winkel spielt keine Rolle",
        ],
        correctIndex: 1,
      },
      {
        id: "e3",
        question: "Ein Kollege möchte auf dem Dach ohne Schutznetz arbeiten, weil es 'nur kurz' dauert. Was sagen Sie?",
        options: [
          "Stimmt, bei kurzen Arbeiten kann man darauf verzichten",
          "Schutznetze sind unabhängig von der Dauer Pflicht, wenn Durchsturzgefahr besteht",
          "Nur bei Regen sind Schutznetze nötig",
          "Er soll einfach vorsichtig sein",
        ],
        correctIndex: 1,
      },
      {
        id: "e4",
        question: "Wie breit müssen Laufbohlen auf nicht durchsturzsicheren Dächern mindestens sein?",
        options: [
          "0,30 m",
          "0,40 m",
          "0,50 m",
          "0,80 m",
        ],
        correctIndex: 2,
      },
      {
        id: "e5",
        question: "Welche Maßnahme ist beim Arbeiten auf Dächern die letzte Wahl, wenn keine anderen Sicherungen möglich sind?",
        options: [
          "Seitenschutz",
          "Dachfanggerüst",
          "PSA gegen Absturz",
          "Schutznetz",
        ],
        correctIndex: 2,
      },
      {
        id: "e6",
        question: "Was passierte im Unfallbeispiel mit dem Mitarbeiter auf dem Dach mit Lichtkuppeln?",
        options: [
          "Er rutschte von der Leiter",
          "Er brach durch eine nicht tragfähige Lichtkuppel und stürzte 5 m tief",
          "Er wurde vom Wind erfasst",
          "Ein Werkzeug fiel ihm auf den Kopf",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "verkehrswege",
    title: "Verkehrswege auf Dächern",
    pages: [
      {
        title: "Verkehrswege auf Dächern (A027)",
        images: [
          "/images/seite4-aufstieg.png",
          "/images/seite4-laufstege.png",
          "/images/seite4-verkehrsweg.png",
        ],
        content: [
          "Gefährdungen: Unzureichend eingerichtete Verkehrswege können Stolpern, Rutschen, Stürzen und Abstürze zur Folge haben.",
          "Allgemeines: Verkehrswege so einrichten, dass die Gefährdung durch Absturz von Beschäftigten so weit als möglich vermieden wird. Als Verkehrswege dürfen auch vorhandene Einrichtungen für Schornsteinfegerarbeiten nach DIN18160-5 verwendet werden.",
          "Verkehrswege so herrichten, dass sich die Beschäftigten bei jeder Witterung sicher bewegen können. Sind Anlagen, Einrichtungen und andere Arbeitsplätze nur über nicht durchsturzsichere Dachflächen zu erreichen, Laufstege mit beidseitigem Seitenschutz verwenden.",
          "Schutzmaßnahmen: Verkehrswege müssen für die jeweilige Nutzung möglichst eben und ohne Stolperstellen sein, durch geeignete Oberflächenbeschaffenheit rutschsicher gestaltet werden (z.B. rutschhemmende Matten), beleuchtet sein, wenn das Tageslicht nicht ausreicht, und freigehalten werden.",
        ],
        highlights: [
          "Mindestbreite Laufstege: 0,50 m",
          "Bei Neigung über 1:5 (ca. 11°): Trittleisten aufbringen",
          "Bei Neigung über 1:1,75 (ca. 30°): Trittstufen aufbringen",
          "Als Aufstiege Treppen verwenden",
          "Anlegeleitern nur wenn keine sichereren Arbeitsmittel möglich",
        ],
      },
    ],
    quizQuestions: [
      {
        id: "v1",
        question: "Sie müssen auf einem Dach einen Laufsteg einrichten. Welche Mindestbreite wählen Sie?",
        options: ["0,30 m", "0,50 m", "0,80 m", "1,00 m"],
        correctIndex: 1,
      },
      {
        id: "v2",
        question: "Das Dach hat eine Neigung von 15°. Was bringen Sie zusätzlich auf dem Laufsteg an?",
        options: [
          "Nichts, 15° ist kein Problem",
          "Trittleisten, da die Neigung über 11° liegt",
          "Ein Geländer reicht",
          "Trittstufen ab 15°",
        ],
        correctIndex: 1,
      },
      {
        id: "v3",
        question: "Sie sollen bei Dunkelheit auf dem Dach arbeiten. Was ist hinsichtlich der Verkehrswege erforderlich?",
        options: [
          "Taschenlampe reicht aus",
          "Verkehrswege müssen beleuchtet sein, wenn Tageslicht nicht ausreicht",
          "Bei Dunkelheit darf nicht gearbeitet werden",
          "Reflektierende Kleidung genügt",
        ],
        correctIndex: 1,
      },
      {
        id: "v4",
        question: "Ab welcher Neigung müssen auf Laufstegen Trittstufen statt Trittleisten angebracht werden?",
        options: [
          "Ab 11° (1:5)",
          "Ab 20°",
          "Ab 30° (1:1,75)",
          "Ab 45°",
        ],
        correctIndex: 2,
      },
      {
        id: "v5",
        question: "Welches Arbeitsmittel soll als Aufstieg zum Dach bevorzugt verwendet werden?",
        options: [
          "Anlegeleiter",
          "Strickleiter",
          "Treppe",
          "Kletterseil",
        ],
        correctIndex: 2,
      },
      {
        id: "v6",
        question: "Laufstege über nicht durchsturzsichere Dachflächen müssen welche Ausstattung haben?",
        options: [
          "Nur rutschhemmende Oberfläche",
          "Beidseitigen Seitenschutz",
          "Farbige Markierung",
          "Mindestens einseitiges Geländer",
        ],
        correctIndex: 1,
      },
      {
        id: "v7",
        question: "Verkehrswege auf Dächern müssen rutschsicher gestaltet werden. Welches Mittel ist geeignet?",
        options: [
          "Normaler Teppich",
          "Rutschhemmende Matten",
          "Glatte Metallplatten",
          "Kunststofffolie",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "druckgas",
    title: "Druckgasbehälter – Lagerung & Transport",
    pages: [
      {
        title: "Lagerung von Druckgasbehältern (A064)",
        warning: "Brand- und Explosionsgefahr!",
        images: [
          "/images/seite5-gaslager.png",
          "/images/seite5-schutzbereich1.png",
          "/images/seite5-schutzbereich2.png",
        ],
        content: [
          "Gefährdungen: Bei der Lagerung von Druckgasbehältern besteht Brand- und Explosionsgefahr.",
          "Unzulässig ist die Lagerung in: engen Höfen, Durchgängen und Durchfahrten, in der Nähe von Gruben, Kanälen, Abflüssen und tieferliegenden Räumen.",
          "Betreten des Lagers durch Unbefugte ist untersagt. Ein entsprechendes Hinweisschild ist am Zugang zum Lager anzubringen. Es muss ein Feuerlöscher leicht erreichbar vorhanden sein.",
          "Druckgasbehälter möglichst stehend lagern. Bei liegender Lagerung Flaschen gegen Fortrollen sichern. Druckgasbehälter vor Sonneneinstrahlung geschützt lagern.",
          "Stehende Druckgasbehälter gegen Umfallen und Herabfallen sichern. Ventile mit Schutzkappen und ggf. Verschlussmuttern sichern. Das Umfüllen von Druckgasen in Lagern ist unzulässig.",
          "Lager auf nicht umfriedeten Grundstücken im Freien sind einzuzäunen.",
          "Bei Druckgasbehältern mit brennbaren Gasen dürfen sich im Schutzbereich keine Zündquellen, Gruben, Kanäle, Bodenabläufe, Kellerniedergänge befinden. Der Schutzbereich darf sich nicht auf Nachbargrundstücke und öffentliche Verkehrsflächen erstrecken.",
        ],
        highlights: [
          "Sicherheitsabstand ≥ 5,00 m zu benachbarten Anlagen",
          "Schutzbereich: max. 2 Seiten durch mind. 2,00 m hohe öffnungslose Schutzwände aus nicht brennbarem Material einengen",
        ],
      },
      {
        title: "Transport von Druckgasflaschen (A065)",
        warning: "Brand- und Explosionsgefahr!",
        images: [
          "/images/seite6-transport1.png",
          "/images/seite6-transport2.png",
          "/images/seite6-transport3.png",
        ],
        content: [
          "Gefährdungen: Bei dem Umgang mit Druckgasflaschen besteht Brand- und Explosionsgefahr.",
          "Druckgasflaschen gegen Stöße schützen. Flaschen nicht werfen oder fallen lassen, nicht über den Boden rollen.",
          "Zum Transport von Einzelflaschen z.B. Flaschenkarren oder Transportgestelle verwenden.",
          "Beim Transport auf Fahrzeugen Druckgasflaschen gegen Verrutschen, Verrollen, Umfallen und Herabfallen sichern.",
          "Druckgasflaschen nur mit geschlossenen Ventilen und aufgeschraubten Schutzkappen transportieren.",
          "Begrenzte Mengen gemäß Gefahrgutverordnung beachten. Bei Beförderung eines Stoffes oder Produktes darf die Höchstmenge nicht überschritten werden.",
          "Gasflaschen müssen mit Gefahrzetteln und UN-Nummern gekennzeichnet sein.",
          "Feuerlöscher (2 kg Pulver) mitführen. Rauchen und Umgang mit offenem Feuer ist bei Ladearbeiten verboten.",
        ],
      },
    ],
    quizQuestions: [
      {
        id: "d1",
        question: "Sie richten ein Druckgaslager ein. Wie stellen Sie die Flaschen sicher auf?",
        options: [
          "Liegend ohne Sicherung, damit sie nicht umfallen",
          "Stehend, gegen Umfallen gesichert, Ventile mit Schutzkappen",
          "Horizontal auf einer Palette",
          "Egal, Hauptsache im Schatten",
        ],
        correctIndex: 1,
      },
      {
        id: "d2",
        question: "Sie transportieren Druckgasflaschen auf einem Fahrzeug. Was müssen Sie mitführen?",
        options: [
          "Erste-Hilfe-Kasten reicht",
          "Feuerlöscher (mind. 2 kg Pulver)",
          "Nur Warndreieck",
          "Gar nichts Zusätzliches",
        ],
        correctIndex: 1,
      },
      {
        id: "d3",
        question: "Dürfen Sie im Druckgaslager Gase von einer Flasche in eine andere umfüllen?",
        options: [
          "Ja, mit passendem Schlauch",
          "Nur bei kleinen Mengen",
          "Nein, das Umfüllen in Lagern ist unzulässig",
          "Ja, wenn ein Feuerlöscher bereitsteht",
        ],
        correctIndex: 2,
      },
      {
        id: "d4",
        question: "Welchen Mindestabstand muss ein Druckgaslager zu benachbarten Anlagen einhalten?",
        options: [
          "2,00 m",
          "3,00 m",
          "5,00 m",
          "10,00 m",
        ],
        correctIndex: 2,
      },
      {
        id: "d5",
        question: "Sie bemerken, dass Druckgasflaschen in der prallen Sonne stehen. Was tun Sie?",
        options: [
          "Nichts, das macht nichts",
          "Die Flaschen vor Sonneneinstrahlung geschützt lagern",
          "Nur bei Temperaturen über 40°C handeln",
          "Ventile öffnen, um Druck abzulassen",
        ],
        correctIndex: 1,
      },
      {
        id: "d6",
        question: "Was ist beim Umgang mit Druckgasflaschen während des Transports verboten?",
        options: [
          "Flaschen im Fahrzeug sichern",
          "Schutzkappen aufschrauben",
          "Flaschen über den Boden rollen oder fallen lassen",
          "Gefahrzettel anbringen",
        ],
        correctIndex: 2,
      },
      {
        id: "d7",
        question: "Welche Schutzwände dürfen den Schutzbereich eines Druckgaslagers begrenzen?",
        options: [
          "Holzzäune",
          "Mind. 2,00 m hohe öffnungslose Wände aus nicht brennbarem Material",
          "Trassierbänder",
          "Folienabdeckungen",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "absturzsicherung",
    title: "Absturzsicherungen auf Baustellen",
    pages: [
      {
        title: "Absturzsicherungen auf Baustellen (B100)",
        image: "/images/seite7-absturzsicherung.png",
        content: [
          "Gefährdungen: Fehlende, unvollständig aufgebaute oder falsch dimensionierte Absturzsicherungen sowie fehlende Sicherungsmaßnahmen bei der Montage können Absturzunfälle zur Folge haben.",
          "Absturzsicherungen durch Seitenschutz bzw. Absperrungen sind erforderlich z.B. an: Arbeitsplätzen und Verkehrswegen an oder über Wasser oder anderen Stoffen, in denen man versinken kann (unabhängig von der Absturzhöhe); frei liegenden Treppenläufen und Wandöffnungen bei mehr als 1,00 m Absturzhöhe; allen übrigen Arbeitsplätzen bei mehr als 2,00 m Absturzhöhe; Absturzkanten von Öffnungen ≥ 9,00 m² und Kantenlängen ≥ 3,00 m.",
          "An Arbeitsplätzen auf Flächen mit nicht mehr als 22,5° Neigung kann auf Seitenschutz verzichtet werden, wenn in mindestens 2,00 m Abstand von der Absturzkante eine feste Absperrung angebracht ist (z.B. Geländer, Ketten, Seile – jedoch keine Trassierbänder).",
          "Auf Seitenschutz kann nur verzichtet werden, wenn stattdessen Auffangeinrichtungen (Fanggerüste/Dachfanggerüste/Auffangnetze/Schutzwände) vorhanden sind. Nur wenn auch diese unzweckmäßig sind, darf PSAgA verwendet werden.",
          "Der Vorgesetzte hat die Anschlageinrichtungen festzulegen und dafür zu sorgen, dass die PSAgA benutzt wird.",
          "Bei Öffnungen ≤ 9,00 m² und Kantenlängen ≤ 3,00 m kann auf Seitenschutz verzichtet werden, wenn diese mit begehbaren und unverschiebbar angebrachten Abdeckungen versehen sind.",
        ],
        highlights: [
          "Rangfolge: Seitenschutz → Auffangeinrichtungen → PSAgA",
          "Absperrung mindestens 2,00 m von Absturzkante",
          "Trassierbänder sind keine Absperrungen!",
          "Pfostenabstand bis 2,00 m: Bretter mind. 15 × 3 cm",
          "Pfostenabstand bis 3,00 m: Bretter mind. 20 × 4 cm",
          "Bordbretter: mind. 15 cm über Belag, mind. 3 cm dick",
        ],
      },
      {
        title: "Dachschutzwände (B101)",
        images: [
          "/images/seite8-dachschutzwand1.png",
          "/images/seite8-dachschutzwand2.png",
          "/images/seite8-dachschutzwand3.png",
        ],
        content: [
          "Gefährdungen: Fehlende Sicherungsmaßnahmen beim Auf- bzw. Abbau, nicht sachgerechter Befestigung sowie Ausführung von Dacharbeiten außerhalb des zulässigen Arbeitsbereiches können zu Absturzunfällen führen.",
          "Dachschutzwände nur bis zu einer Dachneigung von 60° einsetzen. Bei Dachneigungen von mehr als 22,5° darf der Höhenunterschied zwischen Arbeitsplatz und Einrichtungen zum Auffangen abrutschender Beschäftigter nicht mehr als 5,00 m betragen.",
          "Schutzwandhalter nur an durchgehenden, senkrecht zur Traufe verlaufenden, ausreichend tragfähigen Sparren befestigen. Dachschutzwände sind entsprechend der Aufbau- und Verwendungsanleitung des Herstellers zu verwenden.",
          "Dachschutzwände mit einer Bauhöhe von mindestens 1,00 m verwenden und so anbringen, dass sich die Oberkante nicht weniger als 0,80 m über der Dachfläche befindet. Nur Netze oder Geflechte mit einer Maschenweite von höchstens 10 cm verwenden.",
          "Beschäftigte, die Schutzwände montieren, müssen gegen Absturz gesichert sein, z.B. durch Anseilschutz. PSA gegen Absturz nur an geeigneten Anschlageinrichtungen befestigen (Tragkraft mind. 9 kN nachgewiesen).",
          "Vorhandene Anschlageinrichtungen müssen vor der Benutzung auf ihre Tragfähigkeit überprüft werden. Der Vorgesetzte hat die Anschlageinrichtungen festzulegen.",
          "Befestigung von Dachschutzwänden an Sicherheitsdachhaken nur nach AuV des Herstellers. Dachschutzwände müssen die zu sichernden Arbeitsplätze seitlich um mindestens 1,00 m überragen.",
        ],
      },
      {
        title: "Sicherheitsdachhaken (B103)",
        image: "/images/seite9-dachhaken.png",
        content: [
          "Gefährdungen: Beim Auf- und Abbau, bei der Benutzung sowie durch nicht fachgerechte Montage kann es zu Absturzunfällen kommen.",
          "Für Arbeiten auf einer mehr als 45° geneigten Fläche sind besondere Arbeitsplätze zu schaffen, unabhängig von den erforderlichen Absturzsicherungen.",
          "Auflegeleitern mit höchstens 1,5 kN belasten. Sie sind mit der Sprosse mittig in Dachhaken einzuhängen. Auflegeleitern nicht mit der obersten Sprosse einhängen, nicht in die Dachrinne stellen, nicht bei Dachneigungen von mehr als 75° benutzen und nicht mit deckendem Anstrich versehen.",
          "Auf Dächern mit einer Neigung > 22,5° und < 75° sind Sicherheitsdachhaken geeignet: zum Einhängen von Dachdecker-Auflegeleitern, zum Befestigen von Dachdeckerstühlen auf geneigten Dächern, als Anschlagpunkte für PSA gegen Absturz bei kurzzeitigen Dacharbeiten.",
          "Sicherheitsdachhaken Typ B müssen der DIN EN 517 entsprechen. Die Montage darf nur nach der Einbauanleitung des Herstellers erfolgen.",
          "Sicherheitsdachhaken für Wartung und Instandhaltung auf der Dachfläche verteilt einbauen (vgl. DGUV I 201-056). Übergabe einer Montagedokumentation an den Auftraggeber als Nachweis einer sachgerechten Montage.",
        ],
        highlights: [
          "Neigungsbereich: > 22,5° und < 75°",
          "Auflegeleitern: max. 1,5 kN Belastung",
          "Typ B nach DIN EN 517",
        ],
      },
      {
        title: "Flachdach-Absturzsicherungssysteme (B104)",
        image: "/images/seite10-flachdach.png",
        content: [
          "Gefährdungen: Fehlende Sicherungsmaßnahmen bei der Montage an der Absturzkante können zu Absturzunfällen führen. Nichteinhaltung der Mindestabstände tragender Stützen sowie der vorgeschriebenen Ballastierung können zum Versagen des Systems führen.",
          "Für den Einsatz von Systemen zur Absturzsicherung auf oder an Flachdächern gilt es eine Systemauswahl anhand örtlicher Gegebenheiten zu treffen: Dachbelastung, Dachneigung, Attikaform und -abmessungen, max. Gebäudehöhe (Wind).",
          "Es gibt Systeme mit Ballastierung oder mit Befestigung direkt am Bauwerk. Aufbau- und Verwendungsanleitung des Herstellers beachten und an der Baustelle bereithalten.",
          "Flachdach-Absturzsicherungssysteme dürfen nur unter Aufsicht einer fachkundigen Person auf-, ab- oder umgebaut werden. Nur längere zusammenhängende Abschnitte möglichst an allen Dachkanten montieren. Häufiges Umsetzen vermeiden.",
          "Nicht gesicherte Bereiche mit Kette, Seil, Gitter o.Ä. im Abstand ≥ 2,00 m von der Absturzkante deutlich absperren.",
          "Beim Hochnehmen von Einzelstützen Mindestabstände tragender Stützen nicht überschreiten, sonst zusätzliche Stützen einsetzen. Sicherungsvorkehrungen bei hohen Windgeschwindigkeiten treffen (z.B. Systeme umklappen oder demontieren).",
          "Systeme nur absturzgeschützt montieren: unter Anseilschutz an ausreichend tragfähigen Anschlagpunkten oder in mindestens 2,00 m Abstand von der Absturzkante aufbauen und unter dem Schutz des Systems versetzen.",
        ],
      },
    ],
    quizQuestions: [
      {
        id: "a1",
        question: "Sie planen Absturzsicherungen auf einer Baustelle. In welcher Reihenfolge wählen Sie die Maßnahmen?",
        options: [
          "PSAgA zuerst, dann Auffangeinrichtung, dann Seitenschutz",
          "Seitenschutz → Auffangeinrichtungen → PSAgA (als letztes Mittel)",
          "Alle Maßnahmen gleichzeitig einsetzen",
          "Nur PSAgA, das reicht immer",
        ],
        correctIndex: 1,
      },
      {
        id: "a2",
        question: "Ein Kollege will Trassierbänder als Absperrung an der Dachkante verwenden. Wie reagieren Sie?",
        options: [
          "Gute Idee, die sind gut sichtbar",
          "Trassierbänder sind KEINE zulässigen Absperrmittel – stattdessen Geländer, Ketten oder Seile verwenden",
          "Nur bei Windstille erlaubt",
          "Doppelt nehmen, dann ist es sicher",
        ],
        correctIndex: 1,
      },
      {
        id: "a3",
        question: "Sie montieren Dachschutzwände. Welche Maschenweite dürfen die Netze maximal haben?",
        options: ["5 cm", "10 cm", "15 cm", "20 cm"],
        correctIndex: 1,
      },
      {
        id: "a4",
        question: "Ab welcher Absturzhöhe sind Absturzsicherungen an allen Arbeitsplätzen erforderlich?",
        options: [
          "Ab 1,00 m",
          "Ab 1,50 m",
          "Ab 2,00 m",
          "Ab 3,00 m",
        ],
        correctIndex: 2,
      },
      {
        id: "a5",
        question: "In welchem Mindestabstand zur Absturzkante muss eine feste Absperrung stehen, damit auf Seitenschutz verzichtet werden kann?",
        options: [
          "1,00 m",
          "1,50 m",
          "2,00 m",
          "3,00 m",
        ],
        correctIndex: 2,
      },
      {
        id: "a6",
        question: "Dachschutzwände dürfen bis zu welcher Dachneigung eingesetzt werden?",
        options: [
          "30°",
          "45°",
          "60°",
          "75°",
        ],
        correctIndex: 2,
      },
      {
        id: "a7",
        question: "Welche Mindest-Tragkraft müssen Anschlageinrichtungen für PSAgA nachweisen?",
        options: [
          "3 kN",
          "6 kN",
          "9 kN",
          "12 kN",
        ],
        correctIndex: 2,
      },
      {
        id: "a8",
        question: "Bei Auflegeleitern auf dem Dach: welche maximale Belastung ist zulässig?",
        options: [
          "0,5 kN",
          "1,0 kN",
          "1,5 kN",
          "2,0 kN",
        ],
        correctIndex: 2,
      },
      {
        id: "a9",
        question: "Sie müssen Flachdach-Absturzsicherungssysteme montieren. Wer muss den Auf-/Abbau beaufsichtigen?",
        options: [
          "Jeder erfahrene Mitarbeiter",
          "Eine fachkundige Person",
          "Der Bauherr persönlich",
          "Niemand, das ist Routine",
        ],
        correctIndex: 1,
      },
      {
        id: "a10",
        question: "Dachschutzwände müssen die zu sichernden Arbeitsplätze seitlich um wie viel überragen?",
        options: [
          "0,50 m",
          "1,00 m",
          "1,50 m",
          "2,00 m",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "gerueste",
    title: "Gerüste (Fang-, Fassaden-, Dachfanggerüste)",
    pages: [
      {
        title: "Fanggerüste (B111)",
        images: [
          "/images/seite11-fanggeruest1.png",
          "/images/seite11-fanggeruest2.png",
        ],
        content: [
          "Gefährdungen: Falsch dimensionierte oder unvollständig aufgebaute Fanggerüste sowie fehlende Sicherungsmaßnahmen bei der Montage können zu Absturzunfällen führen.",
          "Wenn bei Arbeiten auf einer Fläche mit nicht mehr als 22,5° Neigung an der Absturzkante kein Seitenschutz angebracht werden kann, müssen stattdessen Fanggerüste verwendet werden, die ein Auffangen abstürzender Personen gewährleisten.",
          "Zur Reduzierung der Gefährdung den Höhenunterschied zwischen Absturzkante und Gerüstbelag möglichst minimieren. Der max. Höhenunterschied darf bei Fanggerüsten mit einer Breite der Fanglage von mind. 0,90 m nicht mehr als 2,00 m betragen.",
          "Gerüstbauteile nicht ausbauen. Kein Material auf dem Fangbelag lagern.",
        ],
        highlights: [
          "Max. Höhenunterschied Absturzkante–Belag: 2,00 m",
          "Mindestbreite Fanglage: 0,90 m",
          "Neigung max. 22,5°",
        ],
      },
      {
        title: "Fassadengerüste (B113) – Gefährdungen & Allgemeines",
        images: [
          "/images/seite12-fassadengeruest1.png",
          "/images/seite12-fassadengeruest2.png",
        ],
        content: [
          "Gefährdungen: Unvollständig aufgebaute Gerüste sowie eigenmächtig vorgenommene Veränderungen am Gerüst können zu Absturzunfällen oder Gerüstumstürzen führen.",
          "Unterschieden werden: Systemgerüste aus vorgefertigten Bauteilen und Stahlrohrkupplungsgerüste. Abhängig von den durchzuführenden Arbeiten Lastklasse und Breitenklasse wählen sowie Ständer- und Riegelabstände und Belagstärke festlegen.",
        ],
        highlights: [
          "Lastklassen 1–6 (0,75–6,00 kN/m²)",
          "Breitenklassen W06–W2,4",
        ],
      },
      {
        title: "Fassadengerüste – Montage & Verankerung",
        content: [
          "Montage: Gerüstbau nur unter ständiger Aufsicht einer fachkundigen Person und von fachlich geeigneten Beschäftigten ausführen lassen.",
          "Beschädigte Gerüstbauteile nicht verwenden. Nicht einsatzbereite Gerüste mit Verbotszeichen kennzeichnen und den Zugang absperren. Fertiggestellte und geprüfte Gerüste kennzeichnen.",
          "Verankerung: Gerüst fortlaufend mit dem Aufbau zug- und druckfest an tragfähigen Bauteilen der Fassade verankern. Verankerungen in der Nähe der Gerüstknotenpunkte anordnen.",
        ],
      },
      {
        title: "Fassadengerüste – Zugänge & Gerüstbelag",
        content: [
          "Alle Arbeitsplätze müssen über sichere Zugänge erreichbar sein. Treppen einbauen, wenn umfangreiche Materialien transportiert werden, die Aufstiegshöhe mehr als 10 m beträgt oder umfangreiche Arbeiten ausgeführt werden.",
          "Sind Aufzüge, Transportbühnen oder Treppen nicht einsetzbar, können Leitern verwendet werden. Leitern als Zugänge nur innenliegend einbauen. Klappen in Durchstiegsbelägen unmittelbar nach dem Durchstieg schließen.",
          "Jede benutzte Gerüstlage muss voll ausgelegt und über einen sicheren Zugang erreichbar sein. Bei umlaufender Einrüstung den Gerüstbelag in voller Breite um die Ecke herumführen.",
          "Der Belag darf nicht wippen oder ausweichen. An der Innenseite des Gerüstes darf der Abstand zwischen Belag und Bauwerk höchstens 0,30 m betragen.",
        ],
        highlights: [
          "Treppen ab 10 m Aufstiegshöhe",
          "Abstand Belag – Bauwerk: max. 0,30 m",
        ],
      },
      {
        title: "Fassadengerüste – Seitenschutz & Benutzung",
        content: [
          "Seitenschutz besteht aus Geländerholm, Zwischenholm und Bordbrett und ist an den Außen- und Stirnseiten des Gerüstes zu montieren.",
          "An der Innenseite Seitenschutz montieren, wenn der Abstand zwischen Belag und Bauwerk mehr als 0,30 m beträgt. An der Innenseite darf auf das Bordbrett verzichtet werden, wenn Arbeiten an der Fassade ausgeführt werden.",
          "Bei innenliegenden Leitergängen muss der Verkehrsweg auch in nicht benutzten Gerüstlagen mit Seitenschutz gesichert werden.",
          "Für die betriebssichere Herstellung und den Abbau ist der Unternehmer der Gerüstbauarbeiten verantwortlich, für die Erhaltung und sichere Verwendung der Benutzer.",
          "Keine konstruktiven Änderungen am Gerüst vornehmen (z.B. Entfernen von Seitenschutz, Verankerungen, Diagonalen).",
          "Bei übereinanderliegenden Gerüstfeldern darf nur eine Gerüstlage mit der zulässigen Last belastet werden. Überlastung vermeiden, einen ausreichend breiten freien Durchgang belassen – Mindestbreite 20 cm.",
        ],
        highlights: [
          "Seitenschutz: Geländerholm + Zwischenholm + Bordbrett",
          "Freier Durchgang: mind. 20 cm Breite",
        ],
      },
      {
        title: "Dachfanggerüste (B121) – Gefährdungen & Schutzmaßnahmen",
        images: [
          "/images/seite13-dachfang1.png",
          "/images/seite13-dachfang2.png",
        ],
        content: [
          "Gefährdungen: Fehlende Sicherungsmaßnahmen beim Auf- bzw. Abbau des Dachfanggerüstes sowie falsch dimensionierte, unvollständig aufgebaute oder vorzeitig entfernte Schutzwände können Absturzunfälle zur Folge haben.",
          "Wenn bei Dacharbeiten kein Seitenschutz verwendet werden kann, müssen Dachfanggerüste angebracht werden. Dies gilt für Arbeitsplätze und Verkehrswege auf Dächern mit mehr als 22,5° bis 60° Neigung bei einer Absturzhöhe ab Traufe von mehr als 2,00 m.",
          "Der max. Höhenunterschied zwischen Absturzkante (Traufe) und Gerüstbelag darf 1,50 m nicht überschreiten. Mindestbelagbreite: 0,60 m.",
          "Schutzwände aus tragfähigen Netzen oder Geflechten mit einer Maschenweite von max. 10 cm herstellen.",
        ],
        highlights: [
          "Dachneigung: 22,5°–60°",
          "Max. Höhenunterschied Traufe–Belag: 1,50 m",
          "Mindestbelagbreite: 0,60 m",
          "Maschenweite max. 10 cm",
        ],
      },
      {
        title: "Dachfanggerüste – Schutzwand & Netze",
        image: "/images/seite13-dachfang3.png",
        content: [
          "Schutznetze und Drahtgeflechte allseitig an Stahlrohren mit mind. 3,2 mm Wanddicke oder Aluminiumrohr mit mind. 4,0 mm Wanddicke und 48,3 mm Außendurchmesser befestigen.",
          "Befestigung Masche für Masche. Darauf kann verzichtet werden, wenn das Netz mit Gurtschnellverschlüssen höchstens alle 75 cm am Rand befestigt ist und der Hersteller die ausreichende Tragfähigkeit nachgewiesen hat.",
          "Netze nicht mit Kabelbindern oder Bindedraht befestigen! Netzstöße Masche für Masche mit einem Kopplungsseil verbinden oder mind. alle 75 cm überlappen lassen.",
          "Schutznetze in ihren Abmessungen nicht verändern. Keine beschädigten Schutznetze verwenden. Schutznetze ohne Prüfung des Prüfgarnes nur innerhalb von 12 Monaten nach Herstellung verwenden.",
          "Dachneigungen zwischen 45° und 60°: Für Arbeiten auf mehr als 45° geneigten Flächen sind besondere Arbeitsplätze zu schaffen, z.B. Dachdeckerstühle, Dachdecker-Auflegeleitern, Lattungen.",
        ],
        highlights: [
          "Keine Kabelbinder oder Bindedraht!",
          "Netzprüfung: max. 12 Monate nach Herstellung",
          "Ab 45°: besondere Arbeitsplätze erforderlich",
        ],
      },
    ],
    quizQuestions: [
      {
        id: "g1",
        question: "Sie bemerken, dass an einem Gerüst der Seitenschutz fehlt. Was tun Sie?",
        options: [
          "Trotzdem benutzen, aber vorsichtig sein",
          "Das Gerüst nicht benutzen, Mangel melden und absperren lassen",
          "Den fehlenden Seitenschutz selbst improvisieren",
          "Nur die unteren Lagen benutzen",
        ],
        correctIndex: 1,
      },
      {
        id: "g2",
        question: "Sie bauen ein Dachfanggerüst auf. Wie groß darf der Höhenunterschied zwischen Traufe und Belag maximal sein?",
        options: ["0,50 m", "1,00 m", "1,50 m", "2,00 m"],
        correctIndex: 2,
      },
      {
        id: "g3",
        question: "Welche Mindestbreite muss die Fanglage eines Fanggerüsts haben?",
        options: ["0,60 m", "0,75 m", "0,90 m", "1,20 m"],
        correctIndex: 2,
      },
      {
        id: "g4",
        question: "Ein Fassadengerüst wurde fertiggestellt. Wie muss es gekennzeichnet werden?",
        options: [
          "Gar nicht, man sieht ja, dass es steht",
          "Mit Warnband umwickeln",
          "Fertiggestellte und geprüfte Gerüste müssen gekennzeichnet werden",
          "Nur mündliche Information an die Kollegen",
        ],
        correctIndex: 2,
      },
      {
        id: "g5",
        question: "Wie groß darf der Abstand zwischen Gerüstbelag und Bauwerk an der Innenseite maximal sein?",
        options: ["0,10 m", "0,20 m", "0,30 m", "0,50 m"],
        correctIndex: 2,
      },
      {
        id: "g6",
        question: "Ab welcher Aufstiegshöhe müssen am Fassadengerüst Treppen statt Leitern eingebaut werden?",
        options: ["Ab 5 m", "Ab 8 m", "Ab 10 m", "Ab 15 m"],
        correctIndex: 2,
      },
      {
        id: "g7",
        question: "Dürfen Sie an einem Gerüst konstruktive Änderungen vornehmen, z. B. Diagonalen entfernen?",
        options: [
          "Ja, wenn es stabiler aussieht",
          "Nein, keine konstruktiven Änderungen vornehmen",
          "Nur mit Genehmigung des Poliers",
          "Ja, bei niedrigen Gerüsten",
        ],
        correctIndex: 1,
      },
      {
        id: "g8",
        question: "Sie befestigen Schutznetze am Dachfanggerüst. Welches Befestigungsmittel ist VERBOTEN?",
        options: [
          "Gurtschnellverschlüsse",
          "Kopplungsseile",
          "Kabelbinder oder Bindedraht",
          "Masche-für-Masche-Befestigung",
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "leitern",
    title: "Leitern & Aufzüge",
    pages: [
      {
        title: "Anlegeleitern (B131) – Gefährdungen & Schutzmaßnahmen",
        image: "/images/seite14-anlegeleiter.png",
        content: [
          "Gefährdungen: Mangelhafte Standsicherheit des Leiterbenutzers oder der Leiter, Fehlverhalten, fehlende Sicherung im Verkehrsbereich oder die Benutzung einer schadhaften Leiter können Absturzunfälle zur Folge haben.",
          "Im Rahmen der Gefährdungsbeurteilung ist zu ermitteln, ob der Einsatz einer Leiter erforderlich oder ein anderes Arbeitsmittel sicherer ist. Der Einsatz von Leitern ist auf Arbeiten mit geringer Gefährdung, geringem Arbeitsumfang und geringer Dauer zu beschränken.",
          "Anlegeleitern gegen Ausgleiten, Umfallen, Umkanten, Abrutschen und Einsinken sichern. Standsicherheit durch Einhängepodeste verbessern. Schadhafte Leitern nicht benutzen, keine deckenden Anstriche verwenden.",
          "Richtiger Anlegewinkel: Sprossenanlegeleitern 65–75°, Stufenanlegeleitern 60–70°. Leitern nur an sichere Stützpunkte anlehnen. Mindestens 1 m über die Austrittsstelle hinausragen lassen.",
          "Leitern nur mit geeignetem, sauberem Schuhwerk betreten. Die obersten 3 Sprossen/Stufen nicht betreten!",
        ],
        highlights: [
          "Anlegewinkel Sprossenleiter: 65–75°",
          "Oberste 3 Sprossen nicht betreten",
          "Mind. 1 m Überstand über Austrittsstelle",
        ],
      },
      {
        title: "Anlegeleitern – Mehrteilige Leitern & Arbeitsplätze",
        content: [
          "Mehrteilige Anlegeleitern: Leiter nur bis zu der vom Hersteller angegebenen Länge zusammenstecken oder ausziehen. Gegen Durchbiegen sichern.",
          "Bei Schiebeleitern auf freie Beweglichkeit der Leiterteile sowie auf ordnungsgemäßes Einrasten der Feststelleinrichtungen achten. Auf sichere Verbindung der Leiter-Steckanschlüsse achten.",
          "Kopfpolster bzw. Anlegeklotz nur an sichere Stützpunkte anlehnen.",
          "Bei Bauarbeiten und Standhöhe > 2,00 m: nicht länger als 2 Stunden arbeiten, max. 10 kg Werkzeug/Material mitführen, Windangriffsfläche mitgeführter Gegenstände max. 1,00 m².",
          "Es soll kein höherer Standplatz als 5,00 m eingenommen werden.",
        ],
        highlights: [
          "Max. Standhöhe: 5,00 m",
          "Max. Arbeitszeit bei > 2 m: 2 Stunden",
          "Max. 10 kg Werkzeug/Material",
          "Windangriffsfläche max. 1,00 m²",
        ],
      },
      {
        title: "Anlegeaufzüge (B142) – Aufstellung & Betrieb",
        images: [
          "/images/seite15-aufzug1.png",
          "/images/seite15-aufzug2.png",
        ],
        content: [
          "Gefährdungen: Fehlende Sicherungsmaßnahmen bei Montage/Demontage sowie mangelhafte Absturzsicherung an hochgelegenen Ladestellen können zu Absturzunfällen führen. Außerdem Verletzungsgefahr durch herabfallende Gegenstände.",
          "Aufstellung: Aufzug standsicher nach Betriebsanleitung aufstellen. Fahrwerk durch Herausdrehen der Spindeln entlasten und Grundrahmen horizontal ausrichten. Anlegeaufzüge ohne Fahrwerk am Aufstellplatz unverschiebbar festlegen.",
          "Zulässige Höchstlast gemäß Belastungsanzeige einhalten. Flach geneigte Aufzugsfahrbahnen gemäß Betriebsanleitung abstützen.",
          "Betrieb: Für den elektrischen Anschluss nur einen besonderen Speisepunkt verwenden. Nur geeignete Lastaufnahmemittel verwenden – für lose Lasten (z.B. Dachziegel) müssen diese umwehrt sein (Öffnungsweiten max. 5 × 5 cm).",
          "Das Befördern von Personen mit der Last oder dem Lastaufnahmemittel sowie die Benutzung der Fahrbahn als Leiter sind verboten!",
        ],
        highlights: [
          "Personenbeförderung verboten!",
          "Öffnungsweiten Lastaufnahmemittel: max. 5 × 5 cm",
        ],
      },
      {
        title: "Anlegeaufzüge – Obere & untere Ladestelle",
        image: "/images/seite15-aufzug3.png",
        content: [
          "Obere Ladestelle: Liegt die Abnahmestelle höher als 2,00 m, sind Absturzsicherungen vorzusehen.",
          "Wird die Fahrbahn bis auf das Dach geführt, darf die vorhandene Dachfangwand nur für die Durchfahrt des Lastaufnahmemittels unterbrochen sein. Wird der Aufzug nicht benutzt, ist die unterbrochene Dachfangwand zu schließen.",
          "Besser ist es, die Fahrbahn des Aufzuges über die nicht unterbrochene Dachfangwand hinwegzuführen.",
          "Untere Ladestelle: Bereich der unteren Ladestelle absperren (ausgenommen: Zugang).",
        ],
        highlights: [
          "Ab 2,00 m Höhe: Absturzsicherung erforderlich",
          "Dachfangwand bei Nichtbenutzung schließen",
          "Untere Ladestelle absperren",
        ],
      },
    ],
    quizQuestions: [
      {
        id: "l1",
        question: "Sie steigen eine Anlegeleiter hoch. Bis wohin dürfen Sie maximal steigen?",
        options: [
          "Bis ganz oben",
          "Die obersten 3 Sprossen dürfen nicht betreten werden",
          "Bis zur Mitte der Leiter",
          "Nur die ersten 5 Sprossen",
        ],
        correctIndex: 1,
      },
      {
        id: "l2",
        question: "Ein Kollege will mit dem Anlegeaufzug nach oben mitfahren. Was sagen Sie ihm?",
        options: [
          "Kein Problem, festhalten reicht",
          "Das Befördern von Personen mit dem Aufzug ist verboten!",
          "Nur bei geringer Höhe erlaubt",
          "Geht klar, wenn der Aufzug nicht voll beladen ist",
        ],
        correctIndex: 1,
      },
      {
        id: "l3",
        question: "Wie weit muss eine Anlegeleiter über die Austrittsstelle hinausragen?",
        options: [
          "0,50 m",
          "0,75 m",
          "1,00 m",
          "1,50 m",
        ],
        correctIndex: 2,
      },
      {
        id: "l4",
        question: "Sie arbeiten auf einer Leiter bei Bauarbeiten in 3 m Höhe. Wie lange dürfen Sie maximal dort arbeiten?",
        options: [
          "30 Minuten",
          "1 Stunde",
          "2 Stunden",
          "Unbegrenzt",
        ],
        correctIndex: 2,
      },
      {
        id: "l5",
        question: "Welche maximale Standhöhe soll auf einer Anlegeleiter nicht überschritten werden?",
        options: [
          "3,00 m",
          "4,00 m",
          "5,00 m",
          "7,00 m",
        ],
        correctIndex: 2,
      },
      {
        id: "l6",
        question: "Wie viel Werkzeug/Material dürfen Sie maximal auf einer Leiter bei Bauarbeiten mitführen?",
        options: [
          "5 kg",
          "10 kg",
          "15 kg",
          "20 kg",
        ],
        correctIndex: 1,
      },
      {
        id: "l7",
        question: "Die obere Ladestelle eines Anlegeaufzugs liegt auf 3 m Höhe. Was ist erforderlich?",
        options: [
          "Nichts Besonderes",
          "Absturzsicherungen, da die Höhe über 2,00 m liegt",
          "Nur ein Warnschild",
          "Ein Helm für den Bediener",
        ],
        correctIndex: 1,
      },
      {
        id: "l8",
        question: "Welcher Anlegewinkel gilt für Stufenanlegeleitern?",
        options: [
          "45–55°",
          "55–65°",
          "60–70°",
          "65–75°",
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "hubarbeitsbuehnen",
    title: "Hubarbeitsbühnen & Schuttrutschen",
    pages: [
      {
        title: "Hubarbeitsbühnen (B212) – Gefährdungen & Aufstellung",
        image: "/images/seite17-hubarbeitsbuehne.png",
        warning: "Umsturz-, Absturz- und Quetschgefahr!",
        content: [
          "Gefährdungen: Umsturz durch Einfahren in Bodenöffnungen oder Überfahren von Absätzen. Absturz durch Herausschleudern, Verlassen des Arbeitskorbes im angehobenen Zustand, Aufsteigen auf das Geländer oder Angefahrenwerden durch andere Fahrzeuge.",
          "Quetschgefahr: Einquetschen zwischen Bedienpult bzw. Geländer und Teilen der Umgebung durch Fehlbedienung.",
          "Aufstellung: Hubarbeitsbühne entsprechend der Betriebsanleitung standsicher aufstellen und betreiben. Bei Aufstellung und Betrieb auf Quetsch- und Scherstellen achten.",
        ],
        highlights: [
          "Standsicher nach Betriebsanleitung aufstellen",
          "Auf Quetsch- und Scherstellen achten",
        ],
      },
      {
        title: "Hubarbeitsbühnen – Betrieb & Beschäftigungsbeschränkungen",
        content: [
          "Hubarbeitsbühne nicht überlasten. Den Bereich unter seitlich ausgeschwenkten Arbeitsplattformen sichern, wenn sie im Verkehrsbereich niedriger als 4,50 m über Gelände abgesenkt sind.",
          "Bei Arbeiten im öffentlichen Straßenverkehr gelbe Blinkleuchten einschalten. Klappbare Schutzgeländer vor Arbeitsbeginn in Schutzstellung bringen.",
          "PSA gegen Absturz an den vom Hersteller vorgegebenen Anschlagpunkten im Arbeitskorb befestigen. Verbindungsmittel so kurz wie möglich halten, damit Personen nicht herausgeschleudert werden können.",
          "Beim Verfahren dürfen sich Beschäftigte nur auf der Arbeitsbühne aufhalten, wenn dies im Betriebshandbuch bescheinigt ist.",
          "Beschäftigungsbeschränkungen: Nur Personen einsetzen, die mindestens 18 Jahre alt und zuverlässig sind, in der Bedienung unterwiesen und vom Unternehmer beauftragt sind.",
        ],
        highlights: [
          "Sicherung unter 4,50 m im Verkehrsbereich",
          "PSA-Verbindungsmittel so kurz wie möglich",
          "Mindestalter: 18 Jahre",
          "Unterweisung + Beauftragung erforderlich",
        ],
      },
      {
        title: "Schuttrutschen (B162) – Gefährdungen & Aufbau",
        image: "/images/seite16-schuttrutsche.png",
        content: [
          "Gefährdungen: Mangelhafte Sicherungsmaßnahmen bei der Montage oder während der Benutzung am Einfülltrichter können zu Absturzunfällen oder Verletzungen durch herabfallende Teile führen. Staub kann zu Reizungen oder Erkrankungen der Atemwege, der Haut und der Augen führen.",
          "Aufbau: Beim Auf- und Abbau Aufbau- und Verwendungsanleitungen der Hersteller beachten. Nur durch unterwiesene Personen auf- und abbauen lassen.",
          "Ausschließlich die vom Hersteller vorgesehenen Aufhänge- und Befestigungskonstruktionen benutzen. Gerüstkonstruktionen im Aufhängebereich der Schuttrutsche zusätzlich verankern und verstreben.",
          "Bei Absturzhöhen von mehr als 2,00 m Absturzsicherungen vorsehen. Ab 10,00 m Aufbauhöhe zusätzliche Verankerungen anbringen. Gefahrenbereiche festlegen und absperren. Immer Einfülltrichter verwenden.",
        ],
        highlights: [
          "Ab 2,00 m: Absturzsicherung erforderlich",
          "Ab 10,00 m: zusätzliche Verankerungen",
          "Immer Einfülltrichter verwenden",
        ],
      },
      {
        title: "Schuttrutschen – Verwendung & Befestigung",
        content: [
          "Zur Vermeidung von Verstopfungen maximale Ablenkung nach Herstellerangaben beachten. Schuttrutschenaustrittsöffnung ständig auf freien Austritt kontrollieren.",
          "Zur Beseitigung von Verstopfungen nicht unterhalb der Schuttrohröffnung arbeiten oder das Schuttrohr verziehen.",
          "Flachdachbefestigung: Tragfähigkeit der Unterkonstruktion prüfen und ggf. nachweisen. Max. Auslegerüberstand einhalten.",
          "Schrägdachbefestigung: Nur an tragenden Teilen (Sparren/Schwellholz) vorsehen. Nie auf die Dachlatten aufsetzen.",
        ],
        highlights: [
          "Nie unterhalb der Öffnung arbeiten",
          "Schrägdach: nur an Sparren/Schwellholz",
          "Nie auf Dachlatten aufsetzen",
        ],
      },
    ],
    quizQuestions: [
      {
        id: "h1",
        question: "Sie sollen eine Hubarbeitsbühne bedienen. Was müssen Sie vorweisen können?",
        options: [
          "Einen Pkw-Führerschein",
          "Eine Unterweisung und schriftliche Beauftragung durch den Unternehmer",
          "Mindestens 3 Jahre Berufserfahrung",
          "Gar nichts, jeder darf das",
        ],
        correctIndex: 1,
      },
      {
        id: "h2",
        question: "Sie bauen eine Schuttrutsche auf. Ab welcher Höhe müssen Sie zusätzliche Verankerungen anbringen?",
        options: ["Ab 5 m", "Ab 8 m", "Ab 10 m", "Ab 15 m"],
        correctIndex: 2,
      },
      {
        id: "h3",
        question: "Wo befestigen Sie PSA gegen Absturz in einer Hubarbeitsbühne?",
        options: [
          "Am nächsten festen Gebäudeteil",
          "An den vom Hersteller vorgegebenen Anschlagpunkten im Arbeitskorb",
          "Am Geländer der Bühne",
          "PSA ist in der Bühne nicht nötig",
        ],
        correctIndex: 1,
      },
      {
        id: "h4",
        question: "Wie alt muss man mindestens sein, um eine Hubarbeitsbühne bedienen zu dürfen?",
        options: ["16 Jahre", "17 Jahre", "18 Jahre", "21 Jahre"],
        correctIndex: 2,
      },
      {
        id: "h5",
        question: "Unterhalb welcher Höhe muss der Bereich unter einer seitlich ausgeschwenkten Hubarbeitsbühne gesichert werden?",
        options: ["2,50 m", "3,00 m", "4,50 m", "6,00 m"],
        correctIndex: 2,
      },
      {
        id: "h6",
        question: "An welchen Bauteilen darf eine Schuttrutsche am Schrägdach befestigt werden?",
        options: [
          "An den Dachlatten",
          "An der Dachrinne",
          "Nur an tragenden Teilen wie Sparren oder Schwellholz",
          "An den Dachziegeln",
        ],
        correctIndex: 2,
      },
      {
        id: "h7",
        question: "Was muss bei einer Schuttrutsche immer verwendet werden?",
        options: [
          "Ein offenes Rohr",
          "Ein Einfülltrichter",
          "Ein Seil zum Nachziehen",
          "Ein Ventilator zur Staubreduzierung",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "maschinen",
    title: "Maschinen & Werkzeuge",
    pages: [
      {
        title: "Handkettensägen (B259) – Gefährdungen & PSA",
        images: [
          "/images/seite19-kettensaege1.png",
          "/images/seite19-kettensaege2.png",
        ],
        content: [
          "Gefährdungen: Schnittverletzungen insbesondere durch Rückschlag der Handkettensäge und Gehörschädigung. Bei kraftstoffbetriebenen Sägen Vergiftungsgefahr durch Abgase.",
          "Im Rahmen der Gefährdungsbeurteilung prüfen, ob alternative Maschinen (z.B. Handkreissäge, Pendelsäbelsäge) eingesetzt werden können. Betriebsanleitung des Herstellers beachten.",
          "PSA tragen: Schnittschutzkleidung oder Kleidung mit Schnittschutzeinlagen, Schnittschutzschuhe, Schutzhelm mit Gesichtsschutz, Gehörschutz, ggf. Handschuhe mit Schnittschutzeinlage.",
          "Vor Arbeitsbeginn Wirksamkeit der Kettenbremse prüfen. Leerlaufdrehzahl so einstellen, dass die Kette beim Starten nicht mitläuft.",
          "Nur scharfe Ketten verwenden und so spannen, dass sie rundum am Schwert anliegen. Möglichst rückschlagarme Sägeketten verwenden. Krallenanschlag verwenden.",
        ],
        highlights: [
          "Kettenbremse vor Arbeitsbeginn prüfen",
          "Rückschlagarme Sägeketten bevorzugen",
          "Vollständige Schnittschutz-PSA tragen",
        ],
      },
      {
        title: "Handkettensägen – Betrieb & Sicherheit",
        content: [
          "Stets für einen festen und sicheren Stand sorgen. Nicht über Schulterhöhe sägen. Motorsäge stets mit beiden Händen festhalten.",
          "Beim Startvorgang Motorkettensäge sicher abstützen und festhalten – die Kette darf den Boden nicht berühren. Motorsäge nur mit laufender Sägekette aus dem Holz ziehen.",
          "Nicht mit Schienenspitze sägen – Rückschlaggefahr! Bei Stechschnitten (z.B. Altbausanierung) rückschlagarme Sägeketten verwenden.",
          "Darauf achten, dass sich keine weiteren Personen im Gefahrbereich aufhalten. Kettensägen mit Verbrennungsmotoren nicht in geschlossenen Räumen, Gruben oder Gräben verwenden.",
          "Motor abstellen, bevor die Säge abgelegt wird. Bei Transport Kettenschutz aufsetzen. Bei Wartungs- und Instandsetzungsarbeiten Motor abschalten bzw. Stecker herausziehen.",
        ],
        highlights: [
          "Nie über Schulterhöhe sägen",
          "Nie mit Schienenspitze sägen",
          "Motor aus vor Ablegen der Säge",
        ],
      },
      {
        title: "Kreissägen (B265) – Schutzmaßnahmen",
        images: [
          "/images/seite20-kreissaege1.png",
          "/images/seite20-kreissaege2.png",
          "/images/seite20-kreissaege3.png",
        ],
        content: [
          "Gefährdungen: Schnittverletzungen, Verletzungen durch Rückschlag des Werkstückes und Gehörschädigung.",
          "Betriebsanleitung beachten. Gehörschutz und Sicherheitsschuhe benutzen. Enganliegende Kleidung tragen. Gefahrenbereich von 120 mm rund um das Sägeblatt beachten.",
          "Spaltkeil nach Größe und Dicke des Sägeblattes auswählen. Abstand Spaltkeil–Zahnkranz max. 8 mm. Vor Werkzeugwechsel oder Wartung Stecker ziehen.",
          "Sägeblätter nach dem Ausschalten nicht durch seitliches Gegendrücken abbremsen. Auf richtige Anbringung und Einstellung der Schutzhaube achten.",
          "Hilfseinrichtungen benutzen: Parallelanschlag, Winkelanschlag, Keilschneideeinrichtung, Schiebestock. Bei schmalen Werkstücken Schiebestock verwenden (Abstand Parallelanschlag–Sägeblatt < 120 mm).",
          "Tischeinlage auswechseln bei Spalt > 5 mm beiderseits der Schnittfuge. Standplatz seitlich vom Gefahrbereich. Splitter nie mit der Hand aus dem Bereich des laufenden Sägeblatts entfernen.",
        ],
        highlights: [
          "Spaltkeil–Zahnkranz: max. 8 mm",
          "Gefahrenbereich: 120 mm um Sägeblatt",
          "Schiebestock bei < 120 mm Abstand",
        ],
      },
      {
        title: "Kreissägen – Handmaschinen & Sägeblätter",
        content: [
          "Handkreissägen: Spaltkeil-Abstand vom Zahnkranz max. 5 mm (wenn laut Betriebsanleitung gefordert). Schnitttiefe bei Vollholz höchstens 10 mm mehr als Werkstückdicke einstellen.",
          "Handmaschine nicht mit laufendem Sägeblatt ablegen. Der gesamte Zahnkranz über der Auflage muss mit fester Verkleidung versehen sein.",
          "Kreissägeblätter: Nur Blätter verwenden, die mit Name oder Zeichen des Herstellers gekennzeichnet sind. Bei Verbundkreissägeblättern muss die höchstzulässige Drehzahl angegeben sein – nicht überschreiten.",
          "Lärmarme Sägeblätter benutzen. Beschädigte Sägeblätter (Risse, Verformungen, Brandflecken) aussortieren. Keine Sägeblätter aus hochlegiertem Schnellarbeitsstahl (HSS) verwenden.",
        ],
        highlights: [
          "Handkreissäge: Spaltkeil max. 5 mm",
          "Schnitttiefe: max. Werkstückdicke + 10 mm",
          "Keine HSS-Sägeblätter verwenden",
        ],
      },
      {
        title: "Schleifmaschinen (B273) – Schutzmaßnahmen",
        images: [
          "/images/seite24-schleif1.png",
          "/images/seite24-schleif2.png",
        ],
        content: [
          "Gefährdungen: Personen können von wegfliegenden Teilen und zerspringenden Schleifkörpern getroffen werden. Die Augen sind durch Schleiffunken besonders gefährdet.",
          "Nur gekennzeichnete Schleifmaschinen und Schleifkörper verwenden. Zulässige Arbeitshöchstgeschwindigkeit beachten. Entsprechend der Arbeit den richtigen Schleifkörper auswählen.",
          "Vor dem Aufspannen Klangprobe vornehmen. Schleifkörper ordnungsgemäß aufspannen, gleich große Spannflansche verwenden, ggf. elastische Zwischenlagen einsetzen.",
          "Probelauf durchführen – dabei seitlich außerhalb des Gefahrenbereiches aufhalten. Drehzahl der Maschine darf nicht höher sein als die zulässige Umdrehungszahl des Schleifkörpers.",
          "Schleifkörperbohrungen nicht durch Reduzierringe oder Vergießen verkleinern. Wechsel/Aufspannen nur durch unterwiesene Personen.",
          "Schleifscheiben nicht über das Verfallsdatum hinaus benutzen. Schutzhaube und Werkstückauflage regelmäßig nachstellen. Schutzbrille/Gesichtsschutz und Gehörschutz benutzen.",
        ],
        highlights: [
          "Klangprobe vor dem Aufspannen",
          "Drehzahl ≤ zulässige Umdrehungszahl",
          "Nicht über Verfallsdatum hinaus benutzen",
          "Spalt Schutzhaube–Schleifkörper: ≤ 3 mm",
        ],
      },
      {
        title: "Schleifmaschinen – Handschleifmaschinen & Trennscheiben",
        content: [
          "Handschleifmaschinen: Nur gleichgroße, zur Maschine gehörende Spannflansche verwenden und mit Spezialschlüssel aufspannen. Probelauf durchführen.",
          "Handschleifmaschinen nur mit Schutzhauben verwenden. Schleifwerkzeuge mit Verwendungseinschränkungen (VE) müssen entsprechend gekennzeichnet sein.",
          "Trennscheiben nicht zum Seitenschleifen verwenden! Bei gesundheitsgefährdenden Stäuben Atemschutz verwenden.",
        ],
        highlights: [
          "Trennscheiben: nicht zum Seitenschleifen!",
          "Handschleifmaschinen nur mit Schutzhaube",
        ],
      },
      {
        title: "Handtrennschleifmaschinen (B274) – Kennzeichnung & Schutzmaßnahmen",
        images: [
          "/images/seite25-trennschleif1.png",
          "/images/seite25-trennschleif2.png",
          "/images/seite25-trennschleif3.png",
        ],
        content: [
          "Gefährdungen: Personen können von wegfliegenden Teilen getroffen werden. Trennscheiben können durch Verkanten zerspringen und zu Verletzungen führen.",
          "Nur gekennzeichnete Schleifmaschinen und Trennscheiben verwenden. Zulässige Arbeitshöchstgeschwindigkeit entsprechend der Kennzeichnung beachten.",
          "Handtrennschleifmaschinen müssen mit Schutzhauben ausgerüstet sein. Zum Aufspannen nur gleichgroße, zur Maschine gehörende Spannflansche verwenden (Empfehlung: mind. 41 mm Durchmesser).",
          "Vor dem Aufspannen Klangprobe durchführen. Werkstücke sicher festlegen. Maschine stets beidhändig führen – nicht verkanten!",
          "Trennscheiben nicht zum Seitenschleifen verwenden. Schutzbrille und Gehörschutz benutzen, bei gesundheitsgefährdenden Stäuben Atemschutz.",
          "Drehzahl der Maschine darf nicht höher sein als die der Trennscheibe. Schleifscheiben nicht über das Verfallsdatum hinaus benutzen. Schleifwerkzeuge mit Verwendungseinschränkungen (VE) müssen gekennzeichnet sein.",
        ],
        highlights: [
          "Spannflansch-Empfehlung: mind. 41 mm ∅",
          "Nie verkanten – Zerspringungsgefahr!",
          "Trennscheiben nie zum Seitenschleifen",
          "Verfallsdatum beachten",
        ],
      },
      {
        title: "Handbetriebene Scheren & Stanzen (B267)",
        images: [
          "/images/seite21-schere1.png",
          "/images/seite21-schere2.png",
        ],
        content: [
          "Gefährdungen: Schnittverletzungen und Verletzungen durch Anstoßen an vorstehenden oder sich selbsttätig bewegenden Maschinenteilen.",
          "Maschinen sicher und leicht zugänglich aufstellen. Zulässige Schnittleistung beachten, verschlissene Messer austauschen. Geeignete Blechhebezeuge verwenden.",
          "Arbeitsplatz von Abfällen freihalten. Bei der Handhabung von Blechen schnittfeste Handschuhe tragen.",
          "Schlagscheren: Gegengewicht am Messerbalken so ausbalancieren und unverschiebbar feststellen, dass das bewegliche Obermesser nicht selbsttätig niedergehen kann. Schnittlinie auf ganzer Länge durch Schutzleiste oder Balkenniederhalter abdecken.",
          "Handhebelscheren und -stanzen: Hochgestellte Hebel in Ruhestellung und gegen unbeabsichtigtes Herabfallen sichern. Bei der Aufstellung auf Quetsch- und Scherstellen achten. Werkstück durch Niederhalter gegen Hochkanten sichern.",
        ],
        highlights: [
          "Schnittfeste Handschuhe tragen",
          "Obermesser gegen selbsttätiges Niedergehen sichern",
          "Hebel gegen Herabfallen sichern",
        ],
      },
      {
        title: "Rundmaschinen / Walzen (B270)",
        image: "/images/seite22-rundmaschine.png",
        warning: "Einzugsgefahr – Niemals Handschuhe tragen!",
        content: [
          "Gefährdungen: Kleidung und Schutzhandschuhe können von den Walzen erfasst und eingezogen werden – schwere Verletzungen insbesondere im Bereich der Hände.",
          "Verkleidung der Antriebszahnräder nicht entfernen. Bei Rundmaschinen mit ausschwenkbaren Oberwalzen darf die Verkleidung schwenkbar sein. Bei handbetriebenen Rundmaschinen muss das Zahnradpaar neben der Handkurbel abgedeckt sein.",
          "Kraftbetriebene Rundmaschinen mit Handschutzeinrichtungen (Schalter ohne Selbsthaltung, Not-Halt) ausrüsten – Betätigung ggf. über Reißleine oder Fußschalter.",
          "Kraftbetriebene Rundmaschinen mit Spannhubbegrenzung von 8 mm oder Zweihandschaltung oder Drei-Stufen-Sicherheitsschalter ausrüsten.",
          "Soweit möglich Handabweiser (Stangen, Abdeckbleche) vorsehen. Bei Aufstellung auf Quetsch- und Scherstellen achten – auch während des Biegevorganges.",
          "Niemals Handschuhe tragen! Unterarmschutz mit Schutz der Handflächen empfohlen.",
        ],
        highlights: [
          "Niemals Handschuhe tragen!",
          "Spannhubbegrenzung: 8 mm",
          "Not-Halt-Einrichtung erforderlich",
        ],
      },
      {
        title: "Abkantbänke (B272)",
        image: "/images/seite23-abkantbank.png",
        content: [
          "Gefährdungen: Hände oder Finger können eingequetscht oder abgeschert werden.",
          "Maschinen standsicher aufstellen, so dass während des Abkantvorganges keine Quetsch- und Scherstellen entstehen. Bei handbetriebenen Abkantbänken müssen Gegengewicht und dessen Bahn verkleidet sein.",
          "Bei kraftbetriebenen Abkantbänken Quetsch- und Scherstellen zwischen Maschinenständer und Biegewange mit Abweisblechen verkleiden. Sicherheitseinrichtungen: Fußschalter ohne Selbsthaltung und Not-Aus-Schalter (Drei-Stufen-Sicherheitsschalter empfohlen).",
          "Bei Zweimannbedienung an Langabkant-/Schwenkbiegemaschinen: Zustimmungsfußschalter zwingend erforderlich, sofern keine Laserstrahlen-Absicherung vorhanden. Bei Mehrpersonenbedienung für jede Person eine Abschaltmöglichkeit vorsehen.",
          "Für komplizierte Biegevorgänge Arbeitsabläufe planen. Zulässige Biegeradien beachten. Zum Verstellen der Werkstückauflagen nicht unter das Werkzeug greifen.",
          "Beschäftigungsbeschränkungen: Jugendliche über 15 Jahre dürfen nur unter Aufsicht eines Fachkundigen arbeiten (wenn Berufsausbildung es erfordert). Jugendliche unter 15 Jahren dürfen nicht an diesen Maschinen beschäftigt werden.",
        ],
        highlights: [
          "Drei-Stufen-Sicherheitsschalter empfohlen",
          "Zustimmungsfußschalter bei Zweimannbedienung",
          "Jugendliche unter 15: Verbot",
        ],
      },
      {
        title: "Schmelzöfen (B233) – Gefährdungen & Schutzmaßnahmen",
        images: [
          "/images/seite18-schmelzofen1.png",
          "/images/seite18-schmelzofen2.png",
        ],
        warning: "Brand- und Explosionsgefahr! Verbrennungsgefahr!",
        content: [
          "Gefährdungen: Es kann zu Verbrennungen kommen und es besteht Brand- und Explosionsgefahr.",
          "Geräte mit mehr als 30 l Füllmenge müssen mit einem Thermometer ausgestattet sein. Geräte mit mehr als 50 l Füllmenge zusätzlich mit Einrichtung zur Verhinderung der Temperaturüberschreitung und Flammenüberwachung.",
          "Während des Beheizens Geräte nicht unbeaufsichtigt lassen. Schmelzöfen auf nicht brennbaren Unterlagen aufstellen, Abstand zu brennbaren Materialien einhalten.",
          "Festes Schmelzgut nur langsam in heiße flüssige Masse einlassen, Stulpenhandschuhe benutzen. Behälter nur so weit füllen, dass Überlaufen beim Erhitzen vermieden wird.",
          "Flüssige heiße Massen nicht mit Wasser in Berührung bringen, Behälter auf Wasserreste überprüfen. Fluchtwege freihalten, Feuerlöscher bereithalten.",
        ],
        highlights: [
          "Ab 30 l: Thermometer erforderlich",
          "Ab 50 l: Thermometer + Flammenüberwachung",
          "Nie unbeaufsichtigt lassen",
        ],
      },
      {
        title: "Schmelzöfen – Flüssiggas-Hinweise",
        content: [
          "Versorgungsanlagen so aufstellen, dass die Schutzzone frei von Kelleröffnungen, Luft-/Lichtschächten, Bodenabläufen, Kanaleinläufen sowie Zündquellen ist.",
          "Flüssiggasflaschen senkrecht aufstellen, gegen Umfallen sichern und Absperrventil vor Beschädigungen schützen. Ventile nicht angeschlossener oder entleerter Flaschen mit Verschlussmuttern verschließen.",
          "Undichte Flüssiggasflaschen unverzüglich an gut gelüfteter Stelle abstellen und für das Füllwerk kennzeichnen.",
          "Schlauchverbindungen müssen fest eingebundene Schraubanschlüsse haben oder mit Schlauchklemmen und genormten Schlauchtüllen hergestellt sein.",
          "Bei Schmelzöfen ohne festgelegten Aufstellort: mind. 1,00 m Abstand zwischen Schmelzofen und Flüssiggasbehälter.",
          "Hinter dem Druckminderer über Erdgleiche Schlauchbruchsicherung einbauen oder Druckregler mit integrierter Dichtheitsprüfeinrichtung und Schlauchbruchsicherung (Nennwert 1,5 kg/h).",
          "Prüffristen: Aufstellung und Dichtheit täglich durch Fachkundigen (Benutzer). Gesamte Anlage mind. alle 2 Jahre durch befähigte Person (§ 2 BetrSichVO).",
        ],
        highlights: [
          "Abstand Schmelzofen–Gasflasche: mind. 1,00 m",
          "Tägliche Dichtheitsprüfung",
          "Gesamtprüfung alle 2 Jahre",
        ],
      },
    ],
    quizQuestions: [
      {
        id: "m1",
        question: "Sie wollen einen neuen Schleifkörper aufspannen. Was tun Sie vor dem Einbau?",
        options: [
          "Einfach aufspannen und loslegen",
          "Eine Klangprobe durchführen, um Risse zu erkennen",
          "Den Schleifkörper wiegen",
          "Die Temperatur des Schleifkörpers messen",
        ],
        correctIndex: 1,
      },
      {
        id: "m2",
        question: "Sie arbeiten an einer Kreissäge und das Werkstück ist sehr schmal. Was verwenden Sie?",
        options: [
          "Beide Hände zum Führen",
          "Einen Schiebestock, da der Abstand zum Sägeblatt < 120 mm ist",
          "Handschuhe für besseren Griff",
          "Einen Keil zum Klemmen",
        ],
        correctIndex: 1,
      },
      {
        id: "m3",
        question: "Wie groß darf der Abstand zwischen Spaltkeil und Zahnkranz bei einer Tischkreissäge maximal sein?",
        options: ["3 mm", "5 mm", "8 mm", "12 mm"],
        correctIndex: 2,
      },
      {
        id: "m4",
        question: "Sie arbeiten mit einer Handkettensäge. Was prüfen Sie vor Arbeitsbeginn?",
        options: [
          "Nur den Tankinhalt",
          "Die Wirksamkeit der Kettenbremse",
          "Ob die Kette rostig ist",
          "Die Farbe der Motorsäge",
        ],
        correctIndex: 1,
      },
      {
        id: "m5",
        question: "Bei einer Rundmaschine/Walze steht ein Warnhinweis. Was dürfen Sie auf keinen Fall tragen?",
        options: [
          "Sicherheitsschuhe",
          "Schutzbrille",
          "Handschuhe – Einzugsgefahr!",
          "Gehörschutz",
        ],
        correctIndex: 2,
      },
      {
        id: "m6",
        question: "Sie möchten eine Trennscheibe verwenden. Wofür darf sie NICHT eingesetzt werden?",
        options: [
          "Zum Trennen von Metall",
          "Zum Seitenschleifen",
          "Zum Trennen von Stein",
          "Zum Ablängen von Rohren",
        ],
        correctIndex: 1,
      },
      {
        id: "m7",
        question: "Ab welchem Füllvolumen muss ein Schmelzofen ein Thermometer haben?",
        options: ["10 l", "20 l", "30 l", "50 l"],
        correctIndex: 2,
      },
      {
        id: "m8",
        question: "Sie legen die Motorsäge kurz ab. Was müssen Sie vorher tun?",
        options: [
          "Kette weiterlaufen lassen",
          "Motor abstellen",
          "Nur die Kettenbremse betätigen",
          "Die Säge auf die Seite legen",
        ],
        correctIndex: 1,
      },
      {
        id: "m9",
        question: "Was dürfen Sie an einer Kreissäge NICHT tun, um das Sägeblatt zu stoppen?",
        options: [
          "Ausschalter betätigen",
          "Warten bis es ausläuft",
          "Das Blatt durch seitliches Gegendrücken abbremsen",
          "Netzstecker ziehen",
        ],
        correctIndex: 2,
      },
      {
        id: "m10",
        question: "Ein Jugendlicher (16 Jahre) möchte an der Abkantbank arbeiten. Was ist zu beachten?",
        options: [
          "Unter 15 Jahre verboten, ab 15 nur unter Aufsicht eines Fachkundigen",
          "Ab 16 darf er alleine arbeiten",
          "Jugendliche dürfen generell nicht an Maschinen",
          "Keine Beschränkungen",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    id: "gefahrstoffe",
    title: "Gefahrstoffe (Asbest, Mineralwolle)",
    pages: [
      {
        title: "Asbestzementprodukte (C311) – Gefährdungen & Organisation",
        images: [
          "/images/seite26-asbest1.png",
          "/images/seite26-asbest2.png",
        ],
        warning: "Krebsgefahr durch Asbestfasern!",
        content: [
          "Asbestfasern können bis in die Alveolen der Lunge eingeatmet werden und eine Asbestose, Lungenkrebs o.ä. auslösen.",
          "Von stark gebundenen Asbestzementprodukten gehen im eingebauten Zustand in der Regel keine Gefahren aus. Werden sie jedoch angebohrt, zerschlagen oder unsachgemäß gereinigt, können erhebliche Fasermengen freigesetzt werden.",
          "Die Bearbeitung mit oberflächenabtragenden Geräten (Abschleifen, Hoch-/Niederdruckreinigen, Abbürsten) ist unzulässig!",
          "Tätigkeiten sind der Aufsichtsbehörde und der Berufsgenossenschaft schriftlich anzuzeigen. Gefährdungsbeurteilung mit Arbeitsplan aufstellen und vorlegen.",
          "Arbeiten unter Leitung eines sachkundigen Aufsichtführenden ausführen – dieser muss ständig anwesend sein. Jugendliche dürfen auch für Ausbildungszwecke nicht in Bereichen mit Asbestgefährdung beschäftigt werden.",
          "Arbeitsbereiche abgrenzen und mit Warnschildern kennzeichnen. Arbeiten mit anderen Gewerken koordinieren.",
        ],
        highlights: [
          "Bearbeitung mit abtragenden Geräten unzulässig!",
          "Sachkundiger Aufsichtführender ständig anwesend",
          "Jugendliche: Beschäftigungsverbot",
        ],
      },
      {
        title: "Asbestzementprodukte – Technische Schutzmaßnahmen",
        content: [
          "Beschichtete AZ-Wandbekleidungen mit drucklosem Wasserstrahl und weicharbeitenden Geräten (z.B. Schwamm) reinigen. Befestigungen sorgfältig lösen.",
          "Bauteile möglichst zerstörungsfrei ausbauen, nicht aus Überdeckungen oder über Kanten ziehen. Befestigungsmittel, Bruchteile, Dichtungsschnüre in gekennzeichneten Behältern sammeln.",
          "Keine Schuttrutschen verwenden. Material nicht werfen, sondern von Hand oder mit Hebezeug transportieren. Bei Außenwandbekleidungen Planen/Folien zum Auffangen auslegen.",
          "Nur zugelassene Industriestaubsauger der Staubklasse H mit Zusatzanforderung 'Asbest' verwenden. Ausgebaute Produkte nicht wieder verwenden, Abfälle nicht zerkleinern.",
        ],
      },
      {
        title: "Asbestzementprodukte – PSA & Dacharbeiten",
        content: [
          "Schutzanzug (mind. EG-Kat. III, Typ 5) und Atemschutz mit mind. Partikelfilter P2 tragen.",
          "Schutzkleidung bei Arbeitsunterbrechungen absaugen. Schutzkleidung und Atemschutz im Freien ablegen. Chemikalienschutzanzüge nach Schichtende in gekennzeichneten Behältern sammeln.",
          "Straßenkleidung getrennt von Arbeitskleidung aufbewahren. Bei Unterbrechungen Hände reinigen, nach Arbeitsende gründlich duschen. In Arbeitsbereichen nicht essen, trinken oder rauchen.",
          "Arbeiten auf Dächern: Bei Wellplattendächern lastverteilende Beläge oder Laufstege benutzen. Bei Absturzgefahr Absturzsicherungen vorsehen. Nach Dacharbeiten Dachrinnen reinigen und spülen.",
        ],
        highlights: [
          "Schutzanzug Kat. III Typ 5 + P2-Filter",
          "Staubsauger Klasse H 'Asbest'",
          "Auf Dächern: lastverteilende Beläge nutzen",
        ],
      },
      {
        title: "Mineralwolle-Dämmstoffe (C319) – Gefährdungen & Organisation",
        content: [
          "Seit 1996 werden Mineralwolle-Dämmstoffe hergestellt, die nicht als krebserzeugend gelten. Auch beim Umgang mit neuen Produkten kann es durch gröbere Fasern zu Haut-, Augen- oder Atemwegsreizungen kommen.",
          "Seit dem 01.06.2000 dürfen in Deutschland nur noch KMF-Dämmstoffe produziert und verarbeitet werden, die nach der Gefahrstoffverordnung als unbedenklich gelten.",
          "Vorkonfektionierte oder kaschierte Mineralwolle-Dämmstoffe bevorzugen. Verpackte Dämmstoffe erst am Arbeitsplatz auspacken. Material nicht werfen.",
          "Für gute Durchlüftung am Arbeitsplatz sorgen. Aufwirbeln von Staub vermeiden. Auf fester Unterlage mit Messer und Schere schneiden.",
          "Keine schnell laufenden, motorbetriebenen Sägen ohne Absaugung verwenden. Staubsaugen statt kehren. Verschnitte und Abfälle in Plastiksäcken sammeln.",
          "Eingebaute Dämmstoffe möglichst zerstörungsfrei ausbauen.",
        ],
        highlights: [
          "Nur unbedenkliche KMF-Dämmstoffe (seit 2000)",
          "Staubsaugen statt kehren",
          "Keine Motorsägen ohne Absaugung",
        ],
      },
      {
        title: "Mineralwolle-Dämmstoffe – Persönliche Schutzmaßnahmen",
        content: [
          "Locker sitzende, geschlossene Arbeitskleidung und ggf. Handschuhe tragen.",
          "Bei starker Staubentwicklung oder Überkopfarbeiten Schutzbrille benutzen.",
          "Zum Schutz vor Atemwegsreizungen vorsorglich Halbmaske mit P1-Filter oder partikelfiltrierende Halbmaske FFP1 tragen.",
          "Bei empfindlicher Haut Schutzcreme oder Schutzlotion verwenden. Nach Beendigung der Arbeiten Staub abwaschen.",
        ],
        highlights: [
          "Atemschutz: mind. FFP1 / P1-Filter",
          "Schutzbrille bei Überkopfarbeiten",
          "Staub nach Arbeit abwaschen",
        ],
      },
      {
        title: "Alte Mineralwolle-Dämmstoffe (C320) – Gefährdungen & Allgemeines",
        content: [
          "Bei Demontage-, Abbruch-, Instandhaltungs- und Instandsetzungsarbeiten besteht grundsätzlich ein Krebsverdacht, wenn die Mineralwolle-Produkte vor dem Jahr 2000 eingebaut wurden.",
          "Seit dem 01.06.2000 dürfen 'alte' Mineralwolle-Dämmstoffe nicht mehr verwendet werden. Der Umgang ist nur noch bei Demontage-, Abbruch-, Instandhaltungs- und Instandsetzungsarbeiten zulässig.",
          "Im Rahmen der Gefährdungsbeurteilung ermitteln, ob es sich bei der Mineralwolle um 'alte', krebsverdächtige Produkte handelt.",
          "Tätigkeiten mit alten Dämmstoffen in das Gefahrstoffverzeichnis aufnehmen (einmalig unternehmensbezogen).",
          "Die TRGS 521 liefert eine Auflistung von Tätigkeiten mit den entsprechenden Expositionskategorien. Die erforderlichen Schutzmaßnahmen sind gestaffelt und orientieren sich an der Höhe der Faserstaubbelastung sowie der Dauer und Häufigkeit der Arbeiten.",
        ],
        warning: "Grundsätzlicher Krebsverdacht bei Mineralwolle-Produkten vor dem Jahr 2000!",
        highlights: [
          "Verwendungsverbot seit 01.06.2000",
          "Gefährdungsbeurteilung zwingend erforderlich",
          "Schutzmaßnahmen nach TRGS 521 / Expositionskategorie",
        ],
      },
      {
        title: "Alte Mineralwolle – Schutzmaßnahmen (Expositionskategorie E3)",
        content: [
          "Expositionskategorie E3 gilt für alle Tätigkeiten mit hoher bis sehr hoher Staubexposition, z. B. umfangreichere Sanierungsmaßnahmen mit Demontage des Dämmstoffes oder Demontage thermisch belasteter Anlagen in engen, schlecht belüfteten Räumen.",
          "Material nicht reißen. Motorgetriebene Sägen nur mit Absaugung beim Ausbau verwenden. Ausgebautes Material nicht werfen.",
          "Für gute Durchlüftung am Arbeitsplatz sorgen. Aufwirbeln von Staub vermeiden.",
          "Arbeitsplatz sauber halten und regelmäßig mit Staubsauger reinigen. Stäube mit Industriestaubsauger (mindestens Kategorie M) aufnehmen bzw. feucht reinigen – nicht mit Druckluft abblasen oder trocken kehren.",
          "Während der Arbeit Funktion und Absaugleistung des Entstaubers kontrollieren.",
          "Abfälle am Entstehungsort möglichst staubdicht verpacken und kennzeichnen. Für den Transport geschlossene Behältnisse (z. B. Tonnen, reißfeste Säcke, Big-Bags) verwenden.",
        ],
        highlights: [
          "Industriestaubsauger mind. Kategorie M",
          "Material nicht reißen oder werfen",
          "Abfälle staubdicht verpacken & kennzeichnen",
        ],
      },
    ],
    quizQuestions: [
      {
        id: "gf1",
        question: "Sie sollen alte Asbestzementplatten demontieren. Welchen Atemschutz legen Sie mindestens an?",
        options: [
          "FFP1-Maske reicht",
          "Mindestens Partikelfilter P2 und Schutzanzug Typ 5",
          "Einfacher Mundschutz",
          "Gar keinen, bei kurzen Arbeiten nicht nötig",
        ],
        correctIndex: 1,
      },
      {
        id: "gf2",
        question: "Sie finden bei einer Sanierung Mineralwolle-Dämmung. Woran erkennen Sie, ob es sich um 'alte' (krebsverdächtige) Produkte handelt?",
        options: [
          "An der Farbe der Mineralwolle",
          "Prüfen, ob der Einbau vor dem Jahr 2000 erfolgte – dann gilt Krebsverdacht",
          "Alte Produkte riechen anders",
          "Krebsverdacht besteht nie bei Mineralwolle",
        ],
        correctIndex: 1,
      },
      {
        id: "gf3",
        question: "Wie reinigen Sie den Arbeitsplatz nach dem Umgang mit alten Mineralwolle-Dämmstoffen?",
        options: [
          "Mit Druckluft abblasen",
          "Trocken kehren",
          "Mit Industriestaubsauger mindestens Kategorie M oder feucht reinigen",
          "Gar nicht, das verflüchtigt sich von selbst",
        ],
        correctIndex: 2,
      },
      {
        id: "gf4",
        question: "Was darf man mit Asbestzementplatten bei der Demontage auf keinen Fall tun?",
        options: [
          "Vorsichtig lösen",
          "Zerbrechen, bohren oder mit Hochdruckreiniger bearbeiten",
          "Mit dem Kran herunterheben",
          "In Big-Bags verpacken",
        ],
        correctIndex: 1,
      },
      {
        id: "gf5",
        question: "Wie verpacken Sie Abfälle aus alten Mineralwolle-Dämmstoffen?",
        options: [
          "In offenen Containern",
          "In normalen Müllsäcken",
          "Möglichst staubdicht am Entstehungsort verpacken und kennzeichnen",
          "Lose auf die Ladefläche",
        ],
        correctIndex: 2,
      },
      {
        id: "gf6",
        question: "Seit wann dürfen 'alte' Mineralwolle-Dämmstoffe nicht mehr verwendet werden?",
        options: [
          "Seit 1990",
          "Seit 1995",
          "Seit dem 01.06.2000",
          "Seit 2010",
        ],
        correctIndex: 2,
      },
      {
        id: "gf7",
        question: "Was ist bei der Demontage von Asbestzementplatten hinsichtlich der Befestigungsmittel zu beachten?",
        options: [
          "Nägel mit dem Hammer herausschlagen",
          "Schrauben einzeln herausdrehen, nicht brechen oder hebeln",
          "Alles mit dem Brecheisen lösen",
          "Platten einfach abreißen",
        ],
        correctIndex: 1,
      },
      {
        id: "gf8",
        question: "Welche Staubsauger-Kategorie ist für Arbeiten mit alten Mineralwolle-Dämmstoffen mindestens erforderlich?",
        options: [
          "Kategorie L",
          "Kategorie M",
          "Kategorie H",
          "Normaler Haushaltsstaubsauger",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "dacharbeiten",
    title: "Dacharbeiten & Lichtkuppeln",
    pages: [
      {
        title: "Dachdeckung mit Wellplatten (C343) – Gefährdungen & Transport",
        image: "/images/seite27-wellplatten.png",
        warning: "Nicht durchtrittsichere Wellplatten können beim Begehen durchbrechen!",
        content: [
          "Fehlende Sicherungsmaßnahmen an den Gebäudeaußenkanten und nach innen können Absturzunfälle zur Folge haben. Nicht durchtrittsichere Wellplatten können beim Begehen durchbrechen.",
          "Die Demontage von asbesthaltigen Platten ohne persönliche Schutzmaßnahmen kann in der Folge zu Erkrankungen führen.",
          "Beim Transport mit Aufzügen oder Hebezeugen geeignete Lastaufnahmemittel (z. B. Spezialschlitten oder Plattenzangen) benutzen.",
          "Bei der Lagerung der Platten auf dem Dach die Tragfähigkeit der Unterkonstruktion beachten. Platten bzw. Stapel gegen Windangriff sichern (z. B. durch Spannbänder).",
          "Gefahrenbereich unter den Verlegestellen absperren und kennzeichnen. Dachüberstände (auskragende Platten) nicht belasten.",
        ],
        highlights: [
          "Geeignete Lastaufnahmemittel beim Transport",
          "Platten gegen Wind sichern",
          "Gefahrenbereich absperren & kennzeichnen",
        ],
      },
      {
        title: "Dachdeckung mit Wellplatten – Laufstege",
        content: [
          "Wellplattendächer nur auf besonderen Lauf- und Arbeitsstegen betreten.",
          "Lauf- und Arbeitsstege müssen eine Mindestbreite von 50 cm haben und gegen Verschieben und Abrutschen gesichert werden.",
          "Lauf- und Arbeitsstege aus Holz müssen mindestens der Sortierklasse S10 oder MS10 entsprechen.",
          "Bei Dachneigungen über 11° (1:5): Stege mit Trittleisten. Bei Neigungen über 30° (1:1,75): mit Stufen versehen.",
          "Zu Anlagen und Einrichtungen auf dem Dach, die ständiger Wartung bedürfen, mindestens 50 cm breite Laufstege mit beidseitigem Seitenschutz vorsehen.",
        ],
        highlights: [
          "Mindestbreite Laufstege: 50 cm",
          "Ab 11° Trittleisten, ab 30° Stufen",
          "Holz mind. Sortierklasse S10 / MS10",
        ],
      },
      {
        title: "Lichtkuppeln (C346) – Gefährdungen & Allgemeines",
        images: ["/images/seite29-lichtkuppel1.png", "/images/seite29-lichtkuppel2.png", "/images/seite29-lichtkuppel3.png"],
        warning: "Durchsturzgefahr bei nicht gesicherten Lichtkuppeln!",
        content: [
          "Nicht gesicherte Öffnungen oder nicht durchsturzsichere Lichtkuppeln können zu Absturzunfällen führen.",
          "An Öffnungen in Decken und Dachflächen müssen Einrichtungen vorhanden sein, die ein Abstürzen, Hineinfallen oder Hineintreten von Beschäftigten verhindern.",
          "Als Öffnungen gelten: Öffnungen/Aussparungen mit einer Fläche von ≤ 9 m² oder geradlinig begrenzte Öffnungen, bei denen eine Kante ≤ 3 m lang ist.",
          "Kanten größerer Öffnungen gelten als Absturzkanten und müssen durch Absturzsicherungen gesichert werden.",
        ],
        highlights: [
          "Öffnungen: ≤ 9 m² Fläche oder Kante ≤ 3 m",
          "Größere Kanten = Absturzkanten",
        ],
      },
      {
        title: "Lichtkuppeln – Schutzmaßnahmen",
        content: [
          "Ein Abstürzen, Hineinfallen oder Hineintreten verhindern durch: dreiteiligen Seitenschutz oder unverschiebliche und tragfähige Abdeckung der Öffnung.",
          "Abdeckungen mit Brettern und Bohlen müssen mindestens der Sortierklasse S10 oder MS10 nach DIN 4074-1 entsprechen.",
          "Absperrungen z. B. durch Geländer, Ketten oder Seile erstellen. Trassierbänder (Flatterleinen) NICHT als Absperrmittel verwenden!",
          "Eingebaute Lichtkuppeln und Lichtbänder gelten im Allgemeinen als NICHT durchsturzsicher und sind z. B. durch folgende Maßnahmen zu sichern: Seitenschutz, Schutzabdeckungen, Schutznetze, Absperrungen, durchsturzsichere Unterbauten (DIN 4426) oder Verwendung von PSAgA.",
          "Als durchsturzsicher gelten Bauteile nur, wenn die Tragfähigkeit nachgewiesen worden ist.",
        ],
        highlights: [
          "Seitenschutz oder tragfähige Abdeckung (S10)",
          "Flatterleinen KEINE Absperrmittel!",
          "Lichtkuppeln = grundsätzlich NICHT durchsturzsicher",
        ],
      },
      {
        title: "Dacharbeiten (C344) – Dachlatten: Qualität & Bestellung",
        image: "/images/seite28-dachlatten1.png",
        warning: "Bei falscher Dimensionierung oder unzureichender Qualität können Dachlatten beim Begehen brechen – Absturzgefahr!",
        content: [
          "Werden gelattete Dachflächen als Arbeitsplätze verwendet, müssen die Dachlatten den Qualitäts- bzw. Festigkeitskriterien entsprechen (mind. S10).",
          "Für Arbeiten auf Flächen mit mehr als 45° Neigung besondere Arbeitsplätze schaffen. Besondere Arbeitsplätze können hierbei auch gelattete Dachflächen sein.",
          "Bei der Bestellung von Dachlatten die genaue Bezeichnung beachten, z. B.: Dachlatte, DIN 4074-1, S10 – Fi/Ta, 40 × 60 oder Dachlatte, DIN EN 338, Festigkeitsklasse C24M Fi/Ta, 40 × 60.",
          "Dachlatten entsprechend der Qualitäts- bzw. Festigkeitskriterien sind an den Stirnseiten rot eingefärbt.",
        ],
        highlights: [
          "Mindestens Sortierklasse S10",
          "Stirnseiten rot eingefärbt",
          "Ab 45° Neigung besondere Arbeitsplätze",
        ],
      },
      {
        title: "Dachlatten – Einbau & Prüfung",
        images: ["/images/seite28-dachlatten4.png"],
        content: [
          "Bei der Befestigung der Dachlatten auf den Sparren Mindestnagelabstände einhalten. Dachlatten, die beim Einbau beschädigt wurden (z. B. Aufreißen der Stirnseiten), ausbauen.",
          "Dachlatten können ohne rechnerischen Nachweis eingebaut werden: S10 max. 80 cm Stützweite (30 × 50 mm) bzw. 100 cm (40 × 60 mm).",
          "Bei Verwendung von Nägeln ergibt sich eine Mindestsparrenbreite von 70 mm. Wird sie unterschritten, kann durch entsprechend breite Konterlatten die erforderliche Breite erreicht werden.",
          "Werden Sparrenabstände über 1 Meter geplant, müssen Dachlatten für Querschnitt und Verbindungsmittel rechnerisch nachgewiesen werden.",
          "Vor dem Einbau Dachlatten auf Farbkennzeichnung prüfen. Bei visuell sortierten Dachlatten grobe Holzfehler (Äste, Holzrisse, Baumkanten) aussortieren oder ausschneiden.",
        ],
        highlights: [
          "S10: max. 80 cm Stützweite (30×50)",
          "Mindestsparrenbreite 70 mm bei Nägeln",
          "Beschädigte Latten sofort ausbauen",
        ],
      },
      {
        title: "Dacharbeiten – Arbeitsplätze & Tabellen",
        images: ["/images/seite28-dachlatten2.png", "/images/seite28-dachlatten3.png"],
        content: [
          "Für Dacharbeiten müssen Arbeitsplätze so eingerichtet sein, dass sie entsprechend der Art der baulichen Anlage, den wechselnden Bauzuständen, den Witterungsverhältnissen und den auszuführenden Arbeiten ein sicheres Arbeiten gewährleisten.",
          "Besondere Beachtung: nicht begehbare Bauteile (Lichtkuppeln, Lichtbänder, Glasdächer, Faserzement-Wellplatten), Schächte, elektrische Anlagen (Freileitungen, Sendeanlagen), Dachüberstände, Dachgauben und Attikahöhe.",
          "Die Tabelle zeigt die erforderlichen Arbeitsplatzarten je nach Tätigkeit und Dachneigung (≤22,5° / >22,5°–45° / >45°–60° / >60°).",
        ],
        highlights: [
          "Arbeitsplatz abhängig von Neigung & Tätigkeit",
          "Witterung und Bauzustand berücksichtigen",
          "Nicht begehbare Bauteile besonders sichern",
        ],
      },
      {
        title: "Dacharbeiten – Absturzsicherung & PSA",
        content: [
          "Arbeitsplätze und Verkehrswege so einrichten, dass die Gefährdung durch Absturz so weit als möglich vermieden wird.",
          "Rangfolge der Schutzmaßnahmen: Seitenschutz → Auffangeinrichtungen → PSA gegen Absturz.",
          "Arbeitsplätze und Verkehrswege auf Flächen mit ≤22,5° Neigung durch Seitenschutz gegen Absturz sichern.",
          "Grundsätzlich darf PSA gegen Absturz bei Dacharbeiten nicht verwendet werden. In Ausnahmefällen nur bei geeigneten Anschlageinrichtungen und kurzzeitigen Dacharbeiten.",
          "Maßnahmen zur Rettung festlegen. Der Vorgesetzte hat geeignete Anschlageinrichtungen festzulegen und dafür zu sorgen, dass die PSA verwendet wird.",
          "Beschäftigte mit praktischen Übungen in die Verwendung von PSA gegen Absturz unterweisen.",
        ],
        warning: "PSA gegen Absturz bei Dacharbeiten grundsätzlich nicht zulässig – nur in begründeten Ausnahmefällen!",
        highlights: [
          "Rangfolge: Seitenschutz → Auffang → PSAgA",
          "PSAgA nur in Ausnahmefällen",
          "Praktische Unterweisung Pflicht",
        ],
      },
      {
        title: "Checkliste – Arbeiten auf Dächern",
        content: [
          "Was ist vor jedem Arbeitsbeginn zu prüfen?",
          "1. Schaffen Sie sichere Zugänge zum Dach (z. B. Leiter, Treppenturm, Dachaustritt).",
          "2. Sorgen Sie für sichere Verkehrswege auf dem Dach (z. B. Laufbohlen).",
          "3. Überprüfen Sie die Absturzsicherungen nach außen und innen (z. B. Gerüste, Schutznetze).",
          "4. Stellen Sie sicher, dass es Transportmöglichkeiten für Lasten gibt (z. B. Schrägaufzug).",
          "5. Überprüfen Sie, ob PSA gegen Absturz erforderlich ist. Wenn ja, müssen die Anschlagpunkte vorhanden und gekennzeichnet sein.",
          "6. Stellen Sie sicher, dass die erforderliche Persönliche Schutzausrüstung getragen wird.",
          "7. Stellen Sie wirksame Erste-Hilfe-Maßnahmen auch für den Fall auf, dass ein ins Seil gefallener Mitarbeiter gerettet werden muss.",
        ],
        highlights: [
          "Sichere Zugänge & Verkehrswege",
          "Absturzsicherungen prüfen",
          "PSA & Anschlagpunkte kontrollieren",
          "Erste-Hilfe-Maßnahmen festlegen",
        ],
      },
    ],
    quizQuestions: [
      {
        id: "da1",
        question: "Sie bekommen Dachlatten geliefert. Woran erkennen Sie, dass sie der Sortierklasse S10 entsprechen?",
        options: [
          "An einer blauen Markierung",
          "An der Größe",
          "An der roten Farbkennzeichnung an den Stirnseiten",
          "An einem Aufkleber auf der Verpackung",
        ],
        correctIndex: 2,
      },
      {
        id: "da2",
        question: "Sie arbeiten auf einem Flachdach mit Lichtkuppeln. Dürfen Sie sich auf die Lichtkuppel stellen?",
        options: [
          "Ja, die halten das aus",
          "Nur bei neueren Modellen",
          "Nein – Lichtkuppeln gelten grundsätzlich als NICHT durchsturzsicher und müssen gesichert werden",
          "Ja, wenn man sich am Rand festhält",
        ],
        correctIndex: 2,
      },
      {
        id: "da3",
        question: "Wellplattendächer dürfen nur auf welchen Hilfsmitteln betreten werden?",
        options: [
          "Direkt auf den Platten gehen",
          "Auf besonderen Lauf- und Arbeitsstegen",
          "Auf Dachziegeln",
          "Barfuß für besseres Gleichgewicht",
        ],
        correctIndex: 1,
      },
      {
        id: "da4",
        question: "Welche Mindest-Sortierklasse müssen Holz-Laufstege auf Wellplattendächern haben?",
        options: [
          "S5",
          "S7",
          "S10 oder MS10",
          "Beliebig",
        ],
        correctIndex: 2,
      },
      {
        id: "da5",
        question: "Ab welcher Dachneigung ist PSA gegen Absturz bei Dacharbeiten grundsätzlich nicht mehr zulässig?",
        options: [
          "PSA ist grundsätzlich bei Dacharbeiten nicht zulässig – nur in Ausnahmefällen",
          "Ab 45°",
          "Ab 60°",
          "PSA ist immer erlaubt",
        ],
        correctIndex: 0,
      },
      {
        id: "da6",
        question: "Wie sichern Sie Wellplatten-Stapel auf dem Dach gegen Windangriff?",
        options: [
          "Mit schweren Steinen beschweren",
          "Mit Spannbändern sichern",
          "Gar nicht, die sind schwer genug",
          "Mit Klebeband fixieren",
        ],
        correctIndex: 1,
      },
      {
        id: "da7",
        question: "Welche maximale Stützweite gilt für Dachlatten der Sortierklasse S10 mit 40×60 mm Querschnitt?",
        options: [
          "60 cm",
          "80 cm",
          "100 cm",
          "120 cm",
        ],
        correctIndex: 2,
      },
      {
        id: "da8",
        question: "Woran erkennen Sie, dass eine Lichtkuppel als durchsturzsicher gilt?",
        options: [
          "An der Farbe des Kunststoffs",
          "Wenn sie neu aussieht",
          "Nur wenn die Tragfähigkeit nachgewiesen ist",
          "Alle modernen Lichtkuppeln sind durchsturzsicher",
        ],
        correctIndex: 2,
      },
      {
        id: "da9",
        question: "Ab welcher Dachneigung müssen für Arbeiten besondere Arbeitsplätze geschaffen werden?",
        options: [
          "Ab 22,5°",
          "Ab 30°",
          "Ab 45°",
          "Ab 60°",
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "checkliste",
    title: "Checkliste vor Arbeitsbeginn",
    pages: [
      {
        title: "Was ist vor jedem Arbeitsbeginn zu prüfen?",
        content: [
          "1. Schaffen Sie sichere Zugänge zum Dach (z.B. Leiter, Treppenturm, Dachaustritt).",
          "2. Sorgen Sie für sichere Verkehrswege auf dem Dach (z.B. Laufbohlen).",
          "3. Überprüfen Sie die Absturzsicherungen nach außen und innen (z.B. Gerüste, Schutznetze).",
          "4. Stellen Sie sicher, dass Transportmöglichkeiten für Lasten vorhanden sind (z.B. Schrägaufzug).",
          "5. Überprüfen Sie, ob PSA gegen Absturz erforderlich ist. Anschlagpunkte müssen vorhanden und gekennzeichnet sein.",
          "6. Stellen Sie sicher, dass die erforderliche Persönliche Schutzausrüstung getragen wird.",
          "7. Stellen Sie wirksame Erste-Hilfe-Maßnahmen auf – auch für die Rettung eines ins Seil gefallenen Mitarbeiters.",
        ],
        highlights: [
          "Sichere Zugänge",
          "Sichere Verkehrswege",
          "Absturzsicherungen",
          "Transportmöglichkeiten",
          "PSA prüfen",
          "Erste-Hilfe-Maßnahmen",
        ],
      },
    ],
    quizQuestions: [
      {
        id: "c1",
        question: "Sie kommen morgens auf die Baustelle und sollen aufs Dach. Was prüfen Sie als Erstes?",
        options: [
          "Ob das Wetter schön ist",
          "Ob sichere Zugänge, Verkehrswege, Absturzsicherungen, Transportmöglichkeiten, PSA und Erste-Hilfe-Maßnahmen vorhanden sind",
          "Ob genug Kollegen da sind",
          "Ob das Material schon oben liegt",
        ],
        correctIndex: 1,
      },
      {
        id: "c2",
        question: "Ein Kollege ist ins Seil gestürzt und hängt in der PSA. Was muss vorbereitet sein?",
        options: [
          "Nichts – einfach die Feuerwehr rufen",
          "Wirksame Erste-Hilfe- und Rettungsmaßnahmen müssen VOR Arbeitsbeginn festgelegt sein",
          "Er kann sich selbst befreien",
          "Das kommt in der Praxis nie vor",
        ],
        correctIndex: 1,
      },
      {
        id: "c3",
        question: "Wie überprüfen Sie, ob PSA gegen Absturz auf der Baustelle erforderlich ist?",
        options: [
          "Das entscheide ich nach Gefühl",
          "Prüfen, ob Anschlagpunkte vorhanden und gekennzeichnet sind",
          "PSA ist nie erforderlich auf dem Dach",
          "Nur wenn der Chef es sagt",
        ],
        correctIndex: 1,
      },
      {
        id: "c4",
        question: "Was gehört zu den sicheren Zugängen zum Dach?",
        options: [
          "Über die Regenrinne klettern",
          "Leiter, Treppenturm oder Dachaustritt",
          "Über das Gerüst klettern ohne Zugangsöffnung",
          "Durchs Dachfenster einsteigen",
        ],
        correctIndex: 1,
      },
      {
        id: "c5",
        question: "Sie stellen fest, dass keine Transportmöglichkeit für Material aufs Dach vorhanden ist. Was tun Sie?",
        options: [
          "Material einzeln hochwerfen",
          "Alles selbst hochtragen",
          "Für eine geeignete Transportmöglichkeit sorgen, z. B. Schrägaufzug",
          "Ohne Material anfangen zu arbeiten",
        ],
        correctIndex: 2,
      },
      {
        id: "c6",
        question: "Welche der folgenden Punkte gehört NICHT zur Checkliste vor Arbeitsbeginn auf dem Dach?",
        options: [
          "Absturzsicherungen prüfen",
          "Sichere Zugänge schaffen",
          "Die Farbe der Dachziegel kontrollieren",
          "Erste-Hilfe-Maßnahmen festlegen",
        ],
        correctIndex: 2,
      },
      {
        id: "c7",
        question: "Warum müssen Rettungsmaßnahmen VOR Arbeitsbeginn festgelegt werden?",
        options: [
          "Weil es Vorschrift ist, aber nicht wirklich wichtig",
          "Damit im Notfall sofort gehandelt werden kann – z. B. Rettung eines im Seil hängenden Mitarbeiters",
          "Das ist nur eine Empfehlung",
          "Nur bei Arbeiten über 10 m Höhe",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "dguv-201-056",
    title: "DGUV 201-056 – Absturzschutz auf Dächern",
    pages: [
      {
        title: "DGUV 201-056 – Überblick & Kernaussage",
        downloadUrl: "/downloads/DGUV-201-056.pdf",
        downloadLabel: "DGUV 201-056 als PDF herunterladen",
        content: [
          "Die DGUV 201-056 ist ein Planungs- und Bewertungsrahmen, um Dächer so auszustatten, dass spätere Arbeiten (Wartung, Inspektion, Instandsetzung, Betrieb von TGA/PV/RWA/Blitzschutz etc.) sicher und rechtssicher möglich sind.",
          "Sie verbindet: Bauordnungsrecht (MBO/LBO), Arbeitsschutzrecht (ArbSchG/ArbStättV), ASR A2.1/A1.8, DGUV-Regelwerk (u. a. DGUV Vorschrift 38, Vorschrift 1, Regeln 112-198/199) sowie Normen (DIN EN 17235, DIN EN 13374, DIN 4426 etc.).",
          "Wichtig: Das STOP-Prinzip / die Rangfolge ist durchgehend leitend: Kollektivschutz vor Individualschutz, permanente Systeme vor temporären.",
        ],
        highlights: [
          "Planungs- und Bewertungsrahmen für Absturzschutz",
          "STOP-Prinzip: Kollektivschutz vor Individualschutz",
          "Permanente Systeme vor temporären",
        ],
      },
      {
        title: "Anwendungsbereich & Begriffsbestimmungen",
        content: [
          "Gilt für Auswahl/Bewertung von Absturzschutzsystemen auf baulichen Anlagen und schafft Voraussetzungen für das sichere Betreten/Begehen von Dächern für spätere Arbeiten.",
          "Gilt NICHT für: Bauarbeiten im engeren Sinne, Maschinen nach Maschinenrichtlinie/-verordnung, Schneeräumung (separat DGUV Info 212-002).",
          "Gefahrenbereich Absturz: bis 2,00 m zur Absturzkante – dort darf nur gearbeitet werden, wenn Maßnahmen getroffen sind; Kennzeichnung/Absperrung gegen unbefugten Zutritt wird verlangt.",
          "Anschlageinrichtung: temporär (PSA) vs. permanent (Bauprodukt). Permanente Anschlageinrichtungen sind Bauprodukte.",
          "Rückhaltesystem: verhindert Erreichen der Kante (präventiv). Auffangsystem: Fall wird aufgefangen (reaktiv) – Verletzungsrisiko bleibt.",
          "Durchsturzsicher: muss über Lebensdauer dynamische Belastungen aufnehmen; Nachweis erforderlich.",
          "Notfallprävention/Rettung: Rettung muss planbar sein; bei PSA zwingend Rettungskonzept inkl. Gerät/Personal.",
        ],
        highlights: [
          "Gefahrenbereich: 2,00 m zur Absturzkante",
          "Rückhaltesystem (präventiv) vor Auffangsystem (reaktiv)",
          "Bei PSA: Rettungskonzept zwingend",
        ],
      },
      {
        title: "Verantwortlichkeiten entlang der Kette",
        content: [
          "Bauherrschaft: Gesamtverantwortung, Organisation, Auswahl fachkundiger Beteiligter, Berücksichtigung Arbeitsschutz in Planung/Ausschreibung/Vergabe.",
          "Eigentümer: Instandhaltung + Verkehrssicherungspflicht (u. a. § 823 BGB).",
          "Betreiber: Gebäude/Anlagen verkehrssicher halten, Gefahren erkennen/beseitigen; Verantwortung kann erweitert sein (Stand der Technik).",
          "Auftraggebende: Fachfirmen auswählen; Unterweisungsniveau prüfen, Subunternehmer-Weitergabe, Benennung Anlagenverantwortliche.",
          "Planende: spätere Arbeiten sicher ermöglichen; Haftung bei Pflichtverletzungen.",
          "Hersteller/Inverkehrbringer: Produkte norm-/zulassungskonform, Montage-/Wartungsunterlagen bereitstellen.",
          "Auftragnehmende: nur zugelassene Produkte, Dokumente übergeben, auf Abweichungen/Nachrüstbedarf hinweisen.",
        ],
        highlights: [
          "Bauherrschaft: Gesamtverantwortung",
          "Planende: Haftung bei Pflichtverletzung",
          "Betreiber: Verkehrssicherungspflicht",
        ],
      },
      {
        title: "Planung – Rangfolge & Ausstattungsklassen",
        content: [
          "Maßnahmen nach Rangfolgenprinzip/STOP festlegen; Kollektivschutz vor Individualschutz. Individuelle Maßnahmen nur, wenn Kollektivschutz konstruktiv nicht geht.",
          "Gefahrenbereich Absturz: 2,00 m um jede Absturzkante; Kennzeichnen/Absperren. Innenabsturz (Lichtkuppeln/Lichtbänder) UND Außenabsturz (Kanten) betrachten.",
          "Klassifizierungs-Matrix koppelt: Personengruppe (I–III), Nutzung/Wartungsintensität (hoch/mittel/gering) → Ausstattungsklassen AK-A / AK-B / AK-C.",
          "Personengruppe I: PSA-unterwiesen/qualifiziert. Gruppe II: nicht PSA-unterwiesen, aber beauftragt. Gruppe III: öffentlicher Personenverkehr.",
          "Verkehrswege/Arbeitsplätze auch auf Rutschgefahr bewerten (Neigung, Oberfläche, Witterung: Raureif/Regen/Eis/Wind); ggf. Laufstege/Dachleitern.",
        ],
        highlights: [
          "AK-A: Kollektivschutz dominiert",
          "AK-B: permanente Seil-/Schienensysteme",
          "AK-C: Minimalstandard, hohe Anforderungen an Benutzende",
        ],
      },
      {
        title: "Ausstattungsklassen im Detail",
        content: [
          "AK-A (hohe Sicherheit): Umwehrung, Seitenschutzsysteme, Laufstege mit Geländer, Dachoberlichter dauerhaft durchsturzsicher, Dachzugang bevorzugt über Gebäude + Treppe/Steigleiter.",
          "AK-B (liniengeführte Systeme): permanente überfahrbare Seil- oder Schienensysteme (kein Umschlagen nötig), Seilauslenkung gering halten, Rettungskonzept zwingend.",
          "AK-C (Minimalstandard): nur geplante Arbeiten, PSA-Unterweisung inkl. praktischer Übungen zwingend, Alleinarbeit ausgeschlossen, Rettungskonzept + Gerät + Personal erforderlich.",
          "Zonenfarben: Grün = Rückhaltebereich (präventiv). Orange = Auffangbereich (Sturz möglich, Rettungskonzept nötig, planerisch minimieren). Rot = nicht sicher begehbar.",
        ],
        highlights: [
          "Grün: Rückhaltesystem – Kante wird nicht erreicht",
          "Orange: Auffangsystem – Rettungskonzept Pflicht",
          "Rot: nicht sicher begehbar",
        ],
      },
      {
        title: "Permanente Anschlageinrichtungen & Sturzraum",
        content: [
          "Permanente Anschlageinrichtungen (pAE) sollen idealerweise 2,50 m von der Absturzkante positioniert werden, um Rückhaltewirkung zu erreichen.",
          "PV-Belegung ist ausdrücklich kein baulicher Zwang, um davon abzuweichen. Rückhaltesysteme sind Auffangsystemen vorzuziehen.",
          "Rückhalten mit mitlaufendem Auffanggerät: nur bis Abstand zur Kante ≥ 1,50 m sinnvoll sicherzustellen.",
          "Seilsysteme: Auslenkungsberechnung mit 0,5 kN in Feldmitte; bei Rückhalteanwendung Auslenkung ≤ 0,50 m.",
          "Freier Sturzraum bei Auffangsystemen: Auslenkung + Verbindungsmittel (~2,00 m) + Falldämpfer (max. 1,75 m) + Körperhöhe (~1,50 m) + Sicherheitsabstand (1,00 m) = ca. 6,25–8,75 m.",
          "Showstopper: Staffelgeschosse/Balkone/Fassadentechnik können den Sturzraum begrenzen!",
        ],
        warning: "Freier Sturzraum: 6,25–8,75 m erforderlich – prüfen, ob baulich vorhanden!",
        highlights: [
          "pAE ideal 2,50 m von Absturzkante",
          "Rückhalten vor Auffangen",
          "Sturzraum: ca. 6,25–8,75 m",
        ],
      },
      {
        title: "Errichtung, Benutzung & Instandhaltung",
        content: [
          "Montage nach Herstelleranleitung; bei komplexen Untergründen ggf. besondere Qualifizierung nötig. Übereinstimmungserklärung + Einbaudokumentation inkl. Foto nach Fertigstellung übergeben.",
          "Montageplan als Teil des Zugangs- und Sicherungskonzepts am Dachzustieg zugänglich halten.",
          "Benutzung PSA: nur durch Personen mit Unterweisung inkl. praktischer Übungen und Rettungsunterweisung. Vor jedem Gebrauch Sichtkontrolle.",
          "Alleinarbeit: Bei Rückhaltesystemen an Seil-/Schienensystemen möglich (nicht empfohlen). Bei Einzelanschlageinrichtungen: Alleinarbeit ausgeschlossen.",
          "Instandhaltung: Umwehrung/Geländer – Sichtkontrolle max. 24 Monate. Seitenschutzsysteme – Sicht-/Funktionskontrolle max. 24 Monate + vor Benutzung. PSA – mindestens alle 12 Monate prüfen lassen.",
          "Prüfung/Instandhaltung durch nachweislich qualifizierte Personen.",
        ],
        highlights: [
          "Übereinstimmungserklärung + Fotodokumentation",
          "Alleinarbeit bei Einzelanschlagpunkten: ausgeschlossen",
          "PSA-Prüfung: mind. alle 12 Monate",
        ],
      },
    ],
    quizQuestions: [
      {
        id: "dguv1",
        question: "Sie arbeiten auf einem Flachdach und nähern sich der Dachkante. Ab wann befinden Sie sich im Gefahrenbereich?",
        options: [
          "Ab 1,00 m zur Kante",
          "Ab 2,00 m zur Absturzkante – dort sind Schutzmaßnahmen Pflicht",
          "Ab 3,00 m zur Kante",
          "Nur direkt an der Kante",
        ],
        correctIndex: 1,
      },
      {
        id: "dguv2",
        question: "Sie planen Absturzschutz für ein Dach. Nach welchem Prinzip wählen Sie die Maßnahmen?",
        options: [
          "PSA zuerst, den Rest bei Bedarf",
          "Temporäre Systeme vor permanenten",
          "STOP-Prinzip: Kollektivschutz vor Individualschutz, permanent vor temporär",
          "Das günstigste System nehmen",
        ],
        correctIndex: 2,
      },
      {
        id: "dguv3",
        question: "Sie installieren permanente Anschlageinrichtungen auf einem Dach. In welchem Idealabstand zur Absturzkante positionieren Sie diese?",
        options: ["1,00 m", "1,50 m", "2,00 m", "2,50 m"],
        correctIndex: 3,
      },
      {
        id: "dguv4",
        question: "Was ist der Unterschied zwischen einem Rückhaltesystem und einem Auffangsystem?",
        options: [
          "Es gibt keinen Unterschied",
          "Rückhaltesystem verhindert das Erreichen der Kante (präventiv), Auffangsystem fängt den Sturz auf (reaktiv)",
          "Auffangsystem ist immer besser",
          "Rückhaltesystem ist nur für Notfälle",
        ],
        correctIndex: 1,
      },
      {
        id: "dguv5",
        question: "Was bedeutet die Zonenfarbe 'Rot' im Zonierungskonzept der DGUV 201-056?",
        options: [
          "Vorsicht empfohlen",
          "Auffangbereich",
          "Nicht sicher begehbar",
          "Rückhaltebereich",
        ],
        correctIndex: 2,
      },
      {
        id: "dguv6",
        question: "Wie viel freien Sturzraum benötigt ein Auffangsystem mindestens?",
        options: [
          "2–3 m",
          "4–5 m",
          "6,25–8,75 m",
          "10–12 m",
        ],
        correctIndex: 2,
      },
      {
        id: "dguv7",
        question: "Sie sollen alleine mit PSA an einer Einzelanschlageinrichtung arbeiten. Ist das zulässig?",
        options: [
          "Ja, kein Problem",
          "Nein – Alleinarbeit an Einzelanschlageinrichtungen ist ausgeschlossen",
          "Nur bei guter Sicht",
          "Ja, wenn ein Rettungskonzept vorliegt",
        ],
        correctIndex: 1,
      },
      {
        id: "dguv8",
        question: "Welche Personengruppe gemäß DGUV 201-056 darf nur als PSA-unterwiesene/qualifizierte Fachkraft aufs Dach?",
        options: [
          "Gruppe III",
          "Gruppe II",
          "Gruppe I",
          "Alle Gruppen gleich",
        ],
        correctIndex: 2,
      },
      {
        id: "dguv9",
        question: "Wie oft muss PSA gegen Absturz mindestens geprüft werden?",
        options: [
          "Alle 6 Monate",
          "Alle 12 Monate",
          "Alle 24 Monate",
          "Alle 36 Monate",
        ],
        correctIndex: 1,
      },
      {
        id: "dguv10",
        question: "Was muss nach der Montage permanenter Anschlageinrichtungen dem Auftraggeber übergeben werden?",
        options: [
          "Nur eine mündliche Bestätigung",
          "Übereinstimmungserklärung und Einbaudokumentation inkl. Foto",
          "Eine Rechnung reicht",
          "Nichts, die Montage spricht für sich",
        ],
        correctIndex: 1,
      },
      {
        id: "dguv11",
        question: "Bei Seil-/Schienensystemen (AK-B): Darf Alleinarbeit stattfinden?",
        options: [
          "Ja, ist immer erlaubt",
          "Möglich, aber nicht empfohlen – nur bei Rückhaltesystemen",
          "Nein, unter keinen Umständen",
          "Nur bei Tageslicht",
        ],
        correctIndex: 1,
      },
      {
        id: "dguv12",
        question: "Was muss bei Ausstattungsklasse AK-C (Minimalstandard) zwingend vorliegen?",
        options: [
          "Nur ein Warnschild",
          "PSA-Unterweisung inkl. praktischer Übungen + Rettungskonzept + Personal/Gerät",
          "Ein einfacher Hinweis auf Absturzgefahr",
          "Keine besonderen Anforderungen",
        ],
        correctIndex: 1,
      },
      {
        id: "dguv13",
        question: "PV-Anlagen auf dem Dach: Ist deren Belegung ein Grund, auf Rückhaltesysteme zu verzichten?",
        options: [
          "Ja, PV-Module machen Rückhaltesysteme überflüssig",
          "Nein – PV-Belegung ist ausdrücklich kein baulicher Zwang, um vom Standard abzuweichen",
          "Nur bei kleinen Anlagen",
          "Ja, wenn genug Wartungsgänge vorhanden sind",
        ],
        correctIndex: 1,
      },
    ],
  },
];
