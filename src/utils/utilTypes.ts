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

export type IngredientProp = {
  name: string;
  servingSize: { grams?: number; desc?: string };
};

export type NutritionListProps = {
  caloriesKCal: number;
  totalCarbs: number;
  netCarbs: number;
  sugar: number;
  fiber: number;
  protein: number;
  fat: number;
  transFat: number;
};

export type RecipeItemProp = {
  name: string;
  description: string;
  image: string;
  id: string;
  cookTime: number;
  prepareTime: number;
  tags: string[];
  nutrients: NutritionListProps;
  ingredients: IngredientProp[];
  steps: string[];
};

export type BookmarkedRecipeItem = RecipeItemProp & { isFavourite: boolean };

export type ImageSizesProps = {
  defaultSize: string;
  widthBase?: { deviceWidth: number; cardWidth: string }[];
};

export type ActivityProp = {
  date: any;
  action: actionType;
  recipe: { name: string; id: string };
};

export type actionType =
  | "created"
  | "deleted"
  | "unbookmarked"
  | "bookmarked"
  | "favored"
  | "unfavored";

export type StepProp = {
  pos: number;
  step: string;
};

export type UserNutritionItem = {
  netCarbs?: string;
  totalCarbs?: string;
  sugar?: string;
  fiber?: string;
  protein?: string;
  fat?: string;
  transFat?: string;
};

export type UserRecipe = {
  name: string;
  description: string;
  id: string;
  image: string;
  tags: string[];
  cookTime: number;
  prepareTime: number;

  nutrients: NutritionListProps;
  ingredients: IngredientProp[];
  steps: string[];
};
