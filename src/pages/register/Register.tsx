import "@/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
// import { selectUser } from "./store";
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/store/auth/authSlice.ts";
import { useNavigate } from "react-router-dom";
import { Box, Button, Divider, Typography } from "@mui/material";

library.add(fab);

function SignUpForm() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleSignUpWithEmailAndPassword(event: FormEvent) {
		event.preventDefault();
		// @ts-ignore
		const email = event.target.email.value;
		// @ts-ignore
		const password = event.target.password.value;

		// check if email is valid, password is valid
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed up
				console.log("Signed up successful");
				const user = userCredential.user;
				dispatch(login(user));
				navigate("/");
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.error(errorMessage);
			});
	}

	return (
		<div className="lg:flex h-screen">
			<div className="w-full flex items-start justify-start p-4 lg:hidden flex-1">
				<img src="/logo.png" alt="Forklore logo" className="h-10 mx-auto" />
			</div>
			<div className="hidden lg:block lg:w-1/2 bg-secondary items-start justify-start p-4">
				<img src="/logo.png" alt="Forklore logo" className="hidden lg:block h-10" />
			</div>
			<div className="flex-1 flex flex-col lg:items-center mt-10 lg:mt-0">
				<div className="text-center px-4 m-auto sm:w-3/5">
					<Typography variant="h3" gutterBottom color="primary">Sign up</Typography>
					<form onSubmit={handleSignUpWithEmailAndPassword} className="text-center mb-4">
						<div className="flex w-full gap-2">
							{/* First name field*/}
							<input
								name="firstName"
								className="mb-4 px-4 py-2 w-full border border-primary rounded-full"
								placeholder="First Name"
							/>
							{/* Last Name Field*/}
							<input
								name="lastName"
								className="mb-4 px-4 py-2 w-full border border-primary rounded-full"
								placeholder="Last Name"
							/>
						</div>
						{/* Username field */}
						<input
							name="username"
							className="mb-4 w-full px-4 py-2 border border-primary rounded-full"
							placeholder="Username"
							required
						/>
						{/* Email field */}
						<input
							name="email"
							className="mb-4 w-full px-4 py-2 border border-primary rounded-full"
							type="email"
							placeholder="Email"
							required
						/>
						{/* Password field */}
						<input
							name={"password"}
							className="mb-4 w-full px-4 py-2 border border-primary rounded-full"
							type="password"
							placeholder="Password"
							required
						/>
						{/* TODO: Confirm password field? */}
						<Button variant="contained" sx={{ width: 0.5 }}>Sign up</Button>
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
		</div>
	);
}

export default SignUpForm;
