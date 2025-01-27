import {
	CssBaseline,
	PaletteMode,
	ThemeProvider,
	createTheme,
} from "@mui/material";
import { ReactNode, createContext, useMemo, useState } from "react";
import { getDesignTokens, fontTheme } from "./theme";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function ColorModeProvider({ children }: { children: ReactNode }) {
	// const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark");
	const [mode, setMode] = useState<PaletteMode>(
		/*prefersDarkMode ? "dark": */ "light",
	);

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode: PaletteMode) =>
					prevMode === "light" ? "dark" : "light",
				);
			},
		}),
		[],
	);

	const theme = useMemo(
		() => createTheme(fontTheme, getDesignTokens(mode)),
		[mode],
	);
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}
