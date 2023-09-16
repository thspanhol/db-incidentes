// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgtZLYFAOhwYUBzUZYBzkJk8gMdg8CTkk",
  authDomain: "db-inc.firebaseapp.com",
  projectId: "db-inc",
  storageBucket: "db-inc.appspot.com",
  messagingSenderId: "948225132164",
  appId: "1:948225132164:web:e892d50aa70a6f0d5fe4d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
