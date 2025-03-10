import {
	recipeData,
	recipesMeta,
	recipesYouMightLike,
	reviews,
} from "./mock-data/recipes";

const getRecipes = async () => {
	// This is to get all recipes
	return recipesYouMightLike;
};

const getRecipeData = async (id?: string) => {
	if (id !== recipeData.id.toString()) {
		throw new Error("Recipe could not be found");
	}
	return recipeData;
};

const getRecipeReviews = async () => {
	return reviews;
};

const getYouMightLikeRecipes = async () => {
	return recipesYouMightLike;
};

const getRecipesMeta = async () => {
	return recipesMeta;
};

export {
	getRecipes,
	getRecipeData,
	getRecipeReviews,
	getYouMightLikeRecipes,
	getRecipesMeta,
};
