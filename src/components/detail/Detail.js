import React,{ useEffect } from 'react'
import './Detail.scss';
import Status from "./status/status";
import Content from "../home/tweets/content/content";
import AvatarAuth from "../home/tweets/author/avatarAuthor/avatarAuth";
import NameAuth from "../home/tweets/author/nameAuthor/nameAuth";
import Menu from "../common/button/menu/menu";
import Interaction from "./interaction/Interaction";
import Comment from './comment/Comment';
import { useDispatch, useSelector } from "react-redux";
import { fetchlistTweet } from "../home/tweets/tweetsSlice";
import { todoRemaningSelector } from "../../redux/selector/selector";
import { useParams } from "react-router-dom";

export default function Detail() {
  useEffect(() => {
    dispatch(fetchlistTweet());
  }, []);
  const dispatch = useDispatch();
  const listTweet = useSelector(todoRemaningSelector);
  const postIdDetail = useParams('postId')
  const [tweet ,setTweet] = React.useState()

  useEffect(()=>{
    setTweet(listTweet.find((data,key) => {
      return data.authorId === postIdDetail.postId;
    }))
  },[])

  // console.log(tweet)

  return (
    <div className="Tweets">
        {tweet && <div className="Tweets">
            <div className="tweet-top">
              <div className='tweet-top1'>
                <div className="avatar">
                  <AvatarAuth  data={tweet} />
                </div>
                <div>
                  <NameAuth  data={tweet} />
                </div>
              </div>
              <div>
                <div className="auth-right">
                  <Menu  data={tweet} />  
                </div>
              </div>
            </div>
            <div className="content">
              <Content  data={tweet} /> 
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
          </div>}
    </div>
  );
}