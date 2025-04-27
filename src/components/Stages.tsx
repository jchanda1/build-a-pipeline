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
}: {
  pipelineConfig: any;
  setPipelineConfig: (config: any) => void;
}) => {
  return (
    <form className="p-4 bg-white rounded shadow">
      <label className="block mb-2 text-lg font-medium text-gray-700">
        2. Select your pipeline stages
      </label>
      <div className="flex flex-wrap gap-20">
        {STAGES.map((stage) => (
          <div key={stage.id} className="flex items-center">
            <input
              id={stage.id}
              name="stages"
              type="checkbox"
              value={stage.id}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
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
    </form>
  );
};

export default Stages;
