import { useEffect, useState } from "react";
import { friendService, userService } from "../../../services";
import styles from "./Response.module.scss";
import classNames from "classnames/bind";
import { useParams } from "react-router-dom";

import { emitter } from "../../../utils/emitter";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { THEMES } from "../../../utils/constant";
import FriendBlock from "../../../components/Layout/ProfileLayout/FriendBlock";
import CompCard from "../CompCard";

const cx = classNames.bind(styles);

function FriendResponsePage() {
	const userId = useSelector((state) => state.user.userId);

	const [res, setRes] = useState({});
	const [friend, setFriend] = useState([]);
	const [numFriend, setNumFriend] = useState(0);

	const currentTheme = useSelector((state) => state.app.theme);

	const idFriend = useParams();
	useEffect(() => {
		async function fetchData() {
			const resFriend = await friendService.handleGetResponseAddFriendService(userId);
			if (resFriend && resFriend.reg) {
				setFriend(resFriend.reg);
			}
		}
		fetchData();
	}, []);
	// console.log(friend);

	return (
		<div className={cx("container", currentTheme === THEMES.DARK && THEMES.DARK)}>
			{friend.length > 0 && friend.map((data) => <CompCard data={data} key={Math.random()} />)}
		</div>
	);
}

export default FriendResponsePage;
