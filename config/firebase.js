// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPTALIE_f8fsmkJJIZxAQGne8xG9t2y00",
  authDomain: "eshop-cc5e8.firebaseapp.com",
  projectId: "eshop-cc5e8",
  storageBucket: "eshop-cc5e8.appspot.com",
  messagingSenderId: "740404731874",
  appId: "1:740404731874:web:1d6098bf39a7f383cda3bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
