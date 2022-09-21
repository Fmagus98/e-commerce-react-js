import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBxZMqLD3wMDMItNtV45E7aPVZCPsS2jGg",
  authDomain: "e-commerce-reactjs-d5a88.firebaseapp.com",
  projectId: "e-commerce-reactjs-d5a88",
  storageBucket: "e-commerce-reactjs-d5a88.appspot.com",
  messagingSenderId: "1052853396119",
  appId: "1:1052853396119:web:50b762d1c92b8333f0bfd2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)