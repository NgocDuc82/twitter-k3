import classNames from 'classnames/bind'

import styles from './Explore.module.scss'
import { Banner, PopularVideos } from "../../components/explore";
import Suggest from "../../components/home/right/Suggest/Suggest"
import Trending from "../../components/home/right/Trending/Trending"
import { ContentHeader } from "../../components/common/ContentHeader"
import Search from '../../components/home/right/search/Search'
// import Button from "../../components/common/button/tweet/btnTweet"
import Menu from '../../components/common/button/menu/menu';
const cx = classNames.bind(styles)
const Explore = () => {
    return (
        <div className={cx('explore')}>
            <div className={cx('explore__content')}>
                <ContentHeader RightItem={Search} LeftItem={Menu} />
                <Banner />
                <Trending />
                <PopularVideos />
            </div>
            <div className={cx('explore__sidebar--right')}>
                <Suggest />
            </div>
        </div>
    )
}

export default Explore;