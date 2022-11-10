<<<<<<< HEAD
import Menu from "./menu/menu"
import React from "react"
import LogoHome from "./logoHome/logoHome"
import Button from "../../common/button/tweet/btnTweet"
import Account from "./account/account"
import "./navbar.scss"
=======
import React from "react";

import Menu from "./menu/menu";
import LogoHome from "./logoHome/logoHome";
import Button from "../../common/button/tweet/btnTweet";
import Account from "./account/account";
import "./navbar.scss";
>>>>>>> 85a387cffa3e281cae14b1426d91751080d171af

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
