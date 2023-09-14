// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXqSLbqImEn23J-0hwQZKCVa6eM5Fuhfo",
  authDomain: "netflix-app-d6b42.firebaseapp.com",
  projectId: "netflix-app-d6b42",
  storageBucket: "netflix-app-d6b42.appspot.com",
  messagingSenderId: "130367664465",
  appId: "1:130367664465:web:e7ad7096442807dfe9e370",
  measurementId: "G-XSGSRE4QWC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const firebaseAuth = getAuth(app);
