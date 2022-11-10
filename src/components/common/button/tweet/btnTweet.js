import React from "react"
import "./btnTweet.scss"
export default function BtnTweet({ handleBtnTweet }) {
  return (
    <div className="btnTweet">
      <button onClick={handleBtnTweet}>Tweet</button>
    </div>
  )
}
