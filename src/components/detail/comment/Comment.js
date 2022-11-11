import React from "react"
import Avatar from "../../common/avatar/avatar"
import "./Comment.scss"

export default function Comment() {
  return (
    <div className="comment">
      <div className="avatar">
        <Avatar />
      </div>
      <div className="commnet-right">
        <div className="name">
          <p className="name1">Sabo_jr</p>
          <p className="name2">@Sabojr5</p>
        </div>
        <div className="text">
          <p className="text1">Replying to</p>
          <p className="text2">@2022_QatarWC</p>
        </div>
        <div className="content">
          <p>Gotze with his goal in the final</p>
        </div>
        <div>
          <img src="https://pbs.twimg.com/media/Fg0LyDjX0AMfm3D?format=jpg&name=small" alt="" />
        </div>
      </div>
    </div>
  )
}
