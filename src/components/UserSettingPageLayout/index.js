import styles from "./UserSettingPageLayout.module.scss";
import classNames from "classnames/bind";
import NavbarCustom from "../Navbar/Navbar";
import SettingMenu from "./SettingMenu";
const cx = classNames.bind(styles);

function UserSettingPageLayout({ children }) {
	return (
		<div className={cx("wrapper")}>
			<NavbarCustom />
			<div className={cx("container")}>
				<SettingMenu />
				<div className={cx("children")}>{children}</div>
			</div>
		</div>
	);
}

export default UserSettingPageLayout;
