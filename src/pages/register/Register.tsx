import "@/main.css";
import signupImage from "@/assets/signup_img.png";
import { selectUser } from "@/store";
import { useSelector } from "react-redux";
import { Box, Container } from "@mui/material";
import EmailForm from "@/pages/register/EmailForm.tsx";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
	const user = useSelector(selectUser);
	const navigate = useNavigate();

	if (user !== null) {
		navigate("/");
		return;
	}

	return (
		<Container
			maxWidth="lg"
			sx={{ py: 8 }}
		>
			<Box className="lg:border flex py-4 drop-shadow-lg rounded">
				<div className="flex-1 hidden lg:block lg:w-1/2 items-start justify-start px-4">
					<img
						src={signupImage}
						alt="Photo of person taking a photo of food"
						className="rounded"
					/>
				</div>
				<div className="flex-1">
					<EmailForm />
				</div>
			</Box>
		</Container>
	);
}

export default SignUpPage;
