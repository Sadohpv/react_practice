import styles from "./Search.module.scss";
import classNames from "classnames/bind";
import { ArrowLeft, HomeIcon, SearchIcon, SettingIcon } from "../../../asset/icons";
import { NavLink, useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import { toast } from "react-toastify";
// import ToastifyUser from "../../pages/ListUser/toastUser";
import TippyCustom from "../../Tippy/index";
import { useDispatch, useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import { useState } from "react";
import { THEMES } from "../../../utils/constant";
import images from "../../../asset/images/test";
// import { handleLogoutRedux, handleRefresh } from "../../redux/actions/userAction";
const cx = classNames.bind(styles);
function Search() {
	const user = useSelector((state) => state.user.data_init);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [inputClick, setInputClick] = useState(false);
	const [keyWord, setKeyWord] = useState("");
	// useEffect(() => {
	// 	dispatch(handleRefresh());
	// }, []);

	// useEffect(() => {
	// 	if(user && user.auth === false && window.location.pathname !=='/login'){

	// 	}
	// },[user]);
	const currentTheme = useSelector((state) => state.app.theme);

	const handleChangeKeyWord = (e) => {
		setKeyWord(e.target.value);
	};
	const handleEnter = (e) => {
		if (e.keyCode == 13 && keyWord !== "") {
			console.log("Here");
		}
	};
	console.log(keyWord);
	return (
		<div className={cx("wrapper", currentTheme === THEMES.DARK && THEMES.DARK)}>
			<div className={cx("logo")}>
				<div className={cx("logo_box")}>
					<NavLink to="/">
						<img src={images.logo} />
					</NavLink>
				</div>
			</div>

			<div className={cx("search")}>
				{inputClick && (
					<div className={cx("search_result")} onClick={() => setInputClick(false)}>
						<div className={cx("search_result-back")}>
							<ArrowLeft width="20px" height="20px" />
						</div>
					</div>
				)}
				<div className={cx("input_block")}>
					<input
						type="text"
						placeholder="Searching something ?"
						onFocus={() => setInputClick(true)}
						onBlur={() => setInputClick(false)}
						value={keyWord}
						onChange={(e) => handleChangeKeyWord(e)}
						onKeyDown={(e) => handleEnter(e)}
					/>
					<div className={cx("input_button")}>
						<SearchIcon width="16px" height="16px" fill="#bfc1c5" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Search;
