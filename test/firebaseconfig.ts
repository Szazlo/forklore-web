import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';
import { connectStorageEmulator, getStorage } from "firebase/storage";
import {connectAuthEmulator, getAuth } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
	apiKey: "AIzaSyBilWekvA8-WHRXq68tYBsDFSL5p6mVMfw",
	authDomain: "forklore-23982.firebaseapp.com",
	projectId: "forklore-23982",
	storageBucket: "forklore-23982.appspot.com",
	messagingSenderId: "628820594055",
	appId: "1:628820594055:web:c3d61410e3d866b9b01722",
	measurementId: "G-PHEQD7G7BL",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);
export const storage = getStorage(app);
connectAuthEmulator(auth, "http://127.0.0.1:9099");
connectFirestoreEmulator(db, "127.0.0.1", 8080);
connectFunctionsEmulator(functions, "127.0.0.1", 5001);
connectStorageEmulator(storage, "127.0.0.1",  4000);