import classNames from "classnames/bind"

import styles from "./Sidebar.module.scss"

const Sidebar = () => {
  const cx = classNames.bind(styles)
  return <div className={cx("wrapper")}>{/* sidebar content */}</div>
}

export default Sidebar
