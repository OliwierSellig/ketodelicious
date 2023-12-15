import StepItem from "./StepItem";

interface StepListProps {
  stepsList: string[];
}

function StepList({ stepsList }: StepListProps) {
  return (
    <div className="recipe-scroll overflow-y-scroll">
      <p className="font-mdeium text-center font-kalam text-4xl text-gray-tint-2">
        Start
      </p>
      <ul className="flex flex-col gap-4 px-4 py-6">
        {stepsList.map((step, i) => (
          <StepItem step={step} key={i}></StepItem>
        ))}
      </ul>
      <p className="font-mdeium text-center font-kalam text-4xl text-gray-tint-2">
        Finish
      </p>
    </div>
  );
}

export default StepList;
