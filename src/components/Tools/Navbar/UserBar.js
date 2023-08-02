import styles from "./UserBar.module.scss";
import classNames from "classnames/bind";
import { HomeIcon,SettingIcon} from "../../../asset/icons";
import { NavLink, useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import { toast } from "react-toastify";
// import ToastifyUser from "../../pages/ListUser/toastUser";
import TippyCustom from "../../Tippy/index";
import { useDispatch, useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";

import { THEMES} from "../../../utils/constant";

// import { handleLogoutRedux, handleRefresh } from "../../redux/actions/userAction";
const cx = classNames.bind(styles);
function UserBar() {
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
	const currentTheme = useSelector((state) => state.app.theme);

	return (
		<div className={cx("wrapper",currentTheme === THEMES.DARK && THEMES.DARK)}>
		
		</div>
	);
}

export default UserBar;
