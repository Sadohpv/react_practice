import styles from "./AddPostBlock.module.scss";
import classNames from "classnames/bind";
import { FormattedMessage } from "react-intl";
import ButtonRoundIcon from "../Tools/ButtonRoundIcon/ButtonRoundIcon";
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
	const closeAddPostBlock = () => {
		setAddBlockImg(false);
		setAddBlock(false);
	};
	const closeInputImg = () => {
		setAddBlockImg(false);
	};
	const openInputImg = () => {
		setAddBlockImg(true);
	};
	const textAreaAdjust = (e) => {
		e.target.style.height = "40px";
		const height = e.target.scrollHeight;
		if (height > 0) {
			e.target.style.height = 4 + e.target.scrollHeight + "px";
		}
	};

	const handleInputImg =(e)=>{
		// const [file] = 
	}
	const handleErrorImg = (e)=>{
		e.target.style.display = "none";
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
									onKeyUp={(e) => textAreaAdjust(e)}
									type="text"
									placeholder="Write something you wanna say in here!"
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
											<img id="preview"/>
										</div>
										<input accept="image/*" type="file" title=" " onChange={(e)=>handleInputImg()} onError={(e)=>handleErrorImg()}/>
										<div className={cx("close_img")} onClick={closeInputImg}>
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
									<ImageIcon width="22px" height="22px" />
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
						<div className={cx("submit")}>
							<div className={cx("submit_btn")}>
								<span>Đăng bài</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AddPostBlock;
