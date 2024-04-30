/**
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

// import { onDocumentCreated } from "firebase-functions/v2/firestore";
// import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { auth } from "firebase-functions";
import { initializeApp } from "firebase-admin/app";
import {onCall} from "firebase-functions/v2/https";

initializeApp();
const db = getFirestore();

const recipeCollRef = db.collection("recipes");

/**
 * Creates the necessary user documents in firestore on signup
 */
exports.createUserDoc = auth.user().onCreate(user => {
  logger.log('User ' +user.uid+ ' created!');
  const userData = {
    username: "",
    userType: "",
    firstName: "",
    lastName: "",
    gender: 0,
    bio: "",
    photoUrl: user.photoURL,
    country: "IE",
    city: "Galway",
  }
  db.collection('users').doc(user.uid).set(userData);
})

/**
 * Todo: Add auth
 */
exports.createRecipe = onCall(async (request) => {
  logger.log(request.data);
  const newDoc = await recipeCollRef.add(request.data);

  return {
    message: "success",
    docId: newDoc.id
  };
})