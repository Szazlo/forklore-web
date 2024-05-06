// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
	apiKey: "AIzaSyBilWekvA8-WHRXq68tYBsDFSL5p6mVMfw",
	authDomain: "forklore-23982.firebaseapp.com",
	projectId: "forklore-23982",
	storageBucket: "forklore-23982.appspot.com",
	messagingSenderId: "628820594055",
	appId: "1:628820594055:web:c3d61410e3d866b9b01722",
	measurementId: "G-PHEQD7G7BL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// @ts-ignore
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);

if (window.location.hostname === "localhost") {
	connectFirestoreEmulator(db, "127.0.0.1", 12000);
	connectAuthEmulator(auth, "http://127.0.0.1:9099");
	connectFunctionsEmulator(functions, "127.0.0.1", 5001);
}