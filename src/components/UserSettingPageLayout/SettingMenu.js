import styles from "./UserSettingPageLayout.module.scss";
import classNames from "classnames/bind";
import { Link, useParams } from "react-router-dom";

const cx = classNames.bind(styles);

function SettingMenu() {


	const params = useParams();


	return (
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
	);
}

export default SettingMenu;
