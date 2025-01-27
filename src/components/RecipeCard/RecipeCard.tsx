import { RecipeCardData } from "@/types/recipe";
import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Chip,
	Grid,
	IconButton,
	Typography,
} from "@mui/material";
import { MouseEvent, useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Star as StarIcon } from "lucide-react";

export default function RecipeCard(props: RecipeCardData & { image?: string }) {
	const [bookmarked, setBookmarked] = useState(false);

	function handleBookmarkToggle(event: MouseEvent) {
		event.stopPropagation();
		event.preventDefault();
		setBookmarked((prev) => !prev);
	}

	return (
		<Grid
			item
			xs={12}
			sm={6}
			md={4}
			lg={4}
		>
			<Card sx={{ borderRadius: 3, position: "relative" }}>
				<CardActionArea>
					<CardMedia
						component="img"
						image={props?.image}
						alt={props.title}
						sx={{
							borderRadius: 3,
							objectFit: "cover",
							borderBottomRightRadius: 0,
							borderBottomLeftRadius: 0,
							height: { xs: 150, sm: 200, md: 250 },
						}}
					/>
					<CardContent
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "start",
						}}
					>
						<Box sx={{ flex: 2 }}>
							<Typography
								variant="body1"
								color="text.primary"
								fontWeight={"bold"}
							>
								{props.title}
							</Typography>
							<Typography
								variant="body2"
								color="text.secondary"
							>
								Description
							</Typography>
							<Typography
								variant="body2"
								color="text.secondary"
							>
								{props.publisher.firstName} {props.publisher.lastName}
							</Typography>
						</Box>
						<Box
							sx={{
								border: 1,
								borderColor: "primary.main",
								borderRadius: 1,
								p: 1,
								marginLeft: 2,
							}}
						>
							<Typography
								textAlign="center"
								variant="body2"
								color="primary"
							>
								{props.cookingTime}
							</Typography>
							<Typography
								textAlign="center"
								variant="body2"
								color="primary"
							>
								min
							</Typography>
						</Box>
					</CardContent>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							p: 2,
						}}
					>
						<Box>
							<Chip
								variant="outlined"
								size="small"
								label="Indian"
								sx={{ mr: 1 }}
							/>
							<Chip
								variant="outlined"
								size="small"
								label="African"
								sx={{ mr: 1 }}
							/>
							<Chip
								variant="outlined"
								size="small"
								label="Fusion"
							/>
						</Box>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<StarIcon
								size={16}
								color="gold"
							/>
							<Typography
								variant="body2"
								sx={{ ml: 0.5 }}
							>
								{props.averageRating}
							</Typography>
						</Box>
					</Box>
				</CardActionArea>

				<Box
					position="absolute"
					top={4}
					right={4}
					bgcolor="white"
					borderRadius={3}
				>
					<IconButton
						onClick={handleBookmarkToggle}
						color="primary"
						sx={{ p: 0.8 }}
					>
						{bookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
					</IconButton>
				</Box>
			</Card>
		</Grid>
	);
}
