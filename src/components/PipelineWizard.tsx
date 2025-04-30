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
    <div className="bg-gradient-to-b from-orange-500 to-orange-300 shadow-lg rounded-3xl p-10 mt-5 animate-fade-in">
      <div className="mx-auto space-y-5">
        <Platform
          pipelineConfig={pipelineConfig}
          setPipelineConfig={setPipelineConfig}
        />
        <Stages
          pipelineConfig={pipelineConfig}
          setPipelineConfig={setPipelineConfig}
          setCurrentStep={setCurrentStep}
          currentStep={currentStep}
        />
        <ConfigureStages
          pipelineConfig={pipelineConfig}
          setPipelineConfig={setPipelineConfig}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </div>
    </div>
  );
};

export default PipelineWizard;
