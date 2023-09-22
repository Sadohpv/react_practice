import { useEffect, useState } from "react";

import styles from "./Frined.module.scss";
import classNames from "classnames/bind";

import { THEMES } from "../../utils/constant";

import { useSelector } from "react-redux";
// import Avartar from "../../components/Avatar/Avatar";
import FriendElement from "./FriendElement";

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
					<FriendElement />
					<FriendElement />
					<FriendElement />
					<FriendElement />
					<FriendElement />

			</div>
		</div>
	);
}

export default FriendPage;
