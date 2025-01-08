
import "./main.css";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./main.css";
import { ColorModeProvider } from "@/context/ColorModeProvider";
import { SnackbarProvider } from "@/context/SnackbarProvider";
import { supabase } from "@/supabase";
import { login, logout } from "./store/auth/authSlice.ts";
import { router } from "./router";

export default function App() {
  const dispatch = useDispatch();

  // Attach an auth listener. This is helpful for caching the current user on loadup
	supabase.auth.onAuthStateChange(async (event, session) => {
		if (event === "SIGNED_IN") {
			const user = session?.user
			dispatch(login(user));
		} else if (event === "SIGNED_OUT") {
			dispatch(logout());
		}
	})

  return (
    <ColorModeProvider>
        <SnackbarProvider>
            <RouterProvider router={router} />
        </SnackbarProvider>
    </ColorModeProvider>
  )
}
