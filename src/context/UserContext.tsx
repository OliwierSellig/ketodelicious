"use client";

import {
  ActivityProp,
  BookmarkedRecipeItem,
  ChildrenProp,
  RecipeItemProp,
  actionType,
} from "@/utils/utilTypes";
import { createContext, useContext, useEffect, useReducer } from "react";
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
  addActivity: (type: actionType, recipeItem: RecipeItemProp) => void;
}

interface stateProps {
  bookmarked: BookmarkedRecipeItem[];
  created: RecipeItemProp[];
  activities: ActivityProp[];
}

const enum REDUCER_ACTION_TYPE {
  SET_BOOKMARKED,
  SET_CREATED,
  SET_ACTIVITIES,
}

type ReducerAction =
  | {
      type: REDUCER_ACTION_TYPE.SET_BOOKMARKED;
      payload: BookmarkedRecipeItem[];
    }
  | {
      type: REDUCER_ACTION_TYPE.SET_CREATED;
      payload: RecipeItemProp[];
    }
  | { type: REDUCER_ACTION_TYPE.SET_ACTIVITIES; payload: ActivityProp[] };

// --------------------------------------------

// ---------- Initial State and Reducer Function ---------------------------

const initialState: stateProps =
  typeof window !== "undefined"
    ? {
        bookmarked: localStorage.getItem("bookmarked")
          ? JSON.parse(localStorage.getItem("bookmarked") || "")
          : [],
        created: [],
        activities: localStorage.getItem("activities")
          ? JSON.parse(localStorage.getItem("activities") || "")
          : [],
      }
    : { bookmarked: [], created: [], activities: [] };

function reducer(state: stateProps, action: ReducerAction): stateProps {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.SET_BOOKMARKED:
      return { ...state, bookmarked: action.payload };
    case REDUCER_ACTION_TYPE.SET_CREATED:
      return { ...state, created: action.payload };
    case REDUCER_ACTION_TYPE.SET_ACTIVITIES:
      return { ...state, activities: action.payload };
    default:
      throw new Error("Undefined reducer action");
  }
}

// --------------------------------------------

function UserProvider({ children }: ChildrenProp) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const favourites = state.bookmarked.filter((recipe) => recipe.isFavourite);

  // ---------- Saving Into Local Storage ---------------------------

  useEffect(() => {
    localStorage.setItem("bookmarked", JSON.stringify(state.bookmarked));
  }, [state.bookmarked]);

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(state.activities));
  }, [state.activities]);

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

  function addActivity(type: actionType, recipeItem: RecipeItemProp) {
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
