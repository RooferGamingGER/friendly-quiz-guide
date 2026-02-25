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
        title: "Lagerung von Druckgasbehältern",
        warning: "Brand- und Explosionsgefahr!",
        content: [
          "Unzulässig ist die Lagerung in engen Höfen, Durchgängen und Durchfahrten sowie in der Nähe von Gruben, Kanälen und Abflüssen.",
          "Betreten des Lagers durch Unbefugte ist untersagt – Hinweisschild am Zugang anbringen.",
          "Ein Feuerlöscher muss leicht erreichbar vorhanden sein.",
          "Druckgasbehälter möglichst stehend lagern. Bei liegender Lagerung gegen Fortrollen sichern.",
          "Druckgasbehälter vor Sonneneinstrahlung geschützt lagern und stehende Flaschen gegen Umfallen sichern.",
          "Ventile mit Schutzkappen und Verschlussmuttern sichern. Das Umfüllen von Druckgasen in Lagern ist unzulässig.",
        ],
        highlights: [
          "Sicherheitsabstand ≥ 5,00 m zu benachbarten Anlagen",
          "Schutzbereich: max. 2 Seiten durch 2,00 m hohe Schutzwände einengen",
        ],
      },
      {
        title: "Transport von Druckgasflaschen",
        content: [
          "Druckgasflaschen gegen Stöße schützen – nicht werfen oder fallen lassen, nicht über den Boden rollen.",
          "Zum Transport von Einzelflaschen Flaschenkarren oder Transportgestelle verwenden.",
          "Beim Transport auf Fahrzeugen: gegen Verrutschen, Verrollen, Umfallen und Herabfallen sichern.",
          "Nur mit geschlossenen Ventilen und aufgeschraubten Schutzkappen transportieren.",
          "Gasflaschen müssen mit Gefahrzetteln und UN-Nummern gekennzeichnet sein.",
          "Feuerlöscher (2 kg Pulver) mitführen. Rauchen und offenes Feuer bei Ladearbeiten verboten.",
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
        title: "Absturzsicherungen – Grundlagen",
        content: [
          "Fehlende, unvollständig aufgebaute oder falsch dimensionierte Absturzsicherungen können Absturzunfälle zur Folge haben.",
          "Absturzsicherungen durch Seitenschutz bzw. Absperrungen sind an Arbeitsplätzen und Verkehrswegen erforderlich.",
          "Auf Seitenschutz kann verzichtet werden, wenn in mindestens 2,00 m Abstand von der Absturzkante eine feste Absperrung angebracht ist (kein Flatterband!).",
          "PSA gegen Absturz darf nur verwendet werden, wenn weder Seitenschutz noch Auffangeinrichtungen möglich sind.",
          "Der Vorgesetzte hat die Anschlageinrichtungen festzulegen und für die Benutzung der PSAgA zu sorgen.",
        ],
        highlights: [
          "Rangfolge: Seitenschutz → Auffangeinrichtungen → PSAgA",
          "Absperrung mindestens 2,00 m von Absturzkante",
          "Trassierbänder sind keine Absperrungen!",
        ],
      },
      {
        title: "Dachschutzwände",
        content: [
          "Dachschutzwände nur bis zu einer Dachneigung von 60° einsetzen.",
          "Bei Dachneigungen von mehr als 22,5° darf der Höhenunterschied zwischen Arbeitsplatz und Auffangeinrichtung nicht mehr als 5,00 m betragen.",
          "Schutzwandhalter nur an tragfähigen Sparren befestigen.",
          "Dachschutzwände mit einer Bauhöhe von mindestens 1,00 m verwenden, Oberkante nicht weniger als 0,80 m über Dachfläche.",
          "Nur Netze oder Geflechte mit einer Maschenweite von höchstens 10 cm verwenden.",
          "Beschäftigte bei Montage müssen gegen Absturz gesichert sein (z.B. Anseilschutz).",
        ],
      },
      {
        title: "Sicherheitsdachhaken & Flachdach-Systeme",
        content: [
          "Sicherheitsdachhaken sind auf Dächern mit 22,5°–75° Neigung geeignet zum Einhängen von Auflegeleitern, Befestigung von Dachdeckerstühlen und als Anschlagpunkte für PSAgA.",
          "Montage nur nach Einbauanleitung des Herstellers. Sicherheitsdachhaken Typ B müssen DIN EN 517 entsprechen.",
          "Flachdach-Absturzsicherungssysteme: Systemauswahl anhand örtlicher Gegebenheiten (Dachbelastung, Neigung, Attikaform, Gebäudehöhe).",
          "Nur unter Aufsicht einer fachkundigen Person auf-, ab- oder umbauen.",
          "Nicht gesicherte Bereiche mit Kette, Seil oder Gitter im Abstand ≥ 2,00 m deutlich absperren.",
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
        title: "Fanggerüste",
        content: [
          "Wenn bei Arbeiten auf Flächen mit max. 22,5° Neigung kein Seitenschutz angebracht werden kann, müssen Fanggerüste verwendet werden.",
          "Fanggerüste müssen ein Auffangen abstürzender Personen gewährleisten.",
          "Falsch dimensionierte oder unvollständig aufgebaute Fanggerüste können zu Absturzunfällen führen.",
        ],
      },
      {
        title: "Fassadengerüste",
        content: [
          "Gerüstbau nur unter ständiger Aufsicht einer fachkundigen Person und von fachlich geeigneten Beschäftigten ausführen.",
          "Beschädigte Gerüstbauteile nicht verwenden. Nicht einsatzbereite Gerüste kennzeichnen und Zugang absperren.",
          "Gerüst fortlaufend mit dem Aufbau zug- und druckfest an tragfähigen Bauteilen verankern.",
          "Jede benutzte Gerüstlage muss voll ausgelegt und über einen sicheren Zugang erreichbar sein.",
          "Seitenschutz besteht aus Geländerholm, Zwischenholm und Bordbrett – an Außen- und Stirnseiten montieren.",
          "Keine konstruktiven Änderungen am Gerüst vornehmen (z.B. Entfernen von Seitenschutz, Verankerungen).",
        ],
        highlights: [
          "Abstand Belag – Bauwerk: max. 0,30 m",
          "Freier Durchgang: mind. 20 cm Breite",
        ],
      },
      {
        title: "Dachfanggerüste",
        content: [
          "Dachfanggerüste für Dacharbeiten bei 22,5°–60° Neigung und Absturzhöhe > 2,00 m.",
          "Der Höhenunterschied zwischen Absturzkante (Traufe) und Gerüstbelag darf 1,50 m nicht überschreiten.",
          "Mindestbelagbreite: 0,60 m.",
          "Schutzwände aus tragfähigen Netzen mit Maschenweite max. 10 cm.",
          "Netze nicht mit Kabelbindern oder Bindedraht befestigen!",
          "Schutznetze ohne Prüfung nur innerhalb von 12 Monaten nach Herstellung verwenden.",
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
        title: "Anlegeleitern",
        content: [
          "Vor dem Einsatz einer Leiter im Rahmen der Gefährdungsbeurteilung prüfen, ob ein sichereres Arbeitsmittel möglich ist.",
          "Leitern sind nur für Arbeiten mit geringer Gefährdung, geringem Arbeitsumfang und geringer Dauer zu verwenden.",
          "Anlegeleitern gegen Ausgleiten, Umfallen, Umkanten, Abrutschen und Einsinken sichern.",
          "Richtiger Anlegewinkel: Sprossenanlegeleitern 65–75°, Stufenanlegeleitern 60–70°.",
          "Mindestens 1 m über die Austrittsstelle hinausragen lassen.",
          "Die obersten 3 Sprossen/Stufen nicht betreten!",
          "Bei Bauarbeiten und Standhöhe > 2,00 m nicht länger als 2 Stunden arbeiten. Max. 10 kg Werkzeug/Material mitführen.",
        ],
        highlights: [
          "Anlegewinkel Sprossenleiter: 65–75°",
          "Oberste 3 Sprossen nicht betreten",
          "Max. Standhöhe: 5,00 m",
          "Max. Arbeitszeit bei > 2 m: 2 Stunden",
        ],
      },
      {
        title: "Anlegeaufzüge",
        content: [
          "Aufzug standsicher nach Betriebsanleitung aufstellen. Fahrwerk entlasten und Grundrahmen horizontal ausrichten.",
          "Zulässige Höchstlast gemäß Belastungsanzeige einhalten.",
          "Nur geeignete Lastaufnahmemittel verwenden. Für lose Lasten (z.B. Dachziegel) umwehrte Mittel nutzen.",
          "Befördern von Personen mit der Last ist verboten! Benutzung der Fahrbahn als Leiter ist verboten!",
          "Bei Abnahmestelle > 2,00 m Höhe: Absturzsicherungen vorsehen.",
          "Untere Ladestelle absperren (ausgenommen Zugang).",
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
        title: "Schuttrutschen",
        content: [
          "Mangelhafte Sicherung bei Montage oder Benutzung kann zu Absturzunfällen oder Verletzungen durch herabfallende Teile führen.",
          "Nur durch unterwiesene Personen auf- und abbauen lassen.",
          "Bei Absturzhöhen > 2,00 m Absturzsicherungen vorsehen.",
          "Ab 10,00 m Aufbauhöhe zusätzliche Verankerungen anbringen.",
          "Immer Einfülltrichter verwenden. Gefahrenbereiche festlegen und absperren.",
          "Schuttrutschenaustrittsöffnung ständig auf freien Austritt kontrollieren.",
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
