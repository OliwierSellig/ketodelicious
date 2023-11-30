import { ReactNode } from "react";

export interface ChildrenProp {
  children: ReactNode;
}

export interface ButtonProps {
  children: ReactNode;
  destination?: string;
  handleClick?: Function;
  size?: "sm" | "md" | "lg" | "xl";
  interPageLink?: boolean;
}
