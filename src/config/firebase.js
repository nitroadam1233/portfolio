// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCap5lELRZyaLkULO4Z6ez7Vlav_kgUHZs",
  authDomain: "work-portfolio-956e7.firebaseapp.com",
  projectId: "work-portfolio-956e7",
  storageBucket: "work-portfolio-956e7.appspot.com",
  messagingSenderId: "48773864416",
  appId: "1:48773864416:web:51b350065189bf88576985",
  measurementId: "G-6N5NK87JHN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
