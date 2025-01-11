import { RecipeCardData, RecipeData, RecipeReview } from "@/types/recipe";
import burgir from "@/assets/burgir.jpeg";

const recipeData: RecipeData = {
	id: "dfasfsa12we",
	title: "Mici cu mustar",
	publisher: {
		username: "marioc14",
		firstName: "Mario",
		lastName: "Caval",
	},
	serveCount: 4,
	prepTime: 5,
	cookingTime: 20,
	difficulty: "easy",
	averageRating: 4.3,
	createdAt: new Date(),
	ingredients: [
		{ id: "1", name: "1g flour" },
		{ id: "2", name: "70g sugar" },
		{ id: "3", name: "20ml milk" },
		{ id: "4", name: "200ml water" },
		{ id: "5", name: "70g minced pork" },
		{ id: "6", name: "100g beef lard/tallow" },
	],
	about: "This recipe features a vibrant and refreshing salad made with a medley of mixed greens, accompanied by a flavorful sun-dried tomato dressing.",
	steps: [
		{ stepNumber: 1, content: "Preheat the oven to 180 degrees", hasImage: false },
		{ stepNumber: 2, content: "Mix the flour, sugar, and milk in a bowl", hasImage: false },
		{ stepNumber: 3, content: "Add water and mix until sticky", hasImage: false },
		{ stepNumber: 4, content: "Pour the mixture into a baking tray", hasImage: false },
		{
			stepNumber: 5,
			content: "Chop the fresh herbs, tomato, and onions and toss them with the salad greens. Add additional veggies as desired",
			hasImage: false,
		},
		{
			stepNumber: 6,
			content: "Juice the lemon and combine in a high-powered blender with the sun dried tomato mixture and garlic until smooth. Pour over the salad and toss together well. Top with brazil nuts and enjoy!",
			hasImage: false,
		},
	],
	tags: ["Dessert", "Baking", "FoodBlog", "CheesecakeRecipe", "DeliciousDesserts"]
};

const reviews: RecipeReview[] = [
	{
		id: "1",
		body: "Wow, this mixed Greens with Sun-dried tomato dressing recipe is a flavour explosion in my mouth! Very delicious.",
		recipeId: "123",
		reviewer: {
			username: "sarajson",
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
			username: "dntB_a_knt",
			firstName: "Billy",
			lastName: "Butcher",
		},
		rating: 4,
		likes: 1,
		numReplies: 0,
		reviewedAt: new Date()
	},
];

const recipesYouMightLike: (RecipeCardData & { image: string })[] = [
	{
		id: "gourmet_cheeseburger_davwilson",
		title: "Gourmet Cheeseburger",
		publisher: {
			username: "davwilson",
			firstName: "David",
			lastName: "Wilson",
		},
		cookingTime: 20,
		averageRating: 4.7,
		difficulty: "easy",
		createdAt: new Date(),
		image: burgir,
		serveCount: 2,
	},
	{
		id: "gourmet_cheeseburger_davwilson1",
		title: "Prawn Pil Pil",
		publisher: {
			username: "laplace",
			firstName: "Lauri",
			lastName: "Kiukkonen",
		},
		cookingTime: 10,
		averageRating: 4.7,
		difficulty: "easy",
		createdAt: new Date(),
		image: burgir,
		serveCount: 2,
	},
];

export {recipeData, recipesYouMightLike, reviews};