// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgbwdDTb146sSlog5dFPHBRzUBu43WLVw",
  authDomain: "flashcardsaas-77395.firebaseapp.com",
  projectId: "flashcardsaas-77395",
  storageBucket: "flashcardsaas-77395.appspot.com",
  messagingSenderId: "321211436308",
  appId: "1:321211436308:web:b59fb22c0791e863154601",
  measurementId: "G-M47WWN3RQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}
