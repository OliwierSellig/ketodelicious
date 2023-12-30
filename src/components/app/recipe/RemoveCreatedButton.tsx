import FilledButton from "@/components/global/FilledButton";
import Modal from "@/components/global/Modal";
import { MinusCircleIcon } from "@heroicons/react/24/outline";
import RemoveAuth from "./RemoveAuth";

interface RemoveCreatedButtonProps {
  id: string;
}

function RemoveCreatedButton({ id }: RemoveCreatedButtonProps) {
  return (
    <Modal>
      <Modal.Open opens="remove-recipe">
        <FilledButton
          size="xl"
          additionalClass="rounded-t-none md:rounded-b-none"
        >
          <span>Remove Recipe</span>
          <MinusCircleIcon className="h-8 w-8" />
        </FilledButton>
      </Modal.Open>
      <Modal.Window name="remove-recipe">
        <RemoveAuth id={id} />
      </Modal.Window>
    </Modal>
  );
}

export default RemoveCreatedButton;
