import "@/main.css";
import {
	Avatar,
	Box,
	Breadcrumbs,
	Button,
	Container,
	Divider,
	Grid,
	IconButton,
	Rating,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import type { RecipeReview } from "@/types/recipe";
import { RecipeCardData, RecipeData } from "@/types/recipe";
import { Link } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import burgir from "@/assets/burgir.jpeg";
import RecipeReviewRenderer from "@/pages/Recipe/RecipeReview.tsx";
import ReviewForm from "@/pages/Recipe/ReviewForm.tsx";
import RecipeCard from "@/components/RecipeCard";
import NewsletterBox from "@/components/NewsletterBox.tsx";
import RecipePrintCard from "@/pages/Recipe/RecipePrintCard.tsx";
import { formatDate } from "@/lib/utils.ts";
import { IngredientsList } from "@/pages/Recipe/IngredientsList.tsx";
import NutritionalValuesBox from "@/pages/Recipe/NutritionalValuesBox.tsx";
import NewsletterBoxSmall from "@/components/NewsletterBoxSmall.tsx";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { ShareOutlined } from "@mui/icons-material";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import RecipeStepsList from "@/pages/Recipe/RecipeStepsList.tsx";

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
	createdAt: Date.now(),
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
		reviewedAt: Date.now(),
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
		reviewedAt: Date.now(),
	},
];

const recipes: (RecipeCardData & { image: string })[] = [
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
		createdAt: Timestamp.now(),
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
		createdAt: Timestamp.now(),
		image: burgir,
		serveCount: 2,
	},
];

const tags = ["Dessert", "Baking", "FoodBlog", "CheesecakeRecipe", "DeliciousDesserts"];

function Recipe() {
	const theme = useTheme();
	const isTablet = useMediaQuery(theme.breakpoints.up("md"));

	return (
		<Container maxWidth="lg">
			<Breadcrumbs separator="›" sx={{ my: 2 }}>
				<Link to="/" className="hover:underline">Home</Link>
				<Link to="/recipes" className="hover:underline">Recipes</Link>
				<Typography color="text.primary">{recipeData.title}</Typography>
			</Breadcrumbs>
			<Typography variant="h3" gutterBottom maxWidth={isTablet ? 0.7 : 1}
									letterSpacing={0.1}>{recipeData.title}</Typography>
			<Grid container mb={1}>

				{/* Recipe metadata -- Author, date, rating */}
				<Grid container item md={8} xs={12} gap={1.5}>
					<div className="flex items-center gap-1">
						<Avatar sx={{ height: 25, width: 25, bgcolor: "primary.main" }} />
						<Typography>{recipeData.publisher.firstName} {recipeData.publisher.lastName}</Typography>
					</div>
					<div className="flex items-center gap-1">
						<CalendarMonthIcon color="primary" />
						<Typography>{formatDate(recipeData.createdAt)}</Typography>
					</div>
					<div className="flex items-center gap-1">
						<Rating readOnly value={recipeData.averageRating} size="small"></Rating>
						<Typography variant="body2" color="text.dark">{recipeData.averageRating} / 10 reviews</Typography>
					</div>
				</Grid>

				{/* Recipe action buttons -- bookmark, share, print */}
				{isTablet &&
					<Grid container item md={4}>
						<div className="ml-12 flex gap-0.5">
							<IconButton size="small"><BookmarkBorderIcon color="primary" /></IconButton>
							<IconButton size="small"><ShareOutlined color="primary" /></IconButton>
							<IconButton size="small"><LocalPrintshopOutlinedIcon color="primary" /></IconButton>
						</div>
					</Grid>
				}
			</Grid>

			{isTablet && <Divider />}

			<Grid container>
				<Grid item md={8}>
					<Box width={1} my={2}>
						<img src={burgir} alt={"burgir"} className="w-full rounded" />
					</Box>

					{/* Recipe metadata -- time, servings */}
					<Container maxWidth="sm">
						<Grid container justifyContent="space-around">
							<div className="text-center">
								<Typography variant="body1" color="text.dark">Prep time</Typography>
								{recipeData.cookingTime} mins
							</div>
							<Divider orientation="vertical" flexItem />
							{recipeData.prepTime && // Not all recipes have a prep time
								<div className="text-center">
									<Typography variant="body1" color="text.dark">Cook time</Typography>
									{recipeData.prepTime} mins
								</div>
							}
							<Divider orientation="vertical" flexItem />
							<div className="text-center">
								<Typography variant="body1" color="text.dark">Serves</Typography>
								{recipeData.serveCount}
							</div>
						</Grid>
					</Container>

					<Typography my={4}>{recipeData.about}</Typography>

					{/* Ingredients */}
					<Typography variant="h3">Ingredients</Typography>
					<IngredientsList ingredients={recipeData.ingredients} />

					{/* Steps */}
					<Typography variant="h3" my={3}>Steps</Typography>
					<RecipeStepsList steps={recipeData.steps} />

					{/* Recipe Print Card for desktop */}
					{isTablet && <RecipePrintCard {...recipeData} />}

					<Divider sx={{ borderBottomWidth: 5, bgcolor: "primary.main", mt: 10, mb: 5 }} />

					{/* Reviews */}
					<Typography gutterBottom variant="h3">Reviews</Typography>
					<Divider sx={{ mb: 2 }} />

					{reviews.map(review => <RecipeReviewRenderer key={review.id} {...review} />)}
					<Button variant="outlined" sx={{ textTransform: "capitalize", mb: 2 }}>Load more</Button>

					{/* Review Form*/}
					<Typography variant="h5" my={1} fontWeight="bold">Rate this recipe and share your opinion</Typography>
					<ReviewForm />

					{/* You might like */}
					<Typography variant="h4" fontWeight="bold" my={3}>You might like</Typography>
					<Grid container gap={2}>
						{recipes.map(recipe => <RecipeCard key={recipe.id} {...recipe} />)}
					</Grid>

					{/* Hide some content from the bottom so we can show it to the right of the main content */}
					{!isTablet && <>
						<NutritionalValuesBox />
						<NewsletterBox />
						<Typography variant="h3" gutterBottom fontWeight="bold">Tags</Typography>
						<Grid container gap={1} mb={6}>
							{tags.map(tag => <TagButton key={tag} tag={tag} />)}
						</Grid>
					</>
					}

				</Grid>
				{/* Show more content on the right side on larger screens*/}
				{isTablet &&
					<Grid item md={4}>
						<div className="ml-12">
							<NutritionalValuesBox />
							<NewsletterBoxSmall />
							<Typography variant="h4" gutterBottom fontWeight="bold">Tags</Typography>
							<Grid container gap={0.5} mb={6}>
								{tags.map(tag => <TagButton key={tag} tag={tag} />)}
							</Grid>
						</div>
					</Grid>
				}
			</Grid>
		</Container>
	);
}

function TagButton(props: any) {

	return (
		<Button variant="outlined" sx={{ textTransform: "none", color: "gray", p: 1 }}>
			#{props.tag}
		</Button>
	);
}

export default Recipe;
