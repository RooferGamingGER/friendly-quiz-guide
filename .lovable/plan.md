

# Quiz erweitern: 100 Fragen, 40 zufaellig pro Durchlauf

## Was sich aendert

### Fuer Sie als Nutzer
- Der Fragenpool wird von 26 auf **100 praxisnahe Fragen** erweitert
- Bei jeder Wissenskontrolle werden **40 Fragen zufaellig** ausgewaehlt -- jeder Durchlauf ist anders
- Mindestens **1 Frage pro Themenbereich** ist garantiert, damit kein Thema uebersprungen wird
- Bestehensgrenze bleibt bei **80%** (= 32 von 40 richtig)
- Bei "Schulung wiederholen" werden neue 40 Fragen gezogen

### Fragenverteilung (100 Fragen auf 12 Abschnitte)

| Abschnitt | Jetzt | Neu |
|---|---|---|
| Einfuehrung | 2 | 6 |
| Verkehrswege | 2 | 7 |
| Druckgas & Transport | 2 | 7 |
| Absturzsicherung | 3 | 10 |
| Gerueste | 2 | 8 |
| Leitern & Aufzuege | 2 | 8 |
| Hubgeraete & Schuttrutschen | 2 | 7 |
| Maschinen | 2 | 10 |
| Gefahrstoffe | 2 | 8 |
| Dacharbeiten & Lichtkuppeln | 2 | 9 |
| Checkliste | 2 | 7 |
| DGUV 201-056 | 3 | 13 |
| **Gesamt** | **26** | **100** |

Alle Fragen bleiben szenariobasiert ("Sie sind auf der Baustelle und...").

## Technische Umsetzung

### 1. `src/data/trainingData.ts` -- Fragenpool erweitern
- 74 neue Fragen zu den bestehenden 26 hinzufuegen
- Verteilung proportional zur Inhaltsmenge jedes Abschnitts
- Bestehende Fragen bleiben erhalten

### 2. `src/components/QuizSection.tsx` -- Zufallsauswahl einbauen
- Beim Laden: aus jedem der 12 Abschnitte mindestens 1 Frage ziehen (= 12 garantiert)
- Restliche 28 Plaetze zufaellig aus dem gesamten Pool auffuellen (ohne Dopplungen)
- Anzeige gruppiert nach Abschnitten beibehalten
- Counter zeigt "X von 40 beantwortet"
- `useMemo` mit zufaelligem Seed, damit bei "Schulung wiederholen" neue Fragen kommen

