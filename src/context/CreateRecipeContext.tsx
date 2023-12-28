"use client";

import { ChildrenProp, IngredientProp } from "@/utils/utilTypes";
import { createContext, useContext, useReducer } from "react";

const CreateRecipeContext = createContext<ContextType | undefined>(undefined);

interface ContextType {
  state: stateProps;
  setName: (name: string) => void;
  setDescription: (desc: string) => void;
  modifyTags: (action: "add" | "remove", tagItem: string) => void;
  modifyWindow: (
    action: "open" | "close",
    window: "tag" | "ing" | "step",
  ) => void;
  checkWindowsOpen: () => boolean;
  canModifyIterator: (type: "increment" | "decrement") => boolean;
  incrementIterator: () => void;
  decrementIterator: () => void;
}

interface stateProps {
  name: string;
  description: string;
  image: string;
  tags: string[];
  cookingTime: number;
  prepareTime: number;
  calories: number;
  nutrition: NutritionItem;
  ingredients: IngredientProp[];
  prepareSteps: string[];
  windowsOpenState: WindowItem;
  iterator: number;
}

type WindowItem = { addTag: boolean; addIngredient: boolean; addStep: boolean };

type NutritionItem = {
  netCarbs?: number;
  totalCarbs?: number;
  sugar?: number;
  fiber?: number;
  protein?: number;
  totalFat?: number;
  transFat?: number;
};

const enum REDUCER_ACTION_TYPE {
  SET_NAME,
  SET_DESCRIPTION,
  SET_IMAGE,
  SET_TAGS,
  SET_COOKING_TIME,
  SET_PREPARE_TIME,
  SET_CALORIES,
  SET_NUTRITION,
  SET_INGREDIENTS,
  SET_PREPARE_STEPS,
  SET_WINDOW_OPEN,
  INCREMENT_ITERATOR,
  DECREMENT_ITERATOR,
}

type ReducerAction =
  | {
      type:
        | REDUCER_ACTION_TYPE.SET_NAME
        | REDUCER_ACTION_TYPE.SET_DESCRIPTION
        | REDUCER_ACTION_TYPE.SET_IMAGE;
      payload: string;
    }
  | {
      type:
        | REDUCER_ACTION_TYPE.SET_COOKING_TIME
        | REDUCER_ACTION_TYPE.SET_PREPARE_TIME
        | REDUCER_ACTION_TYPE.SET_CALORIES;
      payload: number;
    }
  | {
      type:
        | REDUCER_ACTION_TYPE.SET_TAGS
        | REDUCER_ACTION_TYPE.SET_PREPARE_STEPS;
      payload: string[];
    }
  | { type: REDUCER_ACTION_TYPE.SET_NUTRITION; payload: NutritionItem }
  | { type: REDUCER_ACTION_TYPE.SET_INGREDIENTS; payload: IngredientProp[] }
  | { type: REDUCER_ACTION_TYPE.SET_WINDOW_OPEN; payload: WindowItem }
  | {
      type:
        | REDUCER_ACTION_TYPE.INCREMENT_ITERATOR
        | REDUCER_ACTION_TYPE.DECREMENT_ITERATOR;
    };

// --------------------------------------------

// ---------- Initial State and Reducer Function ---------------------------

const initialState: stateProps = {
  name: "",
  description: "",
  image: "",
  tags: [],
  cookingTime: 0,
  prepareTime: 0,
  calories: 0,
  nutrition: {},
  ingredients: [],
  prepareSteps: [],
  windowsOpenState: {
    addTag: false,
    addIngredient: false,
    addStep: false,
  },
  iterator: 0,
};

function reducer(state: stateProps, action: ReducerAction): stateProps {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.SET_NAME:
      return { ...state, name: action.payload };
    case REDUCER_ACTION_TYPE.SET_DESCRIPTION:
      return { ...state, description: action.payload };
    case REDUCER_ACTION_TYPE.SET_IMAGE:
      return { ...state, image: action.payload };
    case REDUCER_ACTION_TYPE.SET_TAGS:
      return { ...state, tags: action.payload };
    case REDUCER_ACTION_TYPE.SET_COOKING_TIME:
      return { ...state, cookingTime: action.payload };
    case REDUCER_ACTION_TYPE.SET_PREPARE_TIME:
      return { ...state, prepareTime: action.payload };
    case REDUCER_ACTION_TYPE.SET_CALORIES:
      return { ...state, calories: action.payload };
    case REDUCER_ACTION_TYPE.SET_NUTRITION:
      return { ...state, nutrition: action.payload };
    case REDUCER_ACTION_TYPE.SET_INGREDIENTS:
      return { ...state, ingredients: action.payload };
    case REDUCER_ACTION_TYPE.SET_PREPARE_STEPS:
      return { ...state, prepareSteps: action.payload };
    case REDUCER_ACTION_TYPE.SET_WINDOW_OPEN:
      return { ...state, windowsOpenState: action.payload };
    case REDUCER_ACTION_TYPE.INCREMENT_ITERATOR:
      return { ...state, iterator: state.iterator + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT_ITERATOR:
      return { ...state, iterator: state.iterator - 1 };
    default:
      throw new Error("Undefined reducer action");
  }
}

// --------------------------------------------

function CreateRecipeProvider({ children }: ChildrenProp) {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  function setName(name: string) {
    dispatch({ type: REDUCER_ACTION_TYPE.SET_NAME, payload: name });
  }
  function setDescription(desc: string) {
    dispatch({ type: REDUCER_ACTION_TYPE.SET_DESCRIPTION, payload: desc });
  }

  function modifyTags(action: "add" | "remove", tagItem: string) {
    const filteredList = state.tags.filter((tag) => tag !== tagItem);
    const newArr = action === "add" ? [...filteredList, tagItem] : filteredList;
    dispatch({ type: REDUCER_ACTION_TYPE.SET_TAGS, payload: newArr });
  }

  function modifyWindow(
    action: "open" | "close",
    window: "tag" | "ing" | "step",
  ) {
    const act = action === "open" ? true : false;

    function setNewWindow() {
      switch (window) {
        case "tag":
          return {
            ...state.windowsOpenState,
            addTag: act,
          };
        case "ing":
          return {
            ...state.windowsOpenState,
            addIngredient: act,
          };
        case "step":
          return {
            ...state.windowsOpenState,
            addStep: act,
          };
        default:
          throw new Error("Undefined Window");
      }
    }
    const newWindowOptions = setNewWindow();

    dispatch({
      type: REDUCER_ACTION_TYPE.SET_WINDOW_OPEN,
      payload: newWindowOptions,
    });
  }

  function canModifyIterator(type: "increment" | "decrement") {
    return type === "increment" ? state.iterator < 2 : state.iterator > 0;
  }

  function incrementIterator() {
    if (canModifyIterator("increment")) {
      dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT_ITERATOR });
    }
  }

  function decrementIterator() {
    if (canModifyIterator("decrement")) {
      dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT_ITERATOR });
    }
  }

  function checkWindowsOpen() {
    return (
      state.windowsOpenState.addIngredient ||
      state.windowsOpenState.addStep ||
      state.windowsOpenState.addTag
    );
  }

  return (
    <CreateRecipeContext.Provider
      value={{
        state,
        setName,
        setDescription,
        modifyTags,
        modifyWindow,
        canModifyIterator,
        incrementIterator,
        decrementIterator,
        checkWindowsOpen,
      }}
    >
      {children}
    </CreateRecipeContext.Provider>
  );
}

function useCreateRecipe() {
  const value = useContext(CreateRecipeContext);
  if (value === undefined)
    throw new Error("CreateRecipe context was used outside of a provider");

  return value;
}

export { useCreateRecipe, CreateRecipeProvider };
