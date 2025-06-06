// lib/firebase.ts

import { initializeApp, getApps, getApp } from "firebase/app"; // ✅ added getApp
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDNUL3EeCXgUuqAxe2aEsOWJppH7PrDo8",
  authDomain: "prasajati-aff81.firebaseapp.com",
  projectId: "prasajati-aff81",
  storageBucket: "prasajati-aff81.firebasestorage.app",
  messagingSenderId: "975817652360",
  appId: "1:975817652360:web:da60d5287a3827a408873d",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp(); // ✅ safe reuse

const db = getFirestore(app);

export { db };
