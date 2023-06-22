import { useEffect, useState } from "react";
import { userService } from "../../../services";

import { useParams } from "react-router-dom";
import styles from "./Profile.module.scss";
import classNames from "classnames/bind";
import { EditInfor, HomeIcon, LocationIcon, PlusIcon } from "../../../asset/icons";
import { useSelector } from "react-redux";
const cx = classNames.bind(styles);

function SettingPage({ children }) {
	const userData = useSelector((state) => state.user.data_user);
	console.log(userData);
	const params = useParams();
	const [res, setRes] = useState({});
	useEffect(() => {
		async function fetchData() {
			const response = await userService.handleGetDataUserService(params.idUser);
			setRes(response);
		}
		fetchData();
	}, []);
	console.log(res);

	return (
		<div className={cx("all")}>
			<div className={cx("banner")}>
				<div className={cx("cover")}>
					<div className={cx("cover_img")}>
						<img src="https://wallpaperaccess.com/full/4495015.jpg" />
					</div>
				</div>
				<div className={cx("profile_header")}>
					<div className={cx("profile_cover")}>
						<div className={cx("profile_image")}>
							{(res !== {} && res.reg && res.reg.avatar && (
								<img src={res.reg.avatar} />
							)) || <img src="https://wallpaperaccess.com/full/4495015.jpg" />}
						</div>
						<div className={cx("profile_details")}>
							<div className={cx("profile_name")}>
								{(res !== {} && res.reg && res.reg.avatar && (
									<p>{res.reg.userName}</p>
								)) || <p>Trần Minh Nhật Hoàng</p>}
							</div>
							<div className={cx("profile_friend")}>
								<p className={cx("profile_friend-num")}>168 Bạn bè</p>
								<div className={cx("profile_friend-cover")}>
									<div className={cx("friend_avatar")}>
										<img src="https://i.pinimg.com/736x/7b/11/1e/7b111e5c9d21f67f2a9671608166109f.jpg" />
									</div>
									<div className={cx("friend_avatar")}>
										<img src="https://mtv.vn/uploads/2021/08/1629456146_167_686-Hinh-Nen-Galaxy-Full-HD-Hinh-Nen-Thien-Ha.jpg" />
									</div>

									<div className={cx("friend_avatar")}>
										<img src="https://img.thuthuatphanmem.vn/uploads/2018/10/20/galaxy-desktop-wallpaper_104250290.jpg" />
									</div>
								</div>
							</div>
						</div>
						<div className={cx("profile_action")}>
							<div className={cx("action", "add")}>
								<div className={cx("action_icon")}>
									<PlusIcon />
								</div>
								<div className={cx("action_title")}>Thêm vào tin</div>
							</div>
							<div className={cx("action")}>
								<div className={cx("action_icon")}>
									<EditInfor />
								</div>
								<div className={cx("action_title")}>
									Chỉnh sửa thông tin cá nhân
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={cx("content_bar")}>
					<div className={cx("bar_cover")}>
						<div className={cx("bar_item", "bar_item-active")}>Giới Thiệu</div>
						<div className={cx("bar_item")}>Bài Viết</div>
						<div className={cx("bar_item")}>Bạn Bè</div>
						<div className={cx("bar_item")}>Ảnh</div>
					</div>
				</div>
			</div>
			<div className={cx("body")}>
				<div className={cx("container")}>
					<div className={cx("right_block")}>
						<div className={cx("right_title")}>Giới thiệu</div>
						<div className={cx("right_content")}>
							<div className={cx("content_from")}>
								<HomeIcon />
								Sống tại{" "}
								{res !== {} && res.reg && res.reg.avatar && res.reg.address}
							</div>
							<div className={cx("content_from")}>
								<LocationIcon />
								Đến từ {res !== {} && res.reg && res.reg.avatar && res.reg.address}
							</div>
							<div className={cx("content_action")}>Chỉnh sửa thông tin</div>
						</div>
						<div className={cx("right_action")}>
							<div className={cx("content_action")}>Chỉnh sửa thông tin</div>
							<div className={cx("content_action")}>Chỉnh sửa thông tin</div>
							<div className={cx("content_action")}>Chỉnh sửa thông tin</div>
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

export default SettingPage;
