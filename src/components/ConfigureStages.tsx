import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";

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
    <form className="mx-auto p-4 bg-accent rounded-lg shadow-lg">
      <label className="block mb-4 text-lg font-medium text-gray-700">
        Do you want to use a cache?
      </label>
      <div className="flex justify-center space-x-8">
        <div className="flex items-center">
          <input
            id="cache-yes"
            name="useCache"
            type="radio"
            value="yes"
            checked={useCache === true}
            onChange={() =>
              setPipelineConfig({ ...pipelineConfig, cache: true })
            }
            className="h-4 w-4 text-primary-500 border-gray-300"
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
            className="h-4 w-4 text-primary-500 border-gray-300"
          />
          <label htmlFor="cache-no" className="ml-2 text-gray-700">
            No
          </label>
        </div>
      </div>
    </form>
  );

  const validateStageForm = (
    <form className="mx-auto p-4 bg-accent rounded-lg shadow-lg">
      <h2 className="block mb-4 text-lg font-bold text-gray-700">
        Validate stage
      </h2>
      <label className="block mb-2 text-md text-gray-700">
        What do you want to do?
      </label>
      <div className="flex justify-center space-x-4">
        <div className="flex items-center">
          <input
            id="format"
            name="format"
            type="checkbox"
            checked={validate.format}
            onChange={handleValidationChange}
            className="h-4 w-4 text-primary-500 border-gray-300"
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
            className="h-4 w-4 text-primary-500 border-gray-300"
          />
          <label htmlFor="lint" className="ml-2 text-gray-700">
            Lint
          </label>
        </div>
      </div>
    </form>
  );

  const stageForms = [
    { name: "install", form: installStageForm },
    { name: "validate", form: validateStageForm },
  ];

  if (currentStep === 3) {
    return (
      <form className="p-4 bg-base-200 rounded-lg shadow-lg space-y-4">
        <label className="block mb-2 text-lg font-medium text-base-content">
          3. Extra configuration...
        </label>
        {pipelineStages.map((stage: string) => {
          return stageForms.find((form) => form.name === stage)?.form;
        })}
        <div className="flex space-x-4 justify-center">
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
    );
  } else {
    return (
      <form className="p-4 bg-base-200 rounded-lg shadow-lg space-y-4 opacity-50">
        <label className="block mb-2 text-lg font-medium text-base-content">
          3. Extra configuration...
        </label>
      </form>
    );
  }
};

export default ConfigureStages;
