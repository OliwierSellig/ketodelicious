import { FireIcon } from "@heroicons/react/24/outline";

interface PreparingSlideProps {
  prepList: string[];
}

function PreparingSlide({ prepList }: PreparingSlideProps) {
  return (
    <>
      <h2 className="mb-6 flex items-center justify-center gap-2 font-ubuntu text-3xl font-medium">
        <FireIcon className="h-10 w-10 stroke-gray-tint-1" />
        <span>Preparing Steps</span>
      </h2>
      <ul className="flex max-w-[1000px]  flex-col items-center gap-6">
        {prepList.map((step, i) => (
          <li className="grid grid-cols-[60px_1fr] items-center gap-4" key={i}>
            <p className="font-kalam text-6xl font-bold text-jade-shade-2">
              {i + 1}.
            </p>
            <p className="text-lg">{step}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PreparingSlide;
