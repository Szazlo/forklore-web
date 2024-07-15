import "@/main.css";
import {RecipeCardData} from "@/types/recipe";
import {Container} from "@mui/material";
import {Timestamp} from "firebase/firestore";
import burgir from "@/assets/burgir.jpeg";
import RecipeCard from "@/components/RecipeCard";

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
        image: burgir
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
        image: burgir
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
        image: burgir
    },
    {
        id: "gourmet_cheeseburger_davwilson3",
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
        image: burgir
    },
    {
        id: "gourmet_cheeseburger_davwilson4",
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
        image: burgir
    },
    {
        id: "gourmet_cheeseburger_davwilson5",
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
        image: burgir
    },
    {
        id: "gourmet_cheeseburger_davwilson6",
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
        image: burgir
    },
    {
        id: "gourmet_cheeseburger_davwilson7",
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
        image: burgir
    },
    {
        id: "gourmet_cheeseburger_davwilson8",
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
        image: burgir
    }
];

function Recipe() {
    const recipeCards = recipes.map((recipeData: RecipeCardData) => <RecipeCard key={recipeData.id} {...recipeData} />);

    return (
        <>
            <Container maxWidth="lg" sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' } }}>
                {recipeCards}
            </Container>
        </>
    );
}

export default Recipe;