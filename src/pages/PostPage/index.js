import { useEffect, useState } from "react";
import styles from "./PostPage.module.scss";
import classNames from "classnames/bind";
import { THEMES } from "../../utils/constant";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import images from "../../asset/images/slideTest";
import { CommentIcon } from "../../asset/icons";
import { FormattedMessage } from "react-intl";
import { handleGojoRedux } from "../../redux/actions/appAction";
import Gojo from "../../components/Temp/Gojo";
import { postService } from "../../services";
import Post from "../../components/Post";
import { NavItem } from "react-bootstrap";
const cx = classNames.bind(styles);

function PostPage() {
	const idUser = useSelector((state) => state.user.userId);
	const idFriend = useParams();
	const rainColor = useSelector((state) => state.app.rain_color);
	const currentTheme = useSelector((state) => state.app.theme);
	const [post, setPost] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const post = await postService.handleGetOwnerPost(idFriend.idUser, idUser);
			// console.log(post);
			if (post && post.reg) {
				setPost(post.reg);
			}
		}

		fetchData();
	}, []);
	// console.log(post);
	return (
		<div className={cx("wrapper", currentTheme === THEMES.DARK && THEMES.DARK)}>
			{post.length === 0 && <Gojo />}
			<div className={cx("main")}>
				{post.length > 0 && post.map((item) => <Post key={Math.random()} data={item} idUser={idUser} />)}
			
			</div>
		</div>
	);
}

export default PostPage;
