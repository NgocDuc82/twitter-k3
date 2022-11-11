import "./home.scss";
import { Link } from "react-router-dom";
import Status from "./status/status";
import Tweets from "./tweets/Tweets";
import Right from "./right/Right";

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <div className="home-wrap-status">
          <Status />
        </div>
        <div className="home-wrap-tweets">
          <Tweets />
        </div>
      </div>
      <div className="right">
        <Right />
      </div>
    </div>
  );
};

export default Home;
