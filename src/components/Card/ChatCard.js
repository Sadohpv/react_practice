import styles from "./Card.module.scss";
import { THEMES } from "../../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import { CancelIcon, LocationIcon, MinusIcon } from "../../asset/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { handleCloseChatRedux, handleOpenChatRedux, handleWaitChatRedux } from "../../redux/actions/chatAction";

const cx = classNames.bind(styles);

function ChatCard({
	shape,
	title = "Title Element",
	to = null,
	img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpb85Q01yMh2lgyxv_8_jWyAL49jQNVeWvYcXR7qqioXHHySqZBS_SFp6c0EomVJvKrk&usqp=CAU",
}) {
	const currentTheme = useSelector((state) => state.app.theme);

	
	const dispatch = useDispatch();
	const handleOpenChat = () => {
		
		dispatch(handleOpenChatRedux(to));
	};
	return (
		<>
			<div
				className={cx("wrapper", currentTheme === THEMES.DARK && THEMES.DARK)}
				onClick={handleOpenChat}
			>
				{shape === "around" && (
					<div className={cx("card_box", "around_img")}>
						<div className={cx("symbol")}>
							<img src={img} />
						</div>
						<div className={cx("card_text")}>
							<span>{title} </span>
						</div>
					</div>
				)}
				{shape === "square" && (
					<div className={cx("card_box", "square_img")}>
						<div className={cx("symbol")}>
							<img src={img} />
						</div>
						<div className={cx("card_text")}>
							<span>{title} </span>
						</div>
					</div>
				)}

				{shape === "icon" && (
					<div className={cx("card_box", "icon")}>
						<div className={cx("symbol")}>
							<LocationIcon />
						</div>
						<div className={cx("card_text")}>
							<span>{title}</span>
						</div>
					</div>
				)}
			</div>
		
			{/* {chatBox == 2 && <div className={cx("chat_icon")}></div>} */}
		</>
	);
}

export default ChatCard;
