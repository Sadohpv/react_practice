import styles from "./UserSettingPageLayout.module.scss";
import classNames from "classnames/bind";
import { Link, useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const cx = classNames.bind(styles);

function SettingMenu() {
	const params = useParams();

	return (
		<div className={cx("left")}>
			<div className={cx("left_main")}>
				<div className={cx("left_main-head")}>
					<FormattedMessage id="Setting_Menu.title" />
					<div className={cx("line")}></div>
				</div>
				<div className={cx("left_main-body")}>
					<div className={cx("left_content")}>
						<Link className={cx("content")} to={`/${params.idUser}/edit`}>
							<span>

								<FormattedMessage id="Setting_Menu.profile" />
							</span>
						</Link>
						<Link className={cx("content")} to={`/${params.idUser}/configure`}>
							<span>
							
								<FormattedMessage id="Setting_Menu.protected" />
							</span>
						</Link>
						<Link className={cx("content")} to={`/${params.idUser}/security`}>
							<span>
								
								<FormattedMessage id="Setting_Menu.security" />
							</span>
						</Link>
						<div className={cx("line")}></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SettingMenu;
