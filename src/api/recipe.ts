import { recipeData, recipesYouMightLike, reviews } from "./mock-data/recipes"

const getRecipes = async () => {
  // This is to get all recipes
  return recipesYouMightLike;
}

const getRecipeData = async () => {
  return recipeData;
}

const getRecipeReviews = async () => {
  return reviews;
}

const getYouMightLikeRecipes = async () => {
  return recipesYouMightLike;
}

export {
  getRecipes,
  getRecipeData,
  getRecipeReviews,
  getYouMightLikeRecipes
};