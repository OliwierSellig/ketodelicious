import { FullDescriptionProps } from "@/utils/utilTypes";
import Modal from "@/components/global/Modal";
import FullDescription from "./FullDescription";

function OpenDescription({ fullDesc, recipeName }: FullDescriptionProps) {
  return (
    <Modal>
      <Modal.Open opens="full-description">
        <button className="text-jade-shade-2 transition-all duration-150 ease-linear hover:scale-105 hover:text-jade-normal focus:scale-105 focus:text-jade-normal">
          Read more
        </button>
      </Modal.Open>
      <Modal.Window name="full-description">
        <FullDescription fullDesc={fullDesc} recipeName={recipeName} />
      </Modal.Window>
    </Modal>
  );
}

export default OpenDescription;
