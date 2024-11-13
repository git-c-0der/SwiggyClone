// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClfKJY8cMp5Q4D-7_7ZfVeWlOr2xpVMYg",
  authDomain: "swiggy-clone-4db3e.firebaseapp.com",
  projectId: "swiggy-clone-4db3e",
  storageBucket: "swiggy-clone-4db3e.firebasestorage.app",
  messagingSenderId: "210628636762",
  appId: "1:210628636762:web:94e6527acb2596f4ca6863",
  measurementId: "G-V7ZVZ1TJ9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);