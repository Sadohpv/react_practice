import styles from "./HomeLayout.module.scss";
import classNames from "classnames/bind";
import Card from "../../Card";
const cx = classNames.bind(styles);

function SideBarHome() {
	return (
		<div className={cx("side_bar")}>
			<div className={cx("block")}>
				<div className={cx("block_tab")}>
					<Card shape="around" />
					<Card shape="square" />
					<Card shape="icon" />
					<Card
						shape="around"
						img="https://shots.codepen.io/username/pen/VwdjRxY-800.jpg?version=1674074982"
						title="Electric Spider"
						to="/games/spider"
					/>
					<Card />
				</div>
			</div>
		</div>
	);
}

export default SideBarHome;
