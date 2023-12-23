import styles from "./ChatBox.module.scss";

import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import { CancelIcon, LocationIcon, MinusIcon } from "../../../asset/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
	handleCloseChatRedux,
	handleCloseWaitChatRedux,
	handleOpenChatRedux,
	handleWaitChatRedux,
} from "../../../redux/actions/chatAction";
import { userService } from "../../../services";

const cx = classNames.bind(styles);
function WaitChatBox({ id }) {
	// console.log(id);
	const dispatch = useDispatch();
	const [closeButton, setCloseButton] = useState(false);
	const [data, setData] = useState("");
	useEffect(() => {
		async function fetchData() {
			const resFriend = await userService.handleGetDataUserService(id);
			console.log(resFriend);
			if (resFriend && resFriend.errCode === 0) {
				setData(resFriend.reg);
			}
		}

		fetchData();
	}, []);
	// console.log(data);
	return (
		<div
			className={cx("wait_chat_wapper")}
			onMouseOver={() => setCloseButton(true)}
			onMouseLeave={() => setCloseButton(false)}
		>
			<div
				className={cx("wait_chat_box")}
				onClick={() => {
					dispatch(handleOpenChatRedux(data.idUser));
				}}
			>
				<img src={data.avatar} />
			</div>
			{closeButton === true && (
				<div
					className={cx("close")}
					onClick={() => {
                      
						dispatch(handleCloseWaitChatRedux(data.idUser));
					}}
				>
					<CancelIcon width="10px" height="10px" />
				</div>
			)}
		</div>
	);
}

export default WaitChatBox;
