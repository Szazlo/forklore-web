import Home from "@/pages/Home";
import LoginForm from "@/pages/login";
import PageNotFound from "@/pages/404";
import SignUpPage from "@/pages/register";
import Recipe from "@/pages/Recipe";
import Root from "@/components/Root.tsx";
import Feed from "@/pages/Feed";
import { createBrowserRouter } from "react-router-dom";
import RecipeEditor from "@/pages/RecipeEditor";
import EmailVerified from "@/pages/EmailVerified";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				index: true,
				element: <Home />,
			},
			{
				path: "/recipe",
				element: <Recipe />,
			},
			{
				path: "/recipecreator",
				element: <RecipeEditor />,
			},
			{
				path: "/login",
				element: <LoginForm />,
			},
			{
				path: "/signup",
				element: <SignUpPage />,
			},
			{
				path: "/feed",
				element: <Feed />,
			},
			{
				path: "/emailVerified",
				element: <EmailVerified />,
			},
			{
				path: "*",
				element: <PageNotFound />,
			},
		],
	},
]);
