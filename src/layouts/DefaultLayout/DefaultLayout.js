import React from "react";
import classNames from "classnames/bind";
import { Outlet } from "react-router-dom";

import styles from "./DefaultLayout.module.scss";
import Navbar from "../../components/home/navbar/navbar";

const DefaultLayout = ({ children }) => {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("container")}>
      <div className={cx("sidebar")}>
        <Navbar />
      </div>
      <div className={cx("content")}>
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
