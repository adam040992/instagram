// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQXIgYyldLHZfketWrFe4plq4ZWjPy-t8",
  authDomain: "instagram-clone-8cdee.firebaseapp.com",
  projectId: "instagram-clone-8cdee",
  storageBucket: "instagram-clone-8cdee.appspot.com",
  messagingSenderId: "538624038546",
  appId: "1:538624038546:web:6c0d83beed747004ae784b"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage(app);

export { app, db, storage };