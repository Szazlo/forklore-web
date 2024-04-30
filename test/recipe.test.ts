import { addDoc, collection, doc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore';
import { test, expect, vi } from 'vitest';
import { db, auth, functions } from './firebaseconfig';
import { User, signInWithEmailAndPassword } from 'firebase/auth';
import { httpsCallable } from 'firebase/functions';

// Access Phish User account
let phish: User | null;

test("Signing in as Phish works", async () => {
  await vi.waitFor(() => {
    signInWithEmailAndPassword(auth, "phish@gmail.com", "migueltupac")
      .then(userCredential => {
        phish = userCredential.user
      })
      .catch(err => {
        console.log('Not signed in yet', err);
      })
  }, {timeout: 600, interval: 30});

  expect(phish).not.toBeNull();
})


// Create recipe
const recipeCollRef = collection(db, "recipes");
const newRecipe = {
  title: "Halal Fried Chicken",
  ingredients: {
    "chimken": 200,
    "salt": 1
  },
  cookingTime: 120,
  difficulty: "hard",
  average_rating: 4.5,
  created_by: "phish",
  timeCreated: serverTimestamp(),
}

await setDoc(doc(recipeCollRef, newRecipe.title), newRecipe)