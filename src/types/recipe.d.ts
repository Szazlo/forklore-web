import { ForkloreUserMeta } from "./User";

export interface RecipeMeta {
	id: number;
	title: string;
	publisher: ForkloreUserMeta;
	description: string;
	category: string;
	createdAt: Date;
}

export interface RecipeData extends RecipeMeta {
	content: string;
}

export interface RecipeReview {
	id: string;
	recipeId: string;
	// title: string,
	body: string;
	rating: number;
	reviewer: ForkloreUserMeta;
	likes: number;
	numReplies: number;
	reviewedAt: Date;
}

/** Standalone ingredient, i.e. general information */
export interface Ingredient {
	id: string;
	name: string;
}

export interface RecipeIngredient extends Ingredient {
	/** Quantity in grams */
	quantity: number;
	/** This is in the ER diagram but I don't remember what it's for */
	unit: string;
}

export interface RecipeInstruction {
	stepNumber: number;
	content: string;
	// The image url can be inferred from the recipe id and the step number.
	// E.g. forklore.com/recipes/43b7ud2ud/images/2
	hasImage: boolean;
}
