"use client";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import { fetchRecipes } from "@/lib/recipes";
import { ChildrenProp, RecipeItemProp } from "@/utils/utilTypes";

const SearchContext = createContext<ContextType | undefined>(undefined);

// ----- Setting Types -----

interface stateProps {
  name: string;
  includedIngredients: string[];
  excludedIngredients: string[];
  maxCookTime: string;
  maxPrepareTime: string;
  maxCalories: string;
  maxNetCarbs: string;
  recipeList: RecipeItemProp[];
  searchIterator: number;
  isLoading: boolean;
}

interface ContextType {
  state: stateProps;
  setName: (name: string) => void;
  setMax: (
    max: string,
    maxType: "calories" | "cookTime" | "prepareTime" | "netCarbs",
  ) => void;
  addToList: (listType: "include" | "exclude", ing: string) => void;
  removeFromList: (listType: "include" | "exclude", ing: string) => void;
  modifyIterator: (type: "increment" | "decrement" | "refresh") => null;
  setLoading: (type: boolean) => void;
}

const enum REDUCER_ACTION_TYPE {
  SET_NAME,
  SET_INCLUDED_INGREDIENTS,
  SET_EXCLUDED_INGREDIENTS,
  SET_MAX_COOKTIME,
  SET_MAX_PREPARETIME,
  SET_MAX_CALORIES,
  SET_MAX_NETCARBS,
  SET_RECIPE_LIST,
  SET_LOADING,
  ITERATOR_INCREMENT,
  ITERATOR_DECREMENT,
  ITERATOR_REFRESH,
}

type ReducerAction =
  | {
      type:
        | REDUCER_ACTION_TYPE.SET_NAME
        | REDUCER_ACTION_TYPE.SET_MAX_CALORIES
        | REDUCER_ACTION_TYPE.SET_MAX_COOKTIME
        | REDUCER_ACTION_TYPE.SET_MAX_NETCARBS
        | REDUCER_ACTION_TYPE.SET_MAX_PREPARETIME;
      payload: string;
    }
  | {
      type:
        | REDUCER_ACTION_TYPE.SET_INCLUDED_INGREDIENTS
        | REDUCER_ACTION_TYPE.SET_EXCLUDED_INGREDIENTS;
      payload: string[];
    }
  | { type: REDUCER_ACTION_TYPE.SET_RECIPE_LIST; payload: RecipeItemProp[] }
  | {
      type:
        | REDUCER_ACTION_TYPE.ITERATOR_DECREMENT
        | REDUCER_ACTION_TYPE.ITERATOR_INCREMENT
        | REDUCER_ACTION_TYPE.ITERATOR_REFRESH;
    }
  | { type: REDUCER_ACTION_TYPE.SET_LOADING; payload: boolean };

// --------------------------------------------

// ---------- Initial State and Reducer Function ---------------------------

const initialState: stateProps = {
  name: "",
  includedIngredients: [],
  excludedIngredients: [],
  maxCookTime: "",
  maxPrepareTime: "",
  maxCalories: "",
  maxNetCarbs: "",
  recipeList: [],
  searchIterator: 0,
  isLoading: true,
};
function reducer(
  state: stateProps,
  action: ReducerAction,
): typeof initialState {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.SET_NAME:
      return { ...state, name: action.payload };
    case REDUCER_ACTION_TYPE.SET_INCLUDED_INGREDIENTS:
      return { ...state, includedIngredients: action.payload };
    case REDUCER_ACTION_TYPE.SET_EXCLUDED_INGREDIENTS:
      return { ...state, excludedIngredients: action.payload };
    case REDUCER_ACTION_TYPE.SET_MAX_CALORIES:
      return { ...state, maxCalories: action.payload };
    case REDUCER_ACTION_TYPE.SET_MAX_COOKTIME:
      return { ...state, maxCookTime: action.payload };
    case REDUCER_ACTION_TYPE.SET_MAX_PREPARETIME:
      return { ...state, maxPrepareTime: action.payload };
    case REDUCER_ACTION_TYPE.SET_MAX_NETCARBS:
      return { ...state, maxNetCarbs: action.payload };
    case REDUCER_ACTION_TYPE.SET_RECIPE_LIST:
      return { ...state, recipeList: action.payload };
    case REDUCER_ACTION_TYPE.ITERATOR_REFRESH:
      return { ...state, searchIterator: 0 };
    case REDUCER_ACTION_TYPE.ITERATOR_INCREMENT:
      return { ...state, searchIterator: state.searchIterator + 1 };
    case REDUCER_ACTION_TYPE.ITERATOR_DECREMENT:
      return { ...state, searchIterator: state.searchIterator - 1 };
    case REDUCER_ACTION_TYPE.SET_LOADING:
      return { ...state, isLoading: action.payload };

    default:
      throw new Error("Undefined reducer action");
  }
}

function SearchProvider({ children }: ChildrenProp) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const abortControllerRef = useRef<AbortController | null>(null);

  const { includedIngredients, excludedIngredients } = state;

  // --------------- Fetching the data on Query Change ----------------

  useEffect(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();

    async function fetchFilteredRecipes() {
      setLoading(true);
      const data = await fetchRecipes(
        {
          name: state.name,
          maxCalories: parseInt(state.maxCalories) || undefined,
          maxCookTime:
            parseInt(state.maxCookTime) === 0
              ? 0
              : parseInt(state.maxCookTime) || undefined,
          maxPrepareTime: parseInt(state.maxPrepareTime) || undefined,
          maxNetCarbs:
            parseInt(state.maxNetCarbs) === 0
              ? 0
              : parseInt(state.maxNetCarbs) || undefined,
          includeIngredients: state.includedIngredients,
          excludeIngredients: state.excludedIngredients,
          limit: 20,
        },
        abortControllerRef.current?.signal,
      );

      dispatch({
        type: REDUCER_ACTION_TYPE.SET_RECIPE_LIST,
        payload: Array.isArray(data) ? data : [],
      });

      modifyIterator("refresh");
      if (data !== undefined) setLoading(false);
    }

    fetchFilteredRecipes();
  }, [
    state.name,
    state.maxCalories,
    state.maxCookTime,
    state.maxPrepareTime,
    state.maxNetCarbs,
    state.includedIngredients,
    state.excludedIngredients,
  ]);

  // ---------------------------

  // ------------------ Fetch Variables Modification ------------------------

  function setName(name: string) {
    dispatch({ type: REDUCER_ACTION_TYPE.SET_NAME, payload: name });
  }

  function setMax(
    max: string,
    maxType: "calories" | "cookTime" | "prepareTime" | "netCarbs",
  ) {
    switch (maxType) {
      case "calories":
        dispatch({ type: REDUCER_ACTION_TYPE.SET_MAX_CALORIES, payload: max });
        return null;
      case "cookTime":
        dispatch({ type: REDUCER_ACTION_TYPE.SET_MAX_COOKTIME, payload: max });
        return null;
      case "prepareTime":
        dispatch({
          type: REDUCER_ACTION_TYPE.SET_MAX_PREPARETIME,
          payload: max,
        });
        return null;
      case "netCarbs":
        dispatch({ type: REDUCER_ACTION_TYPE.SET_MAX_NETCARBS, payload: max });
        return null;
      default:
        return null;
    }
  }

  function addToList(listType: "include" | "exclude", ing: string) {
    if (includedIngredients.includes(ing) || excludedIngredients.includes(ing))
      return;

    const newArray = [
      ...(listType === "include" ? includedIngredients : excludedIngredients),
      ing,
    ];

    dispatch({
      type:
        listType === "include"
          ? REDUCER_ACTION_TYPE.SET_INCLUDED_INGREDIENTS
          : REDUCER_ACTION_TYPE.SET_EXCLUDED_INGREDIENTS,
      payload: newArray,
    });
  }

  function removeFromList(listType: "include" | "exclude", ing: string) {
    const arr =
      listType === "include" ? includedIngredients : excludedIngredients;
    const newArray = arr.filter((ingredient) => ingredient !== ing);
    dispatch({
      type:
        listType === "include"
          ? REDUCER_ACTION_TYPE.SET_INCLUDED_INGREDIENTS
          : REDUCER_ACTION_TYPE.SET_EXCLUDED_INGREDIENTS,
      payload: newArray,
    });
  }

  function modifyIterator(type: "increment" | "decrement" | "refresh") {
    switch (type) {
      case "increment":
        dispatch({ type: REDUCER_ACTION_TYPE.ITERATOR_INCREMENT });
        return null;
      case "decrement":
        dispatch({ type: REDUCER_ACTION_TYPE.ITERATOR_DECREMENT });
        return null;
      case "refresh":
        dispatch({ type: REDUCER_ACTION_TYPE.ITERATOR_REFRESH });
        return null;
      default:
        return null;
    }
  }

  function setLoading(type: boolean) {
    dispatch({ type: REDUCER_ACTION_TYPE.SET_LOADING, payload: type });
  }

  // --------------------------------------------

  return (
    <SearchContext.Provider
      value={{
        state,
        setName,
        setMax,
        addToList,
        removeFromList,
        modifyIterator,
        setLoading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  const value = useContext(SearchContext);
  if (value === undefined)
    throw new Error("Search context was used outside of a provider");
  return value;
}

export { useSearch, SearchProvider };
