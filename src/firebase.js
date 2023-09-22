
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBjxZVuFwwi9l4zORmrE8pdVS3LGTA8OIk",
    authDomain: "react-c2d71.firebaseapp.com",
    projectId: "react-c2d71",
    storageBucket: "react-c2d71.appspot.com",
    messagingSenderId: "612661323999",
    appId: "1:612661323999:web:2b5e42f25677521120616a",
    measurementId: "G-2FGQQNERBT"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
