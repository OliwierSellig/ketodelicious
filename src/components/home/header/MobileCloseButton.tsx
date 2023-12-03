import { XMarkIcon } from "@heroicons/react/20/solid";

interface MobileCloseButtonProps {
  handleClick: Function;
}

function MobileCloseButton({ handleClick }: MobileCloseButtonProps) {
  return (
    <div className="hidden w-1/2 grid-cols-[1fr_max-content] items-center gap-4 lg:grid xsm:w-2/3">
      <div className="h-[2px] w-full origin-left animate-[scaleUp_600ms] rounded-3xl bg-white-normal" />
      <button
        onClick={() => handleClick()}
        aria-label="Close the navbar"
        className=" animate-[fadeRight_600ms] [&:focus>svg]:fill-jade-normal"
      >
        <XMarkIcon className="h-10 w-10 fill-white-normal  transition-all duration-200 ease-linear hover:fill-jade-normal" />
      </button>
    </div>
  );
}

export default MobileCloseButton;
