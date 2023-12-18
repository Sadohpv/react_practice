import styles from "./HomeLayout.module.scss";
import classNames from "classnames/bind";
import Card from "../../Card";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { userService } from "../../../services";
import ChatCard from "../../Card/ChatCard";
const cx = classNames.bind(styles);

function RightBarHome() {
	const idUser = useSelector((state) => state.user.userId);
	const listChat = useSelector((state) => state.chat.chatList);
	const waitChat = useSelector((state) => state.chat.waitChatList);

	const [friend, setFriend] = useState({});
	useEffect(() => {
		async function fetchData() {
			const resFriend = await userService.handleGetAllFriendService(idUser);
			if (resFriend && resFriend.EC === 0) {
				setFriend(resFriend.reg);
			}
		}

		fetchData();
	}, []);
	// console.log("Chat List: ",listChat);
	// console.log("Wait List: ",waitChat);

	return (
		<div className={cx("right_bar")}>
			<div className={cx("block")}>
				<div className={cx("block_tab")}>
					{friend.length > 0 &&
						friend.map((item) => (
							<ChatCard
								key={item.idUser}
								shape="around"
								img={item.avatar}
								to={item.idUser}
								title={item.userName}
							/>
						))}
					
				</div>
			</div>
		</div>
	);
}

export default RightBarHome;
