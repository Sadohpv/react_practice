import { useEffect, useState } from "react";

import styles from "./Frined.module.scss";
import classNames from "classnames/bind";

import { THEMES } from "../../utils/constant";

import { useSelector } from "react-redux";
// import Avartar from "../../components/Avatar/Avatar";
import FriendElement from "./FriendElement";
import { userService } from "../../services";
import { useParams } from "react-router-dom";

const cx = classNames.bind(styles);

function FriendPage({ children }) {
	const idUser = useSelector((state) => state.user.userId);
	const currentTheme = useSelector((state) => state.app.theme);
	const [friend, setFriend] = useState({});
	const idFriend = useParams();

	useEffect(() => {
		async function fetchData() {
			const resFriend = await userService.handleGetAllFriendService(idFriend.idUser);
			if (resFriend && resFriend.EC === 0) {
				setFriend(resFriend.reg);
			}
		}
		
		fetchData();

	}, []);
	// console.log(friend);
	return (
		<div className={cx("wrapper", currentTheme === THEMES.DARK && THEMES.DARK)}>
			<div className={cx("main")}>
				{friend.length > 0 &&
					friend.map((bro, index) => (
						<FriendElement
							key={Math.random()}
							data={bro}
							index={index}
							idFriend={idFriend.idUser}
						/>
					))}
				
			</div>
		</div>
	);
}

export default FriendPage;
