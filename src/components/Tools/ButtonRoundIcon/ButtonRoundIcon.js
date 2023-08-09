import styles from "./ButtonRoundIcon.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function ButtonRoundIcon({ icon, butFunc, className }) {
	const handleClick = (e) => {
		butFunc();
	};

	return (
		<div className={cx("button",className)} onClick={handleClick}>
			<div className={cx("box")}>
                {icon}
            </div>
		</div>
	);
}

export default ButtonRoundIcon;
