// import { useDispatch, useSelector } from "react-redux";
// import { login } from "@/store/auth/authSlice";
import { NavLink, /* useNavigate */ } from "react-router-dom";
import { Box, Button, Container, Divider, TextField, Typography } from "@mui/material";
import { FormEvent, useState } from "react";
import signinImage from "@/assets/signin_img.png";
import useSnack from "@/context/SnackbarProvider";
import SignInWithGoogleButton from "@/components/SignInWithGoogle";
// import { selectUser } from "@/store";

function LoginForm() {
	// const user = useSelector(selectUser);
	// const dispatch = useDispatch();
	// const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, ] = useState("");
	const { addSnack } = useSnack();

	// Signs the user in with google
	// const signInWithGoogle = async () => {
	// 	console.warn("Sign in with google: Not yet implemented");
	// };

	const handleSignInWithEmailAndPassword = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// signInWithEmailAndPassword(auth, email, password)
		// 	.then(userCredential => {
		// 		dispatch(login(userCredential.user));
		// 		navigate("/");
		// 	})
		// 	.catch(err => {
		// 		console.log(err);
		// 		if (err.code === "auth/wrong-password") {
		// 			setErrorMessage("Error: Invalid Credentials");
		// 		}
		// 	});
		if (email !== "" && password != "") {
			// Api;
		} else {
			addSnack("Invalid Credentials. Please try again", "error");
		}
	};

	return (
		<Container maxWidth="lg" sx={{ py: 8 }}>
			<Box className="border flex py-4 drop-shadow-lg rounded">
				<div className="flex-1 hidden lg:block lg:w-1/2 items-start justify-start px-4">
					<img src={signinImage} alt="Photo of person taking a photo of food" className="rounded object-contain" />
				</div>
				<div className="flex-1 m-auto text-center p-4">
						<Typography variant="h4" color="primary" gutterBottom>Log in</Typography>
						<form onSubmit={handleSignInWithEmailAndPassword} className="flex flex-col w-4/5 sm:w-1/2 mx-auto items-center mb-4">
							<TextField
								name="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								label="Email"
								required
								fullWidth
								margin="normal"
							/>
							<TextField
								name="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								label="Password"
								type="password"
								required
								fullWidth
								margin="dense"
								error={errorMessage !== ""}
								helperText={errorMessage}
							/>
							<div className="w-full text-right">
								<Button variant="text" type="button">Forgot Password?</Button>
							</div>
							<Button type="submit" variant="contained" sx={{ width: 150 }}>Log in</Button>
						</form>

						<NavLink to="/signup" className="text-primary hover:text-accent hover:underline">Don&apos;t have an account? Sign up</NavLink>
						<Divider variant="middle" sx={{ my: 2 }} className="text-primary my-4">OR</Divider>
						<div className="mx-auto">
							<SignInWithGoogleButton />
						</div>
					</div>
			</Box>
		</Container>
	);
}

export default LoginForm;
