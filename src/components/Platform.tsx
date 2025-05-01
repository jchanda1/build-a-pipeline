interface PlatformProps {
  pipelineConfig: any;
  setPipelineConfig: (config: any) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const Platform = ({
  pipelineConfig,
  setPipelineConfig,
  currentStep,
  setCurrentStep,
}: PlatformProps) => {
  const PLATFORMS = [{ value: "gitlab", label: "GitLab" }];
  return (
    <form
      className={`p-4 bg-white rounded-lg shadow-lg ${
        currentStep !== 1 ? "opacity-50 pointer-events-none" : "opacity-100"
      }`}
    >
      <label
        className="block mb-2 text-lg font-medium text-gray-700"
        htmlFor="platform"
      >
        1. Select your CI/CD platform
      </label>
      <select
        id="platform"
        name="platform"
        className="block w-1/2 mx-auto p-2 border border-gray-300 rounded"
        defaultValue=""
        onChange={(e) => {
          setPipelineConfig({
            ...pipelineConfig,
            platform: e.target.value,
          });
          setCurrentStep(2);
        }}
      >
        <option value="" disabled>
          None selected
        </option>
        {PLATFORMS.map((platform) => {
          return (
            <option key={platform.value} value={platform.value}>
              {platform.label}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default Platform;
