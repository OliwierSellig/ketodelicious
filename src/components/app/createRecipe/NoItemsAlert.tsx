import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";

interface NoItemsAlertProps {
  name: string;
  additionalClass?: string;
}

function NoItemsAlert({ name, additionalClass = "" }: NoItemsAlertProps) {
  return (
    <p
      className={`flex flex-grow items-center justify-center  ${additionalClass}`}
    >
      <span className="first-letter: text-xl text-gray-tint-2">
        No {name} yet, please add some
      </span>
      <ClipboardDocumentIcon className="h-8 w-8 stroke-gray-tint-2" />
    </p>
  );
}

export default NoItemsAlert;
