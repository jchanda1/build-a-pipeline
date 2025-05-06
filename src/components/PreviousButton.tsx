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
      className="px-4 py-2 bg-white text-primary-500 border border-primary-500 rounded-sm hover:bg-primary-50 transition"
      onClick={() => setCurrentStep(currentStep - 1)}
    >
      Previous
    </button>
  );
};

export default PreviousButton;