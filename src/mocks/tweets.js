import { createContext } from "react";
import { useState, useEffect, useReducer } from "react";
import { collection, onSnapshot } from "@firebase/firestore";
import db from "../firebase";

export const Tweets = () => {
  const [dataTweets, setdataTweets] = useState({});
  const [dataComment, setdataComment] = useState({});
 
 
  useEffect(() => {
    onSnapshot(collection(db, "tweets"), (snapshot) => {
      setdataTweets(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  useEffect(() => {
    onSnapshot(collection(db, "comment"), (snapshot) => {
      setdataComment(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
};
