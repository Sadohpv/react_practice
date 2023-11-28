// import ToastifyUser from "../ListUser/toastUser";
// import images from "../../asset/images/parallaxImage";

import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import SlideStory from "./SlideStory";
import { useEffect, useState } from "react";
import { THEMES } from "../../utils/constant";
import { useSelector } from "react-redux";
import Post from "../../components/Post";
import Avartar from "../../components/Avatar/Avatar";
import ButtonPost from "../../components/Post/ButtonPost";
import { FormattedMessage } from "react-intl";
import { postService } from "../../services";

import {
	CommentIcon,
	ImageIcon,
	ShareIcon,
	StickerIcon,
	UnLikeIcon,
	VideoIcon,
} from "../../asset/icons";
import ButtonStatus from "../../components/Tools/ButtonStatus/ButtonStatus.js";
import AddPostBlock from "../../components/Post/AddPostBlock";
import InfiniteScroll from "react-infinite-scroll-component";
import IsLoading from "./IsLoading";

const cx = classNames.bind(styles);

function Home() {
	const currentTheme = useSelector((state) => state.app.theme);
	const idUser = useSelector((state) => state.user.userId);

	const [postData, setPostData] = useState([]);
	const [postLike, setPostLike] = useState([]);
	const [addBlock, setAddBlock] = useState(false);
	const [addBlockImg, setAddBlockImg] = useState(false);
	const [postPage, setPostPage] = useState(1);
	const [hasMorePost, setHasMorePost] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

		async function fetchData() {
			setPostPage(1);
			const response = await postService.handleGetPostService(idUser, 1);
			if (response.reg) {
				setPostData(response.reg);
				// const likeRes = await postService.handleCheckLikeService(idUser);
				// if (likeRes) {
				// 	setPostLike(likeRes);

				// 	console.log(likeRes.reg);
				// }
			}
			// console.log(response.reg);
		}
		fetchData();
		// window.addEventListener("scroll", (event) => {
		// 	const position = window.pageYOffset;
		// 	console.log(position);
		// });
	}, []);
	const handleOnClick = () => {
		setAddBlockImg(true);
		setAddBlock(true);
	};
	const fetchDataHomePage = async () => {
		// console.log("Here");
		// console.log(isLoading);
		if (isLoading === true) {
			const response = await postService.handleGetPostService(idUser, postPage + 1);
			// console.log(response.reg);

			setPostPage(postPage + 1);
			if (response && response.reg && response.reg.length > 0) {
				setPostData([...postData, ...response.reg]);
			} else {
				setHasMorePost(false);
			}
			
		}
	};
	// console.log(postData);
	return (
		<>
			<div id="home_main" className={cx("main", currentTheme === THEMES.DARK && "dark")}>
				<SlideStory dark={currentTheme === THEMES.DARK ? true : false} />
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
				<div className={cx("main_post_block")}>
					<InfiniteScroll
						dataLength={postData.length}
						next={fetchDataHomePage}
						hasMore={hasMorePost}
						// scrollableTarget="home_main"
						style={{
							width: "100%",
							overflowX: "hidden",
							

							height: "100%",
							display: "flex",
							flexDirection: "column",
						}}
						loader={<IsLoading />}
					>
						{postData.length > 0 &&
							postData.map((post, index) => (
								<Post
									data={post}
									idUser={idUser}
									key={Math.random()}
									dataPagi={postPage}
									index={index}
									setIsLoading={setIsLoading}
									firstLoad={postData.length}
								/>
							))}
					</InfiniteScroll>
				</div>
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

export default Home;
