import "@/main.css";
import { RecipeCardData } from "@/types/recipe";
import { Box, Button, Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Timestamp } from "firebase/firestore";
import burgir from "@/assets/burgir.jpeg";
import prawnPilPil from "@/assets/prawnpilpil.jpeg";
import landingImage1 from "@/assets/landingImg1.png";
import BlogSection from "./BlogSection";
import RecipeCard from "@/components/RecipeCard";
// import StarIcon from '@mui/icons-material/Star';

// TODO: Remove image attr
const recipes: RecipeCardData[] & any = [
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
		image: prawnPilPil,
	},
	{
		id: "gourmet_cheeseburger_davwilson2",
		title: "Halal Fried Chicken",
		publisher: {
			username: "laplace",
			firstName: "Daithi",
			lastName: "Williamson",
		},
		cookingTime: 135,
		averageRating: 5.0,
		difficulty: "Michelin Chef",
		createdAt: Timestamp.now(),
		image: prawnPilPil,
	}
];

function Home() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	const recipeCards = recipes.map((recipeData: RecipeCardData & any) => <RecipeCard key={recipeData.id} {...recipeData} />);

	return (
		<Box p={2}>
			<Container sx={{ textAlign: isMobile ? "center": "left", my: 10 }}>
				<Typography variant="h2" fontWeight="bold"> Your Daily Dish</Typography>
				<Typography variant="h2" fontWeight="bold" gutterBottom> A <Typography fontWeight="bold" variant="h2" component="span" color="primary">Food </Typography>Journey</Typography>
				<Container maxWidth="sm">
					<Typography color="text.secondary" sx={{ mb: 3 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, laudantium sequi expedita doloremque cocalar Baabido? </Typography>
				</Container>

				<Box display="flex" alignItems="center" justifyContent="center" gap={1}>
					<Button variant="contained">Log in</Button>
					<Button variant="outlined">Sign up</Button>
				</Box>
			</Container>

			<Box display="flex" flexWrap="wrap" mb={8}>
				<div className="flex-2 md:flex-1">
					<img src={landingImage1} alt="Phone taking picture of food" />
				</div>
				<Container maxWidth="lg" sx={{ flex: 1, textAlign: "center", m: "auto" }}>
					<Typography variant="h4" my={2} fontWeight="bold">Share Your Recipes</Typography>
					<Container maxWidth="sm">
						<Typography my={2} color="text.secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat accusantium nobis officiis, quia quam commodi quae.</Typography>
					</Container>
					<Button variant="contained">Create a Recipe</Button>
				</Container>
			</Box>

			<Typography variant="h3" gutterBottom fontWeight="bold">Trending Recipes</Typography>
			<div className="w-full text-right">
				{!isMobile &&
					<Button color="primary" variant="text" sx={{ textTransform: "capitalize" }} type="button">
						View more
					</Button>
				}
			</div>
			<Grid container spacing={3}>{recipeCards}</Grid>

			<BlogSection />

		</Box>
	);
}

export default Home;



/**
<Container className="flex-grow px-2">
{recipes
	? <>
	<Typography variant="h4" gutterBottom>Recipes for you</Typography>
	<Grid container spacing={2} justifyContent="space-around" sx={{ overflowX: "scroll" }} wrap="nowrap" pb={2}>
	{recipeCards}
	</Grid>
	
	<Divider sx={{ my: 3 }}/>
	
	<Typography variant="h4" gutterBottom>Trending</Typography>
	<Card sx={{ borderRadius: 6 }}>
	<CardActionArea>
	<Box display="flex">
	<CardMedia sx={{ borderRadius: 6, objectFit: "cover", width: 225 }} component="img" image={burgir} alt="burgir" />
	<CardContent sx={{ p: 1 }}>
	<Typography variant="h6">{"David's Meat Burgir"}</Typography>
	<Typography color="text.secondary">by {"Daithi Edginson"}</Typography>
	</CardContent>
	</Box>
	</CardActionArea>
	</Card>
	
	<Divider sx={{ my: 3 }} />
	
	<Typography variant="h4" gutterBottom>Your friends enjoyed</Typography>
	<Grid container spacing={2} justifyContent="space-around" sx={{ overflowX: "scroll" }} wrap="nowrap" pb={2}>
	{recipeCards}
	</Grid>
	</>
	:
	<div className="flex flex-col items-center justify-center h-screen">
	<h1 className="text-4xl">Welcome to Forklore</h1>
	<p className="w-1/2 text-center">
	We are a community of food lovers who share our passion for cooking.
	</p>
	</div>
}
</Container>
*/
