// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "restbazaar-8e9d5.firebaseapp.com",
  projectId: "restbazaar-8e9d5",
  storageBucket: "restbazaar-8e9d5.firebasestorage.app",
  messagingSenderId: "365468432780",
  appId: "1:365468432780:web:d5666350f77de83e203ea9"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);