import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbcg2zCQYJtISTcP9lAd6AhFZ-5JLwMx4",
  authDomain: "reactdemo-feb7d.firebaseapp.com",
  projectId: "reactdemo-feb7d",
  storageBucket: "reactdemo-feb7d.firebasestorage.app",
  messagingSenderId: "994332993581",
  appId: "1:994332993581:web:3c1b5382e5b7ccca9eb0a4",
  measurementId: "G-HYLTWSME4P"
}

  initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth();

export {db, auth}