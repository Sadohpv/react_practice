import styles from "./UserSettingPageLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function UserSettingPageLayout({ children }) {
	return (
		<div className={cx("wrapper")}>
			<Header />

			<div className={cx("container")}>
				<div className={cx("content")}>{children}</div>
			</div>
		</div>
	);
}

export default UserSettingPageLayout;
