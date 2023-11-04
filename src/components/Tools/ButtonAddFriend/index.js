import styles from "./ButtonAddFriend.module.scss";
import classNames from "classnames/bind";
import { AddFriendIcon, CancelIcon } from "../../../asset/icons";
import { FormattedMessage } from "react-intl";
import { useEffect, useState } from "react";
import { friendService } from "../../../services";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const cx = classNames.bind(styles);

function ButtonAddFriend({ idAsked, isFriend }) {
	const idUser = useSelector((state) => state.user.userId);
	const [buttonAddFriend, setButtonAddFriend] = useState(null);

	const handleAddFriend = async () => {
		const res = await friendService.handleAddFriendService(idUser, idAsked);
		if (res) {
			setButtonAddFriend(false);
			toast.success(<FormattedMessage id="Friend_List_Page.add_friend_message" />, {
				position: toast.POSITION.TOP_RIGHT,
			});
		}
	};
	const handleCancelAddFriend = async () => {
		const res = await friendService.handleCancelAddFriendService(idUser, idAsked);
		if (res) {
			toast.success(<FormattedMessage id="Friend_List_Page.cancel_add_friend_message" />, {
				position: toast.POSITION.TOP_RIGHT,
			});
			setButtonAddFriend(true);
		}
	};
	// console.log(typeof isFriend);

	useEffect(()=>{
		if(isFriend === 2){
			setButtonAddFriend(false);
			// consoleelse.log("Here");
		}else if(isFriend === null){
			setButtonAddFriend(true);

		}
	},[isFriend])
	// console.log(isFriend);
	return (
		<>
			{buttonAddFriend === true &&
				<div className={cx("action_button")} onClick={handleAddFriend}>
					<span className={cx("action_icon")}>
						<AddFriendIcon height="16px" width="16px" />
					</span>
					<span className={cx("action_text")}>
						<FormattedMessage id="Friend_Page.add_friend" />
					</span>
				</div>
			}
			{buttonAddFriend === false &&
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
			}
		</>
	);
}

export default ButtonAddFriend;
