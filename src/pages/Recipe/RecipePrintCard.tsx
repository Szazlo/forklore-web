import { RecipeData } from "@/types/recipe";
import {
	Avatar,
	Box,
	Button,
	Container,
	Grid,
	Rating,
	Typography,
} from "@mui/material";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import burgir from "@/assets/burgir.jpeg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { formatDate } from "@/lib/utils.ts";

export default function RecipePrintCard(props: RecipeData) {
	return (
		<Container className="bg-gray-200 p-4 my-10">
			<div className="flex">
				<div>
					<img src={burgir} alt={props.title + " image"} className="rounded"/>
					<div className="flex items-center gap-2 my-2">
						<Rating readOnly value={5} size="small" />
						<Typography color="text.dark">
							{9} / 10 reviews
						</Typography>
					</div>
				</div>
				<div className="ml-4">
					<Typography variant="h4">{props.title}</Typography>
					<Grid container gap={2}>
						<div className="flex items-center gap-2">
							<Avatar sx={{ height: 20, width: 20, bgcolor: "primary.main" }} />
							<Typography variant="body2">
								{props.publisher.firstName} {props.publisher.lastName}
							</Typography>
						</div>
						<div className="flex items-center gap-2">
							<CalendarMonthIcon color="primary" fontSize="small"/>
							<Typography variant="body2">{formatDate(props.createdAt)}</Typography>
						</div>
						{/*	TODO: Add category*/}
					</Grid>
				</div>
			</div>

			{/* Action buttons */}
			<Grid container gap={2} mb={3}>
				<Button variant="contained">
					<LocalPrintshopOutlinedIcon className="mr-2" />
					<Typography>Print</Typography>
				</Button>
				<Button variant="contained">
					<BookmarkBorderIcon className="mr-2" />
					<Typography>Add to Favorites</Typography>
				</Button>
				<Button variant="contained">
					<ShareOutlinedIcon className="mr-2" />
					<Typography>Share</Typography>
				</Button>
			</Grid>

			<Box>
				Todo: Add content below
			</Box>
		</Container>
	);
}
