import axios from "axios";
import { getRecipeData, getRecipeReviews, getRecipes, getRecipesMeta, getYouMightLikeRecipes } from "./recipe";

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
};

export default Api;
export {axiosInstance};
