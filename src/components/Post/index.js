import { CancelIcon, CommentIcon, ShareIcon, ThreeDotsIcon, UnLikeIcon } from "../../asset/icons";
import ButtonPost from "./ButtonPost";
import styles from "./Post.module.scss";
import classNames from "classnames/bind";
import { FormattedMessage } from "react-intl";

const cx = classNames.bind(styles);

function Post({data}) {
	// console.log(data);
	return (
		<div className={cx("wrapper")} >
			<div className={cx("post_header")}>
				<div className={cx("header_avt")}></div>
				<div className={cx("header_name")}>
					<div className={cx("name_user-post")}>
						<span>{data.User.userName}</span>
					</div>
					<div className={cx("time")}>
						<span>{data.createdAt}</span>
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
			<div className={cx("post_body")}>
				<div className={cx("post_body-text")}>
					<span>
						{data.content}
					</span>
				</div>
				{
					data.imgPost &&

				<div className={cx("post_body-img")}>
					<img src={data.imgPost}/>
				</div>
				}

			</div>
			<div className={cx("post_footer")}>
				<div className={cx("footer_infor")}>
					<div className={cx("infor_reaction")}>
						<span className={cx("text")}>{data.likeCount}</span>
					</div>
					<div className={cx("infor_action")}>
						<div className={cx("comment")}>
							<span className={cx("text")}>
								2110 <FormattedMessage id="Post_Comp.comments" />
							</span>
						</div>
						<div className={cx("shared")}>
							<span className={cx("text")}>
								{data.shareCount} <FormattedMessage id="Post_Comp.shared" />
							</span>
						</div>
					</div>
				</div>
				<div className={cx("footer_action")}>
					<ButtonPost
						icon={<UnLikeIcon width="20px" height="20px" />}
						text={<FormattedMessage id="Post_Comp.like" />}
					/>
					<ButtonPost
						icon={<CommentIcon width="20px" height="20px" />}
						text={<FormattedMessage id="Post_Comp.comment" />}
					/>
					<ButtonPost
						icon={<ShareIcon width="20px" height="20px" />}
						text={<FormattedMessage id="Post_Comp.share" />}
					/>
				</div>
			</div>
		</div>
	);
}

export default Post;
