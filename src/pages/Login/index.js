import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import images from "../../asset/images/test/";
import LoginBlock from "./loginBlock";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleRefreshWebRedux } from "../../redux/actions/userAction";
const cx = classNames.bind(styles);

function LoginComponent() {
	const [background, setBackground] = useState(localStorage.getItem('background') || images.loginBack);
	const [activeBackground, setActiveBackground] = useState(localStorage.getItem('activeBack') || 1);
	const [styleMessage, setStyleMessage] = useState("#182d54");
	const navigate = useNavigate();
	
	const data_user = useSelector(state => state.user.data_user);
	const handleChangeBack = (image,num,color)=>{
		setBackground(image);
		setActiveBackground(num);
		setStyleMessage(color);
		localStorage.setItem('background',image);
		localStorage.setItem('activeBack',num);
	}
	useEffect(()=>{
		if(localStorage.getItem('token')){
			navigate("/");
		}
	},[data_user])
	return (
		
		<div className={cx("container")}>
			<div className={cx("option")}>
				<div
					style={{ backgroundImage: `url(${images.loginBack})`, backgroundSize: `cover` }}
					onClick={(e)=>handleChangeBack(images.loginBack,1,'#182d54')}
					className={ activeBackground === 1 ? cx("active") : ""}
				></div>
				<div
					style={{
						backgroundImage: `url(${images.loginBack2})`,
						backgroundSize: `cover`,
					}}
					onClick={(e)=>handleChangeBack(images.loginBack2,2,'#fbedf4')}
					className={ activeBackground === 2 ? cx("active") : ""}
				></div>
		
				<div
					style={{
						backgroundImage: `url(${images.loginBack3})`,
						backgroundSize: `cover`,
					}}
					onClick={(e)=>handleChangeBack('block',3,'#a2ebff')}
					className={ activeBackground === 3 ? cx("active") : ""}
				></div>
			</div>
			<div
				className={cx("content")}
				id="content"
				style={{ backgroundImage: `url(${background})` }}
			>	
			{/* {
				background === 'video' &&
			} */}
				<video className={cx("video")} autoPlay muted loop>
					<source src={images.videoBack3} />
				</video>
			
					<LoginBlock color={styleMessage}/>
			</div>
		</div>
	);
}

export default LoginComponent;
