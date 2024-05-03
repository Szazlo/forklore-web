import { PaletteMode } from "@mui/material";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...mode === "light"
    ? {
      primary: {
        main: "#5ea67b",
      },
      secondary: {
        main: "#9dd2b1",
      },
      text: {
        primary:"#0f1511",
      },
      background: {
        default: "#f6f9f7",
      }
    }: {
        primary: {
          main: "#59a176",
        },
        secondary: {
          main: "#2d6241",
        },
        text: {
          primary: "#eaf0ec",
        },
        bacgkround: {
          default: "#060907",
        }
      }
    }
  })