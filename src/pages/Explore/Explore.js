import classNames from 'classnames/bind'

import styles from './Explore.module.scss'
import { Banner, PopularVideos } from "../../components/explore";
const cx = classNames.bind(styles)
const Explore = () => {
    return (
        <div className={cx('explore')}>
            <div className={cx('explore__content')}>
                <Banner />
                <div className={cx('explore__wrapper')}>
                    <PopularVideos />
                </div>
            </div>
            <div className={cx('explore__sidebar--right')}>

            </div>
        </div>
    )
}

export default Explore;