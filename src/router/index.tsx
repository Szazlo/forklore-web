import Home from "../index.tsx";
import LoginForm from "../login.tsx";
import PageNotFound from "@/404.tsx";
import SignUpForm from "@/register.tsx";
import Recipe from "@/recipe.tsx";
import Root from "../components/Root.tsx";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
        path: '/',
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