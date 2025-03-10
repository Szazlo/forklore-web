import { RecipeMeta, RecipeData, RecipeReview } from "@/types/recipe";
import burgir from "@/assets/burgir.jpeg";
import { v4 as uuidv4 } from "uuid";

const recipeData: RecipeData = {
	id: 0,
	title: "Mici cu mustar",
	category: "Vegan",
	publisher: {
		id: uuidv4(),
		firstName: "Mario",
		lastName: "Caval",
	},
	createdAt: new Date(),
	description:
		"This recipe features a vibrant and refreshing salad made with a medley of mixed greens, accompanied by a flavorful sun-dried tomato dressing.",
	content: "This is the content of the recipe",
};

const reviews: RecipeReview[] = [
	{
		id: "1",
		body:
			"Wow, this mixed Greens with Sun-dried tomato dressing recipe is a flavour explosion in my mouth! Very delicious.",
		recipeId: "123",
		reviewer: {
			id: uuidv4(),
			firstName: "Sara",
			lastName: "Johnson",
		},
		rating: 3,
		likes: 20,
		numReplies: 1,
		reviewedAt: new Date(),
	},
	{
		id: "2",
		body: "Bloody lovely mate",
		recipeId: "123",
		reviewer: {
			id: uuidv4(),
			firstName: "Billy",
			lastName: "Butcher",
		},
		rating: 4,
		likes: 1,
		numReplies: 0,
		reviewedAt: new Date(),
	},
];

const recipesYouMightLike: (RecipeMeta & { image: string })[] = [
	{
		id: 2,
		title: "Gourmet Cheeseburger",
		description: "A delicious cheeseburger with a gourmet twist.",
		category: "Vegan",
		publisher: {
			id: uuidv4(),
			firstName: "David",
			lastName: "Wilson",
		},
		createdAt: new Date(),
		image: burgir,
	},
	{
		id: 3,
		title: "Prawn Pil Pil",
		description: "A delicious cheeseburger with a gourmet twist.",
		category: "Vegan",
		publisher: {
			id: uuidv4(),
			firstName: "Lauri",
			lastName: "Kiukkonen",
		},
		createdAt: new Date(),
		image: burgir,
	},
	{
		id: 6,
		title: "Halal Fried Chicken",
		description: "A delicious cheeseburger with a gourmet twist.",
		category: "Vegan",
		publisher: {
			id: uuidv4(),
			firstName: "Daithi",
			lastName: "Williamson",
		},
		createdAt: new Date(),
		image: burgir,
	},
];

type RecipeWithImage = RecipeMeta & { image: string };

const recipesMeta: RecipeWithImage[] = [
	{
		id: 4,
		title: "Gourmet Cheeseburger",
		description: "A delicious cheeseburger with a gourmet twist.",
		category: "Vegan",
		publisher: {
			id: uuidv4(),
			firstName: "David",
			lastName: "Wilson",
		},
		createdAt: new Date(),
		image: burgir,
	},
	{
		id: 5,
		title: "Prawn Pil Pil",
		description: "A delicious cheeseburger with a gourmet twist.",
		category: "Vegan",
		publisher: {
			id: uuidv4(),
			firstName: "Lauri",
			lastName: "Kiukkonen",
		},
		createdAt: new Date(),
		image: burgir,
	},
	{
		id: 7,
		title: "Gourmet Cheeseburger",
		description: "A delicious cheeseburger with a gourmet twist.",
		category: "Vegan",
		publisher: {
			id: uuidv4(),
			firstName: "David",
			lastName: "Wilson",
		},
		createdAt: new Date(),
		image: burgir,
	},
];

export { recipeData, recipesYouMightLike, reviews, recipesMeta };
