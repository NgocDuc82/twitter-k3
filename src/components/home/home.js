import React from "react";
import "./home.scss";
import Status from "./status/status";
import Tweets from "./tweets/Tweets";
const Home = () => {
  return (
    <div className="home">
      <div className="home-wrap-status">
        <Status />
      </div>
      <div className="home-wrap-tweets">
        <Tweets />

      </div>
    </div>
  );
};

export default Home;
