import { useState } from "react";
import styles from "./ProfileLayout.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function FriendBlock({ data, index,idFriend,noPseudo=false }) {
	
	// console.log(data);
	const [href, setHref] = useState(index === 0 ? `/${idFriend}/friend` : `/${data.idUser}`);
	
	return (
		<a href={href} className={cx("friend_avatar",(noPseudo ? "noPseudo" : ""))}>
			<img src={data.avatar} alt="avatar_friend" />
		</a>
	);
}

export default FriendBlock;
