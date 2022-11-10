import React from "react"

import Menu from "./menu/menu"
import LogoHome from "./logoHome/logoHome"
import Button from "../../common/button/tweet/btnTweet"
import Account from "./account/account"
import "./navbar.scss"

export default function Navbar() {
  return (
    <div className="fl">
      <div>
        <LogoHome />
        <Menu />
        <Button />
      </div>
      <div>
        <Account />
      </div>
    </div>
  )
}
