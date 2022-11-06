import React from "react";
import AvatarAuth from "./author/avatarAuthor/avatarAuth";
import "./Tweets.scss";
import NameAuth from "./author/nameAuthor/nameAuth";
import TimeTweet from "./tweetTime/tweetTime";
import Grid from "@mui/material/Grid";
import Content from "./content/content";
import Interaction from "./interaction/interaction";
import Menu from "./menu/menu";

export default function Tweets() {
  return (
    <div className="Tweets">
      <Grid container spacing={2} className="tweet-wrap">
        <Grid item xs={2} className="tweet-left">
          <AvatarAuth />
        </Grid>
        <Grid item xs={10} className="tweet-right">
          <div className="auth">
            <div className="auth-left">
              <NameAuth />
              <TimeTweet />
            </div>
            <div className="auth-right">
              <Menu />
            </div>
          </div>
          <div className="content">
            <Content />
          </div>
          <div className="interaction">
            <Interaction />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
