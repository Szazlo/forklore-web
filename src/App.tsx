
import "./main.css";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./main.css";
import { ColorModeProvider } from "@/context/ColorModeProvider";
import { SnackbarProvider } from "@/context/SnackbarProvider";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import { login, logout } from "./store/auth/authSlice.ts";
import { router } from "./router";

export default function App() {
  const dispatch = useDispatch();
  // Attach an auth listener. This is helpful for caching the current user on loadup
	onAuthStateChanged(auth, user => {
		if (user) dispatch(login(user));
    else dispatch(logout());
	})
  
  return (
    <ColorModeProvider>
        <SnackbarProvider>
            <RouterProvider router={router} />
        </SnackbarProvider>
    </ColorModeProvider>
  )
}