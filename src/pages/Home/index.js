// import ToastifyUser from "../ListUser/toastUser";
// import images from "../../asset/images/parallaxImage";

import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import SlideStory from "./SlideStory";
import { useEffect } from "react";

const cx = classNames.bind(styles);

function Home() {
	return (
		<>
			
			<div>
				<SlideStory/>
			</div>
		</>
	);
}

export default Home;
