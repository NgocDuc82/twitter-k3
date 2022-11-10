import React from 'react'
import './Detail.scss';
import Status from "./status/status";
import Content from "../home/tweets/content/content";
import AvatarAuth from "../home/tweets/author/avatarAuthor/avatarAuth";
import NameAuth from "../home/tweets/author/nameAuthor/nameAuth";
import Menu from "../common/button/menu/menu";
import Interaction from "./interaction/Interaction";
import Comment from './comment/Comment';

export default function Detail() {
  return (
    <div className="Tweets">
      <div className="tweet-top">
        <div className='tweet-top1'>
          <div className="">
            <AvatarAuth />
          </div>
          <div>
            <NameAuth />
          </div>
        </div>
        <div>
          <div className="auth-right">
            <Menu />
          </div>
        </div>
      </div>
      <div className="content">
        <Content />
      </div>
      <div className='interaction1'>
          <Interaction/>
      </div>
      <div className='stastus'>
        <Status/>
      </div>
      <div className='comment'>
        <Comment/>
      </div>
    </div>
  )
}
