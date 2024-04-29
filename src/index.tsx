import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@/components/ui/button";
import "./main.css";

function Index() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="flex flex-col items-center justify-center min-h-screen py-2">
				<header className="flex flex-col items-center justify-center">
					<img
						src={reactLogo}
						className="h-60 pointer-events-none"
						alt="logo"
					/>
					<img src={viteLogo} className="h-60 pointer-events-none" alt="vite" />
					<p>
						Edit <code>App.tsx</code> and save to test HMR updates.
					</p>
					<Button onClick={() => setCount((count) => count + 1)}>
						count is: {count}
					</Button>
				</header>
			</div>
		</>
	);
}

export default Index;
