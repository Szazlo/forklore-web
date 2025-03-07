import "@/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

// import { useDispatch, useSelector } from "react-redux";
// import { login } from "@/store/auth/authSlice";
import { Link, /* useNavigate */ } from "react-router-dom";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { FormEvent, useState } from "react";
import useSnack from "@/context/SnackbarProvider";
// import { selectUser } from "@/store";

library.add(fab);

function LoginForm() {
	// const user = useSelector(selectUser);
	// const dispatch = useDispatch();
	// const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, ] = useState("");
	const { addSnack } = useSnack();

	// Signs the user in with google
	const signInWithGoogle = async () => {
		console.warn("Sign in with google: Not yet implemented");
	};

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
		<Container
			maxWidth="lg"
			sx={{ py: 8 }}
		>
			<Box className="border flex py-4 drop-shadow-lg rounded">
				<div className="flex-1 hidden lg:block lg:w-1/2 items-start justify-start px-4">
					<img
						src="/public/signin_img.png"
						alt="Photo of person taking a photo of food"
						className="rounded object-contain"
					/>
				</div>
				<div className="flex-1 m-auto">
					<div className="text-center lg:mt-0 p-4">
						<Typography
							variant="h4"
							color="primary"
							gutterBottom
						>
							Log in
						</Typography>

						<form
							onSubmit={handleSignInWithEmailAndPassword}
							className="flex flex-col w-4/5 sm:w-1/2 mx-auto items-center mb-4"
						>
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
							<div className={"w-full text-right"}>
								<Button
									variant="text"
									sx={{ textTransform: "capitalize" }}
									type="button"
								>
									Forgot Password?
								</Button>
							</div>
							<Button
								type="submit"
								variant="contained"
								sx={{ width: 150 }}
							>
								Log in
							</Button>
						</form>

						<Link
							to="/signup"
							className="mt-4 text-primary hover:text-accent hover:underline"
						>
							Don&apos;t have an account? Sign up
						</Link>
						<div className="flex justify-center items-center w-full mt-4">
							<hr className="w-1/4 border-t border-secondary" />
							<p className="mx-4 text-secondary">OR</p>
							<hr className="w-1/4 border-t border-secondary" />
						</div>
						<p className="mt-4 text-primary">Log in with:</p>
						<div className="flex w-full justify-center mt-4">
							<button className="mx-2 login-icon">
								<FontAwesomeIcon
									icon={["fab", "facebook"]}
									size="2x"
								/>
							</button>
							<button className="mx-2 login-icon">
								<FontAwesomeIcon
									icon={["fab", "google"]}
									onClick={signInWithGoogle}
									size="2x"
								/>
							</button>
							<button className="mx-2 login-icon">
								<FontAwesomeIcon
									icon={["fab", "microsoft"]}
									size="2x"
								/>
							</button>
							<button className="mx-2 login-icon">
								<FontAwesomeIcon
									icon={["fab", "twitter"]}
									size="2x"
								/>
							</button>
							<a
								href="#"
								className="mx-2 login-icon"
							>
								<FontAwesomeIcon
									icon={["fab", "apple"]}
									size="2x"
								/>
							</a>
						</div>
					</div>
				</div>
			</Box>
		</Container>
	);
}

export default LoginForm;
