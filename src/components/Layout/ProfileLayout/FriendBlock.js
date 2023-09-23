import { useState } from "react";
import styles from "./ProfileLayout.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function FriendBlock({ data, index,idFriend, }) {
	
	
	const [href, setHref] = useState(index === 0 ? `/${idFriend}/friend` : `/${data.idUser}`);
	
	return (
		<a href={href} className={cx("friend_avatar")}>
			<img src={data.avatar} alt="avatar_friend" />
		</a>
	);
}

export default FriendBlock;
