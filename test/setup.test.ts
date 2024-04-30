/**
 * Populates the local emulator with dummy data
 * 
 * @author MariooC14
 */

import { expect, test } from 'vitest';
import { createUserWithEmailAndPassword, } from "firebase/auth";
import { collection, doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { auth, db, } from "./firebaseconfig";

export const users: any = {};

// Create some users

test("Creates 3 users with email and password", async () => {
	await createUserWithEmailAndPassword(auth, "david@gmail.com", "itdaveyes")
		.then(userCredential => {
			const user = userCredential.user;
			users.david = user;
		})

	await createUserWithEmailAndPassword(auth, "laplace@gmail.com", "gooner")
		.then(userCredential => {
			const user = userCredential.user;
			users.lauri = user;
		})

	await createUserWithEmailAndPassword(auth, "phish@gmail.com", "migueltupac")
		.then(userCredential => {
			const user = userCredential.user;
			users.phish = user;
		})

		// Expect the users object to have 3 users
		expect(Object.keys(users).length).toBe(3);
})

// On user creation, the background functions should have created the documents
test("David has gender 0", async() => {
	const davidRef = doc(db, "users", users.david.uid);
	
	/*
	Attach a document listener to the David user document
	This is because initially, the background function takes some time to boot up.
	Once the functions have written the documents, check if the data is correct.
	*/
	const unsub = onSnapshot(davidRef, { includeMetadataChanges: true }, doc => {
		// Error handler to make sure the document exists
		expect(doc.exists())
		if (doc.exists()) {
			// Once the document is written, check if the gender field is 0
			expect(doc.data().gender).toBe(0);
		}
		// Remove the listener
		unsub();
	})
})

// Create some sample nutritions
test("Sample nutritional values created", async () => {
	const nutritionsCollRef = collection(db, "nutritions");

	const nutritions = {
		kCal: 100,
		fat: 2,
		protein: 10,
		carbs: 40,
		sugars: 1,
		salts: 4
	};
	await setDoc(doc(nutritionsCollRef, "sausage"), nutritions);
	const newDoc = await getDoc(doc(nutritionsCollRef, "sausage"));
	expect(newDoc.exists()).toBe(true);
})

// Create some ingredients
test("Ingredients created", () => {
	const ingredientsCollRef = collection(db, 'ingredients');

	// Add sausage
	const sausageDoc = {
		name: "sausage",
		quantity: 1,
		unit: 1,
		nutritions: ["fat"]
	}
})