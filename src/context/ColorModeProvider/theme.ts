import {
	PaletteMode,
	createTheme,
	responsiveFontSizes,
	alpha,
} from "@mui/material";

export const fontTheme = responsiveFontSizes(createTheme());

export const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
		...(mode === "light"
			? {
					primary: {
						main: "#5ea67b",
						dark: "#6dc58f",
						contrastText: "#fff", //button text white instead of black
					},
					secondary: {
						main: "#9dd2b1",
						dark: "#",
					},
					text: {
						primary: "#0f1511",
						secondary: "#A7A7A7",
						dark: "#737373",
					},
					background: {
						default: "#f6f9f7",
						light: alpha("#9dd2b1", 0.4),
					},
				}
			: {
					primary: {
						main: "#59a176",
					},
					secondary: {
						main: "#2d6241",
					},
					text: {
						primary: "#eaf0ec",
					},
					background: {
						default: "#060907",
					},
				}),
	},
});
