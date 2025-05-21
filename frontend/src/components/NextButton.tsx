interface NextButtonProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const NextButton = ({ currentStep, setCurrentStep }: NextButtonProps) => {
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => setCurrentStep(currentStep + 1)}
    >
      Next
    </button>
  );
};

export default NextButton;
