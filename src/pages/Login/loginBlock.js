import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { handleLoginRedux } from "../../redux/actions/userAction";
const cx = classNames.bind(styles);

function LoginBlock() {
	const block = useRef();
	const dispatch = useDispatch();
	// const data_init = useSelector();

	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');

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
	const handleLogin = () => {
		dispatch(handleLoginRedux(email,password));
	};
	const handleInputEmail = (e)=>{
		setEmail(e.target.value);
	}
	const handleInputPassword = (e)=>{
		setPassword(e.target.value);
	}
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
				<input type="text" className={cx("email_input")} placeholder="Email" 
					onChange={(e)=>handleInputEmail(e)}
				/>
				<span>Password</span>
				<input type="password" className={cx("pass_input")} placeholder="Password" 
					onChange={(e)=>handleInputPassword(e)}
				
				/>
				<button onClick={handleLogin}>Login</button>
			</div>
		</div>
	);
}

export default LoginBlock;
