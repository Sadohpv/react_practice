import styles from "./AddPostBlock.module.scss";
import classNames from "classnames/bind";
import { FormattedMessage } from "react-intl";
import ButtonRoundIcon from "../Tools/ButtonRoundIcon/ButtonRoundIcon";
import { postService } from "../../services";
import { toast } from "react-toastify";
import {
	CancelIcon,
	CloudIcon,
	ImagesIcon,
	ImageIcon,
	VideoIcon,
	StickerIcon,
} from "../../asset/icons";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
const cx = classNames.bind(styles);

function AddPostBlock({
	setAddBlock,
	BlockImg=false,
	
	BlockVideo=false,
	
}) {
	const [contentPost, setContentPost] = useState("");
	const [blockImage,setBlockImage] = useState(BlockImg);
	const [blockVideo,setBlockVideo] = useState(BlockVideo);

	const [image, setImage] = useState("");
	const [video, setVideo] = useState("");
	const [preview, setPreview] = useState("");
	const [inputVa,setInputVa] = useState("");
	const userId = useSelector((state) => state.user.userId);
	const closeAddPostBlock = () => {
		setBlockImage(false);
		setBlockVideo(false);

		setAddBlock(false);
	};
	const clearInputImg = () => {
		setImage("");
		// setAddBlockImg(false);
		setInputVa("")
		setVideo("");
		setPreview("");
	};
	const openInputImg = () => {
		setBlockVideo(false);
		setBlockImage(!blockImage);
	};
	const openInputVideo = () => {
		setBlockImage(false);

		setBlockVideo(!blockVideo);
	};
	// const textAreaAdjust = (e) => {
	// 	e.target.style.height = "40px";
	// 	const height = e.target.scrollHeight;
	// 	if (height > 0) {
	// 		e.target.style.height = 4 + e.target.scrollHeight + "px";
	// 	}
	// };

	const handleInputImg = (event) => {
		setInputVa(event.target.name);
		if (event.target.files && event.target.files[0]) {
			const reader = new FileReader();
			reader.readAsDataURL(event.target.files[0]);
			setPreview(URL.createObjectURL(event.target.files[0]));
			reader.onloadend = () => {
				setImage(reader.result);
			};
			// console.log(reader.result);
		}
	};

	const handleErrorImg = (e) => {
		e.target.style.display = "none";
	};
	const handleContentPost = (e) => {
		e.target.style.height = "40px";
		const height = e.target.scrollHeight;
		if (height > 0) {
			e.target.style.height = 4 + e.target.scrollHeight + "px";
		}

		setContentPost(e.target.value);
	};
	const handlePosting = async () => {
		// console.log(contentPost);
		if (contentPost === "") {
			toast.info(<FormattedMessage id="Post_Comp.empty_content" />, {
				position: toast.POSITION.TOP_RIGHT,
			});
		} else {
			// console.log(image);

			const res = await postService.handleAddPostService(userId, contentPost, image,blockVideo);
			// const
			if (res && res.errCode === 0) {
				toast.success(<FormattedMessage id="Post_Comp.add_success" />, {
					position: toast.POSITION.TOP_RIGHT,
				});
				closeAddPostBlock();
			} else {
				toast.error(<FormattedMessage id="Post_Comp.add_fail" />, {
					position: toast.POSITION.TOP_RIGHT,
				});
			}
		}
	};
	return (
		<>
			<div className={cx("wrapper")} onClick={closeAddPostBlock}>
				<div className={cx("block")} onClick={(e) => e.stopPropagation()}>
					<div className={cx("title")}>
						<span>
							<FormattedMessage id="Post_Comp.add_title" />
						</span>
						<ButtonRoundIcon
							className={"cancle"}
							icon={<CancelIcon width="24px" height="24px" />}
							butFunc={closeAddPostBlock}
						/>
					</div>
					<div className={cx("header")}>
						<div className={cx("header_avt")}></div>
						<div className={cx("header_name")}>
							<div className={cx("name_user-post")}>
								<span>Kusakari</span>
							</div>
							<div className={cx("time")}>
								<span>Just something special</span>
							</div>
						</div>
					</div>

					<div className={cx("content")}>
						<div className={cx("main")}>
							<div className={cx("input_content")}>
								<textarea
									// onKeyDown={(e) => textAreaAdjust(e)}
									type="text"
									placeholder="Write something you wanna say in here!"
									onChange={(e) => handleContentPost(e)}
								/>
							</div>

							{blockImage | blockVideo ? (
								<div className={cx("body")}>
									<div
										className={cx("block_img", blockVideo && "block_video")}
									>
										<div className={cx("background_input")}>
											<div className={cx("layer_1")}>
												<CloudIcon width="90px" height="90px" />
											</div>
											<div className={cx("layer_2")}>
												<ImagesIcon
													width="30px"
													height="30px"
													fill="white"
												/>
											</div>
										</div>

										<input
											value={inputVa}
											accept="image/*,video/*"
											type="file"
											title=" "
											onChange={(e) => handleInputImg(e)}
											// onError={(e) => handleErrorImg()}
										/>
										{preview != "" && (
											<div className={cx("preview_img")}>
												{blockImage && (
													<img id={cx("preview")} src={preview} />
												)}
												{blockVideo && (
													<video
														id={cx("preview")}
														// className={cx("video")}
														// autoPlay
														controls
														disablePictureInPicture={true}
													>
														<source src={preview} />
													</video>
												)}
											</div>
										)}
										<div className={cx("close_img")} onClick={clearInputImg}>
											<CancelIcon width="22px" height="22px" />
										</div>
									</div>
								</div>
							) : (
								<></>
							)}
						</div>
					</div>
					<div className={cx("footer")}>
						<div className={cx("action")}>
							<div className={cx("action_title")}>
								<span>
									<FormattedMessage id="Post_Comp.insert_something" />
								</span>
							</div>
							<div className={cx("action_body")}>
								<div className={cx("action_btn")} onClick={openInputImg}>
									<ImageIcon
										width="22px"
										height="22px"
										fill={blockImage ? "#45bd63" : "#65676b"}
									/>
								</div>
								<div className={cx("action_btn")} onClick={openInputVideo}>
									<VideoIcon
										width="22px"
										height="22px"
										fill={blockVideo ? "#e42645" : "#65676b"}
									/>
								</div>
								<div className={cx("action_btn")}>
									<StickerIcon width="22px" height="22px" />
								</div>
								<div className={cx("action_btn")}></div>
							</div>
						</div>
						<div className={cx("submit")} onClick={handlePosting}>
							<div className={cx("submit_btn")}>
								<span>
									<FormattedMessage id="Post_Comp.posting" />
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AddPostBlock;
