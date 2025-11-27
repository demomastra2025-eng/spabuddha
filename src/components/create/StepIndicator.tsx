import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps?: number;
  steps?: string[];
}

const defaultSteps = [
  "Филиал",
  "Данные",
  "Дизайн",
  "Доставка",
  "Оплата",
];

export const StepIndicator = ({ currentStep, totalSteps, steps }: StepIndicatorProps) => {
  const stepsToRender = steps ?? defaultSteps;
  const resolvedTotal = totalSteps ?? stepsToRender.length;
  const visibleSteps = stepsToRender.slice(0, resolvedTotal);

  return (
    <div className="w-full flex justify-center px-4">
      <div className="w-full max-w-3xl flex items-center justify-center">
        {visibleSteps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <div key={stepNumber} className="flex items-center flex-1 min-w-0">
              <div className="flex flex-col items-center flex-shrink-0 text-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                    isCompleted
                      ? "bg-primary text-primary-foreground"
                      : isActive
                      ? "bg-secondary text-secondary-foreground shadow-glow"
                      : "bg-muted/30 text-muted-foreground"
                  }`}
                >
                  {isCompleted ? <Check className="w-6 h-6" /> : <span>{stepNumber}</span>}
                </div>
                <span
                  className={`mt-2 text-xs md:text-sm font-medium transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {step}
                </span>
              </div>
              {stepNumber < resolvedTotal && (
                <div
                  className={`flex-1 h-1 mx-2 rounded transition-all duration-300 ${
                    stepNumber < currentStep ? "bg-primary" : "bg-muted/40"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
