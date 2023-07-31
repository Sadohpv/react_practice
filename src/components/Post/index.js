import { CancelIcon, CommentIcon, ThreeDotsIcon } from "../../asset/icons";
import styles from "./Post.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Post() {
	return (
		<div className={cx("wrapper")}>
			<div className={cx("post_header")}>
				<div className={cx("header_avt")}></div>
				<div className={cx("header_name")}>
					<div className={cx("name_user-post")}>
						<span>KUSAKARI</span>
					</div>
					<div className={cx("time")}>
						<span>2 hours ago</span>
					</div>
				</div>
				<div className={cx("header_action")}>
					<div className={cx("action_control")}>
						<div className={cx("action_icon")}>
							<ThreeDotsIcon />
						</div>
					</div>
					<div className={cx("action_delete-post")}>
						<div className={cx("action_icon")}>
							<CancelIcon />
						</div>
					</div>
				</div>
			</div>
			<div className={cx("post_body")}></div>
			<div className={cx("post_footer")}>
				<div className={cx("footer_infor")}>
					<div className={cx("infor_reaction")}>
						<span className={cx("text")}>10K likes</span>
					</div>
					<div className={cx("infor_action")}>
						<div className={cx("comment")}>
							<span className={cx("text")}>2110 comments</span>
						</div>
						<div className={cx("shared")}>
							<span className={cx("text")}>2000 shared</span>
						</div>
					</div>
				</div>
				<div className={cx("footer_action")}></div>
			</div>
		</div>
	);
}

export default Post;
