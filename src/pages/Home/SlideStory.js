import styles from "./SlideStory.module.scss";
import classNames from "classnames/bind";
import { useEffect } from "react";

const cx = classNames.bind(styles);

function SlideStory() {
	return (
		<>
			<div className={cx("wrapper")}>
                <div className={cx("slide")}>

                </div>
            </div>
		</>
	);
}

export default SlideStory;
