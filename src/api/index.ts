import axios from "axios";
import { getRecipeData, getRecipeReviews, getRecipes, getYouMightLikeRecipes } from "./recipe";

const axiosInstance = axios.create({
  baseURL: import.meta.env.ENDPOINT_URL || "",
  timeout: 3000,
});

const Api = {
  getRecipeData,
  getRecipes,
  getRecipeReviews,
  getYouMightLikeRecipes
};

export default Api;
export {axiosInstance};
