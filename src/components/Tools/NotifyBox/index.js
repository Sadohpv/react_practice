import styles from "./NotifyBox.module.scss";
import classNames from "classnames/bind";
import { notifyService } from "../../../services";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Avartar from "../../Avatar/Avatar";
import Moment from "react-moment";
import vi from "moment/locale/vi";
import NotifyCard from "./Notify";
import { FormattedMessage } from "react-intl";
import { handleFetchNotifyRedux } from "../../../redux/actions/notifyAction";
const cx = classNames.bind(styles);

function NotifyBox({ out }) {
	const idUser = useSelector((state) => state.user.userId);
	const notify = useSelector((state)=>state.notify.notifyData);
	const [notifyAnimation, setNotifyAnimation] = useState(false);
	const dispatch = useDispatch();
	// const [notify, setNotify] = useState([]);
	useEffect(() => {
		async function fetch() {
			
			if(notify.length == 0){
				// console.log("Here");

				const res = await notifyService.handleGetAllNotifyService(idUser);
				
				// console.log(res.reg);
				dispatch(handleFetchNotifyRedux(res.reg));
			}
		}
		fetch();
	}, []);
	// console.log(notify.length);
	
	return (
		// , out && "back"
		<div className={cx("wrapper")}>
			<div className={cx("title")}>
				<FormattedMessage id="Notify.notification"/>
			</div>
			<div className={cx("main")}>
				{notify.length > 0 &&
					notify.map((item,index) => (
						<NotifyCard key={Math.random()} item={item} index={index} length={notify.length} />
					))}
			</div>
		</div>
	);
}

export default NotifyBox;
