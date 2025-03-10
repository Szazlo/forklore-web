import { Snackbar, AlertColor, Alert } from "@mui/material";
import { createContext, ReactNode, useState } from "react";

interface snackContextValues {
	addSnack: (message: string, severity?: AlertColor) => void;
}

interface Snack {
	message: string;
	severity?: AlertColor;
}

export const SnackbarContext = createContext({} as snackContextValues);

export function SnackbarProvider({ children }: { children: ReactNode }) {
	const [open, setOpen] = useState(false);
	const [snack, setSnack] = useState<Snack>({
		message: "",
		severity: "success",
	});

	const handleClose = (
		_event?: React.SyntheticEvent | Event,
		reason?: string,
	) => {
		if (reason === "clickaway") return;
		setOpen(false);
	};

	const addSnack = (message: string, severity?: AlertColor) => {
		setSnack({ message, severity: severity || "success" });
		setOpen(true);
	};

	const value = { addSnack };

	return (
		<SnackbarContext.Provider value={value}>
			<Snackbar autoHideDuration={4000} open={open} onClose={handleClose}>
				<Alert severity={snack.severity} onClose={handleClose}>
					{snack.message}
				</Alert>
			</Snackbar>
			{children}
		</SnackbarContext.Provider>
	);
}
