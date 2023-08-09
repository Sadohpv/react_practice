import styles from "./Search.module.scss";
import classNames from "classnames/bind";
import { ArrowLeft, HomeIcon, SearchIcon, SettingIcon } from "../../../asset/icons";
import { NavLink, useNavigate } from "react-router-dom";

// import { toast } from "react-toastify";
// import ToastifyUser from "../../pages/ListUser/toastUser";
import TippyCustom from "../../Tippy/index";
import { useDispatch, useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import { useState, useEffect, useRef } from "react";
import { THEMES } from "../../../utils/constant";
import images from "../../../asset/images/test";
import UserSearchBlock from "./UserSearchBlock";
import useDebounce from "../../../hook/useDebounce";
import userService from "../../../services/userService";
// import { handleLogoutRedux, handleRefresh } from "../../redux/actions/userAction";
const cx = classNames.bind(styles);
function Search() {
	const user = useSelector((state) => state.user.data_init);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [inputClick, setInputClick] = useState(false);
	const [keyWord, setKeyWord] = useState("");
	const [searchResult, setSearchResult] = useState([]);

	const searchElement = useRef();

	const debounced = useDebounce(keyWord, 500);
	useEffect(() => {
		if (!keyWord.trim()) {
			// .trim() loại bỏ khoảng trắng nếu phía backend không trim search value

			setSearchResult([]);

			return;
		}

		const fetchApi = async () => {
			const results = await userService.handleSearchService(debounced);
			setSearchResult(results.reg);
		};
		fetchApi();

		// encodeURIComponent : mã hóa tránh trùng với kí tự quy ước của url
	}, [debounced]);
	const currentTheme = useSelector((state) => state.app.theme);

	const handleChangeKeyWord = (e) => {
		const searchValueCurrent = e.target.value;
		if (!searchValueCurrent.startsWith(" ")) {
			setKeyWord(searchValueCurrent);
		}
	};
	const handleEnter = (e) => {
		if (e.keyCode == 13 && keyWord !== "") {
			console.log("Here");
		}
	};
	useEffect(() => {
		
		function handleClickOutside(event) {
		  if (searchElement.current && !searchElement.current.contains(event.target)) {
			setInputClick(false);
		  }
		}
		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
		  // Unbind the event listener on clean up
		document.removeEventListener("mousedown", handleClickOutside);
		};
	  }, [searchElement]);
	return (
		<div className={cx("wrapper", currentTheme === THEMES.DARK && THEMES.DARK)}>
			<div className={cx("logo")}>
				<div className={cx("logo_box")}>
					<NavLink to="/">
						<img src={images.logo} />
					</NavLink>
				</div>
			</div>

			<div className={cx("search")}
				ref={searchElement}
			>
				{inputClick && (
					<div className={cx("search_result")}>
						<div
							className={cx("search_result-back")}
							onClick={() => setInputClick(false)}
						>
							<ArrowLeft width="20px" height="20px" />
						</div>
						<div className={cx("result")}>
							<div className={cx("result_block")}>
								<div className={cx("result_title")}>
									<span>Search Result</span>
								</div>
								<div className={cx("search_user")}>
									{searchResult.length > 0 &&
										searchResult.map((result) => (
											<UserSearchBlock data={result} key={result.idUser} />
									))}
								</div>
							</div>
						</div>
					</div>
				)}
				<div className={cx("input_block")}>
					<input
						type="text"
						placeholder="Searching something ?"
						onFocus={() => setInputClick(true)}
						// onBlur={() => setInputClick(false)}
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
