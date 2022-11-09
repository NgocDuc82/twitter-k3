import React from "react";
import "./home.scss";
import Status from "./status/status";
import Tweets from "./tweets/Tweets";
import Right from "./right/Right";
import Header from '../home/tweets/header/header'
const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <div className="header">
          <Header/>
        </div>
        <div className="home-wrap-status">
          <Status />
        </div>
        <div className="home-wrap-tweets">
          <Tweets />
        </div>
      </div>
      <div className="right">
            <Right/>
      </div>
    </div>
  );
};

export default Home;
