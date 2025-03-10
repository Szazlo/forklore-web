import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
	FormHelperText,
} from "@mui/material";
import { useState } from "react";

interface PasswordFieldProps {
	error?: boolean;
	label?: string;
	helperText?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function PasswordField({
	label,
	error,
	value,
	onChange,
	helperText,
}: PasswordFieldProps) {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>,
	) => {
		event.preventDefault();
	};

	const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	return (
		<FormControl variant="outlined" fullWidth sx={{ my: 0.5 }} required>
			<InputLabel htmlFor={label}>{label}</InputLabel>
			<OutlinedInput
				id={label}
				type={showPassword ? "text" : "password"}
				value={value}
				onChange={onChange}
				error={error}
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label={showPassword ? "hide the password" : "display the password"}
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
							onMouseUp={handleMouseUpPassword}
							edge="end"
						>
							{showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				}
				label="Password"
			/>
			<FormHelperText error={error}>{helperText}</FormHelperText>
		</FormControl>
	);
}

export default PasswordField;
