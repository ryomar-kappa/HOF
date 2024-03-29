import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAiarwGgS6LUaGOm-xncqKgEMWwNBulO4U",
  authDomain: "hofapp-8aaaf.firebaseapp.com",
  databaseURL:
    "https://hofapp-8aaaf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hofapp-8aaaf",
  storageBucket: "hofapp-8aaaf.appspot.com",
  messagingSenderId: "1026767381466",
  appId: "1:1026767381466:web:63102b830d4970c67496e3",
  measurementId: "G-RLM9WSG27H",
};

const app: FirebaseApp = initializeApp(firebaseConfig);
export const db: Firestore = getFirestore(app);
