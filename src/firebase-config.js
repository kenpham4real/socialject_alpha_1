
// Contributor: Ken Sep 6th 2020
// Purpose: 
// => Setting firebase configuration

// NPM package
import firebase from 'firebase';

// Configuration 
const firebaseConfig = {
    apiKey: "AIzaSyANefACmNzpTWpVHDyeSCtvgrRNFseCMxE",
    authDomain: "socialject-alpha-1.firebaseapp.com",
    databaseURL: "https://socialject-alpha-1.firebaseio.com",
    projectId: "socialject-alpha-1",
    storageBucket: "socialject-alpha-1.appspot.com",
    messagingSenderId: "80276637489",
    appId: "1:80276637489:web:79f9cd422d86417a6bd210",
    measurementId: "G-K9MHRFQSPZ"
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebase_db = firebaseApp.firestore();
export const firebase_storage = firebaseApp.storage();
export const firebase_auth = firebaseApp.auth();
