import styles from "./ActionPost.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { toast } from "react-toastify";
import postService from "../../services/postService";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

function ActionPost({ id }) {
	const idUser = useSelector((state) => state.user.userId);
	const [link, setLink] = useState(`http://localhost:3000/post/${id}`);
	const [copNum, setCopNum] = useState(0);
	const [saveNum, setSaveNum] = useState(0);

	const handleCopy = () => {
		if (copNum < 1) {
			navigator.clipboard.writeText(link);
			toast.success(<FormattedMessage id="Post_Comp.action_copy_success" />, {
				position: toast.POSITION.BOTTOM_RIGHT,
				autoClose: 1000,
				theme: "dark",
			});
			setCopNum(copNum + 1);
		}
	};
	useEffect(() => {
		if (copNum == 1) {
			setTimeout(() => {
				setCopNum(0);
			}, 3000);
		}
		if (saveNum == 1) {
			setTimeout(() => {
				setSaveNum(0);
			}, 3000);
		}
	}, [copNum,saveNum]);

	const handleSavePost = async () => {
		setSaveNum(saveNum+1);
		const res = await postService.handleSavePostService(idUser, id);

		if (res.errCode === 0) {
			toast.success(<FormattedMessage id="Post_Comp.action_save_post_success" />, {
				position: toast.POSITION.BOTTOM_RIGHT,
				autoClose: 1000,
				theme: "dark",
			});
		} else if (res.errCode === 3) {
			toast.warning(<FormattedMessage id="Post_Comp.action_save_post_has_been" />, {
				position: toast.POSITION.BOTTOM_RIGHT,
				autoClose: 1000,
				theme: "dark",
			});
		} else {
			toast.error(<FormattedMessage id="Post_Comp.action_save_post_fail" />, {
				position: toast.POSITION.BOTTOM_RIGHT,
				autoClose: 1000,
				theme: "dark",
			});
		}
	};
	return (
		<div className={cx("wrapper")}>
			<div className={cx("action_box", saveNum >= 1 && "disable")} onClick={handleSavePost}>
				<div className={cx("title")}>
					<span>
						<FormattedMessage id="Post_Comp.action_save" />
					</span>
				</div>
			</div>
			<div className={cx("action_box", copNum >= 1 && "disable")} onClick={handleCopy}>
				<div className={cx("title")}>
					<span>
						<FormattedMessage id="Post_Comp.action_copy_link" />
					</span>
				</div>
			</div>
			<div className={cx("action_box")}>
				<div className={cx("title")}>
					<span>Em nói đừng buồn để trả lời anh</span>
				</div>
			</div>
		</div>
	);
}

export default ActionPost;
