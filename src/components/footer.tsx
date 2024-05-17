import { Link } from "react-router-dom";
import "../main.css";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";

function addToMailingList(event: any) {
	event.preventDefault();
	const email = event.target[0].value;
	const docRef = doc(db, "mailinglist", email);
	setDoc(docRef, {
		email: email,
	})
		.then(() => {
			console.log("Added to mailing list");
		})
		.catch((e) => {
			console.log(e);
		});
	event.target[0].value = "";
	// TODO: Add success notification
}

const Footer = () => {
	return (
		<footer className="flex flex-wrap justify-between gap-y-5 mx-3 pb-10 pt-5 tex-xs md:text-md">
			{/* Logo */}
			<div className="flex-initial basis-36">
				<img src="/logo.png" alt="Forklore logo" />
				<p className="mt-1 text-accent">Just fork it.</p>
			</div>
			{/* Ul wrapper */}
			<div className="flex justify-around basis-full md:basis-1/2">
				{/* Products section */}
				<ul className="mx-4">
					<li className="pb-2 font-bold">Products</li>
					<li className="pb-2">
						<Link className={"hover:text-accent"} to="/">
							Feed
						</Link>
					</li>
					<li className="pb-2">
						<Link className={"hover:text-accent"} to="/recipes">
							Recipes
						</Link>
					</li>
					<li>
						<Link className={"hover:text-accent"} to="/tips">
							Cooking Tips
						</Link>
					</li>
				</ul>
				<ul className="mx-4">
					<li className="pb-2 font-bold">Company</li>
					<li className="pb-2">
						<Link className={"hover:text-accent"} to="/about">
							About us
						</Link>
					</li>
					<li className="pb-2">
						<Link className={"hover:text-accent"} to="/contact">
							Contact
						</Link>
					</li>
					<li>
						<Link className={"hover:text-accent"} to="/news">
							News
						</Link>
					</li>
				</ul>
				{/* Resources section */}
				<ul className="flex flex-col mx-4">
					<li className="pb-2 font-bold">Resources</li>
					<li className="pb-2">
						<Link className={"hover:text-accent"} to="/faq">
							FAQ
						</Link>
					</li>
					<li className="pb-2">
						<Link className={"hover:text-accent"} to="/blog">
							Blog
						</Link>
					</li>
					<li>
						<Link className={"hover:text-accent"} to="/tips">
							Tips
						</Link>
					</li>
				</ul>
			</div>
			{/* Mailing list Section */}
			<form className="flex flex-col basis-2/3 md:basis-1/4 sm:mx-auto" onSubmit={addToMailingList}>
				<p className="mb-2 font-bold">Stay up to date</p>
				<input
					className="mb-4 w-full p-2 border border-primary rounded-2xl"
					type="email"
					placeholder="Email"
					required
				/>
				<button className="w-full p-2 bg-primary text-white rounded-xl hover:bg-accent">
					Subscribe
				</button>
			</form>
		</footer>
	);
};

export default Footer;
