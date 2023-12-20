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

export type RecipeCardProp = {
  name: string;
  image: string;
  id: string;
  prepareTime: number;
  nutrients: { caloriesKCal: number };
  ingredients: { name: string; servingSize: { grams: number } }[];
};
