import { useEffect, useState } from "react";
import { userService } from "../../../services";
import styles from "./Edit.module.scss";
import classNames from "classnames/bind";
import { Link, useParams } from "react-router-dom";

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
				<div className={cx("left")}>
					<div className={cx("left_main")}>
						<div className={cx("left_main-head")}>
							Settings
							<div className={cx("line")}></div>
						</div>
						<div className={cx("left_main-body")}>
							<div className={cx("left_content")}>
								<Link className={cx("content")} to={`/${params.idUser}/edit`}>
									<span>Profile</span>
								</Link>
								<Link className={cx("content")} to={`/${params.idUser}/protected`}>
									<span>Private & Public</span>
								</Link>
								<Link className={cx("content")} to={`/${params.idUser}/security`}>
									<span>Security</span>
								</Link>
								<div className={cx("line")}></div>
							</div>
						</div>
					</div>
				</div>
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
									{(res && res.email && (
										<p>{res.email}</p>
								)) || <p>Boizbucky@gmail.com</p>}
								
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
									<p>{res.firstName}</p>
								</div>
								
								<div className={cx("line")}></div>
							</div>
							<div className={cx("content")}>
								<div className={cx("conten_infor")}>
									<span>Last Name</span>
									<p>{res.lastName}</p>
								</div>
								<div className={cx("line")}></div>
							</div>
							<div className={cx("content")}>
								<div className={cx("conten_infor")}>
									<span>Address</span>
									<p>{res.address}</p>
								</div>
								<div className={cx("line")}></div>
							</div>
							<div className={cx("content")}>
								<div className={cx("conten_infor")}>
									<span>Phone Number</span>
									<p>{res.phoneNumber}</p>
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
