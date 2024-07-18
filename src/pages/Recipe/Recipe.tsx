import "@/main.css";
import {
	Avatar,
	Box,
	Breadcrumbs, Button,
	Checkbox,
	Container,
	Divider, FormControlLabel,
	FormGroup,
	Grid,
	Rating, Stack,
	Typography,
} from "@mui/material";
import { RecipeData } from "@/types/recipe";
import { Timestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Burgir from "@/assets/burgir.jpeg";
import RecipeReviewRenderer from "@/pages/Recipe/RecipeReview.tsx";
import type { RecipeReview } from "@/types/recipe";
import ReviewForm from "@/pages/Recipe/ReviewForm.tsx";

const recipeData: RecipeData = {
	id: "dfasfsa12we",
	title: "Mici",
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
	createdAt: Timestamp.now(),
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
		{ stepNumber: 5, content: "Slice into 2 x 15cm sticks", hasImage: false },
		{ stepNumber: 6, content: "Bake for 5 minutes", hasImage: false },
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
		reviewedAt: Timestamp.now(),
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
		reviewedAt: Timestamp.now(),
	},
];

function Recipe() {
	return (
		<Container maxWidth="lg">
			<Breadcrumbs separator="›" sx={{ my: 2 }}>
				<Link to="/" className="hover:underline">Home</Link>
				<Link to="/recipes" className="hover:underline">Recipes</Link>
				<Link to="#" className="hover:underline">Mici</Link>
			</Breadcrumbs>
			<Typography variant="h1" gutterBottom>{recipeData.title}</Typography>
			<Grid container gap={2}>
				<div className="flex items-center gap-2">
					<Avatar sx={{ height: 25, width: 25, bgcolor: "primary.main" }} />
					<Typography>{recipeData.publisher.firstName} {recipeData.publisher.lastName}</Typography>
				</div>
				<div className="flex items-center gap-2">
					<CalendarMonthIcon color="primary" />
					<Typography>{formatDate(recipeData.createdAt)}</Typography>
				</div>
				<div className="flex items-center gap-2">
					<Rating value={recipeData.averageRating} size="small"></Rating>
					<Typography variant="body2" color="text.dark">4.6 / 10 reviews</Typography>
				</div>
			</Grid>

			<Box width={1} my={2}>
				<img src={Burgir} alt={"burgir"} className="w-full rounded" />
			</Box>

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

			<Typography my={4}>{recipeData.about}</Typography>

			<Typography variant="h3">Ingredients</Typography>
			<FormGroup>
				{recipeData.ingredients.map(ingredient =>
					<FormControlLabel key={ingredient.id} control={<Checkbox color="primary" />} label={ingredient.name} />,
				)}
			</FormGroup>

			<Typography variant="h3" my={4}>Steps</Typography>
			<Stack spacing={3}>
				{recipeData.steps.map(step =>
					<div className="flex" key={step.stepNumber}>
						<Box className="mr-4 w-6 text-center text-white" bgcolor="primary.main"
								 borderRadius={1}>{step.stepNumber}</Box>
						<Typography>{step.content}</Typography>
					</div>,
				)}
			</Stack>

			<Divider sx={{ borderBottomWidth: 5, bgcolor: "primary.main", mt: 10, mb: 5 }} />

			<Typography gutterBottom variant="h3">Reviews</Typography>
			<Divider sx={{ mb: 2 }} />

			{reviews.map(review => <RecipeReviewRenderer key={review.id} {...review} />)}
			<Button variant="outlined" sx={{ textTransform: "capitalize", mb: 2 }}>Load more</Button>

			<Typography variant="h5" my={1} fontWeight="bold">Rate this recipe and share your opinion</Typography>
			<ReviewForm />
		</Container>
	);
}

function formatDate(timestamp: Timestamp) {
	return timestamp.toDate().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export default Recipe;
