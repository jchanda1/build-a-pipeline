// src/components/Stages.tsx
import { Dispatch, SetStateAction } from "react";
import PipelineConfig from "../interfaces/PipelineConfig";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";

const STAGES = [
  { id: "install", label: "Install" },
  { id: "validate", label: "Validate" },
  { id: "test", label: "Test" },
  { id: "version", label: "Version" },
];

const Stages = ({
  pipelineConfig,
  setPipelineConfig,
  setCurrentStep,
  currentStep,
}: {
  pipelineConfig: PipelineConfig;
  setPipelineConfig: Dispatch<SetStateAction<PipelineConfig>>;
  setCurrentStep: (step: number) => void;
  currentStep: number;
}) => {
  return (
    <div
      className={`${
        currentStep !== 2 ? "opacity-50 pointer-events-none" : "opacity-100"
      }`}
    >
      <form className="p-4 bg-base-100 rounded-lg shadow-lg">
        <label className="block mb-2 text-lg font-medium text-base-content">
          2. Select your pipeline stages
        </label>
        <div className="flex flex-wrap gap-20 justify-center">
          {STAGES.map((stage) => (
            <div key={stage.id} className="flex items-center">
              <input
                id={stage.id}
                name="stages"
                type="checkbox"
                value={stage.id}
                className="checkbox checkbox-primary"
                onChange={(e) => {
                  const { checked } = e.target;
                  setPipelineConfig({
                    ...pipelineConfig,
                    stages: checked
                      ? [...pipelineConfig.stages, stage.id]
                      : pipelineConfig.stages.filter(
                          (id: string) => id !== stage.id
                        ),
                  });
                }}
              />
              <label
                htmlFor={stage.id}
                className="ml-2 text-base-content text-md"
              >
                {stage.label}
              </label>
            </div>
          ))}
        </div>
        <div className="flex space-x-4 justify-center mt-5">
          <PreviousButton
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
          <NextButton
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        </div>
      </form>
    </div>
  );
};

export default Stages;
