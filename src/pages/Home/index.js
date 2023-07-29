// import ToastifyUser from "../ListUser/toastUser";
// import images from "../../asset/images/parallaxImage";

import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import SlideStory from "./SlideStory";
import { useEffect } from "react";
import { THEMES} from "../../utils/constant";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

function Home() {

	const currentTheme = useSelector((state) => state.app.theme);

	return (
		<>
			
			<div>
				<SlideStory dark={currentTheme===THEMES.DARK ? true : false}/>
			</div>
		</>
	);
}

export default Home;
