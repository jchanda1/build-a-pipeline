const ConfigureStages = ({
  pipelineConfig,
  setPipelineConfig,
  currentStep,
}: {
  pipelineConfig: any;
  setPipelineConfig: (config: any) => void;
  currentStep: number;
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
    <form className="max-w-md mx-auto p-4 bg-white rounded shadow">
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
    <form className="max-w-md mx-auto p-4 bg-white rounded shadow">
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
    return pipelineStages.map((stage: string) => {
      return stageForms.find((form) => form.name === stage)?.form;
    });
  }

  return null;
};

export default ConfigureStages;
