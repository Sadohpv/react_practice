import styles from "./HomeLayout.module.scss";
import classNames from "classnames/bind";
import NavbarCustom from "../../Tools/Navbar/Navbar";
import { THEMES } from "../../../utils/constant";
import { useSelector } from "react-redux";
import Card from "../../Card";
const cx = classNames.bind(styles);

function HomeLayout({ children }) {
	const currentTheme = useSelector((state) => state.app.theme);

	return (
		<div className={cx("wrapper", currentTheme === THEMES.DARK && THEMES.DARK)}>
			<NavbarCustom />

			<div className={cx("container")}>
				<div className={cx("side_bar")}>
					<div className={cx("block")}>
						<div className={cx("block_tab")}>
							<Card shape="around"/>
							<Card shape="square"/>
							<Card shape="icon"/>
							<Card />
							<Card />

						</div>
					</div>
				</div>

				<div className={cx("content")}>{children}</div>
				<div className={cx("right_bar")}>
					<div className={cx("block")}>
						<div className={cx("block_tab")}></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeLayout;
