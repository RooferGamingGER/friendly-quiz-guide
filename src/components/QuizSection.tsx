import { useState, useMemo } from "react";
import { trainingSections, QuizQuestion } from "@/data/trainingData";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Award, RotateCcw, Info } from "lucide-react";

const QUIZ_SIZE = 40;

interface QuizSectionProps {
  onRestart: () => void;
}

function selectQuizQuestions(seed: number): { title: string; questions: QuizQuestion[] }[] {
  // Seeded random for reproducibility within a session
  let s = seed;
  const random = () => {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  };

  const sectionPools = trainingSections.map((sec) => ({
    title: sec.title,
    questions: [...sec.quizQuestions],
  }));

  // Shuffle each section's questions
  for (const pool of sectionPools) {
    for (let i = pool.questions.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [pool.questions[i], pool.questions[j]] = [pool.questions[j], pool.questions[i]];
    }
  }

  // Step 1: Pick at least 1 from each section
  const selected = new Set<string>();
  const sectionSelected: Map<string, QuizQuestion[]> = new Map();

  for (const pool of sectionPools) {
    const q = pool.questions[0];
    selected.add(q.id);
    sectionSelected.set(pool.title, [q]);
  }

  // Step 2: Fill remaining slots from all sections
  const remaining = QUIZ_SIZE - selected.size;
  const allRemaining: { title: string; question: QuizQuestion }[] = [];
  for (const pool of sectionPools) {
    for (const q of pool.questions) {
      if (!selected.has(q.id)) {
        allRemaining.push({ title: pool.title, question: q });
      }
    }
  }

  // Shuffle remaining
  for (let i = allRemaining.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [allRemaining[i], allRemaining[j]] = [allRemaining[j], allRemaining[i]];
  }

  for (let i = 0; i < remaining && i < allRemaining.length; i++) {
    const item = allRemaining[i];
    const arr = sectionSelected.get(item.title) || [];
    arr.push(item.question);
    sectionSelected.set(item.title, arr);
  }

  // Return grouped by section, preserving section order
  return sectionPools
    .map((pool) => ({
      title: pool.title,
      questions: sectionSelected.get(pool.title) || [],
    }))
    .filter((s) => s.questions.length > 0);
}

export default function QuizSection({ onRestart }: QuizSectionProps) {
  const [seed, setSeed] = useState(() => Math.floor(Math.random() * 2147483646) + 1);

  const sections = useMemo(() => selectQuizQuestions(seed), [seed]);
  const allQuestions = useMemo(() => sections.flatMap((s) => s.questions), [sections]);

  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionId: string, optionIndex: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRestart = () => {
    setSeed(Math.floor(Math.random() * 2147483646) + 1);
    setAnswers({});
    setSubmitted(false);
    onRestart();
  };

  const correctCount = allQuestions.filter(
    (q) => answers[q.id] === q.correctIndex
  ).length;
  const totalCount = allQuestions.length;
  const allAnswered = allQuestions.every((q) => answers[q.id] !== undefined);
  const passed = correctCount >= Math.ceil(totalCount * 0.8);

  return (
    <div className="max-w-3xl mx-auto">
      {submitted ? (
        <div className="text-center mb-10">
          <div
            className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
              passed ? "bg-success/15" : "bg-danger/15"
            }`}
          >
            {passed ? (
              <Award className="w-10 h-10 text-success" />
            ) : (
              <XCircle className="w-10 h-10 text-danger" />
            )}
          </div>
          <h1 className="text-3xl font-bold mb-2">
            {passed ? "Bestanden!" : "Leider nicht bestanden"}
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            {correctCount} von {totalCount} Fragen richtig beantwortet
          </p>
          <div className="w-full max-w-xs mx-auto h-3 bg-muted rounded-full overflow-hidden mb-4">
            <div
              className={`h-full rounded-full transition-all duration-700 ${
                passed ? "bg-success" : "bg-danger"
              }`}
              style={{ width: `${(correctCount / totalCount) * 100}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            {passed
              ? "Herzlichen Glückwunsch! Sie haben die Wissenskontrolle bestanden."
              : "Mindestens 80% richtige Antworten sind erforderlich. Bitte wiederholen Sie die Schulung."}
          </p>
          <Button onClick={handleRestart} variant="outline" className="gap-2">
            <RotateCcw className="w-4 h-4" />
            {passed ? "Schulung erneut durchführen" : "Schulung wiederholen"}
          </Button>
        </div>
      ) : (
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Wissenskontrolle</h1>
          <p className="text-muted-foreground">
            Beantworten Sie alle {totalCount} Fragen. Mindestens 80% müssen richtig sein.
          </p>
        </div>
      )}

      <div className="space-y-10">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-primary/20">
              {section.title}
            </h2>
            <div className="space-y-6">
              {section.questions.map((q) => {
                const selected = answers[q.id];
                const isCorrect = submitted && selected === q.correctIndex;
                const isWrong = submitted && selected !== undefined && selected !== q.correctIndex;

                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-xl border transition-all ${
                      submitted
                        ? isCorrect
                          ? "bg-success/5 border-success/30"
                          : isWrong
                          ? "bg-danger/5 border-danger/30"
                          : "bg-card border-border"
                        : "bg-card border-border safety-card"
                    }`}
                  >
                    <p className="font-semibold mb-4 text-foreground">
                      {q.question}
                    </p>
                    <div className="space-y-2">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = selected === optIdx;
                        const isCorrectOption = submitted && optIdx === q.correctIndex;
                        const isWrongSelected = submitted && isSelected && optIdx !== q.correctIndex;

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleSelect(q.id, optIdx)}
                            disabled={submitted}
                            className={`w-full text-left p-3 rounded-lg border text-sm transition-all flex items-center gap-3 ${
                              isCorrectOption
                                ? "bg-success/10 border-success/40 text-success font-medium"
                                : isWrongSelected
                                ? "bg-danger/10 border-danger/40 text-danger"
                                : isSelected
                                ? "bg-primary/10 border-primary/40 text-primary font-medium"
                                : "bg-background border-border hover:border-primary/30 text-foreground/80"
                            } ${submitted ? "cursor-default" : "cursor-pointer"}`}
                          >
                            <span
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                                isCorrectOption
                                  ? "border-success bg-success text-success-foreground"
                                  : isWrongSelected
                                  ? "border-danger bg-danger text-danger-foreground"
                                  : isSelected
                                  ? "border-primary bg-primary text-primary-foreground"
                                  : "border-muted-foreground/30"
                              }`}
                            >
                              {isCorrectOption && submitted ? (
                                <CheckCircle2 className="w-4 h-4" />
                              ) : isWrongSelected ? (
                                <XCircle className="w-4 h-4" />
                              ) : (
                                String.fromCharCode(65 + optIdx)
                              )}
                            </span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                    {submitted && isWrong && (
                      <div className="mt-4 flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                        <Info className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-foreground/85 leading-relaxed">
                          <span className="font-semibold text-primary">Erklärung: </span>
                          {q.explanation ? (
                            q.explanation
                          ) : (
                            <>
                              Die richtige Antwort lautet{" "}
                              <span className="font-semibold">
                                „{q.options[q.correctIndex]}"
                              </span>
                              . Diese Option entspricht den geltenden Sicherheitsregeln und Vorschriften (DGUV / Arbeitsschutz) für die beschriebene Situation.
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {!submitted && (
        <div className="mt-10 flex justify-center">
          <Button
            size="lg"
            onClick={handleSubmit}
            disabled={!allAnswered}
            className="text-base px-10"
          >
            Antworten auswerten ({Object.keys(answers).length}/{totalCount} beantwortet)
          </Button>
        </div>
      )}
    </div>
  );
}
