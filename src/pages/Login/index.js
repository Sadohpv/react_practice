import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import images from "../../asset/images/test/";
import LoginBlock from "./loginBlock";
import { useEffect, useRef, useState } from "react";
const cx = classNames.bind(styles);

function LoginComponent() {
	const [background, setBackground] = useState(images.loginBack);
	const [activeBackground, setActiveBackground] = useState(1);

	const handleChangeBack = (image,num)=>{
		setBackground(image);
		setActiveBackground(num);
	}
	return (
		
		<div className={cx("container")}>
			<div className={cx("option")}>
				<div
					style={{ backgroundImage: `url(${images.loginBack})`, backgroundSize: `cover` }}
					onClick={(e)=>handleChangeBack(images.loginBack,1)}
					className={ activeBackground === 1 ? cx("active") : ""}
				></div>
				<div
					style={{
						backgroundImage: `url(${images.loginBack2})`,
						backgroundSize: `cover`,
					}}
					onClick={(e)=>handleChangeBack(images.loginBack2,2)}
					className={ activeBackground === 2 ? cx("active") : ""}
				></div>
		
				<div
					style={{
						backgroundImage: `url(${images.loginBack3})`,
						backgroundSize: `cover`,
					}}
					onClick={(e)=>handleChangeBack('video',3)}
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
			
					<LoginBlock />
			</div>
		</div>
	);
}

export default LoginComponent;
