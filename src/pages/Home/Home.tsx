import "@/main.css";
import { RecipeCardData } from "@/types/recipe";
import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { Timestamp } from "firebase/firestore";
import burgir from "@/assets/burgir.jpeg";
import prawnPilPil from "@/assets/prawnpilpil.jpeg";

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
	}
];

function Home() {
	const recipeCards = recipes.map((recipeData: RecipeCardData & any) => {
		return (
			<Grid item key={recipeData.id} xs={12} md={6}>
				<Card  sx={{ borderRadius: 6, maxWidth: 400 }}>
					<CardActionArea>
						<CardMedia sx={{ borderRadius: 6, height: 200, objectFit: "cover" }} component="img" height="140" image={recipeData?.image} alt={recipeData.title} />
						<CardContent>
							<Typography variant="h5">{recipeData.title}</Typography>
							<Typography color="text.secondary">by {recipeData.publisher.firstName + " " + recipeData.publisher.lastName}</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</Grid>
			)
		});

	return (
		<Container className="flex-grow px-2">
			<Typography variant="h4" gutterBottom>Recipes for you</Typography>
			{recipes
			?
			<Grid container spacing={3} justifyContent="space-around">
				{recipeCards}
			</Grid>
			:
			 <div className="flex flex-col items-center justify-center h-screen">
					<h1 className="text-4xl">Welcome to Forklore</h1>
					<p className="w-1/2 text-center">
						We are a community of food lovers who share our passion for cooking.
					</p>
				</div>
			}
		</Container>
	);
}

export default Home;

