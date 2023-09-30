import styles from "./Frined.module.scss";
import classNames from "classnames/bind";
import Avartar from "../../components/Avatar/Avatar";
import { UnfriendIcon, UnFollowIcon, FollowIcon, AddFriendIcon } from "../../asset/icons";
import { FormattedMessage } from "react-intl";
import { useState, useEffect } from "react";
import TippyCustom from "../../components/Tippy";
import FriendElementHover from "./FriendElementHover";
import { friendService } from "../../services";
import { useSelector } from "react-redux";
import ButtonAddFriend from "../../components/Tools/ButtonAddFriend";

const cx = classNames.bind(styles);

function FriendElement({ data, index, idFriend }) {
	const idUser = useSelector((state) => state.user.userId);

	const [toggleFollow, setToggleFollow] = useState(true);
	const [unfriendButton, setUnfriendButton] = useState(true);
	const [mutual, setMutual] = useState([]);
	const friend = data;
	const handleToggleFollow = () => {
		setToggleFollow(!toggleFollow);
	};
	// console.log(data);
	useEffect(() => {
		async function fetchData() {
			// const resFriend = await friendService.handleGetMutualFriendService(friend.idUser,+idFriend);
			const resFriend = await friendService.handleGetMutualFriendService(
				friend.idUser,
				idUser
			);

			// console.log(idFriend);

			setMutual(resFriend.reg);
		}
		fetchData();
	}, []);
	const handleUnfriend = async () => {
		console.log("Unfriend");
		const res = await friendService.handleUnfriendService(friend.idUser, idUser);
		if (res) {
			console.log("Unfriend Success");
			console.log(res);
		}
		setUnfriendButton(false);
	};
	return (
		<TippyCustom
			content={<FriendElementHover data={friend} mutual={mutual} />}
			place={"top-start"}
			offSet={[-50, 10]}
		>
			<div className={cx("friend_block")}>
				<a href={`/${friend.idUser}`} className={cx("friend_infor")}>
					<div className={cx("friend_avatar")}>
						<Avartar
							src={friend.avatar}
							height={50}
							width={50}
							borderCustom="borderCustom"
						/>
					</div>
					<div className={cx("friend_title")}>
						<span className={cx("text")}>{friend.userName}</span>
						<span className={cx("text")}>Something never change</span>
					</div>
				</a>

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

					{unfriendButton ? (
						<div className={cx("action_button")} onClick={handleUnfriend}>
							<span className={cx("action_icon")}>
								<UnfriendIcon height="16px" width="16px" />
							</span>
							<span className={cx("action_text")}>
								<FormattedMessage id="Friend_Page.unfriend" />
							</span>
						</div>
					) : (
						
						<ButtonAddFriend idAsked={friend.idUser}/>
					)}
				</div>
			</div>
		</TippyCustom>
	);
}

export default FriendElement;
