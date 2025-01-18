import "./main.css";
import { RouterProvider } from "react-router-dom";
import "./main.css";
import { ColorModeProvider } from "@/context/ColorModeProvider";
import { SnackbarProvider } from "@/context/SnackbarProvider";
import { router } from "./router";

export default function App() {
	return (
		<ColorModeProvider>
			<SnackbarProvider>
				<RouterProvider router={router} />
			</SnackbarProvider>
		</ColorModeProvider>
	);
}
