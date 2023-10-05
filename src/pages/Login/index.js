import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import images from "../../asset/images/test/";
import LoginBlock from "./loginBlock";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
// import { handleRefreshWebRedux } from "../../redux/actions/userAction";
import { changeLanguageRedux } from "../../redux/actions/appAction";

const cx = classNames.bind(styles);

function LoginComponent() {
	const currentLang = useSelector((state) => state.app.language);

	const [checkLanguage, setCheckLanguage] = useState(currentLang === "en" ? false : true);

	const [background, setBackground] = useState(
		localStorage.getItem("background") || images.loginBack
	);
	const [activeBackground, setActiveBackground] = useState(
		localStorage.getItem("activeBack") || 1
	);
	const [styleMessage, setStyleMessage] = useState("#182d54");
	const [controlBack, setControlBack] = useState(background !== "block" ? `none` : "block");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const auth = useSelector((state) => state.user.auth);

	const handleChangeBack = (image, num, color) => {
		setBackground(image);
		setActiveBackground(num);
		setStyleMessage(color);
		if (image === "block") {
			setControlBack(image);
		} else {
			setControlBack("none");
		}
		localStorage.setItem("background", image);
		localStorage.setItem("activeBack", num);
	};

	const handleChangeLanguage = () => {
		setCheckLanguage(!checkLanguage);
		if (checkLanguage === true) {
			dispatch(changeLanguageRedux("en"));
		} else {
			dispatch(changeLanguageRedux("vi"));
		}
	};

	
	if (auth) {
		return <Navigate to="/" replace />;
	} else {
		return (
			<div className={cx("container")}>
				<div className={cx("language")}>
					<label className={cx("switch")}>
						<input
							type="checkbox"
							onChange={handleChangeLanguage}
							checked={!checkLanguage}
						/>
						<span className={cx("slider", "round")}></span>
						<div className={cx("language-title")}>
							<span className={cx("on")}> vi</span>
							<span className={cx("off")}> en </span>
						</div>
					</label>
				</div>
				<div className={cx("option")}>
					<div
						style={{
							backgroundImage: `url(${images.loginBack})`,
							backgroundSize: `cover`,
						}}
						onClick={(e) => handleChangeBack(images.loginBack, 1, "#182d54")}
						className={activeBackground == 1 ? cx("active") : ""}
					></div>
					<div
						style={{
							backgroundImage: `url(${images.loginBack2})`,
							backgroundSize: `cover`,
						}}
						onClick={(e) => handleChangeBack(images.loginBack2, 2, "#fbedf4")}
						className={activeBackground == 2 ? cx("active") : ""}
					></div>
					<div
						style={{
							backgroundImage: `url(${images.loginBack3})`,
							backgroundSize: `cover`,
						}}
						onClick={(e) => handleChangeBack("block", 3, "#a2ebff")}
						className={activeBackground == 3 ? cx("active") : ""}
					></div>
				</div>

				<div
					className={cx("content")}
					id="content"
					style={{ backgroundImage: `url(${background})` }}
				>
					<video
						className={cx("video")}
						autoPlay
						muted
						loop
						style={{ display: `${controlBack}` }}
						disablePictureInPicture={true}
					>
						<source src={images.videoBack3} />
					</video>

					<LoginBlock color={styleMessage} />
				</div>
			</div>
		);
	}
}

export default LoginComponent;
