import styles from "./Edit.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
const cx = classNames.bind(styles);

function EditBlock({ data, title, api }) {
	const [res, setRes] = useState({});
	const [edit, setEdit] = useState(false);

	const [nextValue, setNextValue] = useState();

	const handleChange = (e) => {
		setNextValue(e.target.value);
	};
	const handleClick = () => {
		if (nextValue === undefined) {
			setEdit(false);
		} else {

			console.log("Call API with"+nextValue);
			setEdit(false);
		}
	};
	const handleCancel = ()=>{
			setEdit(false);
			setNextValue();

	}
	return (
		<div className={cx("conten_infor", { hover: !edit })}>
			<div className={cx("current")}>
				<span>{title}</span>
				{edit === false ? (
					<p>{data}</p>
				) : (
					<input defaultValue={data} onChange={(e) => handleChange(e)} />
				)}
				<div className={cx("edit_button")}>
					{edit === false ? (
						<div className={cx("edit_text")} onClick={() => setEdit(true)}>
							Edit
						</div>
					) : (
						<div className={cx("edit_action")}>
							<div className={cx("save")} onClick={(e) => handleClick()}>
								Save
							</div>
							<div className={cx("cancel")} onClick={handleCancel}>
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
