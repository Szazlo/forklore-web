import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import FillAndCenterContainer from "@/components/ui/FillAndCenterContainer";

const PageNotFound = () => {
	return (
		<Box sx={{ height: '60vh'}}>
			<FillAndCenterContainer className="gap-4">
				<Typography variant="h1" color="secondary">404</Typography>
				<Typography variant="h2" color="primary">Lost in the sauce?</Typography>
				<Typography>
					Ooops! It looks like you have taken a detour to while searching for you next
					meal.
				</Typography>
				<Typography>
					Fear not! We have plenty of recipes to choose from. Let&apos;s get you back
					on track.
				</Typography>
				<Link to="/">
					<Button variant="contained">Go Home</Button>
				</Link>
			</FillAndCenterContainer>
		</Box>
	);
};

export default PageNotFound;
