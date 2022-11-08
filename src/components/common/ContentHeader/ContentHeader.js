import classNames from "classnames/bind"

import styles from './ContentHeader.module.scss'
const cx = classNames.bind(styles)

const ContentHeader = ({ RightItem, LeftItem }) => {
    return (
        <div className={cx("header")}>
            <RightItem />
            <div className={cx("header__left")}>
                <LeftItem />
            </div>
        </div>
    )
}

export default ContentHeader;