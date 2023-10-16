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

import styles from "./CommentCard.module.scss";
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
const cx = classNames.bind(styles);
function CommentCard({ com, index }) {
	const language = useSelector((state) => state.app.language);
	console.log(com);
	return (
		<div className={cx("wrapper")}>
			<div className={cx("infor")}>
				<div className={cx("avatar")}>
					<Avartar src={com.User.avatar} width={"40px"} height={"40px"} />
				</div>
				<div className={cx("body")}>
					<div className={cx("name")}>{com.User.userName}</div>
					<div className={cx("content")}>{com.content}</div>
					{com.likeComment > 0 && (
						<div className={cx("likeCom")}>
							<LikeIcon width="12px" height="12px" />
							<span>{com.likeComment}</span>
						</div>
					)}
				</div>
			</div>
			<div className={cx("action")}>
				<div className={cx("answer")}>Like</div>
				<div className={cx("like")}>Answer</div>
				<div className={cx("day")}>
					<Moment locale={language} fromNow>
						{com.createdAt}
					</Moment>
				</div>
			</div>
		</div>
	);
}

export default CommentCard;
