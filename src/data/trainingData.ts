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
        question: "Was war der Hauptfehler des Mitarbeiters im Unfallbeispiel?",
        options: [
          "Er hat zu schnell gearbeitet",
          "Er hat das Schutznetz nicht angebracht und keine Laufbohlen ausgelegt",
          "Er hat die falsche Leiter benutzt",
          "Er hat keine Handschuhe getragen",
        ],
        correctIndex: 1,
      },
      {
        id: "e2",
        question: "Welchen Anlegewinkel müssen Sprossenanlegeleitern einhalten?",
        options: ["45–55 Grad", "55–65 Grad", "65–75 Grad", "75–85 Grad"],
        correctIndex: 2,
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
        question: "Welche Mindestbreite müssen Laufstege auf Dächern haben?",
        options: ["0,30 m", "0,50 m", "0,80 m", "1,00 m"],
        correctIndex: 1,
      },
      {
        id: "v2",
        question: "Ab welcher Dachneigung müssen Trittleisten auf Laufstegen aufgebracht werden?",
        options: [
          "Ab ca. 5°",
          "Ab ca. 11° (Neigung 1:5)",
          "Ab ca. 22,5°",
          "Ab ca. 45°",
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
        question: "Welchen Mindest-Sicherheitsabstand müssen Druckgasflaschen zu benachbarten Anlagen einhalten?",
        options: ["≥ 1,00 m", "≥ 2,00 m", "≥ 3,00 m", "≥ 5,00 m"],
        correctIndex: 3,
      },
      {
        id: "d2",
        question: "Was ist beim Transport von Druckgasflaschen auf Fahrzeugen mitzuführen?",
        options: [
          "Erste-Hilfe-Kasten",
          "Feuerlöscher (2 kg Pulver)",
          "Warndreieck",
          "Atemschutzmaske",
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
        question: "Welche Rangfolge gilt bei der Auswahl von Absturzsicherungen?",
        options: [
          "PSAgA → Auffangeinrichtungen → Seitenschutz",
          "Seitenschutz → Auffangeinrichtungen → PSAgA",
          "Auffangeinrichtungen → Seitenschutz → PSAgA",
          "Alle Maßnahmen sind gleichwertig",
        ],
        correctIndex: 1,
      },
      {
        id: "a2",
        question: "Bis zu welcher Dachneigung dürfen Dachschutzwände eingesetzt werden?",
        options: ["30°", "45°", "60°", "75°"],
        correctIndex: 2,
      },
      {
        id: "a3",
        question: "Welche maximale Maschenweite dürfen Netze in Dachschutzwänden haben?",
        options: ["5 cm", "10 cm", "15 cm", "20 cm"],
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
        question: "Wer darf Gerüstbauarbeiten ausführen?",
        options: [
          "Jeder Beschäftigte",
          "Nur fachlich geeignete Beschäftigte unter Aufsicht einer fachkundigen Person",
          "Nur der Vorgesetzte persönlich",
          "Jeder nach einer kurzen Einweisung",
        ],
        correctIndex: 1,
      },
      {
        id: "g2",
        question: "Wie groß darf der maximale Höhenunterschied zwischen Traufe und Dachfanggerüst-Belag sein?",
        options: ["0,50 m", "1,00 m", "1,50 m", "2,00 m"],
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
        question: "Welche Sprossen/Stufen einer Anlegeleiter dürfen NICHT betreten werden?",
        options: [
          "Die untersten 3",
          "Die obersten 3",
          "Die mittleren 3",
          "Jede zweite Sprosse",
        ],
        correctIndex: 1,
      },
      {
        id: "l2",
        question: "Was ist bei Anlegeaufzügen ausdrücklich verboten?",
        options: [
          "Transport von Dachziegeln",
          "Befördern von Personen mit der Last",
          "Horizontales Ausrichten",
          "Verwendung von Lastaufnahmemitteln",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "hubarbeitsbuehnen",
    title: "Hubarbeitsbühnen & Schuttrutschen",
    pages: [
      {
        title: "Hubarbeitsbühnen",
        warning: "Umsturz-, Absturz- und Quetschgefahr!",
        content: [
          "Gefährdungen: Umsturz durch Einfahren in Bodenöffnungen, Absturz durch Herausschleudern, Quetschen zwischen Bedienpult und Konstruktionen.",
          "Hubarbeitsbühne entsprechend Betriebsanleitung standsicher aufstellen und betreiben.",
          "Hubarbeitsbühne nicht überlasten. Klappbare Schutzgeländer vor Arbeitsbeginn in Schutzstellung bringen.",
          "Bei Arbeiten im öffentlichen Verkehr gelbe Blinkleuchten einschalten.",
          "PSA gegen Absturz an den vom Hersteller vorgegebenen Anschlagpunkten im Arbeitskorb befestigen.",
          "Nur unterwiesene und beauftragte Personen dürfen Hubarbeitsbühnen bedienen.",
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
        question: "Wer darf Hubarbeitsbühnen bedienen?",
        options: [
          "Jeder Beschäftigte",
          "Nur unterwiesene und beauftragte Personen",
          "Nur der Vorgesetzte",
          "Jeder mit Führerschein",
        ],
        correctIndex: 1,
      },
      {
        id: "h2",
        question: "Ab welcher Aufbauhöhe sind bei Schuttrutschen zusätzliche Verankerungen anzubringen?",
        options: ["Ab 5 m", "Ab 8 m", "Ab 10 m", "Ab 15 m"],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "maschinen",
    title: "Maschinen & Werkzeuge",
    pages: [
      {
        title: "Handkettensägen & Kreissägen",
        content: [
          "Handkettensägen: Schnittverletzungen durch Rückschlag, Gehörschädigung, Vergiftungsgefahr durch Abgase möglich.",
          "Schnittschutzkleidung, -schuhe, Schutzhelm mit Gesichtsschutz und Gehörschutz tragen.",
          "Vor Arbeitsbeginn Kettenbremse prüfen. Nur scharfe Ketten verwenden. Nicht über Schulterhöhe sägen.",
          "Kreissägen: Spaltkeil nach Größe des Sägeblatts auswählen. Abstand Spaltkeil–Zahnkranz max. 8 mm.",
          "Gefahrenbereich 120 mm rund um das Sägeblatt beachten. Gehörschutz und Sicherheitsschuhe benutzen.",
          "Bei schmalen Werkstücken Schiebestock verwenden (Abstand Parallelanschlag–Sägeblatt < 120 mm).",
        ],
      },
      {
        title: "Schleif- & Trennmaschinen",
        content: [
          "Nur gekennzeichnete Schleifmaschinen und Schleifkörper verwenden.",
          "Vor dem Aufspannen Klangprobe durchführen. Probelauf seitlich außerhalb des Gefahrenbereiches.",
          "Drehzahl der Maschine darf nicht höher sein als die zulässige Umdrehungszahl des Schleifkörpers.",
          "Handtrennschleifmaschinen müssen mit Schutzhauben ausgerüstet sein.",
          "Trennscheiben nicht zum Seitenschleifen verwenden!",
          "Schutzbrille und Gehörschutz benutzen. Bei gesundheitsgefährdenden Stäuben Atemschutz verwenden.",
          "Schleifscheiben nicht über das Verfallsdatum hinaus benutzen.",
        ],
      },
    ],
    quizQuestions: [
      {
        id: "m1",
        question: "Was muss vor dem Aufspannen eines Schleifkörpers durchgeführt werden?",
        options: [
          "Sichtprüfung genügt",
          "Klangprobe",
          "Gewichtskontrolle",
          "Temperaturmessung",
        ],
        correctIndex: 1,
      },
      {
        id: "m2",
        question: "Welchen maximalen Abstand darf der Spaltkeil vom Zahnkranz einer Kreissäge haben?",
        options: ["3 mm", "5 mm", "8 mm", "12 mm"],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "gefahrstoffe",
    title: "Gefahrstoffe (Asbest, Mineralwolle)",
    pages: [
      {
        title: "Asbestzementprodukte",
        warning: "Krebsgefahr durch Asbestfasern!",
        content: [
          "Asbestfasern können eine Asbestose, Lungenkrebs oder ähnliche Erkrankungen auslösen.",
          "Die Bearbeitung mit abtragenden Geräten (Abschleifen, Hochdruckreinigen, Abbürsten) ist unzulässig!",
          "Schutzausrüstung: Schutzanzug (mind. Kat. III, Typ 5) und Atemschutz (mind. P2-Filter).",
          "Tätigkeiten müssen der Aufsichtsbehörde und Berufsgenossenschaft schriftlich angezeigt werden.",
          "Arbeiten nur unter Leitung eines sachkundigen Aufsichtführenden (ständig anwesend).",
          "Bauteile möglichst zerstörungsfrei ausbauen. Ausgebaute Produkte nicht wieder verwenden.",
          "In Arbeitsbereichen nicht essen, trinken oder rauchen.",
        ],
      },
      {
        title: "Mineralwolle-Dämmstoffe",
        content: [
          "Neue Mineralwolle (seit 2000): nicht krebserzeugend, aber Haut-, Augen- und Atemwegsreizungen möglich.",
          "Alte Mineralwolle (vor 2000): grundsätzlicher Krebsverdacht bei Demontage- und Abbrucharbeiten!",
          "Schutzmaßnahmen: Locker sitzende, geschlossene Arbeitskleidung und Handschuhe tragen.",
          "Atemschutz: Halb-/Viertelmaske mit P2-Filter. Bei Überkopfarbeiten zusätzlich Schutzbrille.",
          "Material nicht werfen. Verpackte Dämmstoffe erst am Arbeitsplatz auspacken.",
          "Keine schnell laufenden Sägen ohne Absaugung verwenden. Staubsaugen statt kehren.",
          "Abfälle in Plastiksäcken sammeln. Nach Arbeit Staub auf der Haut mit Wasser abspülen.",
        ],
      },
    ],
    quizQuestions: [
      {
        id: "gf1",
        question: "Welcher Atemschutz ist mindestens bei Arbeiten mit Asbestzementprodukten erforderlich?",
        options: [
          "FFP1-Maske",
          "Partikelfilter P2",
          "Einfacher Mundschutz",
          "Atemschutz ist nicht erforderlich",
        ],
        correctIndex: 1,
      },
      {
        id: "gf2",
        question: "Seit welchem Jahr dürfen in Deutschland nur noch unbedenkliche Mineralwolle-Dämmstoffe produziert werden?",
        options: ["1990", "1996", "2000", "2005"],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "dacharbeiten",
    title: "Dacharbeiten & Lichtkuppeln",
    pages: [
      {
        title: "Dachdeckung mit Wellplatten & Dachlatten",
        content: [
          "Wellplattendächer nur auf besonderen Lauf- und Arbeitsstegen betreten (Mindestbreite 50 cm).",
          "Bei Dachneigungen > 11°: Stege mit Trittleisten. Bei > 30°: mit Stufen versehen.",
          "Dachlatten müssen Qualitäts- bzw. Festigkeitskriterien entsprechen (mind. S10).",
          "Dachlatten der Klasse S10 sind an den Stirnseiten rot eingefärbt.",
          "Für Arbeiten auf Flächen mit mehr als 45° Neigung besondere Arbeitsplätze schaffen.",
          "Beschädigte Dachlatten (z.B. aufgerissene Stirnseiten) ausbauen.",
        ],
      },
      {
        title: "Lichtkuppeln",
        warning: "Durchsturzgefahr bei nicht gesicherten Lichtkuppeln!",
        content: [
          "Nicht gesicherte Öffnungen oder nicht durchsturzsichere Lichtkuppeln können zu Absturzunfällen führen.",
          "An Öffnungen in Dachflächen müssen Einrichtungen vorhanden sein, die Abstürzen verhindern.",
          "Eingebaute Lichtkuppeln gelten im Allgemeinen als NICHT durchsturzsicher!",
          "Sicherung durch: Seitenschutz, Schutzabdeckungen, Schutznetze, Absperrungen oder durchsturzsichere Unterbauten.",
          "Trassierbänder (Flatterleinen) sind KEINE zulässigen Absperrmittel!",
          "Abdeckungen müssen unverschieblich und tragfähig sein (mind. Sortierklasse S10).",
        ],
      },
    ],
    quizQuestions: [
      {
        id: "da1",
        question: "Welche Farbkennzeichnung haben Dachlatten der Sortierklasse S10?",
        options: ["Blau", "Grün", "Rot", "Gelb"],
        correctIndex: 2,
      },
      {
        id: "da2",
        question: "Gelten eingebaute Lichtkuppeln grundsätzlich als durchsturzsicher?",
        options: [
          "Ja, immer",
          "Ja, wenn sie aus Kunststoff sind",
          "Nein, sie gelten grundsätzlich als NICHT durchsturzsicher",
          "Nur bei Lichtkuppeln unter 1 m²",
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
        question: "Wie viele Prüfpunkte umfasst die Checkliste vor Arbeitsbeginn auf dem Dach?",
        options: ["3", "5", "7", "10"],
        correctIndex: 2,
      },
      {
        id: "c2",
        question: "Was muss neben der PSA-Prüfung auch vor Arbeitsbeginn sichergestellt werden?",
        options: [
          "Pausenzeiten festlegen",
          "Erste-Hilfe-Maßnahmen – auch für die Rettung aus dem Seil",
          "Wetterbericht prüfen",
          "Materialbestellung aufgeben",
        ],
        correctIndex: 1,
      },
    ],
  },
];
