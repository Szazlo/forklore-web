import { Timestamp } from "firebase/firestore";
import { ForkloreUser } from "./User";

export interface RecipeCardData {
  id: string,
  title: string,
  publisher: ForkloreUser,
  cookingTime: number,
  difficulty: string,
  averageRating: number,
  createdAt: Timestamp,
}

export interface RecipeData extends RecipeCardData {
  ingredients: Ingredient[],
  about: string
  content: string,
}

export interface RecipeReview {
  id: string,
  recipeId: string,
  title: string,
  body: string,
  reviewer: ForkloreUser,
}

/** Standalone ingredient, i.e. general information */
export interface Ingredient {
  id: string,
  name: string,
}

export interface RecipeIngredient extends Ingredient {
  /** Quantity in grams */
  quantity: number,
  /** This is in the ER diagram but I don't remember what it's for */
  unit: string,
}