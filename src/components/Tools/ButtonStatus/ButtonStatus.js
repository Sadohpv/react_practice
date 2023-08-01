import styles from "./ButtonStatus.module.scss";

import { useSelector } from "react-redux";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function ButtonStatus({ icon, text,color }) {
	return (
		<div className={cx("wrapper")}>
			<div className={cx("icon")}>
				{icon}
			</div>
			<div className={cx("text")}>
				{text}
			</div>
		</div>
	);
}

export default ButtonStatus;
