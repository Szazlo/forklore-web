import { Button, InputAdornment, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { selectSignupMeta } from "@/store/signup/signupSlice.ts";

export default function UsernameForm() {
	const signupData = useSelector(selectSignupMeta);

	return (
		<div className="text-center px-4 m-auto xs:3/5 sm:w-4/5">
			<Typography variant="h3" gutterBottom color="primary">Hi {signupData.firstName}!</Typography>
			<Typography variant="h5" gutterBottom color="text.dark">Let's choose a username.</Typography>

			<form>
				<TextField
					id="outlined-start-adornment"
					sx={{ m: 1, width: "25ch" }}
					InputProps={{
						startAdornment: <InputAdornment position="start">@</InputAdornment>,
					}}
					placeholder="AmazingChef123"
				/>
				<div className="flex gap-2 justify-center">
					<Button variant="outlined" sx={{ textTransform: "capitalize" }}>Maybe Later</Button>
					<Button variant="contained" sx={{ textTransform: "capitalize" }}>Continue</Button>
				</div>
			</form>
		</div>
	);
}
