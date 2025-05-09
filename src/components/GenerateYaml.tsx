import { Prism } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import PipelineSteps from "./PipelineSteps";

interface GenerateYamlProps {
  pipelineConfig: {
    platform: string;
    stages: string[];
    cache: boolean;
    validate: {
      format: boolean;
      lint: boolean;
    };
  };
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const GenerateYaml = ({ currentStep }: GenerateYamlProps) => {
  const [showYaml, setShowYaml] = useState(false);

  // This will be replaced with actual YAML generation logic
  const sampleYaml = `stages:
  - install
  - validate
  - test
  - version

install:
  stage: install
  script:
    - npm install
`;

  const handleDownload = () => {
    const blob = new Blob([sampleYaml], { type: "text/yaml" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = ".gitlab-ci.yml";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div
      className={`p-4 bg-base-100 rounded-lg shadow-lg ${
        currentStep !== PipelineSteps.GENERATE_YAML
          ? "opacity-50 pointer-events-none"
          : "opacity-100"
      }`}
    >
      {!showYaml ? (
        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={() => setShowYaml(true)}
            className="btn btn-primary text-lg font-semibold"
          >
            Generate your pipeline!
          </button>
        </div>
      ) : (
        <>
          <h2 className="block mb-4 text-lg font-bold text-base-content">
            Generated Pipeline Configuration
          </h2>
          <div className="rounded-lg overflow-hidden">
            <Prism
              language="yaml"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: "1.5rem",
                backgroundColor: "#1e1e1e",
                borderRadius: "0.5rem",
                fontSize: "0.9rem",
                lineHeight: "1.5",
              }}
            >
              {sampleYaml}
            </Prism>
          </div>
          <div className="mt-4 flex justify-center">
            <button onClick={handleDownload} className="btn btn-primary">
              Download .gitlab-ci.yml
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default GenerateYaml;
