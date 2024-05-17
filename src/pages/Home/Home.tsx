import "@/main.css";
import { RecipeCardData } from "@/types/recipe";
import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Divider, Grid, Typography } from "@mui/material";
import { Timestamp } from "firebase/firestore";
import burgir from "@/assets/burgir.jpeg";
import prawnPilPil from "@/assets/prawnpilpil.jpeg";
import StarIcon from '@mui/icons-material/Star';

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
	const recipeCards = recipes.map((recipeData: RecipeCardData & any) => {
		return (
			<Grid item key={recipeData.id} xs={12} md={6} >
				<Card sx={{ borderRadius: 6, width: 250 }}>
					<CardActionArea>
							<div className="relative">
							<CardMedia sx={{ borderRadius: 6, height: 200, objectFit: "cover" }} component="img" height="140" image={recipeData?.image} alt={recipeData.title} />
							<div className="absolute right-0 bottom-4 flex rounded-l-lg justify-center items-center bg-slate-200/75 w-12 pl-1">
								<Typography color="primary">{recipeData.averageRating}</Typography>
								<StarIcon htmlColor="gold"/>
							</div>
						</div>
						<CardContent sx={{ py: 1 }}>
							<Typography variant="h6">{recipeData.title}</Typography>
							<Typography color="text.secondary">by {recipeData.publisher.firstName + " " + recipeData.publisher.lastName}</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</Grid>
			)
		});

	return (
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
	);
}

export default Home;

