import { BlogCardData } from "@/types/Blog";
import {
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Grid,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";

const blogs: BlogCardData[] = [
	{
		id: 1,
		title: "Unlocking the Benefits of Intermittent Fasting",
		intro: "Weight Management and Health Management and Lauri Baby Gronk",
	},
	{
		id: 2,
		title: "The Impact of Sugar Consumption on Your Health",
		intro: "Unveiling the Hidden Dangers of Sugar Consumption",
	},
];

export default function BlogSection() {
	const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));
	const blogComponents = blogs.map((blog) => (
		<BlogComponent
			key={blog.id}
			{...blog}
		/>
	));

	return (
		<>
			<Typography
				my={4}
				variant="h2"
				fontWeight="bold"
			>
				Blogs
			</Typography>
			<div className="w-full text-right">
				{!isMobile && (
					<Button
						variant="text"
						sx={{ textTransform: "none" }}
						type="button"
					>
						View more
					</Button>
				)}
			</div>
			<Grid
				container
				spacing={2}
				mb={6}
			>
				{blogComponents}
			</Grid>
		</>
	);
}

function BlogComponent({ id, title, intro }: BlogCardData) {
	const [image, ] = useState("");

	useEffect(() => {
		console.log("Blogcomponent: Get image not implemented");
	}, [id]);

	return (
		<Grid
			item
			sm={12}
			md={6}
		>
			<Card>
				<CardActionArea>
					<CardMedia
						height={100}
						component="img"
						src={image}
					/>
					<CardContent sx={{ minHeight: 150 }}>
						<Typography
							variant="h5"
							fontWeight="bold"
						>
							{title}
						</Typography>
						<Typography color="text.secondary">{intro}</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
	);
}
