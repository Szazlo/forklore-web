import { RecipeData } from "@/types/recipe";
import { useState } from "react";
import {
	Checkbox,
	FormControlLabel,
	FormGroup,
	Typography,
} from "@mui/material";

/**
 * Shows ingredients as a list of tickable checkboxes.
 * Clicking on one ingredient will turn it gray and strikethrough
 * This is its own component to avoid unnecessary re-renders of the parent component (e.g recipe page)
 * when ticking a checkbox
 */
export function IngredientsList({
	ingredients,
}: {
	ingredients: RecipeData["ingredients"];
}) {
	const [statefulIngredients, setStatefulIngredients] = useState(
		ingredients.map((ingredients) => ({ ...ingredients, checked: false })),
	);

	function tickIngredient(checked: boolean, id: string) {
		setStatefulIngredients((prevState) =>
			prevState.map((ingredient) => ({
				...ingredient,
				checked: ingredient.id === id ? checked : ingredient.checked,
			})),
		);
	}

	return (
		<FormGroup>
			{statefulIngredients.map((ingredient) => (
				<FormControlLabel
					key={ingredient.id}
					control={
						<Checkbox
							color="primary"
							onChange={(e) => tickIngredient(e.target.checked, ingredient.id)}
						/>
					}
					label={
						<Typography
							sx={{ textDecoration: ingredient.checked ? "line-through" : "" }}
							color={ingredient.checked ? "text.dark" : ""}
						>
							{ingredient.name}
						</Typography>
					}
				/>
			))}
		</FormGroup>
	);
}
