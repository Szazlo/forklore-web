import { RecipeData } from "@/types/recipe";
import {
	Avatar,
	Box,
	Button,
	Container,
	Divider,
	FormGroup,
	Grid,
	List,
	Rating,
	Stack,
	Typography,
} from "@mui/material";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import burgir from "@/assets/burgir.jpeg";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { formatDate } from "@/lib/utils.ts";
import { IngredientsList } from "@/pages/Recipe/IngredientsList.tsx";

export default function RecipePrintCard(props: RecipeData) {

	return (
		<Container className="bg-gray-200 p-4 my-10">
			<div className="flex">
				<div>
					<img src={burgir} alt="burgir" className="rounded" />
					<div className="flex items-center gap-2 my-2">
						<Rating readOnly value={props.averageRating} size="small" />
						<Typography color="text.dark">{props.averageRating} / 10 reviews</Typography>
					</div>
				</div>
				<div className="ml-4">
					<Typography variant="h4">{props.title}</Typography>
					<Grid container gap={2}>
						<div className="flex items-center gap-2">
							<Avatar sx={{ height: 20, width: 20, bgcolor: "primary.main" }} />
							<Typography variant="body2">{props.publisher.firstName} {props.publisher.lastName}</Typography>
						</div>
						<div className="flex items-center gap-2">
							<CalendarMonthIcon color="primary" fontSize="small" />
							<Typography variant="body2">{formatDate(props.createdAt)}</Typography>
						</div>
						{/*	TODO: Add category*/}
					</Grid>
				</div>
			</div>

			{/* Action buttons */}
			<Grid container gap={2} mb={3}>
				<Button variant="contained" sx={{ textTransform: "capitalize" }}>
					<LocalPrintshopOutlinedIcon className="mr-2" />
					<Typography>Print</Typography>
				</Button>
				<Button variant="contained" sx={{ textTransform: "capitalize" }}>
					<BookmarkBorderIcon className="mr-2" />
					<Typography>Add to Favorites</Typography>
				</Button>
				<Button variant="contained" sx={{ textTransform: "capitalize" }}>
					<ShareOutlinedIcon className="mr-2" />
					<Typography>Share</Typography>
				</Button>
			</Grid>

			<Divider />

			{/* Ingredients */}
			<Typography variant="h4" my={1}>Ingredients</Typography>
			<FormGroup>
				<IngredientsList ingredients={props.ingredients} />
			</FormGroup>

			{/* Steps */}
			<Typography variant="h4" my={1}>Steps</Typography>
			<Stack spacing={2}>
				{props.steps.map(step =>
					<div className="flex items-start gap-1" key={step.stepNumber}>
						<div className="w-8">
							<Box bgcolor="primary.main" className="w-6 h-6 flex align-middle justify-center rounded text-white">
								{step.stepNumber}
							</Box>
						</div>
						<Typography maxWidth={0.9}>{step.content}</Typography>
					</div>,
				)}
			</Stack>

			<Typography variant="h4" my={2}>Cooking Notes:</Typography>
			<List>
				<ListItem>Ensure the freshness of your mixed greens. Look for crisp, vibrant eaves with no signs of wilting or
					browning</ListItem>
			</List>
		</Container>
	);
}

function ListItem({ children }: any) {
	return (
		<div className="flex">
			<Box className="rounded-xl w-3 h-2 m-2" bgcolor="primary.main" />
			{children}
		</div>
	);
}
