// import ToastifyUser from "../ListUser/toastUser";
// import images from "../../asset/images/parallaxImage";

import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import SlideStory from "./SlideStory";
import { useEffect, useState } from "react";
import { THEMES } from "../../utils/constant";
import { useSelector } from "react-redux";
import Post from "../../components/Post";
import Avartar from "../../components/Avatar/Avatar";
import ButtonPost from "../../components/Post/ButtonPost";
import { FormattedMessage } from "react-intl";
import { postService } from "../../services";

import {
	CommentIcon,
	ImageIcon,
	ShareIcon,
	StickerIcon,
	UnLikeIcon,
	VideoIcon,
} from "../../asset/icons";
import ButtonStatus from "../../components/Tools/ButtonStatus/ButtonStatus.js";
import AddPostBlock from "../../components/Post/AddPostBlock";
import jwt_decode from "jwt-decode";
	

const cx = classNames.bind(styles);

function Home() {
	const currentTheme = useSelector((state) => state.app.theme);
	const user = useSelector((state) => state.user);
	const decoded = jwt_decode(user.token);
	const idUser = decoded.userData.idUser;
	const [postData, setPostData] = useState([]);
	const [addBlock, setAddBlock] = useState(false);
	const [addBlockImg, setAddBlockImg] = useState(false);
	useEffect(() => {
		async function fetchData() {
			const response = await postService.handleGetPostService();
			if(response.reg){

				setPostData(response.reg);
			}
		}
		fetchData();
	}, []);
	const handleOnClick = () => {
		setAddBlockImg(true);
		setAddBlock(true);
	};
	
	return (
		<>
			<div className={cx("main")}>
				<SlideStory dark={currentTheme === THEMES.DARK ? true : false} />
				<div className={cx("status")}>
					<div className={cx("status_input")} onClick={() => setAddBlock(true)}>
						<Avartar />
						<div className={cx("open_input-popup")}>
							<span>
								<FormattedMessage id="Status_Comp.question" />
							</span>
						</div>
					</div>
					<div className={cx("status_input-file")}>
						<ButtonStatus
							icon={<ImageIcon width="20px" height="20px" fill="#45bd62" />}
							text={<FormattedMessage id="Status_Comp.image" />}
							funClick={handleOnClick}
						/>

						<ButtonStatus
							icon={<VideoIcon width="20px" height="20px" fill="#e42645" />}
							text={<FormattedMessage id="Status_Comp.video" />}
						/>

						<ButtonStatus
							icon={<StickerIcon width="20px" height="20px" fill="#f7b928" />}
							text={<FormattedMessage id="Status_Comp.sticker" />}
						/>
					</div>
				</div>
				<div className={cx("main_post_block")}>
					{postData.length > 0 &&
						postData.map(( post,index) => (
							
								<Post data={post} idUser={idUser} key={Math.random()}/>
							
						))}
				</div>
			</div>
			{addBlock && <AddPostBlock setAddBlock={setAddBlock} addBlockImg={addBlockImg} setAddBlockImg={setAddBlockImg} />}
		</>
	);
}

export default Home;
