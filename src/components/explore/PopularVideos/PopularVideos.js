import classNames from 'classnames/bind'
import { MessageFilled } from '@ant-design/icons';

import styles from './PopularVideos.module.scss'
import Tweets from '../../home/tweets/Tweets'
import Menu from '../../common/button/menu/menu';
const PopularVideos = () => {
    const cx = classNames.bind(styles)
    return (
        <div className={cx('videos')}>
            <div className={cx('videos__header')}>
                <MessageFilled className={cx('videos__icon')} />
                <div className={cx('videos__title')}>Popular videos</div>
                <p className={cx('videos__action')}>
                    <Menu/>
                </p>
            </div>
            <div className={cx('videos__list')}>
                <Tweets/>
                <Tweets/>
                <Tweets/>
                <Tweets/>
            </div>
        </div>
    )
}
export default PopularVideos;