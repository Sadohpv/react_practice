import styles from "./FriendListLayout.module.scss";
import classNames from "classnames/bind";
import { Link, useParams, NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { THEMES } from "../../../utils/constant";
import { useState } from "react";

const cx = classNames.bind(styles);

function FriendListMenu() {
	const params = useParams();
	const currentTheme = useSelector((state) => state.app.theme);
	const [curTheme, setCurTheme] = useState(currentTheme);

	return (
		<div className={cx("left", currentTheme === THEMES.DARK && THEMES.DARK)}>
			<div className={cx("left_main")}>
				<div className={cx("left_main-head")}>
					<FormattedMessage id="Setting_Menu.title" />
					<div className={cx("line")}></div>
				</div>
				<div className={cx("left_main-body")}>
					<div className={cx("left_content")}>
						<NavLink
							className={(nav) => cx("content", { active: nav.isActive })}
							to={`/friend`}
						>
							<span>
								<FormattedMessage id="Friend_List_Page.invitation" />
							</span>
						</NavLink>
						<NavLink
							className={(nav) => cx("content", { active: nav.isActive })}
							to={`/friend/request`}
						>
							<span>
								<FormattedMessage id="Friend_List_Page.request" />
							</span>
						</NavLink>
						<NavLink
							className={(nav) => cx("content", { active: nav.isActive })}
                            to={`/friend/recommend`}

						>
							<span>
								<FormattedMessage id="Friend_List_Page.recommend" />
							</span>
						</NavLink>
						<div className={cx("line")}></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FriendListMenu;
