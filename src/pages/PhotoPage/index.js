import { useEffect, useState } from "react";
import styles from "./PhotoPage.module.scss";
import classNames from "classnames/bind";
import { THEMES } from "../../utils/constant";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import images from "../../asset/images/slideTest";
import { CommentIcon } from "../../asset/icons";
import { FormattedMessage } from "react-intl";

import { postService } from "../../services";
import Post from "../../components/Post";
import { NavItem } from "react-bootstrap";
import CardPhoto from "./Card";
const cx = classNames.bind(styles);

function PhotoPage() {
	const idUser = useSelector((state) => state.user.userId);
	const idFriend = useParams();

	const currentTheme = useSelector((state) => state.app.theme);
	const [post, setPost] = useState([]);
	// 	useEffect(() => {
	// 		// async function fetchData() {
	// 		// 	const post = await postService.handleGetOwnerPost(idFriend.idUser, idUser);
	// 		// 	// console.log(post);
	// 		// 	if (post && post.reg) {
	// 		// 		setPost(post.reg);
	// 		// 	}
	// 		// }

	// 		// fetchData();
	//
	// 	}, []);

	return (
		<div className={cx("wrapper", currentTheme === THEMES.DARK && THEMES.DARK)}>
			<div className={cx("main")}>
				<div className={cx("body")}>
					<CardPhoto index={1} />
					<CardPhoto index={2} src="https://c4.wallpaperflare.com/wallpaper/976/723/820/anime-girls-anime-hatsune-miku-vocaloid-wallpaper-preview.jpg"/>
					<CardPhoto index={4} src="https://c4.wallpaperflare.com/wallpaper/805/768/847/fantasy-art-bright-colorful-wallpaper-preview.jpg" />
                    <CardPhoto index={5} src="https://img.freepik.com/premium-photo/cityscape-view-night_950633-891.jpg"/>
				</div>
			</div>
		</div>
	);
}

export default PhotoPage;
