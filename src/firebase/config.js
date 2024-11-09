import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAbcg2zCQYJtISTcP9lAd6AhFZ-5JLwMx4",
  authDomain: "reactdemo-feb7d.firebaseapp.com",
  projectId: "reactdemo-feb7d",
  storageBucket: "reactdemo-feb7d.firebasestorage.app",
  messagingSenderId: "994332993581",
  appId: "1:994332993581:web:694bcb32465a7c569eb0a4",
  measurementId: "G-RJ28E1F8YD"
};

  initializeApp(firebaseConfig);

  const db = getFirestore();

  export {db}