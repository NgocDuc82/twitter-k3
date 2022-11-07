import React from "react";
import { getTweets } from "../../service/tweets";
import "./home.scss";
const Home = (props) => {
  const fetchTweets = async () => {
    const res = await getTweets();
    const tweets = res.docs.map((record) => record.data());
    console.log({ tweets });
  };
  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <div className="home">
      <div className="home-wrap"></div>
    </div>
  );
};

export default Home;
