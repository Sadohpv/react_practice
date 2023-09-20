import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { handleLoginRedux } from "../../redux/actions/userAction";
import { userService } from "../../services/index";
import { FormattedMessage } from "react-intl";
import Line from "../../components/Temp/Line";
import { NavLink } from "react-router-dom";
const cx = classNames.bind(styles);

function LoginBlock({ color }) {
	const block = useRef();
	const dispatch = useDispatch();
	// const data_init = useSelector();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");
	const handleOnMouseMove = (e) => {
		const x = e.pageX;
		const y = e.pageY;
		let BoxWidth = block.current.clientWidth;
		let BoxHeight = block.current.clientHeight;

		let moveX = x - BoxWidth / 2;
		let moveY = y - BoxHeight / 2;
		block.current.style.transform = `translateX(${moveX * 0.05}px) translateY(${
			moveY * 0.05
		}px)`;
	};
	const handleOnMouseOut = (e) => {
		block.current.style.transform = ``;
	};

	const handleSetMessage = (message, orMessage) => {
		if (message) {
			setMessage(message);
		} else {
			setMessage(orMessage);
		}
		return;
	};
	const handleLogin = async () => {
		try {
			// console.log(email,password);
			const res = await userService.handleLoginService(email.trim(), password);
			// console.log(res);
			if (res && res.userData && res.userData.errCode === 4) {
				handleSetMessage(res.userData.errMessage, "Missing data !");
			} else if (res && res.userData && res.userData.errCode === 1) {
				handleSetMessage(res.userData.errMessage, "Incorrect Email !");
			} else if (res.userData && res.userData.errCode === 3) {
				handleSetMessage(res.userData.errMessage, "Incorrect Password !");
			} else if (res && res.userData && res.userData.errCode === 0) {
				dispatch(
					handleLoginRedux(
						res.userData.user,

						res.accessToken
					)
				);
			} else {
				setMessage("No response from server !");
			}
		} catch (error) {
			setMessage("Something went wrong and i dont know what is that !");
		}
	};
	const handleInputEmail = (e) => {
		if (e.keyCode === 13) {
			handleLogin();
		} else if (e.keyCode === 32) {
			e.preventDefault();
		} else {
			setEmail(e.target.value);
		}
	};
	const handleInputPassword = (e) => {
		if (e.keyCode === 13) {
			handleLogin();
		} else if (e.keyCode === 32) {
			e.preventDefault();
		} else {
			setPassword(e.target.value);
		}
	};

	// const [passHolder, setPassHolder] = useState(<FormattedMessage id="Login_Page.email" />);

	return (
		<div
			className={cx("block")}
			onMouseMove={(e) => handleOnMouseMove(e)}
			onMouseOut={(e) => handleOnMouseOut(e)}
			ref={block}
		>
			<span className={cx("welcome")}>
				<FormattedMessage id="Login_Page.welcome" />
			</span>
			<div className={cx("login")}>
				<span>
					<FormattedMessage id="Login_Page.email" />
				</span>
				<input
					type="text"
					className={cx("email_input")}
					placeholder="Email"
					onChange={(e) => handleInputEmail(e)}
					onKeyDown={(e) => handleInputEmail(e)}
				/>
				<span>
					<FormattedMessage id="Login_Page.password" />
				</span>
				<input
					type="password"
					className={cx("pass_input")}
					placeholder="Password"
					onChange={(e) => handleInputPassword(e)}
					onKeyDown={(e) => handleInputPassword(e)}
				/>
				<div className={cx("message")} style={{ color: `${color}` }}>
					{message}
				</div>
				<button className={cx("login")} onClick={handleLogin}>
					<FormattedMessage id="Login_Page.login" />
				</button>
				<Line />

				<NavLink to="/register">
					<button className={cx("register")}>
						<FormattedMessage id="Login_Page.register" />
					</button>
				</NavLink>
			</div>
		</div>
	);
}

export default LoginBlock;
