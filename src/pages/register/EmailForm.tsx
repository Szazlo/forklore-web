import { Button, Divider, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { FormEvent, useState } from "react";
import { onAuthStateChanged, sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "@/firebase";
import useSnack from "@/context/SnackbarProvider";

const actionCodeSettings = {
	url: "http://localhost:5173/emailVerified",
	handleCodeInApp: true,
};

export default function EmailForm(props: any) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");
	const { addSnack } = useSnack();

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();

		// TODO: Handle email submit and verification
		// Send the email verification link
		// Wait for response.
		sendSignInLinkToEmail(auth, email, actionCodeSettings)
			.then(() => {
				addSnack("An verification link has been sent to your email address.");
				localStorage.setItem("emailForSignIn", email);

				const unsubscribe = onAuthStateChanged(auth, user => {
					// If the user successfully verified their email, scroll to the username form
					if (user) {
						

						props.scrollNext();
						unsubscribe();
					}
				});
			})
			.catch(error => {
				console.log(error.code, error.message);
			});
	};

	return (
		<div className="text-center px-4 m-auto xs:3/5 sm:w-4/5">
			<Typography variant="h4" gutterBottom color="primary">Sign up</Typography>
			<form onSubmit={handleSubmit} className="text-center mb-4">
				<div className="flex w-full gap-2">
					<TextField required value={firstName} onChange={(e) => setFirstName(e.target.value)} fullWidth
										 margin="normal"
										 name="firstName" label="First Name" />
					<TextField value={lastName} onChange={(e) => setLastName(e.target.value)} fullWidth margin="normal"
										 name="lastName" label="Last Name" />
				</div>
				<TextField value={email} onChange={(e) => setEmail(e.target.value)} name="email" fullWidth margin="dense"
									 type="email" label="Email" placeholder="masterchef@mail.com" required error={emailError !== ""}
									 helperText={emailError} />
				<Button type="submit" variant="contained" onClick={handleSubmit} sx={{ width: 0.5, m: 1 }}>Sign up</Button>
			</form>
			<Link to="/login" className="mt-4 text-primary hover:text-accent hover:underline">
				Already have an account? Sign in
			</Link>
			<Divider flexItem sx={{ p: 1, color: "primary.main" }}>OR</Divider>
			<Typography color="primary">Sign Up with:</Typography>
			<div className="flex w-full justify-center mt-4">
				<button className="mx-2 login-icon">
					<FontAwesomeIcon icon={["fab", "google"]} size="2x" />
				</button>
				<a href="#" className="mx-2 login-icon">
					<FontAwesomeIcon icon={["fab", "apple"]} size="2x" />
				</a>
				<button className="mx-2 login-icon">
					<FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
				</button>
			</div>
		</div>
	);
}
