import Home from "@/pages/Home";
import LoginForm from "@/pages/login";
import PageNotFound from "@/pages/404";
import SignUpForm from "@/pages/register/register.tsx";
import Recipe from "@/pages/Recipe";
import Root from "@/components/Root.tsx";
import { createBrowserRouter } from "react-router-dom";

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
				path: "*",
				element: <PageNotFound />,
			},
		],
	},
	{
		path: "/login",
		element: <LoginForm />,
	},
	{
		path: "/signup",
		element: <SignUpForm />,
	},
]);
