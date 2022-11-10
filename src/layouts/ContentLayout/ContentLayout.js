import classNames from "classnames/bind";

import styles from "./ContentLayout.module.scss";
const cx = classNames.bind(styles);

const ContentLayout = ({content,sideBar}) => {
  return (
         <div className={cx("block")}>
      <div className={cx("block__content")}>
        {content}
      </div> 
      <div className={cx("block__sidebar--right")}>
        {sideBar}
      </div>
    </div>
  );
};

export default ContentLayout;