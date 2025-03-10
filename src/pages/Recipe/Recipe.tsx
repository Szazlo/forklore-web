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
	Skeleton,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import type { RecipeReview } from "@/types/recipe";
import { RecipeMeta, RecipeData } from "@/types/recipe";
import { Link, useParams } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import burgir from "@/assets/burgir.jpeg";
import RecipeReviewRenderer from "@/pages/Recipe/RecipeReview.tsx";
import ReviewForm from "@/pages/Recipe/ReviewForm.tsx";
import RecipeCard from "@/components/RecipeCard";
import NewsletterBox from "@/components/NewsletterBox.tsx";
import RecipePrintCard from "@/pages/Recipe/RecipePrintCard.tsx";
import { formatDate } from "@/lib/utils.ts";
import NutritionalValuesBox from "@/pages/Recipe/NutritionalValuesBox.tsx";
import NewsletterBoxSmall from "@/components/NewsletterBoxSmall.tsx";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { ShareOutlined } from "@mui/icons-material";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import { useEffect, useState } from "react";
import Api from "@/api";
import useSnack from "@/context/SnackbarProvider";
import PageNotFound from "../404";

function RecipePage() {
	const { id } = useParams();
	const [recipeData, setRecipeData] = useState<RecipeData>();
	const [reviews, setReviews] = useState<RecipeReview[]>([]);
	const [loading, setLoading] = useState(true);
	const [youMightLikeRecipes, setYouMightLikeRecipes] = useState<
		(RecipeMeta & { image: string })[]
	>([]);
	const theme = useTheme();
	const isTablet = useMediaQuery(theme.breakpoints.up("md"));
	const { addSnack } = useSnack();

	useEffect(() => {
		setLoading(true);
		Api.getRecipeData(id)
			.then((data) => setRecipeData(data))
			.catch((e) => {
				console.error("Recipe Data error.", e);
				addSnack("There was an error getting this recipe", "error");
			})
			.finally(() => setLoading(false));
		Api.getRecipeReviews()
			.then((reviews) => setReviews(reviews))
			.catch((e) => {
				console.error("Reviews error.", e);
				addSnack("There was an error getting the reviews for this recipe", e);
			});
		Api.getYouMightLikeRecipes()
			.then((data) => setYouMightLikeRecipes(data))
			.catch((e) => {
				console.error("Recipes you might like error.", e);
				addSnack("There was an error getting recipes you might like", "error");
			});
	}, []);

	if (!recipeData && loading) {
		return <Skeleton>Loading</Skeleton>;
	} else if (!recipeData) {
		return <PageNotFound />;
	}

	return (
		<Container maxWidth="lg">
			<Breadcrumbs separator="›" sx={{ my: 2 }}>
				<Link to="/" className="hover:underline">
					Home
				</Link>
				<Link to="/recipes" className="hover:underline">
					Recipes
				</Link>
				<Typography color="text.primary">{recipeData.title}</Typography>
			</Breadcrumbs>
			<Typography
				variant="h3"
				gutterBottom
				maxWidth={isTablet ? 0.7 : 1}
				letterSpacing={0.1}
			>
				{recipeData.title}
			</Typography>
			<Grid container mb={1}>
				{/* Recipe metadata -- Author, date, rating */}
				<Grid container item md={8} xs={12} gap={1.5}>
					<div className="flex items-center gap-1">
						<Avatar sx={{ height: 25, width: 25, bgcolor: "primary.main" }} />
						<Typography>
							{recipeData.publisher.firstName} {recipeData.publisher.lastName}
						</Typography>
					</div>
					<div className="flex items-center gap-1">
						<CalendarMonthIcon color="primary" />
						<Typography>{formatDate(recipeData.createdAt)}</Typography>
					</div>
					<div className="flex items-center gap-1">
						<Rating readOnly value={5} size="small"></Rating>
						<Typography variant="body2" color="text.dark">
							{5} / 10 reviews
						</Typography>
					</div>
				</Grid>

				{/* Recipe action buttons -- bookmark, share, print */}
				{isTablet && (
					<Grid container item md={4}>
						<div className="ml-12 flex gap-0.5">
							<IconButton size="small">
								<BookmarkBorderIcon color="primary" />
							</IconButton>
							<IconButton size="small">
								<ShareOutlined color="primary" />
							</IconButton>
							<IconButton size="small">
								<LocalPrintshopOutlinedIcon color="primary" />
							</IconButton>
						</div>
					</Grid>
				)}
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
								<Typography variant="body1" color="text.dark">
									Prep time
								</Typography>
								{5} mins
							</div>
							<Divider orientation="vertical" flexItem />
							{
								// Not all recipes have a prep time
								<div className="text-center">
									<Typography variant="body1" color="text.dark">
										Cook time
									</Typography>
									{5} mins
								</div>
							}
							<Divider orientation="vertical" flexItem />
							<div className="text-center">
								<Typography variant="body1" color="text.dark">
									Serves
								</Typography>
								{4}
							</div>
						</Grid>
					</Container>

					<Typography my={4}>{recipeData.description}</Typography>

					{/* Recipe Print Card for desktop */}
					{isTablet && <RecipePrintCard {...recipeData} />}

					<Divider
						sx={{ borderBottomWidth: 5, bgcolor: "primary.main", mt: 10, mb: 5 }}
					/>

					{/* Reviews */}
					<Typography gutterBottom variant="h3">
						Reviews
					</Typography>
					<Divider sx={{ mb: 2 }} />

					{reviews?.map((review) => (
						<RecipeReviewRenderer key={review.id} {...review} />
					))}
					<Button variant="outlined" sx={{ textTransform: "capitalize", mb: 2 }}>
						Load more
					</Button>

					{/* Review Form*/}
					<Typography variant="h5" my={1} fontWeight="bold">
						Rate this recipe and share your opinion
					</Typography>
					<ReviewForm />

					{/* You might like */}
					<Typography variant="h4" fontWeight="bold" my={3}>
						You might like
					</Typography>
					<Grid container gap={2}>
						{youMightLikeRecipes.map((recipe) => (
							<RecipeCard key={recipe.id} {...recipe} />
						))}
					</Grid>

					{/* Hide some content from the bottom so we can show it to the right of the main content */}
					{!isTablet && (
						<>
							<NutritionalValuesBox />
							<NewsletterBox />
							<Typography variant="h3" gutterBottom fontWeight="bold">
								Tags
							</Typography>
						</>
					)}
				</Grid>
				{/* Show more content on the right side on larger screens*/}
				{isTablet && (
					<Grid item md={4}>
						<div className="ml-12">
							<NutritionalValuesBox />
							<NewsletterBoxSmall />
							<Typography variant="h4" gutterBottom fontWeight="bold">
								Tags
							</Typography>
						</div>
					</Grid>
				)}
			</Grid>
		</Container>
	);
}

export default RecipePage;
