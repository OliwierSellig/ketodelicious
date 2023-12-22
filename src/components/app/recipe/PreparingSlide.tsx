import { FireIcon } from "@heroicons/react/24/outline";

interface PreparingSlideProps {
  prepList: string[];
}

function PreparingSlide({ prepList }: PreparingSlideProps) {
  return (
    <>
      <h2 className="mb-6 flex items-center justify-center gap-2 font-ubuntu text-3xl font-medium xsm:text-2xl">
        <FireIcon className="h-10 w-10 stroke-gray-tint-1 xsm:h-9 xsm:w-9" />
        <span>Preparing Steps</span>
      </h2>
      <ul className="xsm:gap-10z flex  max-w-[1000px] flex-col  items-start gap-6">
        {prepList.map((step, i) => (
          <li
            className="grid grid-cols-[60px_1fr] items-center gap-4 sm:grid-cols-[30px_1fr] xsm:grid-cols-1 xsm:gap-2"
            key={i}
          >
            <p className="font-kalam text-6xl font-bold text-jade-shade-2 sm:text-4xl">
              {i + 1}.
            </p>
            <p className="text-lg sm:text-base">{step}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PreparingSlide;
