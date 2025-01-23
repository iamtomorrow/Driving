
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhMHvZaKiAuCXwNEiK0E28wRTCAlY-9hc",
  authDomain: "deskedge-e5030.firebaseapp.com",
  projectId: "deskedge-e5030",
  storageBucket: "deskedge-e5030.firebasestorage.app",
  messagingSenderId: "686621404327",
  appId: "1:686621404327:web:47eae169ec77cf3f8dff82",
  measurementId: "G-6PHP0ST7YR"
};

const app = initializeApp(firebaseConfig);

export const auth = getStorage(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
