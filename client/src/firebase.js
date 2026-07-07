// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "srijan-ai-79ea1.firebaseapp.com",
  projectId: "srijan-ai-79ea1",
  storageBucket: "srijan-ai-79ea1.firebasestorage.app",
  messagingSenderId: "84739333522",
  appId: "1:84739333522:web:0498d331f5a689438f354b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

const provider=new GoogleAuthProvider()

export {auth,provider}