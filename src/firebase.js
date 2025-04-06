// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDP6_nRkr2Yi4hDzvs_kalYs6yZ275WCvA",
  authDomain: "rm-ambiental-e33ca.firebaseapp.com",
  projectId: "rm-ambiental-e33ca",
  storageBucket: "rm-ambiental-e33ca.appspot.com",
  messagingSenderId: "1084701177364",
  appId: "1:1084701177364:web:67aa3b57f20bd4ad04d901"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
