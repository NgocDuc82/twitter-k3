import React, {useState, useEffect } from "react";
import AvatarAuth from "./author/avatarAuthor/avatarAuth";
import "./Tweets.scss";
import NameAuth from "./author/nameAuthor/nameAuth";
import TimeTweet from "./tweetTime/tweetTime";
import Grid from "@mui/material/Grid";
import Content from "./content/content";
import Interaction from "./interaction/interaction";
import Menu from "../../common/button/menu/menu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchlistTweet } from "./tweetsSlice";
import { todoRemaningSelector } from "../../../redux/selector/selector";
export default function Tweets() {
  const [resultClick,setResultClick] = useState()
  useEffect(() => {
    dispatch(fetchlistTweet());
  }, []);
  const dispatch = useDispatch();
  const listTweet = useSelector(todoRemaningSelector);
  console.log(listTweet);
  const handleClickTweet = (authorId) =>{

    setResultClick(authorId)
  } 
  return (
    <div className="Tweets">
      {listTweet.map((data, index) => {
        return (
          <Link to={`/detailPage/${data.authorId}`}>
            <Grid container spacing={2} className="tweet-wrap" onClick={()=>handleClickTweet(data.authorId)}>
            <Grid item xs={2} className="tweet-left">
              <AvatarAuth data={data} />
            </Grid>
            <Grid item xs={10} className="tweet-right">
              <div className="auth">
                <div className="auth-left">
                  <NameAuth data={data} />
                  <TimeTweet data={data} />
                </div>
                <div className="auth-right">
                  <Menu />
                </div>
              </div>
              <div className="content">
                <Content data={data} />
              </div>
              <div className="interaction">
                <Interaction />
              </div>
            </Grid>
          </Grid>
          </Link>
          
        );
      })}
    </div>
  )
}
