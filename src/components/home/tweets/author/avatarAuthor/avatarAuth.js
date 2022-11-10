import React from "react"
import "./avatarAuth.scss"
export default function avatarAuth({ data }) {
  return (
    <div className="avatar">
      <img src={data.authorAvatar} alt="" className="" />
    </div>
  )
}
