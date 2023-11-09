import styles from "./NotifyBox.module.scss";
import classNames from "classnames/bind";
import { notifyService } from "../../../services";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Avartar from "../../Avatar/Avatar";
import Moment from "react-moment";
import vi from "moment/locale/vi";

const cx = classNames.bind(styles);

function NotifyBox({ out }) {
	const idUser = useSelector((state) => state.user.userId);
	const language = useSelector((state) => state.app.language);

	const [notify, setNotify] = useState([]);
	useEffect(() => {
		async function fetch() {
			const res = await notifyService.handleGetAllNotifyService(idUser);
			setNotify(res.reg);
		}
		fetch();
	}, []);
	console.log(notify);
	return (
		<div className={cx("wrapper", out && "back")}>
			<div className={cx("title")}>Notification</div>
			<div className={cx("main")}>
				{notify.length > 0 &&
					notify.map((item,index) => (
						<div className={cx("notify",index+1==notify.length &&"last")} >
							<div className={cx("avt")}>
								<Avartar
									width={"60px"}
									height={"60px"}
									src={item.notifyFrom.avatar}
								/>
							</div>
							<div className={cx("content")}>
								<div className={cx("text")}>
									These day they got named for just about everything
								</div>
								<div className={cx("date")}>
									<Moment locale={language} fromNow>
										{item.createdAt}
									</Moment>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}

export default NotifyBox;
