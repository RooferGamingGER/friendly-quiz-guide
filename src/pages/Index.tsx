import { useState, useCallback } from "react";
import { trainingSections } from "@/data/trainingData";
import TrainingProgress from "@/components/TrainingProgress";
import TrainingContent from "@/components/TrainingContent";
import QuizSection from "@/components/QuizSection";
import { HardHat, Shield, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

type View = "welcome" | "training" | "quiz";

export default function Index() {
  const [view, setView] = useState<View>("welcome");
  const [currentSection, setCurrentSection] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [completedSections, setCompletedSections] = useState<Set<number>>(new Set());

  const section = trainingSections[currentSection];
  const page = section?.pages[currentPage];

  const markSectionComplete = useCallback((idx: number) => {
    setCompletedSections((prev) => new Set(prev).add(idx));
  }, []);

  const handleNext = () => {
    if (currentPage < section.pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      markSectionComplete(currentSection);
      if (currentSection < trainingSections.length - 1) {
        setCurrentSection(currentSection + 1);
        setCurrentPage(0);
      } else {
        setView("quiz");
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (currentSection > 0) {
      const prevSection = trainingSections[currentSection - 1];
      setCurrentSection(currentSection - 1);
      setCurrentPage(prevSection.pages.length - 1);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = (sectionIdx: number, pageIdx: number) => {
    setCurrentSection(sectionIdx);
    setCurrentPage(pageIdx);
    setView("training");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleRestart = () => {
    setView("welcome");
    setCurrentSection(0);
    setCurrentPage(0);
    setCompletedSections(new Set());
  };

  if (view === "welcome") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <div className="max-w-lg text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
            <HardHat className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-black mb-3 text-foreground">Sicherheits&shy;unterweisung</h1>
          <p className="text-lg text-muted-foreground mb-2">Arbeiten auf Dächern – Stand Januar 2026</p>
          <div className="flex items-center justify-center gap-6 my-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <span>{trainingSections.length} Abschnitte</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Wissenskontrolle</span>
            </div>
          </div>
          <Button size="lg" onClick={() => setView("training")} className="text-base px-10 gap-2">
            Schulung starten
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => setView("welcome")}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <HardHat className="w-5 h-5 text-primary" />
            <span className="font-bold text-sm hidden sm:inline">Sicherheitsunterweisung</span>
          </button>
          {view === "quiz" && (
            <span className="ml-auto text-xs font-semibold uppercase tracking-wider text-primary">
              Wissenskontrolle
            </span>
          )}
        </div>
        {view === "training" && (
          <div className="max-w-5xl mx-auto px-4 pb-2">
            <TrainingProgress
              currentSection={currentSection}
              currentPage={currentPage}
              completedSections={completedSections}
              onNavigate={handleNavigate}
              isQuizMode={false}
            />
          </div>
        )}
      </header>

      {/* Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8">
        {view === "training" && page ? (
          <TrainingContent
            page={page}
            sectionTitle={section.title}
            sectionIndex={currentSection}
            pageIndex={currentPage}
            totalPages={section.pages.length}
            totalSections={trainingSections.length}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        ) : view === "quiz" ? (
          <QuizSection onRestart={handleRestart} />
        ) : null}
      </main>
    </div>
  );
}
