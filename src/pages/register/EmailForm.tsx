import { Button, Divider, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { FormEvent, useState } from "react";
import Api from "@/api";
import { login } from "@/store/auth/authSlice";
import useSnack from "@/context/SnackbarProvider";

export default function EmailForm() {
	const dispatch = useDispatch();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [emailError, _] = useState("");
	const { addSnack } = useSnack();

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		if (firstName !== "" && email !== "") {
			const newUser = await Api.signUpWithEmail(firstName, email, lastName);
			dispatch(login(newUser));
			addSnack("Signed in as " + newUser.firstName +" "+ newUser?.lastName, "success");
		}
	};

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
					onChange={(e) => setEmail(e.target.value)}
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
				<Button
					type="submit"
					variant="contained"
					onClick={handleSubmit}
					sx={{ width: 0.5, m: 1 }}
				>
					Sign up
				</Button>
			</form>
			<Link
				to="/login"
				className="mt-4 text-primary hover:text-accent hover:underline"
			>
				Already have an account? Sign in
			</Link>
			<Divider
				flexItem
				sx={{ p: 1, color: "primary.main" }}
			>
				OR
			</Divider>
			<Typography color="primary">Sign Up with:</Typography>
			<div className="flex w-full justify-center mt-4">
				<button className="mx-2 login-icon">
					<FontAwesomeIcon
						icon={["fab", "google"]}
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
				<button className="mx-2 login-icon">
					<FontAwesomeIcon
						icon={["fab", "facebook"]}
						size="2x"
					/>
				</button>
			</div>
		</div>
	);
}
