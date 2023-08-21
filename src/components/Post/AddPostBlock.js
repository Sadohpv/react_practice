import styles from "./AddPostBlock.module.scss";
import classNames from "classnames/bind";
import { FormattedMessage } from "react-intl";
import ButtonRoundIcon from "../Tools/ButtonRoundIcon/ButtonRoundIcon";
import { postService } from "../../services";
import {
	CancelIcon,
	CloudIcon,
	ImagesIcon,
	ImageIcon,
	VideoIcon,
	StickerIcon,
} from "../../asset/icons";
import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(styles);

function AddPostBlock({ setAddBlock, addBlockImg, setAddBlockImg }) {
	const [contentPost, setContentPost] = useState("");
	const [image, setImage] = useState("");
	const [preview,setPreview] =  useState("");
	const closeAddPostBlock = () => {
		setAddBlockImg(false);
		setAddBlock(false);
	};
	const clearInputImg = () => {
		setImage("");

	};
	const openInputImg = () => {
		setAddBlockImg(!addBlockImg);
	};
	// const textAreaAdjust = (e) => {
	// 	e.target.style.height = "40px";
	// 	const height = e.target.scrollHeight;
	// 	if (height > 0) {
	// 		e.target.style.height = 4 + e.target.scrollHeight + "px";
	// 	}
	// };

	const handleInputImg = (event) => {
		// console.log(event);
		if (event.target.files && event.target.files[0]) {
			setPreview(URL.createObjectURL(event.target.files[0]));
			setImage(event.target.files[0]);
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
	const handlePosting = async()=>{
		if (contentPost === "") {
			console.log("Not allow empty content")
		} else {
			// const tokenData =
			// 	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJlcnJDb2RlIjowLCJlcnJNZXNzYWdlIjoiT0shIE5vdCBmb3VuZCBlcnJvciIsInVzZXIiOnsiaWRVc2VyIjo0LCJlbWFpbCI6IkVtYWlsNEBnbWFpbC5jb20iLCJpc0FkbWluIjowfX0sImlhdCI6MTY4OTQ5NzIwMX0.LC42Slp5CngGBSZqrGQsCQ5xzlDZEwQQocqxHOQJjgA";
			const res = await postService.handleAddPostService(contentPost,image);
			// const 
		}
	}
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

							{addBlockImg && (
								<div className={cx("body")}>
									<div className={cx("block_img")}>
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
										<div className={cx("preview_img")}>
											<img id={cx("preview")} src={preview} />
										</div>
										<input
											accept="image/*"
											type="file"
											title=" "
											onChange={(e) => handleInputImg(e)}
											// onError={(e) => handleErrorImg()}
										/>
										<div className={cx("close_img")} onClick={clearInputImg}>
											<CancelIcon width="22px" height="22px" />
										</div>
									</div>
								</div>
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
									<ImageIcon width="22px" height="22px" fill={addBlockImg ? "#73dfd6" : "#65676b"}/>
								</div>
								<div className={cx("action_btn")}>
									<VideoIcon width="22px" height="22px" />
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
