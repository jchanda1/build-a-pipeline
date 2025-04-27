import "./App.css";
import PipelineWizard from "./components/PipelineWizard";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-gray-900">Build-A-Pipeline</h1>
      <p className="text-lg text-gray-600 font-semibold">
        0.1.0 of your pipeline
      </p>
      <PipelineWizard />
    </div>
  );
}

export default App;
