import { useState } from "react";
import Platform from "./Platform";
import Stages from "./Stages";
import ConfigureStages from "./ConfigureStages";
import GenerateYaml from "./GenerateYaml";
import PipelineConfig from "../interfaces/PipelineConfig";

const PipelineWizard = () => {
  const [pipelineConfig, setPipelineConfig] = useState<PipelineConfig>({
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
    <div className="bg-primary shadow-lg rounded-3xl p-10 mt-5 animate-slide-in">
      <div className="mx-auto space-y-5">
        <Platform
          pipelineConfig={pipelineConfig}
          setPipelineConfig={setPipelineConfig}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
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
        <GenerateYaml
          pipelineConfig={pipelineConfig}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </div>
    </div>
  );
};

export default PipelineWizard;
