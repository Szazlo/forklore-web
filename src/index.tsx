import Navbar from "@/components/navbar.tsx";
import Footer from "@/components/footer.tsx";
import "./main.css";

function Index() {
	return (
		<>
			<Navbar />
			<main className={"flex-grow"}>
				<div className="flex flex-col items-center justify-center h-screen">
					<h1 className="text-4xl">Welcome to Forklore</h1>
					<p className="w-1/2 text-center">
						We are a community of food lovers who share our passion for cooking.
					</p>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default Index;

