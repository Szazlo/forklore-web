import React from "react";
import ReactDOM from "react-dom/client";
import SignUpForm from "./register.tsx";
import "./main.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./main.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <SignUpForm />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
