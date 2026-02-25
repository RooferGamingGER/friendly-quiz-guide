import { trainingSections } from "@/data/trainingData";
import { CheckCircle2, Circle, ChevronRight } from "lucide-react";

interface TrainingProgressProps {
  currentSection: number;
  currentPage: number;
  completedSections: Set<number>;
  onNavigate: (section: number, page: number) => void;
  isQuizMode: boolean;
}

export default function TrainingProgress({
  currentSection,
  completedSections,
  onNavigate,
  isQuizMode,
}: TrainingProgressProps) {
  return (
    <nav className="w-full overflow-x-auto">
      <div className="flex items-center gap-1 min-w-max px-1 py-2">
        {trainingSections.map((section, idx) => {
          const isActive = idx === currentSection && !isQuizMode;
          const isCompleted = completedSections.has(idx);

          return (
            <button
              key={section.id}
              onClick={() => onNavigate(idx, 0)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-md"
                  : isCompleted
                  ? "bg-success/15 text-success"
                  : "bg-card text-muted-foreground hover:bg-secondary"
              }`}
            >
              {isCompleted ? (
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
              ) : (
                <Circle className="w-3.5 h-3.5 flex-shrink-0" />
              )}
              <span className="hidden md:inline">{section.title}</span>
              <span className="md:hidden">{idx + 1}</span>
              {idx < trainingSections.length - 1 && (
                <ChevronRight className="w-3 h-3 text-muted-foreground/40 ml-1" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
