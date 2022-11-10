import React from "react"
import Search from "./search/Search"
import Trending from "./Trending/Trending"
import Suggest from "./Suggest/Suggest"
import "./Right.scss"

export default function Right() {
  return (
    <div className="right">
      <div className="right-search">
        <Search />
      </div>
      <div className="right-trending">
        <Trending />
      </div>

      <Suggest />
    </div>
  )
}
