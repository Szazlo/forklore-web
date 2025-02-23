import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./main.css";
import { ColorModeProvider } from "@/context/ColorModeProvider";
import { SnackbarProvider } from "@/context/SnackbarProvider";
import Root from "./components/Root";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import PageNotFound from "./pages/404";
import EmailVerified from "./pages/EmailVerified";
import Recipe from "./pages/Recipe";
import LoginForm from "./pages/login";
import RecipeEditor from "./pages/RecipeEditor";
import SignUpPage from "./pages/register";

export default function App() {
	return (
		<ColorModeProvider>
			<SnackbarProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Root />}>
							<Route index element={<Home />} />
							<Route path="/recipe" element={<Recipe />} />
							<Route path="/recipecreator" element={<RecipeEditor />} />
							<Route path="/login" element={<LoginForm />} />
							<Route path="/signup" element={<SignUpPage />} />
							<Route path="/feed" element={<Feed />} />
							<Route path="/emailVerified" element={<EmailVerified />} />
							<Route path="*" element={<PageNotFound />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</SnackbarProvider>
		</ColorModeProvider>
	);
}
