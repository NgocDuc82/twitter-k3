import React from 'react'
import './Interaction.scss';
import Reply from "../../common/icon/reply/reply";
import ReTweet from "../../common/icon/reTweet/reTweet";
import Like from "../../common/icon/like/like";
import Share from "../../common/icon/share/share";

export default function Interaction() {
  return (
    <div>
      <div className='interaction2'>
        <div className='item'>
            <p className='numbe'>64</p>
            <p className='text'>Retweets</p>
        </div>
        <div className='item'>
            <p className='numbe'>92</p>
            <p className='text'>Quote Tweets</p>
        </div>
        <div className='item'>
            <p className='numbe'>1,470</p>
            <p className='text'>Likes</p>
        </div>
      </div>
      <div cl>
      <ul className="interaction-list1">
        <li className="interaction-item Reply">
          <div className="icon">
            <Reply />
          </div>
        </li>
        <li className="interaction-item ReTweet">
          <div className="icon">
            <ReTweet />
          </div>
        </li>
        <li className="interaction-item Like">
          <div className="icon">
            <Like />
          </div>
        </li>
        <li className="interaction-item Share">
          <div className="icon">
            <Share />
          </div>
        </li>
      </ul>
      </div>
    </div>
  )
}
