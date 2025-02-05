// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-0ZCS5blHISCLV8VKd6P8XM86GxHvkK4",
  authDomain: "notenote-991c5.firebaseapp.com",
  projectId: "notenote-991c5",
  storageBucket: "notenote-991c5.firebasestorage.app",
  messagingSenderId: "719442601178",
  appId: "1:719442601178:web:99861a9f9a11125087b1e3",
  measurementId: "G-9E6MC5VSNW",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//"AIzaSyC-0ZCS5blHISCLV8VKd6P8XM86GxHvkK4"
//import.meta.env.VITE_FIREBASE_API_KEY,
