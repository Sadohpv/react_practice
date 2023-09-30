import styles from "./ButtonAddFriend.module.scss";
import classNames from "classnames/bind";
import { AddFriendIcon, CancelIcon } from "../../../asset/icons";
import { FormattedMessage } from "react-intl";
import { useState } from "react";
import { friendService } from "../../../services";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

function ButtonAddFriend({ idAsked }) {
	const idUser = useSelector((state) => state.user.userId);
	const [buttonAddFriend, setButtonAddFriend] = useState(true);

	const handleAddFriend = async () => {
		const res = await friendService.handleAddFriendService(idUser, idAsked);
		if (res) {
			setButtonAddFriend(false);
		}
	};
	const handleCancelAddFriend = async () => {
		const res = await friendService.handleCancelAddFriendService(idUser, idAsked);
		if (res) {
			setButtonAddFriend(true);
		}
	};
	return (
		<>
			{buttonAddFriend ? (
				<div className={cx("action_button")} onClick={handleAddFriend}>
					<span className={cx("action_icon")}>
						<AddFriendIcon height="16px" width="16px" />
					</span>
					<span className={cx("action_text")}>
						<FormattedMessage id="Friend_Page.add_friend" />
					</span>
				</div>
			) : (
				<div
					className={cx("action_button", "cancel_button")}
					onClick={handleCancelAddFriend}
				>
					<span className={cx("action_icon")}>
						<CancelIcon height="16px" width="16px" />
					</span>
					<span className={cx("action_text")}>
						<FormattedMessage id="Friend_Page.cancel_add_friend" />
					</span>
				</div>
			)}
		</>
	);
}

export default ButtonAddFriend;
