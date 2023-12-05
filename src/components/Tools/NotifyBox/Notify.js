import styles from "./NotifyBox.module.scss";
import classNames from "classnames/bind";
import { notifyService } from "../../../services";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Avartar from "../../Avatar/Avatar";
import Moment from "react-moment";
import vi from "moment/locale/vi";
import { BellNotifyFullIcon, CommentIcon, LikeIcon } from "../../../asset/icons";
import { FormattedMessage } from "react-intl";
import {
	handleReadNotifyRedux,
	handleNumberNotifyRedux,
} from "../../../redux/actions/notifyAction";
import { useNavigate } from "react-router";

const cx = classNames.bind(styles);
function NotifyCard({ item, index, length }) {
	// console.log(item);
	const language = useSelector((state) => state.app.language);
	const [noRead, setNoRead] = useState(item.status);
	const numberNotify = useSelector((state) => state.notify.numberNotify);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleReadNotify = async () => {
		// console.log(numberNotify);
		if (noRead == 0) {
			setNoRead(1);
			const reg = await notifyService.handleReadNotifyService(item.id);
			// console.log(reg);
			// console.log("Here");

			dispatch(handleReadNotifyRedux(index));

			dispatch(handleNumberNotifyRedux(numberNotify - 1));
		}
	};
	const handleClickNotify=()=>{
		if(item.content===1){
			navigate(`/post/${item.linked}`);
		}
		if(item.content===3){
			navigate(`/friend`);
		}
	}
	return (
		<div
			className={cx("notify", noRead === 0 && "noRead", index + 1 === length && "last")}
			onMouseOver={handleReadNotify}
			onClick={handleClickNotify}
		>
			<div className={cx("avt")}>
				<Avartar width={"56px"} height={"56px"} src={item.notifyFrom.avatar} />
				<div className={cx("icon", `color${item.content}`)}>
					{item.content === 1 && <CommentIcon width={19} height={19} noneStroke />}
					{item.content === 2 && <LikeIcon width={15} height={15} />}
					{item.content === 4 && <BellNotifyFullIcon width={16} height={16} />}
				</div>
			</div>
			<div className={cx("content")}>
				<div className={cx("text")}>
					{item.content !== 4 && (
						<>
							<span className={cx("notify_from")}>{item.notifyFrom.userName}</span>
							<span>
								<FormattedMessage id={`Notify.content_${item.content}`} />
							</span>
						</>
					)}
					{item.content === 4 && (
						<span>
							This fucking message has been send by me (the admin). If you don't read
							this message i will ban your fucking account
						</span>
					)}
				</div>
				<div className={cx("date")}>
					<Moment locale={language} fromNow>
						{item.createdAt}
					</Moment>
				</div>
			</div>
		</div>
	);
}

export default NotifyCard;
