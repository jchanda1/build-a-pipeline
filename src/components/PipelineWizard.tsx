import { useState } from "react";
import Platform from "./Platform";
import Stages from "./Stages";
import ConfigureStages from "./ConfigureStages";

const PipelineWizard = () => {
  const [pipelineConfig, setPipelineConfig] = useState({
    platform: "",
    stages: [],
    cache: false,
    validate: {
      format: false,
      lint: false,
    },
  });

  const [currentStep, setCurrentStep] = useState(1);

  console.log(pipelineConfig);

  return (
    <div className="bg-gradient-to-b from-blue-800 to-blue-500 shadow-lg rounded-lg p-10 mt-5 ">
      <div className="mx-auto space-y-5">
        <Platform
          pipelineConfig={pipelineConfig}
          setPipelineConfig={setPipelineConfig}
        />
        <Stages
          pipelineConfig={pipelineConfig}
          setPipelineConfig={setPipelineConfig}
          setCurrentStep={setCurrentStep}
        />
        <ConfigureStages
          pipelineConfig={pipelineConfig}
          setPipelineConfig={setPipelineConfig}
          currentStep={currentStep}
        />
      </div>
    </div>
  );
};

export default PipelineWizard;
