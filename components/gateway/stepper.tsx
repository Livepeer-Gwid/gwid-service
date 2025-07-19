import { cn } from "@/lib/utils";

interface StepperProps {
  currentStep: number;
}

export function GatewayStepper({ currentStep }: StepperProps) {
  const steps = [
    { id: 1, title: "Select Stack" },
    { id: 2, title: "Specify details and Configurations" },
  ];

  return (
    <div className="flex items-center justify-center space-x-6 w-full">
      {steps.map((step, index) => (
        <div key={step.id} className="flex w-full items-center space-x-6">
          <div className="flex items-center space-x-3">
            <div
              className={cn(
                "flex items-center justify-center min-w-8 w-8 h-8 rounded-full font-semibold transition-colors text-white",
                currentStep === step.id ? "bg-[#25213D]" : "bg-[#383A3F]"
              )}
            >
              {step.id}
            </div>
            <div
              className={cn(
                "font-medium whitespace-nowrap",
                currentStep === step.id ? "text-white" : "text-[#FFFFFF80]"
              )}
            >
              {step.title}
            </div>
          </div>

          {index < steps.length - 1 && (
            <div
              className={cn(
                "h-[2px] w-full bg-white",
                currentStep === step.id ? "opacity-100" : "opacity-40"
              )}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}
