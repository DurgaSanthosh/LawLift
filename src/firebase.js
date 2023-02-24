// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxxNDFvbEvbT-xxE2H5JpZDTE1d7e_roA",
  authDomain: "lawlift-862a0.firebaseapp.com",
  projectId: "lawlift-862a0",
  storageBucket: "lawlift-862a0.appspot.com",
  messagingSenderId: "715823159715",
  appId: "1:715823159715:web:09454e2b6f8de656d6e216",
  measurementId: "G-NQGEFFVZMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
