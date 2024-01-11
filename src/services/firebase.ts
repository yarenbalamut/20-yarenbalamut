// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOjil7TvB8FsVtMcN2G0jXIUOVji1dS7o",
  authDomain: "muratcankatkok-61f08.firebaseapp.com",
  projectId: "muratcankatkok-61f08",
  storageBucket: "muratcankatkok-61f08.appspot.com",
  messagingSenderId: "669449432492",
  appId: "1:669449432492:web:352890c281829114b9de09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);