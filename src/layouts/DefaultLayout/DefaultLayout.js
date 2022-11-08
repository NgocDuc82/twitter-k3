import classNames from 'classnames/bind'

import styles from './DefaultLayout.module.scss'
import Navbar from '../../components/home/navbar/navbar'

const DefaultLayout = ({children}) => {
    const cx = classNames.bind(styles)

    return (
        <div className={cx("container")}>
            <div className={cx("sidebar")}>
                <Navbar />
            </div>
            <div className={cx("content")}>
                {children}
            </div>
        </div>
    )
}

export default DefaultLayout;