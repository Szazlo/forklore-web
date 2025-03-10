import {
	PaletteMode,
	createTheme,
	responsiveFontSizes,
	alpha,
} from "@mui/material";
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router';
import { LinkProps } from '@mui/material/Link';
import { forwardRef } from "react";

/** Used for allowing MUI buttons to act as router links */
const LinkBehavior = forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  return <RouterLink ref={ref} to={href} {...other} />;
});
LinkBehavior.displayName = 'LinkBehavior';

export const fontTheme = responsiveFontSizes(
	createTheme({
		components: {
			MuiButton: {
				styleOverrides: {
					root: {
						textTransform: "none",
					},
				},
			},
			MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
		},
	}),
);

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
