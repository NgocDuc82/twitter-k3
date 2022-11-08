// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs } from "firebase/firestore";
// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

const colRef = collection(db, "tweets");

// getDocs(colRef).then((snapshot) => {
//   let tweets = [];
//   snapshot.docs.forEach((doc) => {
//     tweets.push({ ...doc.data(), id: doc.authorId });
//   });
//   console.log("data", tweets);
// });

export default getFirestore();
