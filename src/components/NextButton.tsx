interface NextButtonProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const NextButton = ({ currentStep, setCurrentStep }: NextButtonProps) => {
  return (
    <button
      type="button"
      className="px-4 py-2 bg-primary-500 text-white rounded-sm hover:bg-primary-600 transition"
      onClick={() => setCurrentStep(currentStep + 1)}
    >
      Next
    </button>
  );
};

export default NextButton;
