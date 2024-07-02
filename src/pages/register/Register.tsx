import "@/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
// import { selectUser } from "./store";
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/store/auth/authSlice.ts";
import { useNavigate } from "react-router-dom";
import { Button, Container, Divider, TextField, Typography } from "@mui/material";

library.add(fab);

function SignUpForm() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState("");

	function handleSignUpWithEmailAndPassword(event: FormEvent) {
		event.preventDefault();
		// TODO: Check if password is valid
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
		<Container maxWidth="lg" sx={{ display: 'flex', py: 8 }}>
			<div className="hidden lg:block lg:w-1/2 bg-secondary items-start justify-start p-4">
				Insert your favourite animation here
			</div>
			<div className="flex-1">
				<div className="text-center px-4 m-auto xs:3/5 sm:w-4/5">
					<Typography variant="h4" gutterBottom color="primary">Sign up</Typography>
					<form onSubmit={handleSignUpWithEmailAndPassword} className="text-center mb-4">
						<div className="flex w-full gap-2">
							<TextField value={firstName} onChange={(e) => setFirstName(e.target.value)} fullWidth margin="normal" name="firstName" label="First Name" />
							<TextField value={lastName} onChange={(e) => setLastName(e.target.value)}fullWidth margin="normal" name="lastName" label="Last Name" />
						</div>
						<TextField value={username} onChange={(e) => setUsername(e.target.value)} name="username" fullWidth margin="dense" label="Username" required />
						<TextField value={email} onChange={(e) => setEmail(e.target.value)} name="email" fullWidth margin="dense" type="email" label="Email" placeholder="masterchef@mail.com" required error={emailError !== ""} helperText={emailError}/>
						<TextField value={password} onChange={(e) => setPassword(e.target.value)}name="password" fullWidth margin="normal" type="password" label="Password" required/>
						{/* TODO: Confirm password field? */}
						<Button type="submit" variant="contained" sx={{ width: 0.5 }}>Sign up</Button>
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
			</div>
		</Container>
	);
}

export default SignUpForm;
