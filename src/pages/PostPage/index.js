import { Fragment, useEffect, useState } from "react";
import styles from "./PostPage.module.scss";
import classNames from "classnames/bind";
import { THEMES } from "../../utils/constant";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { FormattedMessage } from "react-intl";

import Gojo from "../../components/Temp/Gojo";
import { postService } from "../../services";
import Post from "../../components/Post";

import { ImageIcon, StickerIcon, VideoIcon } from "../../asset/icons";
import Avartar from "../../components/Avatar/Avatar";
import ButtonStatus from "../../components/Tools/ButtonStatus/ButtonStatus.js";
import AddPostBlock from "../../components/Post/AddPostBlock";
const cx = classNames.bind(styles);

function PostPage() {
	const idUser = useSelector((state) => state.user.userId);
	const idFriend = useParams();
	const rainColor = useSelector((state) => state.app.rain_color);
	const currentTheme = useSelector((state) => state.app.theme);
	const [post, setPost] = useState([]);

	const [addBlock, setAddBlock] = useState(false);
	const [postData, setPostData] = useState([]);
	const [addBlockImg, setAddBlockImg] = useState(false);
	const handleOnClick = () => {
		setAddBlockImg(true);
		setAddBlock(true);
	};

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
		<>
			<div className={cx("wrapper", currentTheme === THEMES.DARK && THEMES.DARK)}>
				<div className={cx("status")}>
					<div className={cx("status_input")} onClick={() => setAddBlock(true)}>
						<Avartar />
						<div className={cx("open_input-popup")}>
							<span>
								<FormattedMessage id="Status_Comp.question" />
							</span>
						</div>
					</div>
					<div className={cx("status_input-file")}>
						<ButtonStatus
							icon={<ImageIcon width="20px" height="20px" fill="#45bd62" />}
							text={<FormattedMessage id="Status_Comp.image" />}
							funClick={handleOnClick}
						/>

						<ButtonStatus
							icon={<VideoIcon width="20px" height="20px" fill="#e42645" />}
							text={<FormattedMessage id="Status_Comp.video" />}
						/>

						<ButtonStatus
							icon={<StickerIcon width="20px" height="20px" fill="#f7b928" />}
							text={<FormattedMessage id="Status_Comp.sticker" />}
						/>
					</div>
				</div>
				<div className={cx("main")}>
					{post.length > 0 &&
						post.map((item, index) => (
							
								<Post key={item.idPost.toString()} index={index} data={item} idUser={idUser} />
							
						))}
				</div>
				{post.length === 0 && <Gojo />}
			</div>
			{addBlock && (
				<AddPostBlock
					setAddBlock={setAddBlock}
					addBlockImg={addBlockImg}
					setAddBlockImg={setAddBlockImg}
				/>
			)}
		</>
	);
}

export default PostPage;
