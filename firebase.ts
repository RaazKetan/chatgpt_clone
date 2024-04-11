import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCO8Sv9c3TPvenIsacSjJaHeFUqyw2qLq0",
  authDomain: "reactai-99ac0.firebaseapp.com",
  projectId: "reactai-99ac0",
  storageBucket: "reactai-99ac0.appspot.com",
  messagingSenderId: "88754576101",
  appId: "1:88754576101:web:943aabb20fceeec739520c",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
