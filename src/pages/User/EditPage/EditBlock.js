import styles from "./Edit.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import { userService } from "../../../services";
import { emitter } from "../../../utils/emitter";
import { useSelector } from "react-redux";

import { FormattedMessage } from "react-intl";

const cx = classNames.bind(styles);

function EditBlock({ data, title, api, changeData, setMessage, disable }) {
	const [res, setRes] = useState({});
	const [edit, setEdit] = useState(false);

	const [nextValue, setNextValue] = useState();
	const userId = useSelector((state) => state.user.userId);

	const handleChange = (e) => {
		setNextValue(e.target.value);
	};
	const handleClick = async () => {
		if (nextValue === undefined) {
			setEdit(false);
		} else {
			console.log(userId);
			const response = await userService.handleEditUserService(api, userId, nextValue);
			const message = response.reg.message;
			setMessage(message);
			changeData(nextValue);
			setEdit(false);
		}
	};
	const handleCancel = () => {
		setEdit(false);
		setNextValue();
		emitter.emit("EVENT_EMIT_TEST", { id: "Your ID" });
	};

	return (
		<div className={cx("conten_infor", { hover: !edit })}>
			<div className={cx("current")}>
				<span>{title}</span>
				{edit === false ? (
					<p>{data}</p>
				) : (
					<input defaultValue={data} onChange={(e) => handleChange(e)} />
				)}
				{!disable && (
					<div className={cx("edit_button")}>
						{edit === false ? (
							<div className={cx("edit_text")} onClick={() => setEdit(true)}>
								<FormattedMessage id="Edit_Page.edit-button" />
							</div>
						) : (
							<div className={cx("edit_action")}>
								<div className={cx("save")} onClick={(e) => handleClick()}>
									<FormattedMessage id="Edit_Page.save-button" />
								</div>
								<div className={cx("cancel")} onClick={handleCancel}>
									<FormattedMessage id="Edit_Page.cancel-button" />
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}

export default EditBlock;
