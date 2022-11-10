import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYvfdI3NkkhG-pg0QZQUXvId3dt5-0IZU",
  authDomain: "twitter-k3.firebaseapp.com",
  databaseURL:
    "https://twitter-k3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "twitter-k3",
  storageBucket: "twitter-k3.appspot.com",
  messagingSenderId: "386708495285",
  appId: "1:386708495285:web:8d0d41f6026c1ef8d117fc",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default getFirestore();
