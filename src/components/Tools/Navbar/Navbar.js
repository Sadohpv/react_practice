import styles from "./Navbar.module.scss";
import classNames from "classnames/bind";
import { HomeIcon, ListUserIcon, SettingIcon } from "../../../asset/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
// import { toast } from "react-toastify";
// import ToastifyUser from "../../pages/ListUser/toastUser";
import TippyCustom from "../../Tippy/index";
import { useDispatch, useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";

import { THEMES } from "../../../utils/constant";
import { useEffect } from "react";
import Search from "./Search";
import UserBar from "./UserBar";
import { friendService } from "../../../services";
import { handleNumberAddFriendReceiveRedux } from "../../../redux/actions/userAction";

// import { handleLogoutRedux, handleRefresh } from "../../redux/actions/userAction";
const cx = classNames.bind(styles);
function NavbarCustom() {
	const classes = cx("nav_item", cx("item"));

	const numberReceive =  useSelector((state) => state.user.numberReceive);
	const idUser = useSelector((state) => state.user.userId);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		// dispatch(handleLogoutRedux());
		// toast.success("Logout Success");
		// navigate("/");
	};

	useEffect(() => {
		async function fetch() {
			const res = await friendService.handleGetNumberResponseAddFriendService(idUser);
			// console.log(res);
			if (res) {
				// console.log("here");
				dispatch(handleNumberAddFriendReceiveRedux(res.reg ));
			}
		}
		fetch();
	}, []);
	const currentTheme = useSelector((state) => state.app.theme);

	return (
		<div className={cx("container_block", currentTheme === THEMES.DARK && THEMES.DARK)}>
			<Search />
			<div className={cx("navbar")}>
				<TippyCustom content={<FormattedMessage id="Navbar.home" />}>
					<div className={classes}>
						<NavLink
							to="/"
							className={(nav) => cx("menu_item", { active: nav.isActive })}
						>
							<HomeIcon />
						</NavLink>
					</div>
				</TippyCustom>
				<TippyCustom content={<FormattedMessage id="Navbar.settings" />}>
					<div className={classes}>
						<NavLink
							to={`/${idUser}`}
							className={(nav) => cx("menu_item", { active: nav.isActive })}
						>
							<SettingIcon />
						</NavLink>
					</div>
				</TippyCustom>
				<TippyCustom content={<FormattedMessage id="Navbar.friend_list" />}>
					<div className={classes}>
						<NavLink
							to="/friend"
							className={(nav) => cx("menu_item", { active: nav.isActive })}
						>
							<ListUserIcon />
							{numberReceive > 0 && <span className={cx("number_request")}> {numberReceive < 10 ? numberReceive : "5+"} </span>}
						</NavLink>
					</div>
				</TippyCustom>
			</div>
			<UserBar />
		</div>
	);
}

export default NavbarCustom;
