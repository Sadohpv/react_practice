import styles from "./Edit.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
const cx = classNames.bind(styles);

function EditBlock({data,title,current_value}) {
	const [res, setRes] = useState({});
	const [edit, setEdit] = useState(false);
	return (
		<div className={cx("conten_infor",{ "hover": !edit })}>
			<div className={cx("current")}>
				<span>{title}</span>
				{edit === false ? (
					<p>{data}</p>
				) : (
					<input value={data} />
				)}
				<div className={cx("edit_button")}>
					{edit === false ? (
						<div className={cx("edit_text")} onClick={() => setEdit(true)}>
							Edit
						</div>
					) : (
						<div className={cx("edit_action")}>
							<div className={cx("save")}>Save</div>
							<div className={cx("cancel")} onClick={() => setEdit(false)}>
								Cancel
							</div>
						</div>
					)}
				</div>
			</div>
		
		</div>
	);
}

export default EditBlock;
