// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// import { getAuth } from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf9J1XFHsVKV75YqKAoGBZvpRNLTNpx7Y",
  authDomain: "clone-16084.firebaseapp.com",
  projectId: "clone-16084",
  storageBucket: "clone-16084.appspot.com",
  messagingSenderId: "795232811016",
  appId: "1:795232811016:web:c61fe68b3e6965d56ef9bd",
  measurementId: "G-0ERTL70E7D",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();




export { auth, db };
