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
import styles from "./FullPost.module.scss";
import classNames from "classnames/bind";
import { FormattedMessage } from "react-intl";
import Avartar from "../Avatar/Avatar";
import { useEffect, useState } from "react";
import { postService } from "../../services";
// import moment from "moment";
import Moment from "react-moment";
import vi from "moment/locale/vi";
import { useSelector } from "react-redux";
import { abbreviateNumber } from "js-abbreviation-number";
import CommentCard from "../Comment";
const cx = classNames.bind(styles);
function FullPost({ handleClose, data, noBack = false }) {
	const idUser = useSelector((state) => state.user.userId);
	// console.log(data);
	// const [liked, setLiked] = useState(data.userLiked);
	const [liked, setLiked] = useState(true);
	const language = useSelector((state) => state.app.language);

	const [date, setDate] = useState(data.createdAt);
	const [privatePost, setPrivatePost] = useState(data.privatePost);
	const [commentCount, setCommentCount] = useState(data.commentCount);
	const [likeCount, setLikeCount] = useState(data.likeCount);
	const [comment, setComment] = useState([]);
	const [userComment, setUserComment] = useState("");
	const [loadComment, setLoadComment] = useState(true);
	const handleCloseFullPost = () => {
		if (typeof handleClose === "function") {
			// console.log("Here");
			handleClose();
		}
	};
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
	const handleContentPost = (e) => {
		e.target.style.height = "40px";
		const height = e.target.scrollHeight;
		if (height > 0) {
			e.target.style.height = e.target.scrollHeight + "px";
		}
		setUserComment(e.target.value);
	};
	const handleContentKeyDown = async (e) => {
		if(userComment !== ""){
			if (e.keyCode === 13 && e.shiftKey === false) {
		
				console.log("OK");
				const res = await postService.handlePushCommentPostService(
					idUser,
					data.idPost,
					userComment.trim()
				);
	
				if (res) {
					// console.log(res);
					if (res.errCode === 0) {
						setCommentCount(commentCount+1);
						setLoadComment(!loadComment);
						setUserComment("")
					}
				}
			}
		}else{
			console.log("No")
		}
		
	};

	useEffect(() => {
		async function fetchData() {
			const commentPost = await postService.handleGetCommentPost(data.idPost);
			// console.log(commentPost);
			if (commentPost && commentPost.reg) {
				setComment(commentPost.reg);
			}
		}

		fetchData();
	}, [loadComment]);
	return (
		<div className={cx("wrapper")}>
			<div className={cx("left")}>
				{noBack === false && (
					<div className={cx("cancel_button")} onClick={handleCloseFullPost}>
						<CancelIcon width="20px" height="20px" />
					</div>
				)}

				<div className={cx("img_post")}>
					<img src={data.imgPost} alt="full_post" />
				</div>
			</div>
			<div className={cx("right")}>
				<div className={cx("post_head")}>
					<div className={cx("post_header")}>
						<div className={cx("header_avt")}>
							{/* {data.User && data.User.avatar && <img src={data.User.avatar} />} */}
							<Avartar src={data.User.avatar} height={"38px"} width={"38px"} />
						</div>
						<div className={cx("header_name")}>
							<div className={cx("name_user-post")}>
								<span>{data.User.userName}</span>
							</div>
							<div className={cx("time")}>
								<span>
									<Moment locale={language} fromNow>
										{date}
									</Moment>
								</span>
								<span className={cx("dot")}>·</span>
								<div className={cx("privatePost")}>
									{privatePost === 0 && (
										<GolobalIcon width="10px" height="10px" />
									)}
									{privatePost === 1 && <LockIcon width="10px" height="10px" />}
								</div>
							</div>
						</div>
						<div className={cx("header_action")}>
							<div className={cx("action_control")}>
								<div className={cx("action_icon")}>
									<ThreeDotsIcon />
								</div>
							</div>
						</div>
					</div>
					<div className={cx("post_body")}>
						<div className={cx("post_body-text")}>
							<span>{data.content}</span>
						</div>
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
										{abbreviateNumber(commentCount, 2, { padding: false })}{" "}
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
							/>

							<ButtonPost
								icon={<CommentIcon width="18px" height="18px" />}
								text={<FormattedMessage id="Post_Comp.comment" />}
							/>
							<ButtonPost
								icon={<ShareIcon width="18px" height="18px" />}
								text={<FormattedMessage id="Post_Comp.share" />}
							/>
						</div>
					</div>
				</div>

				<div className={cx("comments")}>
					{comment.length > 0 &&
						comment.map((com, index) => (
							<CommentCard key={Math.random()} com={com} index={index} />
						))}

					{/* <CommentCard /> */}
				</div>

				<div className={cx("add_comment")}>
					<Avartar width={"40px"} height={"40px"} />
					<div className={cx("input_comment")}>
						<textarea
							type="text"
							placeholder="Comment in this post !"
							value={userComment}
							onChange={(e) => handleContentPost(e)}
							onKeyDown={(e) => handleContentKeyDown(e)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FullPost;
