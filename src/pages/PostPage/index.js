import { useEffect, useState } from "react";
import styles from "./PostPage.module.scss";
import classNames from "classnames/bind";
import { THEMES } from "../../utils/constant";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import images from "../../asset/images/slideTest";
import { CommentIcon } from "../../asset/icons";
import { FormattedMessage } from "react-intl";

const cx = classNames.bind(styles);

function PostPage() {
	const [speech,setSpeech]= useState(false);
	const [location,setLocation] = useState(0);
	const [qoute,setQoute] = useState(0);
	const handleGojoSaid = ()=>{
		const random = Math.floor(Math.random() * (2 - 1 + 1) + 1);
		setLocation(random);
		const randomQuote = Math.floor(Math.random() * (4 - 1 + 1) + 1);
		setQoute(randomQuote);
		setSpeech(true);
	}
	const handleGojoUnSaid = ()=>{
		setSpeech(false);

	}
	return (
		<div className={cx("wrapper")}>
			<div className={cx("body")}>
				<div className={cx("qoutes")}>
					{
						speech &&
						<div className={cx(`qoute_${location}`)}>
						<CommentIcon width="200px" height="200px" fill="transparent" />
						<div className={cx("speech")}>
							<p><FormattedMessage id={`Gojo_Satoru.${qoute}`}/></p>
						</div>
					</div>
					}
					
					
				</div>

				<div className={cx("no_post")} onMouseOver={handleGojoSaid} onMouseLeave={handleGojoUnSaid}>
					<img src={images.gojo} alt="Gravity Fall Gif" />
				</div>
			</div>
		</div>
	);
}

export default PostPage;
