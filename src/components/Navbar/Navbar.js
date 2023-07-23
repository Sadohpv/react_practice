import styles from "./Navbar.module.scss";
import classNames from "classnames/bind";
import { HomeIcon,SettingIcon} from "../../asset/icons";
import { NavLink, useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import { toast } from "react-toastify";
// import ToastifyUser from "../../pages/ListUser/toastUser";
import TippyCustom from "../Tippy/index";
import { useDispatch, useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";

// import { handleLogoutRedux, handleRefresh } from "../../redux/actions/userAction";
const cx = classNames.bind(styles);
function NavbarCustom() {
	const classes = cx("nav_item", cx("item"));

	const user = useSelector((state) => state.user.data_init);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		// dispatch(handleLogoutRedux());
		// toast.success("Logout Success");
		// navigate("/");
	};

	// useEffect(() => {
	// 	dispatch(handleRefresh());
	// }, []);

	// useEffect(() => {
	// 	if(user && user.auth === false && window.location.pathname !=='/login'){

	// 	}
	// },[user]);
	return (
		<div className={cx("container_block")}>
			<div className={cx("navbar")}>
				<TippyCustom content={<FormattedMessage id="Navbar.home"/>}>
					<div className={classes}>
						<NavLink to="/" className={(nav) => cx("menu_item", { active: nav.isActive })}>
							<HomeIcon />
						</NavLink>
					</div>
				</TippyCustom>
				<TippyCustom content={<FormattedMessage id="Navbar.settings"/>}>
					<div className={classes}>
						<NavLink to="/edit" className={(nav) => cx("menu_item", { active: nav.isActive })}>
							<SettingIcon />
						</NavLink>
					</div>
				</TippyCustom>
				<TippyCustom content="List User">
					<div className={classes}>
						<NavLink
							to="/list"
							className={(nav) => cx("menu_item", { active: nav.isActive })}
						>
							{/* <ListUserIcon /> */}
						</NavLink>
					</div>
				</TippyCustom>

				{user && user.auth === null ? (
					<TippyCustom content="Login">
						<div className={classes}>
							<NavLink
								to="/login"
								className={(nav) => cx("menu_item", { active: nav.isActive })}
							>
								{/* <LoginIcon /> */}
							</NavLink>
						</div>
					</TippyCustom>
				) : (
					<TippyCustom content="Logout">
						<div className={classes} onClick={handleLogout}>
							{/* <LogoutIcon /> */}
						</div>
					</TippyCustom>
				)}

				{/* <ToastifyUser /> */}
			</div>
		</div>
	);
}

export default NavbarCustom;
