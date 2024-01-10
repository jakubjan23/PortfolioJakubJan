
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDXQa4lsa0Bb5t31s5JGOxkeR5_xsvQs10",
  authDomain: "react-portfolio-aadf3.firebaseapp.com",
  projectId: "react-portfolio-aadf3",
  storageBucket: "react-portfolio-aadf3.appspot.com",
  messagingSenderId: "843110364713",
  appId: "1:843110364713:web:9bfafbe09374231ba2ce38",
  measurementId: "G-8TG1254NT6"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);