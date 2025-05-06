import PipelineWizard from "./components/PipelineWizard";

function App() {
  return (
    <div className="bg-base-100 max-w-7xl mx-auto text-center">
      <main className="min-h-screen pt-8 w-9/10 mx-auto justify-center">
        <div className="bg-base-100 rounded-lg w-fit mx-auto px-5">
          <h1 className="text-3xl font-bold text-base-content">
            Build-A-Pipeline
          </h1>
          <p className="text-lg text-base-content/60 font-semibold">
            0.1.0 of your pipeline
          </p>
        </div>
        <div className="w-4/5 mx-auto">
          <PipelineWizard />
        </div>
      </main>
    </div>
  );
}

export default App;
