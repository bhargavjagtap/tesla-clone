// import firebase from 'firebase'
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBdcvEvoM0-O-6zCWOyhf_6S_mIm1HMF68",
    authDomain: "tesla-clone-2bcf4.firebaseapp.com",
    projectId: "tesla-clone-2bcf4",
    storageBucket: "tesla-clone-2bcf4.appspot.com",
    messagingSenderId: "562252538620",
    appId: "1:562252538620:web:e2dc670f923e844a11ad79"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(); 

export { auth }