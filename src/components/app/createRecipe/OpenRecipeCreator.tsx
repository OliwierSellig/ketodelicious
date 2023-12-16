"use client";

import Modal from "@/components/global/Modal";
import MainContainer from "./MainContainer";
import { ReactElement } from "react";

function OpenRecipeCreator({ children }: { children: ReactElement }) {
  return (
    <Modal>
      <Modal.Open opens="create-recipe">{children}</Modal.Open>
      <Modal.Window name="create-recipe">
        <MainContainer />
      </Modal.Window>
    </Modal>
  );
}

export default OpenRecipeCreator;
