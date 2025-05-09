interface PipelineConfig {
  platform: string;
  stages: string[];
  cache: boolean;
  validate: {
    format: boolean;
    lint: boolean;
  };
}

export default PipelineConfig;
