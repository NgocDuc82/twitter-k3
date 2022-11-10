import React from "react";
import "./home.scss";
import Status from "./status/status";
import Tweets from "./tweets/Tweets";
import Right from "./right/Right";
import ContentHeader from "../common/ContentHeader/ContentHeader";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
const Home = () => {
  return (
    <div className="home">
      <div className="content">
          <div className="home-wrap-status">
                {/* <ContentHeader RightItem={<p>Home</p>} LeftItem={AutoAwesomeIcon} /> */}
            <div className="status">
              <Status />
            </div>
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
