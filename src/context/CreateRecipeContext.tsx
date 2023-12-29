"use client";

import { ChildrenProp, IngredientProp, StepProp } from "@/utils/utilTypes";
import { createContext, useContext, useReducer } from "react";

const CreateRecipeContext = createContext<ContextType | undefined>(undefined);

interface ContextType {
  state: stateProps;
  setName: (name: string) => void;
  setDescription: (desc: string) => void;
  modifyTags: (action: "add" | "remove", tagItem: string) => void;
  setCookTime: (time: string) => void;
  setPrepTime: (time: string) => void;
  setCalories: (calories: string) => void;
  setNutrition: (nutrient: NutrientType, amount: string) => void;
  modifyIngredients: (
    type:
      | { action: "add"; item: IngredientProp }
      | { action: "remove"; itemName: string }
      | { action: "edit"; item: IngredientProp; prevItemName: string },
  ) => void;
  checkInIngredients: (ingName: string) => boolean;
  addStep: (item: string) => void;
  removeStep: (item: string) => void;
  editStep: (item: string, prevItem: string) => void;
  updateStepPos: (action: "increment" | "decrement", item: string) => void;
  getSortedSteps: () => StepProp[];
  isBorderStep: (pos: "last" | "first", item: string) => boolean;
  modifyWindow: (action: "open" | "close", windowItem: WindowTypes) => void;
  checkWindowsOpen: () => boolean;
  canModifyIterator: (type: "increment" | "decrement") => boolean;
  incrementIterator: () => void;
  decrementIterator: () => void;
  canProceed: (type: "general" | "ingredients") => boolean;
}

interface stateProps {
  name: string;
  description: string;
  image: string;
  tags: string[];
  cookingTime: string;
  prepareTime: string;
  calories: string;
  nutrition: NutritionItem;
  ingredients: IngredientProp[];
  prepareSteps: StepProp[];
  windowsOptions: WindowItem;
  iterator: number;
}

type WindowItem = {
  addTag: { isOpen: boolean; tag: string };
  addIngredient: { isOpen: boolean; ingredient: IngredientProp };
  addStep: { isOpen: boolean; step: string };
};

type NutritionItem = {
  netCarbs: string;
  totalCarbs: string;
  sugar: string;
  fiber: string;
  protein: string;
  totalFat: string;
  transFat: string;
};

type WindowTypes =
  | { name: "tag"; tag?: string }
  | { name: "ing"; ingredient?: IngredientProp }
  | { name: "step"; step?: string };

type NutrientType =
  | "netCarbs"
  | "totalCarbs"
  | "sugar"
  | "fiber"
  | "protein"
  | "totalFat"
  | "transFat";

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
        | REDUCER_ACTION_TYPE.SET_IMAGE
        | REDUCER_ACTION_TYPE.SET_COOKING_TIME
        | REDUCER_ACTION_TYPE.SET_PREPARE_TIME
        | REDUCER_ACTION_TYPE.SET_CALORIES;
      payload: string;
    }
  | { type: REDUCER_ACTION_TYPE.SET_TAGS; payload: string[] }
  | { type: REDUCER_ACTION_TYPE.SET_PREPARE_STEPS; payload: StepProp[] }
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
  cookingTime: "",
  prepareTime: "",
  calories: "",
  nutrition: {
    netCarbs: "",
    totalCarbs: "",
    sugar: "",
    protein: "",
    fiber: "",
    totalFat: "",
    transFat: "",
  },
  ingredients: [],
  prepareSteps: [],
  windowsOptions: {
    addTag: {
      isOpen: false,
      tag: "",
    },
    addIngredient: {
      isOpen: false,
      ingredient: {
        name: "",
        servingSize: {
          grams: 0,
          desc: "",
        },
      },
    },
    addStep: {
      isOpen: false,
      step: "",
    },
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
      return { ...state, windowsOptions: action.payload };
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

  function setCookTime(time: string) {
    dispatch({ type: REDUCER_ACTION_TYPE.SET_COOKING_TIME, payload: time });
  }
  function setPrepTime(time: string) {
    dispatch({ type: REDUCER_ACTION_TYPE.SET_PREPARE_TIME, payload: time });
  }
  function setCalories(calories: string) {
    dispatch({ type: REDUCER_ACTION_TYPE.SET_CALORIES, payload: calories });
  }

  function setNutrition(nutrient: NutrientType, amount: string) {
    function setNewTable() {
      switch (nutrient) {
        case "netCarbs":
          return { ...state.nutrition, netCarbs: amount };
        case "totalCarbs":
          return { ...state.nutrition, totalCarbs: amount };
        case "sugar":
          return { ...state.nutrition, sugar: amount };
        case "fiber":
          return { ...state.nutrition, fiber: amount };
        case "protein":
          return { ...state.nutrition, protein: amount };
        case "totalFat":
          return { ...state.nutrition, totalFat: amount };
        case "transFat":
          return { ...state.nutrition, transFat: amount };
        default:
          throw new Error("Undefined nutrient");
      }
    }

    const table = setNewTable();

    dispatch({ type: REDUCER_ACTION_TYPE.SET_NUTRITION, payload: table });
  }

  function checkInIngredients(ingName: string) {
    return state.ingredients.map((ing) => ing.name).includes(ingName);
  }

  function modifyIngredients(
    type:
      | { action: "add"; item: IngredientProp }
      | { action: "remove"; itemName: string }
      | { action: "edit"; item: IngredientProp; prevItemName: string },
  ) {
    const filteredList = state.ingredients.filter((ing) =>
      type.action === "add"
        ? ing.name !== type.item.name
        : type.action === "remove"
          ? ing.name !== type.itemName
          : ing.name !== type.prevItemName,
    );

    const newList =
      type.action === "remove" ? filteredList : [...filteredList, type.item];

    dispatch({ type: REDUCER_ACTION_TYPE.SET_INGREDIENTS, payload: newList });
  }

  function addStep(item: string) {
    if (state.prepareSteps.map((step) => step.step).includes(item)) return;

    const newStep = { pos: state.prepareSteps.length, step: item };

    const newArr = [...state.prepareSteps, newStep];

    dispatch({ type: REDUCER_ACTION_TYPE.SET_PREPARE_STEPS, payload: newArr });
  }

  function removeStep(item: string) {
    const refStep = state.prepareSteps.find((step) => step.step === item);

    if (!refStep) return;

    const lessThanRef = state.prepareSteps.filter(
      (step) => step.pos < refStep.pos,
    );

    const moreThatRef = state.prepareSteps.filter(
      (step) => step.pos > refStep.pos,
    );

    const fixedSteps = moreThatRef.map((step) => {
      return { step: step.step, pos: step.pos - 1 };
    });

    const newArr = [...lessThanRef, ...fixedSteps];

    dispatch({ type: REDUCER_ACTION_TYPE.SET_PREPARE_STEPS, payload: newArr });
  }

  function editStep(item: string, prevItem: string) {
    const refStep = state.prepareSteps.find((step) => step.step === prevItem);

    if (!refStep) return;

    const filteredSteps = state.prepareSteps.filter(
      (step) => step.step !== prevItem,
    );

    const newStep = {
      step: item,
      pos: refStep.pos,
    };

    const newArr = [...filteredSteps, newStep];

    dispatch({ type: REDUCER_ACTION_TYPE.SET_PREPARE_STEPS, payload: newArr });
  }

  function updateStepPos(action: "increment" | "decrement", item: string) {
    const refStep = state.prepareSteps.find((step) => step.step === item);

    if (!refStep) return;

    const targetStep = state.prepareSteps.find((step) =>
      action === "increment"
        ? step.pos === refStep.pos + 1
        : step.pos === refStep.pos - 1,
    );

    if (!targetStep) return;

    const updatedRefStep = { ...refStep, pos: targetStep.pos };

    const updatedNextStep = { ...targetStep, pos: refStep.pos };

    const filteredList = state.prepareSteps.filter(
      (step) => step.pos !== refStep.pos && step.pos !== targetStep.pos,
    );

    const newArr = [...filteredList, updatedRefStep, updatedNextStep];

    dispatch({ type: REDUCER_ACTION_TYPE.SET_PREPARE_STEPS, payload: newArr });
  }

  function getSortedSteps() {
    return state.prepareSteps.sort((a, b) => a.pos - b.pos);
  }

  function isBorderStep(pos: "last" | "first", item: string) {
    const refStep = state.prepareSteps.find((step) => step.step === item);

    if (!refStep) return false;

    const isBorder = Boolean(
      state.prepareSteps.find((step) =>
        pos === "last" ? step.pos > refStep.pos : step.pos < refStep.pos,
      ),
    );

    return !isBorder;
  }

  function modifyWindow(action: "open" | "close", windowItem: WindowTypes) {
    const act = action === "open" ? true : false;
    function setNewWindow() {
      switch (windowItem.name) {
        case "tag":
          return {
            ...state.windowsOptions,
            addTag: {
              ...state.windowsOptions.addTag,
              isOpen: act,
              tag: windowItem.tag && action === "open" ? windowItem.tag : "",
            },
          };
        case "ing":
          return {
            ...state.windowsOptions,
            addIngredient: {
              ...state.windowsOptions.addIngredient,
              isOpen: act,
              ingredient:
                windowItem.ingredient && action === "open"
                  ? windowItem.ingredient
                  : { name: "", servingSize: { grams: 0, desc: "" } },
            },
          };
        case "step":
          return {
            ...state.windowsOptions,
            addStep: {
              ...state.windowsOptions.addStep,
              isOpen: act,
              step: windowItem.step && action === "open" ? windowItem.step : "",
            },
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
      state.windowsOptions.addIngredient.isOpen ||
      state.windowsOptions.addStep.isOpen ||
      state.windowsOptions.addTag.isOpen
    );
  }

  function canProceed(type: "general" | "ingredients") {
    switch (type) {
      case "general":
        return (
          state.name.length > 8 &&
          state.description.length > 40 &&
          state.tags.length >= 5
        );
      case "ingredients":
        return true;
      default:
        throw new Error("Undefined Type");
    }
  }

  return (
    <CreateRecipeContext.Provider
      value={{
        state,
        setName,
        setDescription,
        modifyTags,
        setNutrition,
        modifyIngredients,
        checkInIngredients,
        addStep,
        removeStep,
        editStep,
        updateStepPos,
        getSortedSteps,
        isBorderStep,
        modifyWindow,
        canModifyIterator,
        incrementIterator,
        decrementIterator,
        checkWindowsOpen,
        canProceed,
        setPrepTime,
        setCookTime,
        setCalories,
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
