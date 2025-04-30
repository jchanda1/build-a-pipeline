const ConfigureStages = ({
  pipelineConfig,
  setPipelineConfig,
  currentStep,
  setCurrentStep,
}: {
  pipelineConfig: any;
  setPipelineConfig: (config: any) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}) => {
  const useCache = pipelineConfig.cache;
  const validate = pipelineConfig.validate;
  const pipelineStages = pipelineConfig.stages;

  const handleValidationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setPipelineConfig({
      ...pipelineConfig,
      validate: { ...validate, [name]: checked },
    });
  };

  const installStageForm = (
    <form className="mx-auto p-4 bg-white rounded-lg shadow-lg">
      <label className="block mb-4 text-lg font-medium text-gray-700">
        Do you want to use a cache?
      </label>
      <div className="flex items-center mb-2">
        <input
          id="cache-yes"
          name="useCache"
          type="radio"
          value="yes"
          checked={useCache === true}
          onChange={() => setPipelineConfig({ ...pipelineConfig, cache: true })}
          className="h-4 w-4 text-indigo-600 border-gray-300"
        />
        <label htmlFor="cache-yes" className="ml-2 text-gray-700">
          Yes
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="cache-no"
          name="useCache"
          type="radio"
          value="no"
          checked={useCache === false}
          onChange={() =>
            setPipelineConfig({ ...pipelineConfig, cache: false })
          }
          className="h-4 w-4 text-indigo-600 border-gray-300"
        />
        <label htmlFor="cache-no" className="ml-2 text-gray-700">
          No
        </label>
      </div>
    </form>
  );

  const validateStageForm = (
    <form className="mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="block mb-4 text-lg font-bold text-gray-700">
        Validate stage
      </h2>
      <label className="block mb-2 text-md text-gray-700">
        What do you want to do?
      </label>
      <div className="flex items-center mb-2">
        <input
          id="format"
          name="format"
          type="checkbox"
          checked={validate.format}
          onChange={handleValidationChange}
          className="h-4 w-4 text-indigo-600 border-gray-300"
        />
        <label htmlFor="format" className="ml-2 text-gray-700">
          Format
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="lint"
          name="lint"
          type="checkbox"
          checked={validate.lint}
          onChange={handleValidationChange}
          className="h-4 w-4 text-indigo-600 border-gray-300"
        />
        <label htmlFor="lint" className="ml-2 text-gray-700">
          Lint
        </label>
      </div>
    </form>
  );

  const stageForms = [
    { name: "install", form: installStageForm },
    { name: "validate", form: validateStageForm },
  ];

  if (currentStep === 2) {
    return (
      <div className="p-4 bg-indigo-200 rounded-lg shadow-lg space-y-4">
        {pipelineStages.map((stage: string) => {
          return stageForms.find((form) => form.name === stage)?.form;
        })}
        <div className="flex space-x-4 justify-center">
          <button
            type="button"
            className="px-4 py-2 bg-white text-orange-500 border border-orange-500 rounded hover:bg-orange-50 transition"
            onClick={() => setCurrentStep(1)}
          >
            Previous
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
            onClick={() => setCurrentStep(2)}
          >
            Next
          </button>
        </div>
      </div>
    );
  } else {
    return <div className="h-48 bg-gray-300 opacity-50 rounded-lg shadow-lg" />;
  }
};

export default ConfigureStages;
