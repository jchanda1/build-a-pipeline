import "./App.css";
import PipelineWizard from "./components/PipelineWizard";

function App() {
  return (
    <div className="bg-white">
      <main className="min-h-screen pt-8 w-9/10 mx-auto justify-center">
        <div className="bg-white rounded-lg w-fit mx-auto px-5">
          <h1 className="text-3xl font-bold text-gray-900">Build-A-Pipeline</h1>
          <p className="text-lg text-gray-600 font-semibold">
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
