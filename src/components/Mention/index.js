import { MentionsInput, Mention } from "react-mentions";

import { useState } from "react";
import styles from "./Mention.module.scss";
import classNames from "classnames/bind";
import { useRef } from "react";
import { postService, commentService } from "../../services";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const cx = classNames.bind(styles);

const renderSuggestContainer = (children) => {
	return <div className={cx("item")}>{children}</div>;
};
const renderSuggestion = (entry, search, highlightedDisplay, index, focused) => {
	return (
		<div className={cx("suggest")}>
			<div className={cx("box", focused && "focused")}>
				{/* {entry.img && entry.img} */}
				<div className={cx("tag_avt")}>
					<img src={entry.img} alt="tag_friend" />
				</div>

				<div className={cx("tag_infor")}>
					<span>{entry.display}</span>
					<span>{entry.fullName}</span>
				</div>
			</div>
		</div>
	);
};
const Mentions = ({
	loadComment,
	setLoadComment,
	idPost,
	commentCount,
	setCommentCount,
	setComCount,
}) => {
	const [value, setValue] = useState("");
	const [userComment, setUserComment] = useState("");
	const idUser = useSelector((state) => state.user.userId);
	const [mentionData, setMentionData] = useState([]);
	const ref = useRef();

	// console.log(ref);
	const handleContentPost = (e) => {
		// setValue(e.target.value);
		ref.current.style.height = "40px";
		// console.log(e.target);
		const height = ref.current.scrollHeight;

		if (height > 0) {
			ref.current.style.height = ref.current.scrollHeight + "px";
			console.log(ref.current.style.height);
		}
		const content = e.target.value;
		if (e.shiftKey === true) {
			console.log("Here");
		}
		// const searchValueCurrent = e.target.value;
		console.log(content);
		if (!content.startsWith(" ")) {
			
			setUserComment(content);
		}
	};
	const handleContentKeyDown = async (e) => {
		if (userComment !== "") {
			if (e.keyCode === 13 && e.shiftKey === false) {
				// console.log("OK");
				const res = await postService.handlePushCommentPostService(
					idUser,
					idPost,
					userComment.trim()
				);

				if (res) {
					// console.log(res);
					if (res.errCode === 0) {
						setCommentCount(commentCount + 1);
						setLoadComment(!loadComment);
						setUserComment("");
						ref.current.style.height = "40px";
						ref.current.blur();
						if (typeof setComCount === "function") {
							setComCount(commentCount + 1);
						}
					}
				}
			}
		}
		if (e.keyCode === 50 && e.shiftKey === true) {
			const resFriend = await commentService.handleTagFriendCommentService(idUser);
			if (resFriend && resFriend.reg) {
				// console.log(resFriend.reg);
				let tempArray = [];
				resFriend.reg.map((item, index) => {
					tempArray.push({
						id: item.idUser,
						display: item.userName,
						fullName: `${item.firstName} ${item.lastName}`,
						img: item.avatar,
					});
				});
				setMentionData(tempArray);
			}
		}
	};
	useEffect(() => {
		ref.current.style.height = "40px";

		
	}, []);
	// console.log(mentionData);
	return (
		<>
			<MentionsInput
				// style={defualtStyle}
				value={userComment}
				// onChange={(e) => setValue(e.target.value)}
				className={cx("mention")}
				// forceSuggestionsAboveCursor={true}
				customSuggestionsContainer={renderSuggestContainer}
				inputRef={ref}
				onChange={(e) => handleContentPost(e)}
				onKeyDown={(e) => handleContentKeyDown(e)}
				placeholder="Comment in this post !"
			>
				<Mention
					// style={defaultMentionStyle}
					className={cx("recommend")}
					data={mentionData}
					renderSuggestion={renderSuggestion}
				/>
			</MentionsInput>
		</>
	);
};

export default Mentions;
