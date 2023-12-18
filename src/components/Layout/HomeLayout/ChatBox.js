import styles from "./ChatBox.module.scss";

import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
 import { CancelIcon, LocationIcon, MinusIcon } from "../../../asset/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { handleCloseChatRedux, handleOpenChatRedux, handleWaitChatRedux } from "../../../redux/actions/chatAction";
import { userService } from "../../../services";

const cx = classNames.bind(styles);
function ChatBox({id}) {
    // console.log(id);
    const dispatch = useDispatch();
    const [data,setData] = useState("");
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
		<>
			<div className={cx("chat_box")}>
				<div className={cx("chat_header")}>
					<div className={cx("infor")}>
						<div className={cx("avatar")}>
							<img src={data.avatar} />
						</div>
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
				<div className={cx("chat_footer")}></div>
			</div>
		</>
	);
}

export default ChatBox;
