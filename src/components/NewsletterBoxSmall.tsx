import { Box, Button, Container, InputAdornment, TextField, Typography } from "@mui/material";
import { EmailOutlined } from "@mui/icons-material";

export default function NewsletterBoxSmall() {

	return (
		<Box width={1} bgcolor="background.light" py={3} my={8}>
			<Container sx={{ textAlign: "center" }}>
				<Typography variant="h5" gutterBottom fontWeight="bold">Stay connected</Typography>
				<Container>
					<Typography color="text.dark" gutterBottom>for the latest health tips and delicious recipes!</Typography>
				</Container>
				<Container sx={{ my: 2 }}>
					<div className="w-full items-center">
						<TextField InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<EmailOutlined />
								</InputAdornment>
							),
						}} sx={{ bgcolor: "white", mb: 1 }} size="small" fullWidth placeholder="Enter your email" />
						<Button fullWidth className="flex-1" variant="contained"
										sx={{ textTransform: "capitalize" }}>Subscribe</Button>
					</div>
				</Container>
			</Container>
		</Box>
	);
}
