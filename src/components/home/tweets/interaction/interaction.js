import React from "react";
import Reply from "../../../common/icon/reply/reply";
import ReTweet from "../../../common/icon/reTweet/reTweet";
import Like from "../../../common/icon/like/like";
import Share from "../../../common/icon/share/share";
import "./interaction.scss";
export default function interaction() {
  return (
    <div className="interaction">
      <ul className="interaction-list">
        <li className="interaction-item Reply">
          <div className="icon">
            <Reply />
          </div>
          <span>800</span>
        </li>
        <li className="interaction-item ReTweet">
          <div className="icon">
            <ReTweet />
          </div>

          <span>1200</span>
        </li>
        <li className="interaction-item Like">
          <div className="icon">
            <Like />
          </div>

          <span>20000</span>
        </li>
        <li className="interaction-item Share">
          <div className="icon">
            <Share />
          </div>
        </li>
      </ul>
    </div>
  );
}
