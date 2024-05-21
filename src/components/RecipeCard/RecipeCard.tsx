import { RecipeCardData } from "@/types/recipe";
import { Avatar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Rating, Typography, useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { MouseEvent, useState } from "react";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export default function RecipeCard(props: RecipeCardData & any) {
  const [bookmarked, setBookmarked] = useState(false);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

	function handleBookmarkToggle(event: MouseEvent) {
		event.stopPropagation();
		event.preventDefault();
		setBookmarked(prev =>  !prev);
		// Save or unsave here to database
	}

  return (
		<Grid item xs={6} sm={4} >
      <Card sx={{ borderRadius: 3, position: "relative" }}>
        <CardActionArea>
          <CardMedia sx={{ borderRadius: 3, objectFit: "cover" }} component="img" image={props?.image} alt={props.title} />
          <CardContent sx={{ p: isTablet ? 1 : 2 }}>
          <Rating size="small" readOnly defaultValue={2.5} precision={0.5} />
            <Typography minHeight={50}>{props.title}</Typography>

            {/* Publisher and Calories */}
            {!isTablet &&
              <div className="flex justify-between items-center">
								<div className="flex items-center gap-1">
									<Avatar sx={{ width: 32, height: 32, bgcolor: "primary.main" }}>D</Avatar>
									<Typography variant="body2" color="text.secondary">{props.publisher.firstName?.at(0) + ". " + props.publisher.lastName}</Typography>
								</div>

								<Button disableRipple size="small" variant="outlined" color="warning" startIcon={<WhatshotIcon />}>251 cals</Button>

              </div>
            }
          </CardContent>
        </CardActionArea>

        {/* Bookmark Button */}
        <Box position="absolute" top={4} right={4} bgcolor="white" borderRadius={3}>
          <IconButton onClick={handleBookmarkToggle} color="primary" sx={{ p: 0.8 }}>
            {bookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
        </Box>
      </Card>
    </Grid>
  );
}
