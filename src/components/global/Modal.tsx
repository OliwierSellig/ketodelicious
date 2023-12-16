"use client";

import { ChildrenProp } from "@/utils/utilTypes";
import { XMarkIcon } from "@heroicons/react/20/solid";
import {
  Dispatch,
  ReactElement,
  SetStateAction,
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

interface ModalContextProps {
  openName: string;
  close: () => void;
  open: Dispatch<SetStateAction<string>>;
}

const ModalContext = createContext<ModalContextProps | null>(null);

function Modal({ children }: ChildrenProp) {
  const [openName, setOpenName] = useState<string>("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

interface OpenProps {
  opens: string;
  children: ReactElement;
}

function Open({ children, opens: opensWindowName }: OpenProps) {
  const { open } = useModal();

  return cloneElement(children, {
    onClick: () => open(opensWindowName),
    onKeyDown: (e: any): void => {
      if (e.key === "Enter") {
        open(opensWindowName);
      }
    },
  });
}

interface WindowProps {
  name: string;
  children: ReactElement;
}

function Window({ name, children }: WindowProps) {
  const { openName, close } = useModal();
  const backgroundRef = useRef<HTMLDivElement>(null);

  if (name !== openName) return null;

  return createPortal(
    <div
      className="fixed left-0 top-0 z-[1000] h-screen w-screen animate-[fadeIn_0.3s] bg-gray-tint-1/40 backdrop-blur-sm"
      ref={backgroundRef}
      onClick={(e) => {
        if (e.target === backgroundRef.current) close();
      }}
    >
      <div>{cloneElement(children, { onCloseModal: close })}</div>
      <button
        onClick={close}
        aria-label="Close this window"
        className="absolute right-8 top-8 z-[1500] animate-[fadeRight_0.6s] rounded-full bg-jade-shade-2 p-2 shadow-sm transition-all duration-150 ease-linear focus-within:scale-105 focus-within:bg-jade-normal hover:scale-105 hover:bg-jade-normal sm:right-4 sm:top-4"
      >
        <XMarkIcon className="h-10 w-10 fill-white-normal xsm:h-8 xsm:w-8 " />
      </button>
    </div>,
    document.body,
  );
}

function useModal() {
  const modal = useContext(ModalContext);
  if (!modal) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return modal;
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
