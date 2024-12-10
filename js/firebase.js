// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2zUrSFgvgRON2DHPg_vGkTY7ZLotEfg8",
  authDomain: "iw-bi-16.firebaseapp.com",
  databaseURL: "https://iw-bi-16-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "iw-bi-16",
  storageBucket: "iw-bi-16.firebasestorage.app",
  messagingSenderId: "777174914615",
  appId: "1:777174914615:web:6403390b6647c6c43b91b2",
  measurementId: "G-KN50E1LCL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
export { db };