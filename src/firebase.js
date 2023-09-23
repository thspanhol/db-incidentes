import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgtZLYFAOhwYUBzUZYBzkJk8gMdg8CTkk",
  authDomain: "db-inc.firebaseapp.com",
  projectId: "db-inc",
  storageBucket: "db-inc.appspot.com",
  messagingSenderId: "948225132164",
  appId: "1:948225132164:web:e892d50aa70a6f0d5fe4d1",
};

const app = initializeApp(firebaseConfig);
export const fireDB = getFirestore(app);
