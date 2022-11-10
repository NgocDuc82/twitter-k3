import React from "react";
import "./home.scss";
import Status from "./status/status";
import Tweets from "./tweets/Tweets";
import Right from "./right/Right";
import DetailPage from "../../pages/detailPage/DetailPage";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="content" >
          <div className="home-wrap-status">
                {/* <ContentHeader RightItem={<p>Home</p>} LeftItem={AutoAwesomeIcon} /> */}
            <div className="status">
              <Status />
            </div>
          </div>
          <Link to="DetailPage" className="home-wrap-tweets">
            <Tweets />
          </Link>
      </div>
      <div className="right">
            <Right/>
      </div>
    </div>
  );
};

export default Home;
