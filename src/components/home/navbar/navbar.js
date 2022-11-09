import Menu from "./menu/menu";
import React from "react";
import LogoHome from "./logoHome/logoHome";
import Button from "../../common/button/tweet/BtnTweet";
import Account from "./account/account";
import "./navbar.scss";

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
  );
}
