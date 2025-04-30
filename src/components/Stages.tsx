// src/components/Stages.tsx
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
  pipelineConfig: any;
  setPipelineConfig: (config: any) => void;
  setCurrentStep: (step: number) => void;
  currentStep: number;
}) => {
  return (
    <div
      className={`${
        currentStep !== 1 ? "opacity-50 pointer-events-none" : "opacity-100"
      }`}
    >
      <form className="p-4 bg-white rounded-lg shadow-lg">
        <label className="block mb-2 text-lg font-medium text-gray-700">
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
                className="h-4 w-4 text-primary-500 border-gray-300 rounded"
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
              <label htmlFor={stage.id} className="ml-2 text-gray-700 text-md">
                {stage.label}
              </label>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="mt-4 w-20 bg-primary-500 text-white font-semibold py-2 px-4 rounded hover:bg-primary-600 transition"
          onClick={() => setCurrentStep(2)}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Stages;
