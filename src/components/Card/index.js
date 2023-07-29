import styles from "./Card.module.scss";
import { THEMES } from "../../utils/constant";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";
import { LocationIcon } from "../../asset/icons";

const cx = classNames.bind(styles);

function Card({ shape }) {
	const currentTheme = useSelector((state) => state.app.theme);

	return (
		<div className={cx("wrapper", currentTheme === THEMES.DARK && THEMES.DARK)}>
			{shape === "around" && (
				<div className={cx("card_box", "around_img")}>
					<div className={cx("symbol")}>
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpb85Q01yMh2lgyxv_8_jWyAL49jQNVeWvYcXR7qqioXHHySqZBS_SFp6c0EomVJvKrk&usqp=CAU" />
					</div>
					<div className={cx("card_text")}>
						<span>Test Text CSS </span>
					</div>
				</div>
			)}
			{shape === "square" && (
				<div className={cx("card_box", "square_img")}>
					<div className={cx("symbol")}>
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpb85Q01yMh2lgyxv_8_jWyAL49jQNVeWvYcXR7qqioXHHySqZBS_SFp6c0EomVJvKrk&usqp=CAU" />
					</div>
					<div className={cx("card_text")}>
						<span>Test Text CSS </span>
					</div>
				</div>
			)}

			{shape === "icon" && (
				<div className={cx("card_box", "icon")}>
					<div className={cx("symbol")}> 
                        <LocationIcon/>
                    </div>
					<div className={cx("card_text")}>
						<span>Test Text CSS</span>
					</div>
				</div>
			)}
		</div>
	);
}

export default Card;
