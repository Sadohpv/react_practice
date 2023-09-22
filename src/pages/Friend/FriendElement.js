import styles from "./Frined.module.scss";
import classNames from "classnames/bind";
import Avartar from "../../components/Avatar/Avatar";
import { UnfriendIcon, UnFollowIcon, FollowIcon } from "../../asset/icons";
import { FormattedMessage } from "react-intl";
import { useState, useEffect } from "react";
const cx = classNames.bind(styles);

function FriendElement() {
	const [toggleFollow, setToggleFollow] = useState(true);

	const handleToggleFollow = () => {
		setToggleFollow(!toggleFollow);
		
	};
	return (
		<div className={cx("friend_block")}>
			<div className={cx("friend_infor")}>
				<div className={cx("friend_avatar")}>
					<Avartar
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY4cQKCMkKMTQfRmzEI7wRt6YvPuzzEree3Q&usqp=CAU"
						height={50}
						width={50}
						borderCustom="borderCustom"
					/>
				</div>
				<div className={cx("friend_title")}>
					<span className={cx("text")}>Kusakari 2110</span>
					<span className={cx("text")}>Something never change</span>
				</div>
			</div>

			<div className={cx("friend_action")}>
				<div className={cx("action_button")} onClick={handleToggleFollow}>
					<span className={cx("action_icon")}>
						{toggleFollow ? (
							<UnFollowIcon height="16px" width="16px" />
						) : (
							<FollowIcon height="16px" width="16px" />
						)}
					</span>
					<span className={cx("action_text")}>
					{toggleFollow ? (
							<FormattedMessage id="Friend_Page.follow" />

						) : (
							<FormattedMessage id="Friend_Page.unfollow" />

						)}
					</span>
				</div>
				<div className={cx("action_button")}>
					<span className={cx("action_icon")}>
						<UnfriendIcon height="16px" width="16px" />
					</span>
					<span className={cx("action_text")}>
						<FormattedMessage id="Friend_Page.unfriend" />
					</span>
				</div>
			</div>
		</div>
	);
}

export default FriendElement;