import styles from "./Edit.module.scss";
import classNames from "classnames/bind";
import { Link, useParams } from "react-router-dom";

const cx = classNames.bind(styles);

function EditPage() {

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
									<p> Boizbucky@gmail.com</p>
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
									<p> Kusakari </p>
								</div>
								
								<div className={cx("line")}></div>
							</div>
							<div className={cx("content")}>
								<div className={cx("conten_infor")}>
									<span>Last Name</span>
									<p> Katahashi </p>
								</div>
								<div className={cx("line")}></div>
							</div>
							<div className={cx("content")}>
								<div className={cx("conten_infor")}>
									<span>Address</span>
									<p>Ha Noi City </p>
								</div>
								<div className={cx("line")}></div>
							</div>
							<div className={cx("content")}>
								<div className={cx("conten_infor")}>
									<span>Phone Number</span>
									<p>21102000-03032001 </p>
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
