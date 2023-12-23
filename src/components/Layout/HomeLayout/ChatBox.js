import styles from "./ChatBox.module.scss";

import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import { CancelIcon, LocationIcon, MinusIcon, SendChatIcon } from "../../../asset/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
	handleCloseChatRedux,
	handleOpenChatRedux,
	handleWaitChatRedux,
} from "../../../redux/actions/chatAction";
import { chatService } from "../../../services";

const cx = classNames.bind(styles);
function ChatBox({ id }) {
	// console.log(id);
	const dispatch = useDispatch();
	const [data, setData] = useState("");
	const [contentChat, setContentChat] = useState("");
	useEffect(() => {
		async function fetchData() {
			const resFriend = await chatService.handleGetChatService(id);
			console.log(resFriend);
			if (resFriend && resFriend.errCode === 0) {
				setData(resFriend.reg);
			}
		}

		fetchData();
	}, []);
	// console.log(data);
	const handleContentChat = (e) => {
		const height = e.target.scrollHeight;

		e.target.style.height = "36px";
		// console.log(e.target.style.height);
		console.log(height);
		if (height > 36) {
			let max = 4 + e.target.scrollHeight;
			if (max > 100) {
				e.target.style.height = 100 + "px";
			} else {
				e.target.style.height = 4 + e.target.scrollHeight + "px";
			}
		}

		setContentChat(e.target.value);
	};
	return (
		<>
			<div className={cx("chat_box")}>
				<div className={cx("chat_header")}>
					<div className={cx("infor")}>
						<a href={`/${data.idUser}`} className={cx("avatar")}>
							<img src={data.avatar} />
						</a>
						<div className={cx("name")}>
							<span>{data.userName}</span>
						</div>
					</div>
					<div className={cx("action")}>
						<div
							className={cx("cancel")}
							onClick={() => {
								// dispatch(handleCloseChatRedux(to));
								dispatch(handleWaitChatRedux(data.idUser));
							}}
						>
							<MinusIcon width="16px" height="16px" />
						</div>
						<div
							className={cx("cancel")}
							onClick={() => {
								dispatch(handleCloseChatRedux(data.idUser));
							}}
						>
							<CancelIcon width="16px" height="16px" />
						</div>
					</div>
				</div>
				<div className={cx("chat_body")}></div>
				<div className={cx("chat_footer")}>
					<textarea
						value={contentChat}
						onChange={(e) => handleContentChat(e)}
						placeholder="Chat message"
					/>
					<div className={cx("chat_send")}>
						<SendChatIcon width="20px" height="20px" />
					</div>
				</div>
			</div>
		</>
	);
}

export default ChatBox;
