import { useEffect, useState } from "react";

import styles from "./Frined.module.scss";
import classNames from "classnames/bind";

import { THEMES } from "../../utils/constant";

import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

function FriendPage({ children }) {
	const idUser = useSelector((state) => state.user.userId);
	const currentTheme = useSelector((state) => state.app.theme);

	useEffect(() => {
		async function fetchData() {}
		fetchData();
	}, []);

	return (
		<div className={cx("wrapper", currentTheme === THEMES.DARK && THEMES.DARK)}>
			<div className={cx("main")}>
				<div className={cx("friend_block")}>
					<div className={cx("friend_infor")}>
						<div className={cx("friend_avatar")}></div>
						<div className={cx("friend_title")}></div>

					</div>

					<div className={cx("friend_action")}></div>
				</div>
				<div className={cx("friend_block")}></div>
				<div className={cx("friend_block")}></div>
				<div className={cx("friend_block")}></div>
			</div>
		</div>
	);
}

export default FriendPage;
