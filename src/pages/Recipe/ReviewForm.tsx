import { Button, Rating, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import useSnack from "@/context/SnackbarProvider";

export default function ReviewForm() {
	const [rating, setRating] = useState<number | null>(0);
	const [review, setReview] = useState("");
	const { addSnack } = useSnack();

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!rating) {
			return addSnack("You must give a rating between 1 and 5", "error");
		}
		addSnack("Success! Added your review");
	};

	return (
		<form onSubmit={handleSubmit}>
			<Rating value={rating} onChange={(_event, newValue) => setRating(newValue)} />
			<TextField multiline fullWidth minRows={3} value={review} placeholder="Write here"
								 onChange={(e) => setReview(e.target.value)} />
			<div className="text-right my-2">
				<Button type="submit" variant="contained" sx={{ textTransform: "capitalize", px: 4 }}>Post</Button>
			</div>
		</form>
	);
}
