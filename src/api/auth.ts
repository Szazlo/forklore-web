import { ForkloreUser } from "@/types/User";
import { v4 as uuidv4 } from "uuid";

async function signUpWithEmailAndPassword(
	firstName: string,
	email: string,
	password: string,
	lastName?: string,
): Promise<ForkloreUser> {
	return new Promise<ForkloreUser>((resolve, reject) => {
		// Mock the api rejecting sign up if the email is already in use
		if (email === "test@test.com") {
			reject("Email already in use.");
		} else {
			resolve({ id: uuidv4(), firstName, email, lastName });
		}
	});
}

async function signInWithEmailAndPassword(
	email: string,
	password: string,
): Promise<ForkloreUser> {
	return { id: uuidv4(), firstName: "Moglio", email };
}

export { signUpWithEmailAndPassword, signInWithEmailAndPassword };
