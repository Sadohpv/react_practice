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
import ButtonPost from "./ButtonPost";
import styles from "./Post.module.scss";
import classNames from "classnames/bind";
import { FormattedMessage } from "react-intl";
import Avartar from "../Avatar/Avatar";
import { Fragment, useEffect, useState } from "react";
import { postService } from "../../services";
// import moment from "moment";
import Moment from "react-moment";
import vi from "moment/locale/vi";
import { useSelector } from "react-redux";
import { abbreviateNumber } from "js-abbreviation-number";
import FullPost from "./FullPost.js";
import { useNavigate } from "react-router";
import ActionPost from "./ActionPost";
import TippyCustom from "../Tippy";
const cx = classNames.bind(styles);

function Post({ data, idUser, dataPagi, index, setIsLoading, firstLoad }) {
	// console.log(data);
	const navigate = useNavigate();
	const [modal, setModal] = useState(false);

	const language = useSelector((state) => state.app.language);
	const [liked, setLiked] = useState(data.userLiked);
	const [date, setDate] = useState(data.createdAt);
	const [privatePost, setPrivatePost] = useState(data.privatePost);
	const [comCount, setComCount] = useState(data.commentCount);
	// const [icon,setIcon] = useState({});
	const [likeCount, setLikeCount] = useState(data.likeCount);
	const [currentURL, setCurrentURL] = useState(window.location.pathname);
	const [actionPost, setActionPost] = useState(false);
	const handleToggleLike = async () => {
		if (liked === true) {
			const res = await postService.handleLikedPostService(false, data.idPost, idUser);
			// alert("UnLike")
			setLikeCount(likeCount - 1);
		}
		if (liked === false) {
			const res = await postService.handleLikedPostService(true, data.idPost, idUser);
			// alert("Like")
			setLikeCount(likeCount + 1);
		}
		setLiked(!liked);
	};
	// fecth all like and check one vs one in home
	// console.log(language);
	const handleFullPhoto = () => {
		setModal(true);
		window.history.pushState(null, null, `/post/${data.idPost}`);
		// console.log(currentURL);
	};
	const handleCloseFullPhoto = () => {
		setModal(false);

		window.history.pushState(null, null, currentURL);
	};
	useEffect(() => {
		if (index + 1 == firstLoad) {
			// console.log("Here");

			setIsLoading(true);
		}
	}, []);
	const handleContentPostShow = (comment) => {
		const breakLine = comment.split("\n");

		if (breakLine.length > 1) {
			// console.log(breakLine);

			return (
				<div className={cx("tag")}>
					{breakLine.map((line) => {
						const lineTag = line.split("@t@g");
						return (
							<span>
								{lineTag.map((item, index) => handleNextTag(lineTag, item, index))}
								<br></br>
							</span>
						);
					})}
				</div>
			);
		} else {
			const result = comment.split("@t@g");
			// console.log(result);

			return (
				<div className={cx("post_content")}>
					{result.map((item, index) => handleNextTag(result, item, index))}
				</div>
			);
		}
	};
	const handleNextTag = (result, item, index) => {
		// console.log(result[index]);

		if (item.includes("@")) {
			return (
				<a className={cx("post_tag_link")} href={`/${item.slice(1)}`}>
					{result[++index].slice(2)}
				</a>
			);
		}
		if (item.includes("$*")) {
			return <></>;
		} else {
			return <>{result[index]}</>;
		}
	};

	return (
		<Fragment key={index}>
			<div className={cx("wrapper")}>
				<div className={cx("post_header")}>
					<div className={cx("header_avt")}>
						{/* {data.User && data.User.avatar && <img src={data.User.avatar} />} */}
						<Avartar src={data.User.avatar} />
					</div>
					<div className={cx("header_name")}>
						<a href={`/${data.User.idUser}`} className={cx("name_user-post")}>
							<span>{data.User.userName}</span>
						</a>
						<div className={cx("time")}>
							<span>
								<Moment locale={language} fromNow>
									{date}
								</Moment>
							</span>
							<span className={cx("dot")}>·</span>
							<div className={cx("privatePost")}>
								{privatePost === 0 && <GolobalIcon width="12px" height="12px" />}
								{privatePost === 1 && <LockIcon width="12px" height="12px" />}
							</div>
						</div>
					</div>
					<div className={cx("header_action")}>
						<div className={cx("action_control")}>
							<TippyCustom
								content={<ActionPost id={data.idPost} />}
								offSet={[0, 10]}
								haveClick
								place={"bottom-end"}
								customTheme="action_post"
							>
								<div className={cx("action_icon")}>
									<ThreeDotsIcon width={"24px"} height="24px" />
								</div>
							</TippyCustom>
						</div>
						<div className={cx("action_delete-post")}>
							<div className={cx("action_icon")}>
								<CancelIcon width={"24px"} height="24px" />
							</div>
						</div>
					</div>
				</div>
				<div className={cx("post_body")}>
					<div className={cx("post_body-text")}>
						<span>{handleContentPostShow(data.content)}</span>
					</div>

					{data.imgPost && data.videoPost == 0 && (
						<div className={cx("post_body-img")} onClick={handleFullPhoto}>
							<img src={data.imgPost} />
						</div>
					)}
					{data.imgPost && data.videoPost == 1 && (
						<div className={cx("post_body-img")} onClick={handleFullPhoto}>
							<video
								id={cx("preview")}
								// className={cx("video")}
								// autoPlay
								controls
								disablePictureInPicture={true}
							>
								<source src={data.imgPost} />
							</video>
						</div>
					)}
				</div>
				<div className={cx("post_footer")}>
					<div className={cx("footer_infor")}>
						<div className={cx("infor_reaction")}>
							<span className={cx("text")}>
								{abbreviateNumber(likeCount, 2, { padding: false })}
							</span>
						</div>
						<div className={cx("infor_action")}>
							<div className={cx("comment")}>
								<span className={cx("text")}>
									{abbreviateNumber(comCount, 2, { padding: false })}{" "}
									<FormattedMessage id="Post_Comp.comments" />
								</span>
							</div>
							<div className={cx("shared")}>
								<span className={cx("text")}>
									{abbreviateNumber(data.shareCount, 2, { padding: false })}{" "}
									<FormattedMessage id="Post_Comp.shared" />
								</span>
							</div>
						</div>
					</div>
					<div className={cx("footer_action")}>
						<ButtonPost
							liked={liked}
							icon={
								liked === false ? (
									<UnLikeIcon width="18px" height="18px" />
								) : (
									<LikeIcon width="18px" height="18px" fill="#65c6be" />
								)
							}
							text={<FormattedMessage id="Post_Comp.like" />}
							onClick={handleToggleLike}
							nopad
						/>

						<ButtonPost
							icon={<CommentIcon width="18px" height="18px" />}
							text={<FormattedMessage id="Post_Comp.comment" />}
							// nopad
							onClick={handleFullPhoto}
						/>
						<ButtonPost
							icon={<ShareIcon width="18px" height="18px" />}
							text={<FormattedMessage id="Post_Comp.share" />}
							// nopad
						/>
					</div>
				</div>
			</div>
			{modal && (
				<div className={cx("modal_photo")}>
					<div className={cx("post")}>
						<FullPost
							data={data}
							handleClose={handleCloseFullPhoto}
							setComCount={setComCount}
							short={!!data.imgPost}
						/>
					</div>
				</div>
			)}
		</Fragment>
	);
}

export default Post;
