// import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { userService } from "../../../services";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styles from "./Profile.module.scss";
import classNames from "classnames/bind";
import { HomeIcon, LocationIcon} from "../../../asset/icons";
import { FormattedMessage } from "react-intl";
// import { THEMES } from "../../../utils/constant";
import { useSelector } from "react-redux";
// import FriendBlock from "../../../components/Layout/ProfileLayout/FriendBlock";
const cx = classNames.bind(styles);

function ProfilePage({ children }) {
	// const userData = useSelector((state) => state.user.data_user);
	const idUser = useSelector((state) => state.user.userId);

	// const params = useParams();
	const [res, setRes] = useState({});
	const [friend, setFriend] = useState({});
    const idFriend = useParams();
	
	useEffect(() => {
		async function fetchData() {
			const response = await userService.handleGetDataUserService(idFriend.idUser);
			setRes(response);
			// const resFriend = await userService.handleGetAllFriendService(idUser);
			// if (resFriend && resFriend.EC === 0) {
			// 	if(resFriend.reg.length > 5){

			// 		setFriend(resFriend.reg.slice(0,4));
			// 	}
			// 	else{
			// 		// console.log(res)
			// 		setFriend(resFriend.reg);

			// 	}
			// }
		}
		fetchData();
	}, []);
	
	return (
	
			<div className={cx("body")}>
				<div className={cx("container")}>
					<div className={cx("right_block")}>
						<div className={cx("right_title")}>
							<FormattedMessage id="Profile_Page.introduction" />
						</div>
						<div className={cx("right_content")}>
							<div className={cx("content_from")}>
								<HomeIcon />
								<FormattedMessage id="Profile_Page.lives-in" />
								<span>
									{res !== {} && res.reg && res.reg.avatar && res.reg.address}
								</span>
							</div>
							<div className={cx("content_from")}>
								<LocationIcon />
								<FormattedMessage id="Profile_Page.from" />
								<span>
									{res !== {} && res.reg && res.reg.avatar && res.reg.address}
								</span>
							</div>

							<Link className={cx("content_action")} to={`/${idUser}/detail`}>
								<FormattedMessage id="Profile_Page.edit-details" />
							</Link>
						</div>

						<div className={cx("right_action")}>
							<div className={cx("content_action")}>
								<FormattedMessage id="Profile_Page.add-hobbies" />
							</div>
						</div>
						<div className={cx("right_action")}>
							<div className={cx("featured")}></div>
							<div className={cx("content_action")}>
								<FormattedMessage id="Profile_Page.add-featured" />
							</div>
						</div>
					</div>

					<div className={cx("middle_block")}>
						<div className={cx("add_new_content")}>
							<div className={cx("input_content")}></div>
							<div className={cx("input_content_file")}></div>
						</div>
						<div className={cx("view_mode")}>
							<div className={cx("input_content")}></div>
							<div className={cx("input_content_file")}></div>
						</div>
					</div>
				</div>
			</div>
		// </div>
	);
}

export default ProfilePage;
