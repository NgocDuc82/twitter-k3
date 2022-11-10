import ContentLayout from "../../layouts/ContentLayout/ContentLayout";
import PopularVideos from "../../components/explore/PopularVideos/PopularVideos";
import Banner from "../../components/explore/Banner/Banner";
import Suggest from "../../components/home/right/Suggest/Suggest";
import Trending from "../../components/home/right/Trending/Trending";
import ContentHeader from "../../components/common/ContentHeader/ContentHeader";
import Search from "../../components/home/right/search/Search";
import Menu from "../../components/common/button/menu/menu";

const Explore = () => {
  const Content = <>
    <ContentHeader RightItem={<Search />} LeftItem={<Menu />} />
    <Banner />
    <Trending />
    <PopularVideos />
  </>
  const SideBar = <>
    <Suggest />
  </>
  return (
    <>
      <ContentLayout content={Content} sideBar={SideBar}/>
    </>
  );
};

export default Explore;
