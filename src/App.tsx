import PipelineWizard from "./components/PipelineWizard";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <main className="min-h-screen pt-8 w-9/10 mx-auto justify-center text-center">
      <div className="w-fit mx-auto px-5">
        <h1 className="text-3xl font-bold text-base-content">
          Build-A-Pipeline
        </h1>
        <p className="text-xl text-base-content/80 font-semibold">
          0.1.0 of your pipeline
        </p>
        <div className="flex justify-center mt-2">
          <ThemeToggle />
        </div>
      </div>
      <div className="w-2/3 mx-auto">
        <PipelineWizard />
      </div>
    </main>
  );
}

export default App;
