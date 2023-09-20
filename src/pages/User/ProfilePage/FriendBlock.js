import { useState } from "react";
import styles from "./Profile.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function FriendBlock({ data, index }) {
	const friend = data.User;
	// const index = number ;
	console.log(index);
	// console.log(key);
	const [href, setHref] = useState(index === 0 ? `/friend` : `/${friend.idUser}`);
	// if (index === 0) {
	// 	const href = "/friend";
	// } else {
	// 	const href = `/${friend.idUser}`;
	// }
	return (
		<a href={href} className={cx("friend_avatar")}>
			<img src={friend.avatar} alt="avatar_friend" />
		</a>
	);
}

export default FriendBlock;
