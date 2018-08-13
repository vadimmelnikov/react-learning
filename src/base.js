import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp =  firebase.initializeApp({
    apiKey: "AIzaSyCBnd4xik3pWUMBX-S-IO4KRQcZ14M-Hbs",
    authDomain: "catch-of-the-day-21100.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-21100.firebaseio.com",
    projectId: "catch-of-the-day-21100",
    storageBucket: "catch-of-the-day-21100.appspot.com",
    messagingSenderId: "854797812598"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;