import { ReactNode } from "react";

export interface ChildrenProp {
  children: ReactNode;
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

export type RecipeItemProp = {
  name: string;
  description: string;
  image: string;
  id: string;
  cookTime: number;
  prepareTime: number;
  tags: string[];
  nutrients: { caloriesKCal: number };
  ingredients: { name: string; servingSize: { grams: number } }[];
  steps: string[];
};

export type ImageSizesProps = {
  defaultSize: string;
  widthBase?: { deviceWidth: number; cardWidth: string }[];
};
