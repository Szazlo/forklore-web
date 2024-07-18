import type { RecipeReview } from "@/types/recipe";
import { Avatar, Button, IconButton, Rating, Typography } from "@mui/material";
import { timeAgo } from "@/lib/utils.ts";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useToggle } from "@/useToggle.ts";

export default function RecipeReview(review: RecipeReview) {
	const [repliesOpen, toggleRepliesOpen] = useToggle(false);
	const [liked, toggleLiked] = useToggle(false);

	return (
		<div className="flex gap-1 mb-10">
			<Avatar></Avatar>
			<div className="ml-2 w-full">
				<div className="flex justify-between">
					<div className="flex items-center">
						<Typography variant="h5" mr={1}>{review.reviewer.firstName} {review.reviewer.lastName?.at(0)}.</Typography>
						<Rating size="small" readOnly value={review.rating} />
					</div>
					<IconButton sx={{ py: 0 }}>
						<MoreVertIcon />
					</IconButton>
				</div>

				<Typography variant="body2" color="text.dark"
										gutterBottom>@{review.reviewer.username} - {timeAgo(review.reviewedAt.toDate())}</Typography>
				<Typography gutterBottom>{review.body}</Typography>

				<div className="flex items-center">
					<IconButton color="primary" sx={{ px: 0.5 }} onClick={toggleLiked}>
						{liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
					</IconButton>
					<Typography variant="body2" color="primary">{review.likes}</Typography>
					<Button variant="text" sx={{ textTransform: "capitalize" }}>Reply</Button>
				</div>

				{review.numReplies > 0 &&
					<Button variant="contained" size="small" sx={{ textTransform: "capitalize" }} onClick={toggleRepliesOpen}>
						{repliesOpen ? "Hide" : "Show"} {review.numReplies} {review.numReplies > 1 ? "replies" : "reply"}
					</Button>
				}
			{/*	TODO: Add review replies */}
			</div>
		</div>
	);
}
