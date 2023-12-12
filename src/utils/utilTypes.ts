import { ReactNode } from "react";

export interface ChildrenProp {
  children: ReactNode;
}

export interface ButtonProps {
  children: ReactNode;
  destination?: string;
  handleClick?: Function;
  onClick?: Function;
  size?: "sm" | "md" | "lg" | "xl";
  interPageLink?: boolean;
  additionalClass?: string;
}

export type NutritionItem = {
  energy: number;
  totalCarbs: number;
  netCarbs: number;
  sugar: number;
  fiber: number;
  protein: number;
  fat: number;
  transFat: number;
};

export type IngredientItem = {
  name: string;
  textAmount?: string;
  gramAmount?: string;
};

export interface FullDescriptionProps {
  fullDesc: string;
  recipeName: string;
}
