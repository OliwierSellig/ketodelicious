import { XMarkIcon } from "@heroicons/react/20/solid";

interface MobileCloseButtonProps {
  handleClick: Function;
}

function MobileCloseButton({ handleClick }: MobileCloseButtonProps) {
  return (
    <div className="hidden lg:grid grid-cols-[1fr_max-content] w-1/2 items-center gap-4 xsm:w-2/3">
      <div className="h-[2px] w-full rounded-3xl bg-white-normal animate-[scaleUp_600ms] origin-left" />
      <button
        onClick={() => handleClick()}
        aria-label="Close the navbar"
        className=" [&:focus>svg]:fill-jade-normal animate-[fadeRight_600ms]"
      >
        <XMarkIcon className="w-10 h-10 fill-white-normal  transition-all duration-200 ease-linear hover:fill-jade-normal" />
      </button>
    </div>
  );
}

export default MobileCloseButton;
