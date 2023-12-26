import FilledButton from "@/components/global/FilledButton";
import InfoBox from "./InfoBox";
import { PencilSquareIcon } from "@heroicons/react/20/solid";

function AboutInfo() {
  return (
    <>
      <div className="mb-8 flex flex-col gap-4">
        <InfoBox dataType="Username">oliwiersellig54</InfoBox>
        <InfoBox dataType="Email">oliwierandrzej.sellig@gmail.com</InfoBox>
        <InfoBox dataType="Phone">+48 514 049 144</InfoBox>
      </div>
      <FilledButton size="lg" additionalClass="self-center">
        <PencilSquareIcon className="h-7 w-7" />
        <span className="sm:text-lg">Edit Info</span>
      </FilledButton>
    </>
  );
}

export default AboutInfo;
