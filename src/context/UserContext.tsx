"use client";

import { createContext, useContext, useEffect, useReducer } from "react";
import {
  ActivityProp,
  BookmarkedRecipeItem,
  ChildrenProp,
  RecipeItemProp,
  UserRecipe,
  actionType,
} from "@/utils/utilTypes";
import { doubleDigit } from "@/utils/utilFunctions";

const UserContext = createContext<ContextType | undefined>(undefined);

// ----- Setting Types -----

interface ContextType {
  state: stateProps;
  favourites: BookmarkedRecipeItem[];
  checkInBookmarked: (id: string) => boolean;
  checkIsFavourite: (id: string) => boolean;
  addToBookmarked: (
    recipeItem: RecipeItemProp,
    fav: boolean,
    action: actionType,
  ) => void;
  removeFromBookmarked: (recipeItem: RecipeItemProp) => void;
  getFilteredList: (type: "ingredients" | "tags") => (string | number)[][];
  addActivity: (
    type: actionType,
    recipeItem: RecipeItemProp | UserRecipe,
  ) => void;
  addToCreated: (item: UserRecipe) => void;
  removeFromCreated: (item: UserRecipe) => void;
  checkInCreated: (name: string) => boolean;
  getCreatedById: (id: string) => UserRecipe | undefined;
}

interface stateProps {
  bookmarked: BookmarkedRecipeItem[];
  created: UserRecipe[];
  activities: ActivityProp[];
  initialRender: boolean;
}

const enum REDUCER_ACTION_TYPE {
  SET_BOOKMARKED,
  SET_CREATED,
  SET_ACTIVITIES,
  SET_INITIAL_RENDER,
}

type ReducerAction =
  | {
      type: REDUCER_ACTION_TYPE.SET_BOOKMARKED;
      payload: BookmarkedRecipeItem[];
    }
  | {
      type: REDUCER_ACTION_TYPE.SET_CREATED;
      payload: UserRecipe[];
    }
  | { type: REDUCER_ACTION_TYPE.SET_ACTIVITIES; payload: ActivityProp[] }
  | { type: REDUCER_ACTION_TYPE.SET_INITIAL_RENDER };

// --------------------------------------------

// ---------- Initial State and Reducer Function ---------------------------

const initialState: stateProps = {
  bookmarked: [],
  created: [],
  activities: [],
  initialRender: true,
};

function reducer(state: stateProps, action: ReducerAction): stateProps {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.SET_BOOKMARKED:
      return { ...state, bookmarked: action.payload };
    case REDUCER_ACTION_TYPE.SET_CREATED:
      return { ...state, created: action.payload };
    case REDUCER_ACTION_TYPE.SET_ACTIVITIES:
      return { ...state, activities: action.payload };
    case REDUCER_ACTION_TYPE.SET_INITIAL_RENDER:
      return { ...state, initialRender: false };
    default:
      throw new Error("Undefined reducer action");
  }
}

// --------------------------------------------

function UserProvider({ children }: ChildrenProp) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const favourites = state.bookmarked.filter((recipe) => recipe.isFavourite);

  // ---------- Getting Data From Local Storage ---------------------------

  useEffect(() => {
    if (localStorage.getItem("bookmarked"))
      dispatch({
        type: REDUCER_ACTION_TYPE.SET_BOOKMARKED,
        payload: JSON.parse(localStorage.getItem("bookmarked") || ""),
      });
    if (localStorage.getItem("created"))
      dispatch({
        type: REDUCER_ACTION_TYPE.SET_CREATED,
        payload: JSON.parse(localStorage.getItem("created") || ""),
      });
    if (localStorage.getItem("activites"))
      dispatch({
        type: REDUCER_ACTION_TYPE.SET_ACTIVITIES,
        payload: JSON.parse(localStorage.getItem("activities") || ""),
      });

    dispatch({ type: REDUCER_ACTION_TYPE.SET_INITIAL_RENDER });
  }, []);

  // --------------------------------------------

  // ---------- Saving Data To Local Storage ---------------------------

  useEffect(() => {
    if (!state.initialRender)
      localStorage.setItem("bookmarked", JSON.stringify(state.bookmarked));
  }, [state.bookmarked, state.initialRender]);

  useEffect(() => {
    if (!state.initialRender)
      localStorage.setItem("activities", JSON.stringify(state.activities));
  }, [state.activities, state.initialRender]);

  useEffect(() => {
    if (!state.initialRender)
      localStorage.setItem("created", JSON.stringify(state.created));
  }, [state.created, state.initialRender]);

  // --------------------------------------------

  // ---------- Lists Maniputulation Functions ---------------------------

  function checkInBookmarked(id: string): boolean {
    return state.bookmarked.map((recipe) => recipe.id).includes(id);
  }

  function checkIsFavourite(id: string): boolean {
    return (
      state.bookmarked.find((recipe) => recipe.id === id)?.isFavourite || false
    );
  }

  function addToBookmarked(
    recipeItem: RecipeItemProp,
    fav: boolean,
    action: actionType,
  ) {
    const filteredList = state.bookmarked.filter(
      (recipe) => recipe.id !== recipeItem.id,
    );
    const bookmarkedItem: BookmarkedRecipeItem = {
      ...recipeItem,
      isFavourite: fav,
    };
    const newArr = [...filteredList, bookmarkedItem];
    dispatch({ type: REDUCER_ACTION_TYPE.SET_BOOKMARKED, payload: newArr });
    addActivity(action, recipeItem);
  }

  function removeFromBookmarked(recipeItem: RecipeItemProp) {
    const newArr = state.bookmarked.filter(
      (recipe) => recipe.id !== recipeItem.id,
    );
    dispatch({ type: REDUCER_ACTION_TYPE.SET_BOOKMARKED, payload: newArr });
    addActivity("unbookmarked", recipeItem);
  }

  function getFilteredList(type: "ingredients" | "tags") {
    const arr: string[] = [];
    const rawArr =
      type === "ingredients"
        ? state.bookmarked.map((recipe) =>
            recipe.ingredients.map((ing) => ing.name),
          )
        : state.bookmarked.map((recipe) => recipe.tags);

    const mergedArr = arr.concat(...rawArr);

    const uniqueElements = [...new Set(mergedArr)];

    const elementCounts = uniqueElements.map((value) => [
      value,
      mergedArr.filter((str) => str === value).length,
    ]);

    return elementCounts.sort((a, b) => Number(b[1]) - Number(a[1]));
  }

  function addActivity(
    type: actionType,
    recipeItem: RecipeItemProp | UserRecipe,
  ) {
    const currentDate = new Date();
    const dateString = `${doubleDigit(currentDate.getDate())}.${doubleDigit(
      currentDate.getMonth() + 1,
    )}.${currentDate.getFullYear()}`;

    const activityItem: ActivityProp = {
      date: dateString,
      action: type,
      recipe: {
        name: recipeItem.name,
        id: recipeItem.id,
      },
    };

    const newArr = [activityItem, ...state.activities];

    dispatch({ type: REDUCER_ACTION_TYPE.SET_ACTIVITIES, payload: newArr });
  }

  function addToCreated(item: UserRecipe) {
    const newArr = [...state.created, item];

    dispatch({ type: REDUCER_ACTION_TYPE.SET_CREATED, payload: newArr });
    addActivity("created", item);
  }

  function removeFromCreated(item: UserRecipe) {
    const filteredArr = state.created.filter((recipe) => recipe.id !== item.id);

    dispatch({ type: REDUCER_ACTION_TYPE.SET_CREATED, payload: filteredArr });
    addActivity("deleted", item);
  }

  function checkInCreated(name: string) {
    return state.created
      .map((recipe) => recipe.name.toLowerCase())
      .includes(name.toLowerCase());
  }

  function getCreatedById(id: string) {
    return state.created.find((recipe) => recipe.id === id);
  }

  // --------------------------------------------

  return (
    <UserContext.Provider
      value={{
        state,
        favourites,
        getFilteredList,
        checkInBookmarked,
        checkIsFavourite,
        addToBookmarked,
        removeFromBookmarked,
        addActivity,
        addToCreated,
        removeFromCreated,
        checkInCreated,
        getCreatedById,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const value = useContext(UserContext);
  if (value === undefined)
    throw new Error("User context was used outside a provied");
  return value;
}

export { useUser, UserProvider };
