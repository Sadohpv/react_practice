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
function CommentCard({data}) {
	return (
		<div className={cx("wrapper")}>
			<div className={cx("avatar")}>
				<Avartar width={"40px"} height={"40px"} />
			</div>
			<div className={cx("body")}>
				<div className={cx("name")}>
                    Rick Sanchez
                </div>
				<div className={cx("content")}>
					Listen, Morty, I hate to break it to you, but what people call ‘love’ is just a
					chemical reaction that compels animals to breed.
				</div>
			</div>
		</div>
	);
}

export default CommentCard;
