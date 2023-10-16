import {
	CancelIcon,
	CommentIcon,
	ShareIcon,
	ThreeDotsIcon,
	UnLikeIcon,
	LikeIcon,
	GolobalIcon,
	LockIcon,
} from "../../asset/icons";
// import ButtonPost from "./ButtonPost";
import styles from "./FullPostPage.module.scss";
import classNames from "classnames/bind";
import { FormattedMessage } from "react-intl";
// import Avartar from "../Avatar/Avatar";
import { useEffect, useState } from "react";
import { postService } from "../../services";
// import moment from "moment";
// import Moment from "react-moment";
// import vi from "moment/locale/vi";
import { useSelector } from "react-redux";
// import { abbreviateNumber } from "js-abbreviation-number";
// import CommentCard from "../Comment";
import { useParams } from "react-router";
import FullPost from "../../components/Post/FullPost";
const cx = classNames.bind(styles);
function FullPostPage() {
	const idUser = useSelector((state) => state.user.userId);

	const idPost = useParams();
	// console.log(idPost);
	const [data, setData] = useState(false);
	
	useEffect(() => {
		async function fetchData() {
			const response = await postService.handleGetOnePostService(+idPost.idPost, idUser);
			if (response.reg) {
				setData(response.reg);
				// const likeRes = await postService.handleCheckLikeService(idUser);
				// if (likeRes) {
				// 	setPostLike(likeRes);

				// 	console.log(likeRes.reg);
				// }
			}
		}
		fetchData();
	}, []);
	console.log(data)
    // console.log(data);
	return <div className={cx("wrapper")}>{data && <FullPost data={data} />}</div>;
}

export default FullPostPage;
