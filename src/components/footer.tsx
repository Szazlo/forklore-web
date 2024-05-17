import { Link } from "react-router-dom";
import "../main.css";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
		<footer className="bg-gray-200 py-8">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-left mb-6">
					<div className="text-center md:text-left mb-4 md:mb-0">
						<img src={"/public/logo.png"} alt="Forklore logo" className="h-8"/>
						<p className="mt-2 max-w-md text-left">The purpose of lorem ipsum is to create a natural looking block of
							text (sentence, paragraph, page, etc.) that doesn't distract from the layout.</p>
					</div>
				</div>
				<div className="flex flex-wrap justify-between items-start mb-6">
					<div className="w-full md:w-1/3 mb-4 md:mb-0">
						<h2 className="text-lg font-semibold mb-3">Products</h2>
						<ul>
							<li className="mb-2">
								<Link className={"hover:text-accent"} to="/">
								Feed
								</Link>
							</li>
							<li className="mb-2">
								<Link className={"hover:text-accent"} to="/recipes">
									Recipes
								</Link>
							</li>
							<li className="mb-2">
								<Link className={"hover:text-accent"} to="/tips">
									Cooking Tips
								</Link>
							</li>
						</ul>
					</div>
					<div className="w-full md:w-1/3 mb-4 md:mb-0">
						<h2 className="text-lg font-semibold mb-3">Company</h2>
						<ul>
							<li className="mb-2">
								<Link className={"hover:text-accent"} to="/about">
									About us
								</Link>
							</li>
							<li className="mb-2">
								<Link className={"hover:text-accent"} to="/contact">
									Contact
								</Link>
							</li>
							<li className="mb-2">
								<Link className={"hover:text-accent"} to="/news">
									News
								</Link>
							</li>
						</ul>
					</div>
					<div className="w-full md:w-1/3">
						<h2 className="text-lg font-semibold mb-3">Resources</h2>
						<ul>
							<li className="mb-2">
								<Link className={"hover:text-accent"} to="/faq">
									FAQ
								</Link>
							</li>
							<li className="mb-2">
								<Link className={"hover:text-accent"} to="/blog">
									Blog
								</Link>
							</li>
							<li className="mb-2">
								<Link className={"hover:text-accent"} to="/privacy">
									Privacy Policy
								</Link>
							</li>
							<li className="mb-2">
								<Link className={"hover:text-accent"} to="/terms">
									Terms of Service
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="flex justify-center md:justify-between items-center">
					<div className="flex space-x-6">
						<a href="#" className="hover:text-accent"><FontAwesomeIcon
							icon={["fab", "facebook"]}/></a>
						<a href="#" className="hover:text-accent"><FontAwesomeIcon
							icon={["fab", "x-twitter"]}/></a>
						<a href="#" className="hover:text-accent"><FontAwesomeIcon
							icon={["fab", "instagram"]}/></a>
						<a href="#" className="hover:text-accent"><FontAwesomeIcon
							icon={["fab", "tiktok"]}/></a>
					</div>
				</div>
				<hr className="border-gray-700 my-6"/>
				<p className="text-sm text-center md:text-left opacity-50 mt-4 md:mt-0">© 2024 Forklore. All Rights Reserved</p>
			</div>
		</footer>
	);
};

export default Footer;
