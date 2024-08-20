import { auth } from "@/firebase";
import { useEffect } from "react";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";


export default function EmailVerified() {
	useEffect(() => {
		if (isSignInWithEmailLink(auth, location.href)) {
			let email = localStorage.getItem("emailForSignIn");
			if (!email) {
				email = prompt("Please provide your email for confirmation");
			}

			signInWithEmailLink(auth, email || "", window.location.href)
				.then(result => {
					localStorage.removeItem("emailForSignIn");
					console.log(result);
				});
		}
	});

	return (
		<div>
			Success! You have successfully created your account. You can now close this page.
		</div>
	);
}
