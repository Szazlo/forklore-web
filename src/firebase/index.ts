// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
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
const analytics = getAnalytics(app);
export const db = getFirestore(app);
