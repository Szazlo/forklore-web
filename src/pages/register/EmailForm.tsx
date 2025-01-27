import { Button, Divider, TextField, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { FormEvent, useState } from "react";
import Api from "@/api";
import { login } from "@/store/auth/authSlice";
import useSnack from "@/context/SnackbarProvider";
import PasswordField from "@/components/PasswordField";
import { validateEmail, validatePassword } from "@/lib/utils";

export default function SignupForm() {
	const dispatch = useDispatch();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
	const [confirmPasswordError, setConfirmPasswordError] = useState("");

	const { addSnack } = useSnack();

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!validateEmail(event.target.value)) {
			setEmailError("Invalid email");
		} else {
			setEmailError("");
		}
		setEmail(event.target.value);
	}

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
		const { valid, messages } = validatePassword(event.target.value);
		if (!valid) {
			setPasswordErrors(messages);
		} else {
			setPasswordErrors([]);
		}
	}

	const handlePasswordConfirmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setConfirmPassword(event.target.value);
		if (password !== event.target.value) {
			setConfirmPasswordError("Passwords do not match");
		} else {
			setConfirmPasswordError("");
		}
	}

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		
		if (!validateEmail(email)) {
			setEmailError("Invalid email");
			return;
		}

		const { valid: isPasswordValid, messages: passwordErrorMessages } = validatePassword(password);
		if (!isPasswordValid) {
			setPasswordErrors(passwordErrorMessages);
			return;
		}if (password !== confirmPassword) {
			setConfirmPasswordError("Passwords do not match");
			return;
		}

		if (firstName !== "" && validateEmail(email) && isPasswordValid) {
			Api.signUpWithEmailAndPassword(firstName, email, lastName)
			.then(newUser => {
				dispatch(login(newUser));
				addSnack("Signed in as " + newUser.firstName +" "+ newUser?.lastName || "", "success");
			})
			.catch(_ => {
				setEmailError("Email already in use");
			});
		}
	};

	const passwordErrorMessages = confirmPasswordError ? 
		[...passwordErrors, confirmPasswordError] 
		: passwordErrors;

	return (
		<div className="text-center px-4 m-auto xs:3/5 sm:w-4/5">
			<Typography
				variant="h4"
				gutterBottom
				color="primary"
			>
				Sign up
			</Typography>
			<form
				onSubmit={handleSubmit}
				className="text-center mb-4"
			>
				<div className="flex w-full gap-2">
					<TextField
						required
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						fullWidth
						margin="normal"
						name="firstName"
						label="First Name"
					/>
					<TextField
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						fullWidth
						margin="normal"
						name="lastName"
						label="Last Name"
					/>
				</div>
				<TextField
					value={email}
					onChange={handleEmailChange}
					name="email"
					fullWidth
					margin="dense"
					type="email"
					label="Email"
					placeholder="masterchef@mail.com"
					required
					error={emailError !== ""}
					helperText={emailError}
				/>
				<PasswordField 
					label="Password" 
					value={password} 
					onChange={handlePasswordChange} 
					error={passwordErrors.length !== 0} 
					/>
				<PasswordErrorMessagesList messages={passwordErrorMessages} />
				<PasswordField
					label="Confirm Password" 
					value={confirmPassword} 
					onChange={handlePasswordConfirmChange} 
					/>
				<Button
					type="submit"
					variant="contained"
					onClick={handleSubmit}
					sx={{ width: 0.5, m: 1 }}
				>
					Sign up
				</Button>
			</form>
			<NavLink
				to="/login"
				className="mt-4 text-primary hover:text-accent hover:underline"
			>
				Already have an account? Sign in
			</NavLink>
			<Divider
				flexItem
				sx={{ p: 1, color: "primary.main" }}
			>
				OR
			</Divider>
			<Typography color="primary">Sign up with:</Typography>
			<SocialSignInLinks />
		</div>
	);
}

function SocialSignInLinks() {
	return <div className="flex w-full justify-center mt-4">
		<button className="mx-2 login-icon">
			<FontAwesomeIcon
				icon={["fab", "google"]}
				size="2x" />
		</button>
		<a
			href="#"
			className="mx-2 login-icon"
		>
			<FontAwesomeIcon
				icon={["fab", "apple"]}
				size="2x" />
		</a>
		<button className="mx-2 login-icon">
			<FontAwesomeIcon
				icon={["fab", "facebook"]}
				size="2x" />
		</button>
	</div>;
}

function PasswordErrorMessagesList({ messages }: { messages: string[] }) {
	return (
		<>
			{messages.length > 0 &&
				<ul className="text-left text-red-500 text-sm list-disc ml-10 mb-2">
					{messages.map((message, index) => (
						<li key={index}>{message}</li>
					))}
				</ul>
			}
		</>
	);
}