import { useState } from "react";
import Platform from "./Platform";
import Stages from "./Stages";

const PipelineWizard = () => {
  const [pipelineConfig, setPipelineConfig] = useState({
    platform: "",
    stages: [],
  });

  console.log(pipelineConfig);

  return (
    <div className="bg-gradient-to-b from-blue-800 to-blue-500 shadow-lg rounded-lg p-4 mt-5 ">
      <div className="w-2/3 mx-auto space-y-4">
        <Platform
          pipelineConfig={pipelineConfig}
          setPipelineConfig={setPipelineConfig}
        />
        <Stages
          pipelineConfig={pipelineConfig}
          setPipelineConfig={setPipelineConfig}
        />
      </div>
    </div>
  );
};

export default PipelineWizard;
