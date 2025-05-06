interface PreviousButtonProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const PreviousButton = ({
  currentStep,
  setCurrentStep,
}: PreviousButtonProps) => {
  return (
    <button
      type="button"
      className="btn btn-outline"
      onClick={() => setCurrentStep(currentStep - 1)}
    >
      Previous
    </button>
  );
};

export default PreviousButton;
