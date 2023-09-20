// import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { userService } from "../../../services";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styles from "./Profile.module.scss";
import classNames from "classnames/bind";
import { EditInfor, HomeIcon, LocationIcon, PlusIcon } from "../../../asset/icons";
import { FormattedMessage } from "react-intl";
import { THEMES } from "../../../utils/constant";
import { useSelector } from "react-redux";
import FriendBlock from "./FriendBlock";
const cx = classNames.bind(styles);

function ProfilePage({ children }) {
	// const userData = useSelector((state) => state.user.data_user);
	const idUser = useSelector((state) => state.user.userId);

	// const params = useParams();
	const [res, setRes] = useState({});
	const [friend, setFriend] = useState({});
	useEffect(() => {
		async function fetchData() {
			const response = await userService.handleGetDataUserService(idUser);
			setRes(response);
			const resFriend = await userService.handleGetAllFriendService(idUser);
			if (resFriend && resFriend.EC === 0) {
				if(resFriend.reg.length > 5){

					setFriend(resFriend.reg.slice(0,4));
				}
				else{
					// console.log(res)
					setFriend(resFriend.reg);

				}
			}
		}
		fetchData();
	}, []);
	const currentTheme = useSelector((state) => state.app.theme);
	// console.log(friend);
	return (
		<div className={cx("all", currentTheme === THEMES.DARK && THEMES.DARK)}>
			<div className={cx("banner")}>
				<div className={cx("cover")}>
					<div className={cx("cover_img")}>
						<img src="https://wallpaperaccess.com/full/4495015.jpg" alt="Cover" />
					</div>
				</div>
				<div className={cx("profile_header")}>
					<div className={cx("profile_cover")}>
						<div className={cx("profile_image")}>
							{(res !== {} && res.reg && res.reg.avatar && (
								<img src={res.reg.avatar} alt="Image" />
							)) || (
								<img
									src="https://wallpaperaccess.com/full/4495015.jpg"
									alt="Avatar_User"
								/>
							)}
						</div>
						<div className={cx("profile_details")}>
							<div className={cx("profile_name")}>
								{(res !== {} && res.reg && res.reg.userName && (
									<p>{res.reg.userName}</p>
								)) || <p>Trần Minh Nhật Hoàng</p>}
							</div>
							<div className={cx("profile_friend")}>
								<p className={cx("profile_friend-num")}>{friend.length} friends</p>
								<div className={cx("profile_friend-cover")}>
									{friend.length > 0 && 
										friend.slice(0, 2).map((bro,index) => (
											
											<FriendBlock key={Math.random()} data={bro} index={index} />
										))}
										

									{/* <div className={cx("friend_avatar")}>
										<img
											src="https://img.thuthuatphanmem.vn/uploads/2018/10/20/galaxy-desktop-wallpaper_104250290.jpg"
											alt="avatar_friend"
										/>
									</div> */}
								</div>
							</div>
						</div>
						<div className={cx("profile_action")}>
							<div className={cx("action", "add")}>
								<div className={cx("action_icon")}>
									<PlusIcon />
								</div>
								<div className={cx("action_title")}>
									<FormattedMessage id="Profile_Page.add-story" />
								</div>
							</div>
							<div className={cx("action")}>
								<div className={cx("action_icon")}>
									<EditInfor />
								</div>
								<div className={cx("action_title")}>
									<FormattedMessage id="Profile_Page.edit-profile-pic" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={cx("content_bar")}>
					<div className={cx("bar_cover")}>
						<div className={cx("bar_item", "bar_item-active")}>
							<FormattedMessage id="Profile_Page.about" />
						</div>
						<div className={cx("bar_item")}>
							<FormattedMessage id="Profile_Page.post" />
						</div>
						<div className={cx("bar_item")}>
							<FormattedMessage id="Profile_Page.friends" />
						</div>
						<div className={cx("bar_item")}>
							<FormattedMessage id="Profile_Page.photos" />
						</div>
					</div>
				</div>
			</div>
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
		</div>
	);
}

export default ProfilePage;
