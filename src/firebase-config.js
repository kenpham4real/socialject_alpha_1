
// Contributor: Ken Sep 6th 2020
// Purpose: 
// => Setting firebase configuration

// NPM package
import firebase from 'firebase';

// Configuration 
const firebaseConfig = {
    apiKey: "AIzaSyDUW6GK7F9-jQsiAyI811uIcM2yggKahAI",
    authDomain: "socialject.firebaseapp.com",
    databaseURL: "https://socialject.firebaseio.com",
    projectId: "socialject",
    storageBucket: "socialject.appspot.com",
    messagingSenderId: "85105407605",
    appId: "1:85105407605:web:82a44961b0d41c48c12a3c",
    measurementId: "G-N0ZN9TC8MX"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebase_db = firebaseApp.firestore();
export const firebase_storage = firebaseApp.storage();
export const firebase_auth = firebaseApp.auth();
