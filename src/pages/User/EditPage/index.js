import { useEffect, useState } from "react";
import { userService } from "../../../services";
import styles from "./Edit.module.scss";
import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import EditBlock from "./EditBlock";

const cx = classNames.bind(styles);

function EditPage() {
	const [res, setRes] = useState({});
	useEffect(() => {
		async function fetchData() {
			const response = await userService.handleGetDataUserService(params.idUser);
			setRes(response.reg);
		}
		fetchData();
	}, []);

	const params = useParams();
	return (
		<div className={cx("container")}>
			<div className={cx("edit")}>
				<div className={cx("right")}>
					<div className={cx("right_main-head")}>
						Profile settings
						<div className={cx("line")}></div>
					</div>
					<div className={cx("right_main-body")}>
						<div className={cx("right_content")}>
							<div className={cx("content")}>
								<EditBlock data={"BoizBucky@gmail.com"} title="Email"/>
								<div className={cx("line")}></div>
							</div>
							<div className={cx("content")}>
								<EditBlock data={"***********"} title="Password" />
								<div className={cx("line")}></div>
							</div>
							<div className={cx("content")}>
								<EditBlock data={"Katahashi"} title="First Name" />

								<div className={cx("line")}></div>
							</div>
							<div className={cx("content")}>
								<EditBlock data={"Kusakari"} title="Last Name" />

								<div className={cx("line")}></div>
							</div>
							<div className={cx("content")}>
								<EditBlock data={"Ha Noi 1"} title="Address" />
								<div className={cx("line")}></div>
							</div>
							<div className={cx("content")}>
								<EditBlock data={"0912345678"} title="Phone Number" />
								<div className={cx("line")}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EditPage;
