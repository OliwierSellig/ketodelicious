import { RecipeItemProp } from "@/utils/utilTypes";

const KEY = "4450770199msh126e1e41a9aa96cp1059e0jsncc20db639921";

const HOST = "low-carb-recipes.p.rapidapi.com";

const URL = "https://low-carb-recipes.p.rapidapi.com/";

export interface recipeItem {
  name?: string;
  tags?: string[];
  includeIngredients?: string[];
  excludeIngredients?: string[];
  maxPrepareTime?: number;
  maxCookTime?: number;
  maxCalories?: number;
  maxNetCarbs?: number;
  maxSugar?: number;
  maxAddedSugar?: number;
  limit?: number;
}

export async function fetchRecipes(
  searchParams: recipeItem,
  signal?: AbortSignal,
) {
  const paramList = [];
  if (searchParams.name) paramList.push(`name=${searchParams.name}`);

  if (searchParams.tags && searchParams.tags?.length > 0)
    paramList.push(`tags=${searchParams.tags.join("%3B")}`);

  if (
    searchParams.includeIngredients &&
    searchParams.includeIngredients.length > 0
  )
    paramList.push(
      `includeIngredients=${searchParams.includeIngredients.join("%3B")}`,
    );

  if (
    searchParams.excludeIngredients &&
    searchParams.excludeIngredients.length > 0
  )
    paramList.push(
      `excludeIngredients=${searchParams.excludeIngredients.join("%3B")}`,
    );

  if (
    searchParams.maxPrepareTime !== undefined &&
    searchParams.maxPrepareTime > 0
  )
    paramList.push(`maxPrepareTime=${searchParams.maxPrepareTime}`);

  if (searchParams.maxCookTime !== undefined && searchParams.maxCookTime >= 0)
    paramList.push(`maxCookTime=${searchParams.maxCookTime}`);

  if (searchParams.maxCalories !== undefined && searchParams.maxCalories > 0)
    paramList.push(`maxCalories=${searchParams.maxCalories}`);

  if (searchParams.maxNetCarbs !== undefined && searchParams.maxNetCarbs >= 0)
    paramList.push(`maxNetCarbs=${searchParams.maxNetCarbs}`);

  if (searchParams.maxSugar !== undefined && searchParams.maxSugar >= 0)
    paramList.push(`maxSugar=${searchParams.maxSugar}`);

  if (
    searchParams.maxAddedSugar !== undefined &&
    searchParams.maxAddedSugar >= 0
  )
    paramList.push(`maxAddedSugar=${searchParams.maxAddedSugar}`);

  paramList.push(`limit=${searchParams.limit || 10}`);

  const params = `?${paramList.join("&")}`;

  const res = await fetch(`${URL}search${params}`, {
    method: "GET",
    signal: signal,
    headers: {
      "X-RapidAPI-Key": KEY,
      "X-RapidAPI-Host": HOST,
    },
    next: { revalidate: 30 },
  });

  const data: RecipeItemProp[] | { message: string } = await res.json();

  return data;
}

export async function fetchRecipeById(id: string) {
  const res = await fetch(`${URL}recipes/${id}`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": KEY,
      "X-RapidAPI-Host": HOST,
    },
    next: { revalidate: 30 },
  });

  const data = await res.json();

  return data;
}

export async function fetchRandomRecipe() {
  const res = await fetch(`${URL}random`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": KEY,
      "X-RapidAPI-Host": HOST,
    },
    cache: "no-store",
  });

  const data = res.json();

  return data;
}
