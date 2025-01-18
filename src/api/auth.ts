import { ForkloreUser } from "@/types/User";
import { v4 as uuidv4 } from "uuid";

async function signUpWithEmail(
	firstName: string,
	email: string,
	lastName?: string,
): Promise<ForkloreUser> {
	return { id: uuidv4(), firstName, email, lastName };
}

async function signInWithEmail(email: string): Promise<ForkloreUser> {
	return { id: uuidv4(), firstName: "Moglio", email };
}

export { signUpWithEmail, signInWithEmail };
