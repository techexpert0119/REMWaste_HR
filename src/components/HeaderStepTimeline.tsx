import React from "react";
import { FaAngleRight } from "react-icons/fa";

interface HeaderStepTimelineProps {
  steps: { name: string; icon: JSX.Element }[];
  currentStep: number;
}

export const HeaderStepTimeline: React.FC<HeaderStepTimelineProps> = ({
  steps,
  currentStep,
}) => {
  return (
    <nav className="flex justify-center items-center py-6 bg-gray-800 shadow-md rounded-b-lg px-4 sm:px-6 lg:px-8">
      <ol className="flex items-center space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-16 overflow-x-auto whitespace-nowrap py-2">
        {steps.map((step, index) => (
          <li
            key={step.name}
            className="flex items-center text-sm font-medium flex-shrink-0"
          >
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-200
                ${
                  index <= currentStep - 1
                    ? "bg-primary-500 text-gray-900"
                    : "bg-gray-700 text-gray-400"
                }
              `}
            >
              {step.icon || index + 1}
            </div>
            <span
              className={`ml-2 hidden sm:block transition-colors duration-200
                ${
                  index <= currentStep - 1
                    ? "text-primary-400"
                    : "text-gray-300"
                }
              `}
            >
              {step.name}
            </span>
            {index < steps.length - 1 && (
              <FaAngleRight className="w-5 h-5 ml-4 sm:ml-8 text-gray-600 hidden sm:block" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
