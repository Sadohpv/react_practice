import styles from "./UserBar.module.scss";
import classNames from "classnames/bind";
import { BellNotifyFullIcon, BellNotifyIcon } from "../../../asset/icons";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import ToastifyUser from "../../pages/ListUser/toastUser";
// import TippyCustom from "../../Tippy/index";
import { useDispatch, useSelector } from "react-redux";
// import { FormattedMessage } from "react-intl";

import { THEMES } from "../../../utils/constant";
import ButtonRoundIcon from "../ButtonRoundIcon/ButtonRoundIcon";
import { LogoutIcon } from "../../../asset/icons";
import NotifyBox from "../NotifyBox";
// import { notifyService } from "../../../services";
// import { handleNumberNotifyRedux } from "../../../redux/actions/notifyAction";
import ButtonNotify from "../ButtonNotify/ButtonNotify";
import { handleLogoutRedux } from "../../../redux/actions/userAction";
import { userService } from "../../../services";
// import { handleLogoutRedux, handleRefresh } from "../../redux/actions/userAction";
const cx = classNames.bind(styles);
function UserBar() {
	const classes = cx("nav_item", cx("item"));

	const idUser = useSelector((state) => state.user.userId);
	// const numberNotify = useSelector((state) => state.notify.numberNotify);
	const [notifyIcon, setNotifyIcon] = useState(false);
	// const [number,setNumber] = useState(numberNotify);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = async () => {
		const res = await userService.handleLogoutService();
		console.log(res);
		if (res && res.EC === 0) {
			dispatch(handleLogoutRedux());
			navigate("/login");
		}
		// toast.success("Logout Success");
		// alert("Logout");
		// console.log(document.cookie);
	};
	const handleOpenNoTiFy = () => {
		setTimeout(() => {
			setNotifyIcon(!notifyIcon);
		}, 600);
	};

	const currentTheme = useSelector((state) => state.app.theme);

	return (
		<>
			<div className={cx("wrapper", currentTheme === THEMES.DARK && THEMES.DARK)}>
				<ButtonNotify
					icon={
						notifyIcon === false ? (
							<BellNotifyIcon height="16px" width="16px" />
						) : (
							<span className={cx("active")}>
								<BellNotifyFullIcon height="16px" width="16px" />
							</span>
						)
					}
					className={cx("button_logout")}
					butFunc={handleOpenNoTiFy}
				/>

				<ButtonRoundIcon
					icon={<LogoutIcon height="16px" width="16px" />}
					className={cx("button_logout")}
					butFunc={handleLogout}
				/>
			</div>
			{notifyIcon && <NotifyBox key={Math.random()} />}
		</>
	);
}

export default UserBar;
