"use client";

import Link from "next/link";
import { ReactNode } from "react";

export interface FilledButtonProps {
  children: ReactNode;
  label?: string;
  destination?: string;
  handleClick?: Function;
  onClick?: Function;
  size?: "sm" | "md" | "lg" | "xl";
  interPageLink?: boolean;
  additionalClass?: string;
  disabled?: boolean;
}

function FilledButton({
  children,
  destination,
  label = "",
  handleClick,
  onClick,
  size = "md",
  additionalClass = "",
  disabled = false,
}: FilledButtonProps) {
  const buttonStyles = `block ${
    size === "xl" ? "text-2xl" : "text-xl"
  } tacking-wide text-white-normal ${
    size === "sm"
      ? "py-1 px-4"
      : size === "md"
        ? "py-2 px-6"
        : size === "lg"
          ? "py-3 px-8"
          : "py-4 px-14"
  } bg-jade-shade-2 justify-center rounded-2xl select-none cursor-pointer shadow-sm hover:bg-jade-normal focus:bg-jade-normal transition-normal hover:shadow hover:scale-[1.03] focus:scale-[1.03] flex gap-2 items-center ${
    disabled ? "opacity-50" : ""
  } ${additionalClass}`;

  if (destination && !handleClick) {
    return (
      <Link aria-label={label} href={destination} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  if (destination && handleClick) {
    return (
      <Link
        aria-label={label}
        href={destination}
        onClick={() => handleClick?.()}
        className={buttonStyles}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled}
      aria-label={label}
      onClick={() => {
        handleClick?.();
        onClick?.();
      }}
      className={buttonStyles}
    >
      {children}
    </button>
  );
}

export default FilledButton;
