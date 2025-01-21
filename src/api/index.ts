import axios from "axios";
import {
	getRecipeData,
	getRecipeReviews,
	getRecipes,
	getRecipesMeta,
	getYouMightLikeRecipes,
} from "./recipe";
import { signInWithEmailAndPassword, signUpWithEmailAndPassword } from "./auth";

const axiosInstance = axios.create({
	baseURL: import.meta.env.ENDPOINT_URL || "",
	timeout: 3000,
});

const Api = {
	getRecipeData,
	getRecipes,
	getRecipeReviews,
	getYouMightLikeRecipes,
	getRecipesMeta,

	signUpWithEmailAndPassword,
	signInWithEmailAndPassword,
};

export default Api;
export { axiosInstance };
