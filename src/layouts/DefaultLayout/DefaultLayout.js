import classNames from 'classnames/bind'

import styles from './DefaultLayout.module.scss'
import {Sidebar} from '../components/Sidebar'

const DefaultLayout = ({children}) => {
    const cx = classNames.bind(styles)

    return (
        <div className={cx("container")}>
            <div className={cx("sidebar")}>
                <Sidebar />
            </div>
            <div className={cx("content")}>
                {children}
            </div>
        </div>
    )
}

export default DefaultLayout;