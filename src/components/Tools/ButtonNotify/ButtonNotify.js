import styles from "./ButtonNotify.module.scss";
import classNames from "classnames/bind";
import { notifyService } from "../../../services";
import { handleNumberNotifyRedux } from "../../../redux/actions/notifyAction";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const cx = classNames.bind(styles);

function ButtonNotify({ icon, butFunc, className }) {
	const handleClick = (e) => {
		butFunc();
	};
	const numberNotify = useSelector((state) => state.notify.numberNotify);
	const idUser = useSelector((state) => state.user.userId);
	const dispatch = useDispatch();

	useEffect(() => {
		async function fetch() {
			const regNotify = await notifyService.handleNumberNoReadNotifyService(idUser);
			dispatch(handleNumberNotifyRedux(regNotify.reg));
		}
		fetch();
	}, []);
	return (
		<div className={cx("button", className)} onClick={handleClick}>
			<div className={cx("box")}>
				{icon}
				{numberNotify > 0 && (
					<div className={cx("notify")}>
						<span>{numberNotify}</span>
					</div>
				)}
			</div>
		</div>
	);
}

export default ButtonNotify;
