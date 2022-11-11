import React from "react"
import { db } from "../../../../firebase"
import { useEffect } from "react"
import { onSnapshot, collection, setDoc, addDoc } from "firebase/firestore"
import "./btnTweet.scss"
import moment from "moment"
export default function BtnTweet() {
  useEffect(() => {
    onSnapshot(collection(db, "tweets"), snapshot => {
      console.log(snapshot.docs.map(doc => doc.data()))
    })
  })
  const handlePost = async () => {
    const authorId = prompt("enter author name")
    const content = prompt("enter content")
    const photoUrls = prompt("enter image")
    const createAt = moment().format("MMMM Do YYYY, h:mm:ss a")

    const collectionRef = collection(db, "tweets")
    const payload = { authorId, content, createAt, photoUrls }
    await addDoc(collectionRef, payload)
  }
  return (
    <div className="btnTweet">
      <button onClick={handlePost}>Tweet</button>
    </div>
  )
}
