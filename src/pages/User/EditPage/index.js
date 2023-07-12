import { useEffect, useState } from "react";
import { userService } from "../../../services";
import styles from "./Edit.module.scss";
import classNames from "classnames/bind";
import {  useParams } from "react-router-dom";

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
								<div className={cx("conten_infor")}>
									<span>Email</span>
									{(res && res.email && <p>{res.email}</p>) || (
										<p>Boizbucky@gmail.com</p>
									)}
								</div>

								<div className={cx("line")}></div>
							</div>
							<div className={cx("content")}>
								<div className={cx("conten_infor")}>
									<span>Password</span>
									<p> ************** </p>
								</div>
								<div className={cx("line")}></div>
							</div>
							<div className={cx("content")}>
								<div className={cx("conten_infor")}>
									<span>First Name</span>
									{(res && res.firstName && <p>{res.firstName}</p>) || <p> </p>}
								</div>

								<div className={cx("line")}></div>
							</div>
							<div className={cx("content")}>
								<div className={cx("conten_infor")}>
									<span>Last Name</span>
									{(res && res.lastName && <p>{res.lastName}</p>) || <p> </p>}
								</div>
								<div className={cx("line")}></div>
							</div>
							<div className={cx("content")}>
								<div className={cx("conten_infor")}>
									<span>Address</span>
									{(res && res.address && <p>{res.address}</p>) || <p> </p>}
								</div>
								<div className={cx("line")}></div>
							</div>
							<div className={cx("content")}>
								<div className={cx("conten_infor")}>
									<span>Phone Number</span>
									{(res && res.phoneNumber && <p>{res.phoneNumber}</p>) || <p> </p>}
								</div>
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
