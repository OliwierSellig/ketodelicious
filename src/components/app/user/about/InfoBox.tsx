import { ReactNode } from "react";

interface InfoBoxProps {
  children: ReactNode;
  dataType: string;
}

function InfoBox({ children, dataType }: InfoBoxProps) {
  return (
    <div className="flex rounded-2xl border-2 border-solid border-gray-tint-3 px-6 py-4 sm:px-4 sm:text-sm ">
      <p>
        <span className="text-gray-tint-1">{dataType}: </span>
        <span className="font-medium">{children}</span>
      </p>
    </div>
  );
}

export default InfoBox;
