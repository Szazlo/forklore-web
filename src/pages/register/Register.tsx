import "@/main.css";
import { selectUser } from "@/store";
import { useSelector } from "react-redux";
import { Box, Container } from "@mui/material";
import SignupForm from "@/pages/register/EmailForm.tsx";
import { Navigate } from "react-router-dom";

function SignUpPage() {
	const user = useSelector(selectUser);

	if (user !== null) {
		return <Navigate to="/" />;
	}

	return (
		<Container
			maxWidth="lg"
			sx={{ py: 8 }}
		>
			<Box className="lg:border flex py-4 drop-shadow-lg rounded">
				<div className="flex-1 hidden lg:block lg:w-1/2 items-start justify-start px-4">
					<img
						src="/public/signup_img.png"
						alt="Photo of person taking a photo of food"
						className="rounded"
					/>
				</div>
				<div className="flex-1">
					<SignupForm />
				</div>
			</Box>
		</Container>
	);
}

export default SignUpPage;
