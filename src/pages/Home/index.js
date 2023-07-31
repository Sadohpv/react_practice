// import ToastifyUser from "../ListUser/toastUser";
// import images from "../../asset/images/parallaxImage";

import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import SlideStory from "./SlideStory";
import { useEffect } from "react";
import { THEMES} from "../../utils/constant";
import { useSelector } from "react-redux";
import Post from "../../components/Post";

const cx = classNames.bind(styles);

function Home() {

	const currentTheme = useSelector((state) => state.app.theme);

	return (
		<>
			
			<div className={cx('main')}>
				<SlideStory dark={currentTheme===THEMES.DARK ? true : false}/>
				<div className={cx('status')}>
					<div className={cx('status_input')}>

					</div>
					<div className={cx('status_input-file')}>

					</div>
				</div>
				<div className={cx('main_post_block')}>
					<Post />
					<Post />
					<Post />

				</div>
			</div>


		</>
	);
}

export default Home;
