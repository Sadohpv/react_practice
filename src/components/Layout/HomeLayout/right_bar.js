import styles from "./HomeLayout.module.scss";
import classNames from "classnames/bind";
import Card from "../../Card";
const cx = classNames.bind(styles);

function RightBarHome() {
	return (
		<div className={cx("right_bar")}>
			<div className={cx("block")}>
				<div className={cx("block_tab")}>
					<Card shape="around" />
					<Card shape="square" />
					<Card shape="icon" />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
}

export default RightBarHome;
