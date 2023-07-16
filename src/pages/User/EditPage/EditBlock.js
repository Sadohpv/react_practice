import styles from "./Edit.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";
import { userService } from "../../../services";

const cx = classNames.bind(styles);

function EditBlock({ data, title, api,changeData }) {
	const [res, setRes] = useState({});
	const [edit, setEdit] = useState(false);

	const [nextValue, setNextValue] = useState();



	const handleChange = (e) => {
		setNextValue(e.target.value);
	};
	const handleClick = async () => {
		if (nextValue === undefined) {
			setEdit(false);
		} else {
			const tokenData = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJlcnJDb2RlIjowLCJlcnJNZXNzYWdlIjoiT0shIE5vdCBmb3VuZCBlcnJvciIsInVzZXIiOnsiaWRVc2VyIjo0LCJlbWFpbCI6IkVtYWlsNEBnbWFpbC5jb20iLCJpc0FkbWluIjowfX0sImlhdCI6MTY4OTQ5NzIwMX0.LC42Slp5CngGBSZqrGQsCQ5xzlDZEwQQocqxHOQJjgA";
			const response = await userService.handleEditUserService(api,tokenData,nextValue);
			console.log(response);
			changeData(nextValue);
			setEdit(false);
		}
	};
	const handleCancel = ()=>{
			setEdit(false);
			setNextValue();

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
