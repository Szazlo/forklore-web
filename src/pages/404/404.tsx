import { useNavigate } from "react-router-dom";
import "@/main.css";

const PageNotFound = () => {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h2 className="text-4xl text-primary">Lost in the sauce?</h2>
			<h1 className="text-8xl text-accent my-4">404</h1>
			<p className="w-1/2 text-center">
				Ooops! It looks like you have taken a detour to while searching for you next
				meal.
				<br />
				Fear not! We have plenty of recipes to choose from. Let&apos;s get you back on
				track.
			</p>
			<button
				className="btn bg-primary py-2 px-4 my-4 rounded hover:bg-accent text-white"
				onClick={() => navigate(-1)}
			>
				Go back
			</button>
		</div>
	);
};

export default PageNotFound;
