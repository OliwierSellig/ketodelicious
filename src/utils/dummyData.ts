import { StaticImageData } from "next/image";
import dish1 from "../../public/images/dish-1.jpg";
import dish2 from "../../public/images/dish-2.jpg";
import dish3 from "../../public/images/dish-3.jpg";
import { IngredientItem, NutritionItem } from "./utilTypes";

interface recipesListProps {
  image: StaticImageData;
  name: string;
  cookingTime: number;
  calories: number;
}

export const recipeList: recipesListProps[] = [
  {
    image: dish1,
    name: "Grilled Chicken Ceaser Salad",
    cookingTime: 25,
    calories: 860,
  },
  {
    image: dish2,
    name: "Zucchini Noodles with Pesto and Tomatoes",
    cookingTime: 30,
    calories: 920,
  },
  {
    image: dish3,
    name: "Salmon with Roasted Vegetables",
    cookingTime: 15,
    calories: 735,
  },
  {
    image: dish1,
    name: "Eggplant Lasagna",
    cookingTime: 45,
    calories: 410,
  },
  {
    image: dish2,
    name: "Cauliflower Fried Rice with Shrimp",
    cookingTime: 25,
    calories: 675,
  },
  {
    image: dish3,
    name: "Turkey and Avocado Lettuce Wraps",
    cookingTime: 15,
    calories: 275,
  },
];

export const nutriList: NutritionItem = {
  energy: 125,
  totalCarbs: 12,
  netCarbs: 4,
  sugar: 2,
  fiber: 1.5,
  protein: 3.7,
  fat: 12.9,
  transFat: 0.4,
};

export const tagList = [
  "15-minute-meal",
  "beef-free",
  "breakfast",
  "dairy-free",
  "eggs",
  "dessert",
  "keto",
  "gluten-free",
  "fish-free",
];

export const ingredientsList: IngredientItem[] = [
  {
    name: "Butter",
    textAmount: "2 tablespoons",
    gramAmount: "24g",
  },
  {
    name: "Cream Cheese",
    textAmount: "2 tablespoons",
    gramAmount: "32g",
  },
  {
    name: "Vanilla Extract",
    textAmount: "1 tablespoon",
    gramAmount: "4g",
  },
  {
    name: "Raw Egg",
    textAmount: "1 large",
    gramAmount: "50g",
  },
  {
    name: "Blueberries, Frozen, Unsweetened",
    textAmount: "2 1/2 tablespoon",
    gramAmount: "22g",
  },
  {
    name: "The Ultimate Sugar Replacement Granular by Swerve ",
    textAmount: "1 tablespoon",
  },
];

export const preparingSteps = [
  "Combine the butter and cream cheese together in a heat-safe container. Microwave the ingredients on high heat for 20 seconds until they’re melted. Stir the butter and cream cheese together into one mixture.",
  "Combine the butter and cream cheese mixture with coconut flour, brown sugar substitute, and vanilla extract in the heat-safe dish. You may also wish to add a small pinch of salt. If necessary, you can mix the ingredients in a separate mixing bowl before adding it to your heat-safe dish or mug.",
  "Mix the egg into the batter. Follow by folding the blueberries into the batter. It may help you to freeze the blueberries beforehand so they don’t break up and bleed in the batter.",
  "Combine the butter and cream cheese together in a heat-safe container. Microwave the ingredients on high heat for 20 seconds until they’re melted. Stir the butter and cream cheese together into one mixture.",
  "Combine the butter and cream cheese mixture with coconut flour, brown sugar substitute, and vanilla extract in the heat-safe dish. You may also wish to add a small pinch of salt. If necessary, you can mix the ingredients in a separate mixing bowl before adding it to your heat-safe dish or mug.",
  "Mix the egg into the batter. Follow by folding the blueberries into the batter. It may help you to freeze the blueberries beforehand so they don’t break up and bleed in the batter.",
  "Combine the butter and cream cheese together in a heat-safe container. Microwave the ingredients on high heat for 20 seconds until they’re melted. Stir the butter and cream cheese together into one mixture.",
  "Combine the butter and cream cheese mixture with coconut flour, brown sugar substitute, and vanilla extract in the heat-safe dish. You may also wish to add a small pinch of salt. If necessary, you can mix the ingredients in a separate mixing bowl before adding it to your heat-safe dish or mug.",
  "Mix the egg into the batter. Follow by folding the blueberries into the batter. It may help you to freeze the blueberries beforehand so they don’t break up and bleed in the batter.",
];
