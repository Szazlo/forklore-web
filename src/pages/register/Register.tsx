import "@/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import signupImage from "@/assets/signup_img.png";
import { fab } from "@fortawesome/free-brands-svg-icons";
// import { selectUser } from "./store";
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/store/auth/authSlice.ts";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Container, Divider, TextField, Typography } from "@mui/material";

library.add(fab);

function SignUpForm() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("")

	function handleSignUpWithEmailAndPassword(event: FormEvent) {
		event.preventDefault();
		// TODO: Check if password is valid
		if (password !== confirmPassword) {
			setPasswordError("Passwords must match");
			return;
		}

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed up
				console.log("Signed up successful");
				const user = userCredential.user;
				dispatch(login(user));
				navigate("/");
			})
			.catch(error => {
				// TODO: Add more error handles on singup
				if (error.code === "auth/email-already-in-use") {
					setEmailError("Email already in use.");
				}
			});
	}

	return (
		<Container maxWidth="lg" sx={{ py: 8 }}>
			<Box className="border flex py-4 drop-shadow-lg rounded">
				<div className="flex-1 hidden lg:block lg:w-1/2 items-start justify-start px-4">
					<img src={signupImage} alt="Photo of person taking a photo of food" className="rounded" />
				</div>
				<div className="flex-1">
					<div className="text-center px-4 m-auto xs:3/5 sm:w-4/5">
						<Typography variant="h4" gutterBottom color="primary">Sign up</Typography>
						<form onSubmit={handleSignUpWithEmailAndPassword} className="text-center mb-4">
							<div className="flex w-full gap-2">
								<TextField value={firstName} onChange={(e) => setFirstName(e.target.value)} fullWidth margin="normal"
													 name="firstName" label="First Name" />
								<TextField value={lastName} onChange={(e) => setLastName(e.target.value)} fullWidth margin="normal"
													 name="lastName" label="Last Name" />
							</div>
							<TextField value={username} onChange={(e) => setUsername(e.target.value)} name="username" fullWidth
												 margin="dense" label="Username" required />
							<TextField value={email} onChange={(e) => setEmail(e.target.value)} name="email" fullWidth margin="dense"
												 type="email" label="Email" placeholder="masterchef@mail.com" required error={emailError !== ""}
												 helperText={emailError} />
							<TextField value={password} onChange={(e) => setPassword(e.target.value)} name="password" fullWidth
												 margin="normal" type="password" label="Password" required />
							{/* TODO: Confirm password field? */}
							<Button type="submit" variant="contained" sx={{ width: 0.5 }}>Sign up</Button>
						</form>
						<Link to="/login" className="mt-4 text-primary hover:text-accent hover:underline" >
							Already have an account? Sign in
						</Link>
						<Divider flexItem sx={{ p: 1, color: "primary.main" }}>OR</Divider>
						<Typography color="primary">Sign Up with:</Typography>
						<div className="flex w-full justify-center mt-4">
							<button className="mx-2 login-icon">
								<FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
							</button>
							<button className="mx-2 login-icon">
								<FontAwesomeIcon icon={["fab", "google"]} size="2x" />
							</button>
							<button className="mx-2 login-icon">
								<FontAwesomeIcon icon={["fab", "microsoft"]} size="2x" />
							</button>
							<button className="mx-2 login-icon">
								<FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
							</button>
							<a href="#" className="mx-2 login-icon">
								<FontAwesomeIcon icon={["fab", "apple"]} size="2x" />
							</a>
						</div>
						<TextField value={username} onChange={(e) => setUsername(e.target.value)} name="username" fullWidth margin="dense" label="Username" required />
						<TextField value={email} onChange={(e) => setEmail(e.target.value)} name="email" fullWidth margin="dense" type="email" label="Email" placeholder="masterchef@mail.com" required error={emailError !== ""} helperText={emailError}/>
						<TextField value={password} onChange={(e) => setPassword(e.target.value)}name="password" fullWidth margin="dense" type="password" label="Password" required error={passwordError !== ""} helperText={passwordError} />
						<TextField value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} name="password-confirm" fullWidth margin="dense" type="password" label="Confirm Password" required />
						<Button type="submit" variant="contained" sx={{ width: 0.5, m: 1 }} >Sign up</Button>
					</form>
					<a className="mt-4 text-primary hover:text-accent hover:underline" href="/login">
						Already have an account? Sign in
					</a>
					<Divider flexItem sx={{ p: 1, color: "primary.main" }}>OR</Divider>
					<Typography color="primary">Sign Up with:</Typography>
					<div className="flex w-full justify-center mt-4">
						<button className="mx-2 login-icon">
							<FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
						</button>
						<button className="mx-2 login-icon">
							<FontAwesomeIcon icon={["fab", "google"]} size="2x" />
						</button>
						<button className="mx-2 login-icon">
							<FontAwesomeIcon icon={["fab", "microsoft"]} size="2x" />
						</button>
						<button className="mx-2 login-icon">
							<FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
						</button>
						<a href="#" className="mx-2 login-icon">
							<FontAwesomeIcon icon={["fab", "apple"]} size="2x" />
						</a>
					</div>
				</div>
			</Box>
		</Container>
	);
}

export default SignUpForm;
