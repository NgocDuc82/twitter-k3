import React, { useState } from "react";
import "./menu.scss";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import PostAddIcon from "@mui/icons-material/PostAdd";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BlockIcon from "@mui/icons-material/Block";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import CodeOffIcon from "@mui/icons-material/CodeOff";
export default function Menu() {
  const [isMenu, setIsMenu] = useState(false);
  const handleClinkMore = () => {
    setIsMenu(!isMenu);
  };
  return (
    <div className="menu">
      <div className="menu-icon" onClick={handleClinkMore}>
        <MoreHorizIcon />
      </div>
      {isMenu ? (
        <div className="sub-menu">
          <ul className="sub-list">
            <li className="sub-item">
              <SentimentVeryDissatisfiedIcon />
              <span>Not interested in this Tweet</span>
            </li>
            <li className="sub-item">
              <PersonAddAltIcon />
              <span>Unfollow @ygofficialblink</span>
            </li>
            <li className="sub-item">
              <PostAddIcon />
              <span>Add/remove @ygofficialblink from Lists</span>
            </li>
            <li className="sub-item">
              <VolumeOffIcon />
              <span>Mute @ygofficialblink</span>
            </li>
            <li className="sub-item">
              <BlockIcon />
              <span>Block @ygofficialblink</span>
            </li>
            <li className="sub-item">
              <CodeOffIcon />
              <span>Embed Tweet</span>
            </li>
            <li className="sub-item">
              <EmojiFlagsIcon />
              <span>Report Tweet</span>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
