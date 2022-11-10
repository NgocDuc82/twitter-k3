import "./home.scss";
import Status from "./status/status";
import Tweets from "./tweets/Tweets";
import Right from "./right/Right";
import ContentLayout from "../../layouts/ContentLayout/ContentLayout";

const Home = () => {
  const Content = (
    <>
      <div className="home-wrap-status">
        <Status />
      </div>
      <div className="home-wrap-tweets">
        <Tweets />
      </div>
    </>
  );
  const Sidebar = (
    <>
      <Right />
    </>
  );
  return (
    <>
      <ContentLayout content={Content} sideBar={Sidebar} />
    </>
  );
  // return (
  //   <div className="home">
  //     <div className="content"></div>
  //     <div className="right"></div>
  //   </div>
  // );
};

export default Home;
