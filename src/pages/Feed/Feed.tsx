import "@/main.css";
import {RecipeCardData} from "@/types/recipe";
import {Container} from "@mui/material";
import RecipeCard from "@/components/RecipeCard";
import { useEffect, useState } from "react";
import Api from "@/api";
import useSnack from "@/context/SnackbarProvider";

function Recipe() {
    const [recipesMeta, setRecipesMeta] = useState<RecipeCardData[]>([]);
    const { addSnack } = useSnack();

    const recipeCards = recipesMeta.map(recipeData => <RecipeCard key={recipeData.id} {...recipeData} />);

    useEffect(() => {
        Api.getRecipesMeta()
        .then(data => setRecipesMeta(data))
        .catch(e => {
            console.error("Error getting recipe cards", e);
            addSnack("Error getting recipe cards", "error");
        })
    })
 
    return (
        <>
            <Container maxWidth="lg" sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' } }}>
                {recipeCards}
            </Container>
        </>
    );
}

export default Recipe;