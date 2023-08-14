import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import NavbarCustom from "../../Tools/Navbar/Navbar";
import CloudRain from "../../Temp/CloudRain";
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
	return (
		<div className={cx("wrapper")}>
			<NavbarCustom />

			<div className={cx("container")}>
				<div className={cx("content")}>{children}</div>
			</div>
			{/* <CloudRain /> */}
		</div>
	);
}

export default DefaultLayout;
