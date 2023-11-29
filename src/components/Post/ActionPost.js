import styles from "./ActionPost.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { toast } from "react-toastify";

const cx = classNames.bind(styles);


function ActionPost({id}) {
	console.log(id);
	const [link,setLink]=useState(`http://localhost:3000/post/${id}`);
	const [copNum,setCopNum] = useState(0)
	const handleCopy = ()=>{
		if(copNum < 1){
			navigator.clipboard.writeText(link);
			toast.success(<FormattedMessage id="Post_Comp.action_copy_success" />, {
				position: toast.POSITION.BOTTOM_RIGHT,
				autoClose: 1000,
				theme: "dark",
			});
			setCopNum(copNum+1);
		}
		
	}
	useEffect(()=>{
		if(copNum ==1){

			setTimeout(()=>{
				setCopNum(0)
			}, 3000);
			
		}
	},[copNum])
	return (
		<div className={cx("wrapper")}>
			<div className={cx("action_box")}>
				<div className={cx("title")}>
					<span>
						<FormattedMessage id="Post_Comp.action_save" />
					</span>
				</div>
			</div>
			<div className={cx("action_box",copNum >= 1 && "disable")} onClick={handleCopy} >
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
