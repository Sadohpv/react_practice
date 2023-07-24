import styles from "./HomeLayout.module.scss";
import classNames from "classnames/bind";
import NavbarCustom from "../../Tools/Navbar/Navbar";
const cx = classNames.bind(styles);

function HomeLayout({ children }) {
	return (
		<div className={cx("wrapper")}>
			<NavbarCustom />

			<div className={cx("container")}>
				<div className={cx("side_bar")}>
					<div className={cx("title")}></div>
					<div className={cx("block")}>
						<div className={cx("block_tab")}></div>
					</div>
				</div>

				<div className={cx("content")}>{children}</div>
			</div>
		</div>
	);
}

export default HomeLayout;
