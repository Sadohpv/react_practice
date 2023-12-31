import styles from "./ProfileLayout.module.scss";
import classNames from "classnames/bind";
import NavbarCustom from "../../Tools/Navbar/Navbar";
import { useEffect, useState } from "react";
import { friendService, userService } from "../../../services";

import { CancelIcon, EditInfor, PlusIcon } from "../../../asset/icons";
import { FormattedMessage } from "react-intl";
import { THEMES } from "../../../utils/constant";
import { useSelector } from "react-redux";
import FriendBlock from "./FriendBlock";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { THEMES } from "../../../utils/constant";
// const currentTheme = useSelector((state) => state.app.theme);

const cx = classNames.bind(styles);

function ProfileLayout({ children }) {
	const idUser = useSelector((state) => state.user.userId);
	const navigate = useNavigate();
	// const params = useParams();
	const [res, setRes] = useState({});
	const [friend, setFriend] = useState({});
	const [numFriend, setNumFriend] = useState(0);
	const [isFriend, setIsFriend] = useState(0);
	const idFriend = useParams();

	useEffect(() => {
		async function fetchData() {
			const response = await userService.handleGetDataUserService(idFriend.idUser);
			setRes(response);

			if (response.status !== 400) {
				const resFriend = await userService.handleGetAllFriendService(idFriend.idUser);

				if (resFriend && resFriend.EC === 0) {
					setNumFriend(resFriend.reg.length);

					if (resFriend.reg.length > 5) {
						setFriend(resFriend.reg.slice(0, 4));
					} else {
						// console.log(res)
						setFriend(resFriend.reg);
					}
				}
			} else {
				console.log("Here");
				navigate("/404");
			}
			if (idUser !== +idFriend.idUser) {
				const isFriend = await friendService.handleIsFriendService(idFriend.idUser, idUser);
				if (isFriend) {
					if (isFriend.reg && isFriend.reg.status) {
						setIsFriend(isFriend.reg.status);
					} else {
						setIsFriend(null);
					}
					// console.log(isFriend.reg);
				}
			}
		}
		fetchData();
	}, [idFriend.idUser]);
	// console.log(isFriend);
	const currentTheme = useSelector((state) => state.app.theme);
	const handleUnfriend = async () => {
		// console.log("Unfriend");
		const res = await friendService.handleUnfriendService(idFriend.idUser, idUser);
		if (res) {
			// console.log("Unfriend Success");
			// console.log(res);
			toast.success(<FormattedMessage id="Friend_List_Page.unfriend_message" />, {
				position: toast.POSITION.TOP_RIGHT,
			});
			setIsFriend(null);
		}
	};
	const handleAddFriend = async () => {
		const res = await friendService.handleAddFriendService(idUser, idFriend.idUser);
		if (res) {
			toast.success(<FormattedMessage id="Friend_List_Page.add_friend_message" />, {
				position: toast.POSITION.TOP_RIGHT,
			});
			// setButtonAddFriend(false);
			setIsFriend(2);
		}
	};
	const handleCancelAddFriend = async () => {
		const res = await friendService.handleCancelAddFriendService(idUser, idFriend.idUser);
		if (res) {
			toast.success(<FormattedMessage id="Friend_List_Page.cancel_add_friend_message" />, {
				position: toast.POSITION.TOP_RIGHT,
			});
			setIsFriend(null);
		}
	};
	return (
		<div className={cx("wrapper")}>
			<NavbarCustom />

			<div className={cx("container")}>
				<div className={cx("content")}>
					<div className={cx("all", currentTheme === THEMES.DARK && THEMES.DARK)}>
						<div className={cx("banner")}>
							<div className={cx("cover")}>
								<div className={cx("cover_img")}>
									<img
										src="https://wallpaperaccess.com/full/4495015.jpg"
										alt="Cover"
									/>
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
											<p className={cx("profile_friend-num")}>
												{numFriend} friends
											</p>
											<div className={cx("profile_friend-cover")}>
												{friend.length > 0 &&
													friend.map((bro, index) => (
														<FriendBlock
															key={Math.random()}
															data={bro}
															index={index}
															idFriend={idFriend.idUser}
															noPseudo={numFriend < 5 && true}
														/>
													))}
											</div>
										</div>
									</div>
									<div className={cx("profile_action")}>
										{idUser === +idFriend.idUser && (
											<>
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
											</>
										)}
										{idUser !== +idFriend.idUser && isFriend === 1 && (
											<div className={cx("action")} onClick={handleUnfriend}>
												<div className={cx("action_icon")}>
													<CancelIcon />
												</div>
												<div className={cx("action_title")}>
													<FormattedMessage id="Friend_Page.unfriend" />
												</div>
											</div>
										)}
										{idUser !== +idFriend.idUser && isFriend === 2 && (
											<div
												className={cx("action")}
												onClick={handleCancelAddFriend}
											>
												<div className={cx("action_icon")}>
													<CancelIcon />
												</div>
												<div className={cx("action_title")}>
													<FormattedMessage id="Friend_Page.cancel_add_friend" />
												</div>
											</div>
										)}
										{idUser !== +idFriend.idUser && isFriend === null && (
											<div
												className={cx("action", "add")}
												onClick={handleAddFriend}
											>
												<div className={cx("action_icon")}>
													<PlusIcon />
												</div>
												<div className={cx("action_title")}>
													<FormattedMessage id="Friend_Page.add_friend" />
												</div>
											</div>
										)}
									</div>
								</div>
							</div>
							<div className={cx("content_bar")}>
								<div className={cx("bar_cover")}>
									<NavLink
										to={`/${idFriend.idUser}`}
										// className={cx("bar_item", "bar_item-active")}
										className={(nav) =>
											cx("bar_item", { "bar_item-active": nav.isActive })
										}
										// exact
										end
									>
										<FormattedMessage id="Profile_Page.about" />
									</NavLink>
									<NavLink
										className={(nav) =>
											cx("bar_item", { "bar_item-active": nav.isActive })
										}
										to={`/${idFriend.idUser}/post`}
										end
									>
										<FormattedMessage id="Profile_Page.post" />
									</NavLink>
									<NavLink
										to={`/${idFriend.idUser}/friend`}
										className={(nav) =>
											cx("bar_item", { "bar_item-active": nav.isActive })
										}
										// exact
										end
									>
										<FormattedMessage id="Profile_Page.friends" />
									</NavLink>
									<NavLink
										to={`/${idFriend.idUser}/photo`}
										className={(nav) =>
											cx("bar_item", { "bar_item-active": nav.isActive })
										}
										// exact
										end
									>
										<FormattedMessage id="Profile_Page.photos" />
									</NavLink>
									{idUser == +idFriend.idUser && (
										<NavLink
											to={`/${idFriend.idUser}/saved`}
											className={(nav) =>
												cx("bar_item", { "bar_item-active": nav.isActive })
											}
											// exact
											end
										>
											<FormattedMessage id="Profile_Page.saved" />
										</NavLink>
									)}
								</div>
							</div>
						</div>
						<div className={cx("body")}>{children}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileLayout;
