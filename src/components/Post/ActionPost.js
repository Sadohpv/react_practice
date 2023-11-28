import styles from "./ActionPost.module.scss";
import classNames from "classnames/bind";
import { FormattedMessage } from "react-intl";

const cx = classNames.bind(styles);

function ActionPost() {
	return (
		<div className={cx("wrapper")}>
			<div className={cx("action_box")}>
				<div className={cx("title")}>
					<span>
						<FormattedMessage id="Post_Comp.action_save" />
					</span>
				</div>
			</div>
			<div className={cx("action_box")}>
				<div className={cx("title")}>
					<span>
						<FormattedMessage id="Post_Comp.action_copy_link" />
					</span>
				</div>
			</div>
			<div className={cx("action_box")}>
				<div className={cx("title")}><span>
					Em nói đừng buồn để trả lời anh
					</span></div>
			</div>
		</div>
	);
}

export default ActionPost;
