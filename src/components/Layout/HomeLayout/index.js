import styles from "./HomeLayout.module.scss";
import classNames from "classnames/bind";
import NavbarCustom from "../../Tools/Navbar/Navbar";
import { THEMES } from "../../../utils/constant";
import { useSelector } from "react-redux";
// import Card from "../../Card";

import SideBarHome from "./side_bar";
import RightBarHome from "./right_bar";
const cx = classNames.bind(styles);

function HomeLayout({ children }) {
	const currentTheme = useSelector((state) => state.app.theme);

	return (
		<div className={cx("wrapper", currentTheme === THEMES.DARK && THEMES.DARK)}>
			<NavbarCustom />

			<div className={cx("container")}>
				<SideBarHome />

				<div className={cx("content")}>{children}</div>

				<RightBarHome />
			</div>
			{/* <CloudRain /> */}
		</div>
	);
}

export default HomeLayout;
