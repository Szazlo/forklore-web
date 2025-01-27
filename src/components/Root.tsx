/**
 * This is the component that describes the layout of the website
 */

import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Navbar from "./Navbar";

export default function Root() {
	return (
		<>
			<Navbar />
			{/* Outlet is the child component that the router will render. See router.tsx */}
			<Outlet />
			<Footer />
		</>
	);
}
