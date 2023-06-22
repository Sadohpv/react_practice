import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { handleLoginRedux } from "../../redux/actions/userAction";
import { userService } from "../../services/index";
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
		if(message){

			setMessage(message);
		}else{
			setMessage(orMessage);
		}
		return;
	};
	const handleLogin = async () => {
		try {
			const res = await userService.handleLoginService(email.trim(), password);
			console.log(res);
			if (res && res.userData && res.userData.errCode === 4) {
				handleSetMessage(res.userData.errMessage,"Missing data !");
			}  else if (res && res.userData && res.userData.errCode === 1) {
				handleSetMessage(res.userData.errMessage,"Incorrect Email !");
			} else if (res.userData && res.userData.errCode === 3) {
				handleSetMessage(res.userData.errMessage,"Incorrect Password !");
			}else if (res && res.userData && res.userData.errCode === 0) {
				dispatch(handleLoginRedux(res.userData.user.email, res.userData.user.isAdmin,res.accessToken));
			} else {
				setMessage("No response from server !");
			}
		} catch (error) {
			setMessage("Something went wrong and i dont know what is that !");

		}
	};
	const handleInputEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleInputPassword = (e) => {
		setPassword(e.target.value);
	};

	


	return (
		<div
			className={cx("block")}
			onMouseMove={(e) => handleOnMouseMove(e)}
			onMouseOut={(e) => handleOnMouseOut(e)}
			ref={block}
		>
			<span className={cx("welcome")}>WELCOME</span>
			<div className={cx("login")}>
				<span>Email</span>
				<input
					type="text"
					className={cx("email_input")}
					placeholder="Email"
					onChange={(e) => handleInputEmail(e)}
				/>
				<span>Password</span>
				<input
					type="password"
					className={cx("pass_input")}
					placeholder="Password"
					onChange={(e) => handleInputPassword(e)}
				/>
				<div className={cx("message")} style={{ color: `${color}` }}>
					{message}
				</div>
				<button onClick={handleLogin}>Login</button>
			</div>
		</div>
	);
}

export default LoginBlock;
