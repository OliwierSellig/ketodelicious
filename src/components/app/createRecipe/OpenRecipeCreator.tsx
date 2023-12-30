"use client";

import { ReactElement } from "react";
import Modal from "@/components/global/Modal";
import MainContainer from "./MainContainer";

function OpenRecipeCreator({ children }: { children: ReactElement }) {
  return (
    <Modal>
      <Modal.Open opens="create-recipe">{children}</Modal.Open>
      <Modal.Window name="create-recipe">
        <MainContainer onCloseModal={() => {}} />
      </Modal.Window>
    </Modal>
  );
}

export default OpenRecipeCreator;
