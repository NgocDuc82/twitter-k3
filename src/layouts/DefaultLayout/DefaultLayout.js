<<<<<<< HEAD
import classNames from "classnames/bind"
import { Outlet } from "react-router-dom"

import styles from "./DefaultLayout.module.scss"
import Navbar from "../../components/home/navbar/navbar"

const DefaultLayout = ({ children }) => {
  const cx = classNames.bind(styles)
=======
import React from "react";
import classNames from "classnames/bind";
import { Outlet } from "react-router-dom";

import styles from "./DefaultLayout.module.scss";
import Navbar from "../../components/home/navbar/navbar";

const DefaultLayout = ({ children }) => {
  const cx = classNames.bind(styles);
>>>>>>> 85a387cffa3e281cae14b1426d91751080d171af

  return (
    <div className={cx("container")}>
      <div className={cx("sidebar")}>
        <Navbar />
      </div>
      <div className={cx("content")}>
        <Outlet />
      </div>
    </div>
<<<<<<< HEAD
  )
}

export default DefaultLayout
=======
  );
};

export default DefaultLayout;
>>>>>>> 85a387cffa3e281cae14b1426d91751080d171af
