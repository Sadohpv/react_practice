import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import images from "../../asset/images/test";
const cx = classNames.bind(styles);

function LoginComponent() {
	const handleLogin = ()=>{
		alert('Login');
	}
	return (
		<>
			<div className={cx("container")} style={{backgroundImage: `url(${images.loginBack})`}} >
				<div className={cx("block")}>
					<span>
						WELCOME
					</span>
					<div className={cx("login")}>
						<span>
							Email
						</span>
						<input type="text" className={cx('email_input')} placeholder="Email"/>
						<span>
							Password
						</span>
						<input type="password" className={cx('pass_input')} placeholder="Password"/>
						<button onClick={handleLogin}>
							Login
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default LoginComponent;
