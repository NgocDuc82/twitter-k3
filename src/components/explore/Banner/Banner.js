import classNames from "classnames/bind"

import styles from "./Banner.module.scss"
import bannerImage from "../../../assets/images/explore_banner.jpeg"

const Banner = () => {
  const cx = classNames.bind(styles)
  return (
    <div className={cx("banner")}>
      <img src={bannerImage} alt="banner image" className={cx("banner__image")} />
      <div className={cx("banner__content")}>
        <p className={cx("banner__caption")}>
          <span className={cx("banner__places")}> War in Ukraine</span>
          <span className={cx("banner__status")}>LIVE</span>
        </p>
        <p className={cx("banner__title")}>Latest updates on the war in Ukraine</p>
      </div>
    </div>
  )
}
export default Banner
