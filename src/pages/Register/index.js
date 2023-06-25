import { useState } from "react";
import styles from "./Register.module.scss";
import classNames from "classnames/bind";
import FormRegister from "./FormRegister";
import images from "../../asset/images/test/";
import { userService } from "../../services/index";

const cx = classNames.bind(styles);

function RegisterPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [userName, setUserName] = useState("");
	const [gender, setGender] = useState(0);
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const [note,setNote] = useState("");

	const [toggle, setToggle] = useState(null);
	const handleNext = () => {
		setToggle(!toggle);
	};
	const disableRightClick = (e) => {
		e.preventDefault();
		return false;
	};
	const handleRegister = async () => {
		try {
			const res = await userService.handleRegisterService(
				email.trim(),
				password,
				firstName,
				lastName,
				userName,
				gender,
				address,
				phone
			);
			
			if(res && res.errCode === 0 ){
				setNote("Register Success!");	

			} 
			else if(res && res.errCode && res.errCode === 1){
				if(res.errCodeMessage){
					setNote(res.errCodeMessage);
				}else{
					setNote("Something went wrong with your email address");
				}
			}
			else if(res && res.errCode && res.errCode === 2){
				if(res.errCodeMessage){
					setNote(res.errCodeMessage);
				}else{
					setNote("Make sure you fill all the required");
				}
			}else{
				setNote("Register Failure !");
			}	
			console.log(res);

		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className={cx("register")}>
			<div className={cx("main")}>
				<div className={cx("left")} onContextMenu={(e) => disableRightClick(e)}>
					<video autoPlay muted loop play="true">
						<source src={images.registerBack} />
					</video>
				</div>
				<div className={cx("right")}>
					<FormRegister
						value1={email}
						setValue1={setEmail}
						placehold1={"Email"}
						value2={password}
						setValue2={setPassword}
						placehold2={"Password"}
						value3={firstName}
						setValue3={setFirstName}
						placehold3={"First Name"}
						value4={lastName}
						setValue4={setLastName}
						placehold4={"Last Name"}
						handleOnClick={handleNext}
						toggle={null}
						setToggle={setToggle}
						title={"Next"}
						note={note}
					/>

					<FormRegister
						value1={userName}
						setValue1={setUserName}
						placehold1={"User Name"}
						value2={gender}
						setValue2={setGender}
						placehold2={"Gender"}
						value3={address}
						setValue3={setAddress}
						placehold3={"Address"}
						value4={phone}
						setValue4={setPhone}
						placehold4={"Phone Number"}
						toggle={toggle}
						title={"Register"}
						handleOnClick={handleRegister}
						leaf={true}
						note={note}

					/>
					<div className={cx("tab")}>
						<div className={cx("another_tab")} onClick={() => setToggle(false)}>
							<p>1</p>
						</div>
						<div className={cx("another_tab")} onClick={() => setToggle(true)}>
							<p>2</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RegisterPage;
