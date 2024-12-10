import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

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

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
