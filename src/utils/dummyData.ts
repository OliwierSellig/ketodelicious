import { StaticImageData } from "next/image";
import dish1 from "../../public/images/dish-1.jpg";
import dish2 from "../../public/images/dish-2.jpg";
import dish3 from "../../public/images/dish-3.jpg";

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
