import { TrainingPage } from "@/data/trainingData";
import { AlertTriangle, Lightbulb, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TrainingContentProps {
  page: TrainingPage;
  sectionTitle: string;
  sectionIndex: number;
  pageIndex: number;
  totalPages: number;
  totalSections: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function TrainingContent({
  page,
  sectionTitle,
  sectionIndex,
  pageIndex,
  totalPages,
  totalSections,
  onPrev,
  onNext,
}: TrainingContentProps) {
  const isLastPageOfLastSection =
    sectionIndex === totalSections - 1 && pageIndex === totalPages - 1;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
          Abschnitt {sectionIndex + 1} · Seite {pageIndex + 1} von {totalPages}
        </p>
        <h2 className="text-sm font-medium text-muted-foreground mb-1">{sectionTitle}</h2>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">{page.title}</h1>
      </div>

      {page.warning && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-danger/10 border border-danger/20 mb-6">
          <AlertTriangle className="w-5 h-5 text-danger flex-shrink-0 mt-0.5" />
          <p className="text-sm font-semibold text-danger">{page.warning}</p>
        </div>
      )}

      <div className="space-y-4 mb-6">
        {page.content.map((paragraph, idx) => (
          <p key={idx} className="text-base leading-relaxed text-foreground/90">
            {paragraph}
          </p>
        ))}
      </div>

      {page.highlights && page.highlights.length > 0 && (
        <div className="p-5 rounded-xl bg-primary/5 border border-primary/15 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-bold text-primary">Wichtige Kennzahlen</h3>
          </div>
          <ul className="space-y-2">
            {page.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <Button
          variant="outline"
          onClick={onPrev}
          disabled={sectionIndex === 0 && pageIndex === 0}
          className="gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Zurück
        </Button>

        <div className="flex gap-1.5">
          {Array.from({ length: totalPages }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === pageIndex ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>

        <Button onClick={onNext} className="gap-2">
          {isLastPageOfLastSection ? "Zur Wissenskontrolle" : "Weiter"}
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
