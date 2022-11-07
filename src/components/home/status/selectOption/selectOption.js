import React from "react";
import "./selectOption.scss";
import Camera from "../../../common/icon/camera/camera";
import DateTime from "../../../common/icon/dateTime/dateTime";
import Emoji from "../../../common/icon/emoji/emoji";
import Locate from "../../../common/icon/locate/locate";
import Gif from "../../../common/icon/gif/gif";
import Poll from "../../../common/icon/poll/poll";
const SelectOption = () => {
  return (
    <div className="selectOption">
      <div className="left">
        <ul className="">
          <li className="">
            <Camera />
          </li>
          <li className="">
            <Gif />
          </li>
          <li className="">
            <Poll />
          </li>
          <li className="">
            <Emoji />
          </li>
          <li className="">
            <DateTime />
          </li>
          <li className="">
            <Locate />
          </li>
        </ul>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default SelectOption;
