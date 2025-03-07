import { RecipeCardData } from "@/types/recipe";
import {
	Box,
	Button,
	Container,
	Grid,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import useSnack from "@/context/SnackbarProvider";
import RecipeCard from "@/components/RecipeCard";
// import Blob from "./Blob";
import NewsletterBox from "@/components/NewsletterBox.tsx";
import { useSelector } from "react-redux";
import { selectUser } from "@/store";
// import StarIcon from '@mui/icons-material/Star';
import Blob from "@/components/HomeBlob.tsx";
import { v4 as uuidv4 } from "uuid";

// TODO: Remove these mock urls, mainly the first 2 below
const burgir = "/public/burgir.jpeg";
const prawnPilPil = "/public/prawnpilpil.jpeg";
const landingImage = "/public/landing.png";
const landingImage1 = "/public/landingImg1.png";
const LunchImage = "/public/landing0.png";

// TODO: Remove image attr
const recipes: (RecipeCardData & { image: string })[] = [
	{
		id: "gourmet_cheeseburger_davwilson",
		title: "Gourmet Cheeseburger",
		publisher: {
			id: uuidv4(),
			username: "davwilson",
			firstName: "David",
			lastName: "Wilson",
		},
		cookingTime: 20,
		averageRating: 4.7,
		difficulty: "easy",
		createdAt: new Date(),
		image: burgir,
		serveCount: 4,
	},
	{
		id: "gourmet_cheeseburger_davwilson1",
		title: "Prawn Pil Pil",
		publisher: {
			id: uuidv4(),
			username: "laplace",
			firstName: "Lauri",
			lastName: "Kiukkonen",
		},
		cookingTime: 10,
		averageRating: 4.7,
		difficulty: "easy",
		createdAt: new Date(),
		image: prawnPilPil,
		serveCount: 4,
	},
	{
		id: "gourmet_cheeseburger_davwilson2",
		title: "Halal Fried Chicken",
		publisher: {
			id: uuidv4(),
			username: "laplace",
			firstName: "Daithi",
			lastName: "Williamson",
		},
		cookingTime: 135,
		averageRating: 5.0,
		difficulty: "Michelin Chef",
		createdAt: new Date(),
		image: prawnPilPil,
		serveCount: 4,
	},
];

function Home() {
	const user = useSelector(selectUser);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const isTablet = useMediaQuery(theme.breakpoints.down("md"));
	const { addSnack } = useSnack();

	const recipeCards = recipes.map((recipeData) => (
		<RecipeCard
			key={recipeData.id}
			{...recipeData}
		/>
	));

	return (
		<>
			<Container maxWidth="lg">
				<Blob />
				<Container sx={{ textAlign: isTablet ? "center" : "left", my: 10 }}>
					<Grid container>
						<Grid
							item
							xs={12}
							md={6}
						>
							<Typography
								variant="h2"
								fontWeight="bold"
							>
								{" "}
								Your Daily Dish
							</Typography>
							<Typography
								variant="h2"
								fontWeight="bold"
								gutterBottom
							>
								{" "}
								A{" "}
								<Typography
									fontWeight="bold"
									variant="h2"
									component="span"
									color="primary"
								>
									Food{" "}
								</Typography>
								Journey
							</Typography>
							<Box maxWidth="sm">
								<Typography
									color="text.secondary"
									sx={{ mb: 3 }}
								>
									A place to share your favourite recipes. What shall we cook today?{" "}
								</Typography>
							</Box>
							{!user ? (
								<Box
									display="flex"
									alignItems={"center"}
									justifyContent={isTablet ? "center" : "start"}
									gap={1}
								>
									<Button
										variant="contained"
										onClick={() => addSnack("Lauri toaster", "error")}
									>
										Log in
									</Button>
									<Button variant="outlined">Sign up</Button>
								</Box>
							) : (
								<Button variant="contained">Discover recipes</Button>
							)}
						</Grid>
						{!isTablet && (
							<Grid
								item
								md={6}
							>
								<img
									src={landingImage}
									alt="image of a dish with a review beside it"
								/>
							</Grid>
						)}
					</Grid>
				</Container>

				<Box
					display="flex"
					flexWrap="wrap"
					mb={8}
				>
					<div className="flex-2 md:flex-1">
						<img
							className="rounded-xl"
							src={landingImage1}
							alt="Phone taking picture of food"
						/>
					</div>
					<Container
						maxWidth="lg"
						sx={{ flex: isTablet ? 1 : 1.5, textAlign: "center", m: "auto" }}
					>
						<Typography
							variant="h4"
							my={2}
							fontWeight="bold"
						>
							Share Your Recipes
						</Typography>
						<Container maxWidth="sm">
							<Typography
								my={2}
								color="text.secondary"
							>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
								accusantium nobis officiis, quia quam commodi quae.
							</Typography>
						</Container>
						<Button variant="contained">Create a Recipe</Button>
					</Container>
				</Box>

				<Typography
					variant="h3"
					gutterBottom={isMobile}
					fontWeight="bold"
				>
					Trending
				</Typography>
				<div className="w-full text-right">
					{!isMobile && (
						<Button
							variant="text"
							sx={{ textTransform: "none" }}
							type="button"
						>
							View more
						</Button>
					)}
				</div>
				<Grid
					container
					spacing={3}
				>
					{recipeCards}
				</Grid>

				<Typography
					variant="h3"
					gutterBottom={isMobile}
					fontWeight="bold"
				>
					Explore
				</Typography>
				<div className="w-full text-right">
					{!isMobile && (
						<Button
							variant="text"
							sx={{ textTransform: "none" }}
							type="button"
						>
							View more
						</Button>
					)}
				</div>
				<Grid
					container
					spacing={3}
				>
					{recipeCards}
				</Grid>
			</Container>

			<NewsletterBox />

			<Container
				maxWidth="lg"
				sx={{ mb: 8 }}
			>
				<Typography
					variant="h3"
					gutterBottom={isMobile}
					fontWeight="bold"
				>
					Popular Categories
				</Typography>
				<div className="w-full text-right">
					{!isMobile && (
						<Button
							variant="text"
							sx={{ textTransform: "none" }}
							type="button"
						>
							View more
						</Button>
					)}
				</div>
				<Grid
					container
					spacing={2}
				>
					<Grid
						item
						xs={6}
						sm={4}
					>
						<img
							src={LunchImage}
							alt={"Spaghette"}
							className="rounded-full"
						/>
						<Typography
							fontWeight="bold"
							my={2}
							textAlign="center"
						>
							Lunch
						</Typography>
					</Grid>
					<Grid
						item
						xs={6}
						sm={4}
					>
						<img
							src={LunchImage}
							alt={"Spaghette"}
							className="rounded-full"
						/>
						<Typography
							fontWeight="bold"
							my={2}
							textAlign="center"
						>
							Dinner
						</Typography>
					</Grid>
					<Grid
						item
						xs={6}
						sm={4}
					>
						<img
							src={LunchImage}
							alt={"Spaghette"}
							className="rounded-full"
						/>
						<Typography
							fontWeight="bold"
							my={2}
							textAlign="center"
						>
							Pizza
						</Typography>
					</Grid>
					<Grid
						item
						xs={6}
						sm={4}
					>
						<img
							src={LunchImage}
							alt={"Spaghette"}
							className="rounded-full"
						/>
						<Typography
							fontWeight="bold"
							my={2}
							textAlign="center"
						>
							Smoothie
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export default Home;
