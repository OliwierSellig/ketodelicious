import CreateElementsButton from "../CreateElementsButton";
import NoItemsAlert from "../NoItemsAlert";
import StepList from "./StepList";

interface PreparationSlideProps {
  stepsList: string[];
  openStepsAdd: () => void;
}

function PreparationSlide({ stepsList, openStepsAdd }: PreparationSlideProps) {
  return (
    <div className="flex h-full w-full flex-col justify-start pt-12">
      <CreateElementsButton
        handleClick={openStepsAdd}
        currentNumber={stepsList.length}
        minReqName="step"
        minReqNumber={1}
        additionalClass="mb-12"
      >
        Preparation Steps
      </CreateElementsButton>
      {stepsList.length > 0 ? (
        <StepList stepsList={stepsList} />
      ) : (
        <NoItemsAlert name="steps" additionalClass="self-center" />
      )}
    </div>
  );
}

export default PreparationSlide;
