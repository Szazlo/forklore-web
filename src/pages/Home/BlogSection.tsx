import { storage } from "@/firebase";
import { BlogCardData } from "@/types/Blog";
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { getDownloadURL, ref } from "firebase/storage";
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
	}
]

export default function BlogSection() {
	const blogComponents = blogs.map(blog => <BlogComponent key={blog.id} {...blog} />);

	return (
		<>
			<Typography my={4} variant="h2" fontWeight="bold">Blogs</Typography>
			<Grid container spacing={2} mb={6}>{blogComponents}</Grid>
		</>
	)
}


function BlogComponent({ id, title, intro }: BlogCardData) {
	const [image, setImage] = useState("");

	useEffect(() => {
		getDownloadURL(ref(storage, `blogs/${id}/index.png`))
			.then(url => {
				console.log(url)
				setImage(url);
			})
			.catch(error => console.log(error));
	}, [id]);

	return (
		<Grid item sm={12} md={6}>
			<Card>
				<CardActionArea>
					<CardMedia height={100} component="img" src={image}/>
					<CardContent sx={{ minHeight: 150}}>
						<Typography variant="h5" fontWeight="bold">{title}</Typography>
						<Typography color="text.secondary">{intro}</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
	)
}
