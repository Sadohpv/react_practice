import styles from "./ButtonPreNext.module.scss";
import classNames from "classnames/bind";
import { LeftArrow, RightArrow } from "../../../asset/icons";
const cx = classNames.bind(styles);

function ButtonPreNext({ direction, butFunc,className }) {
	const handleSlide = () => {
		butFunc();
	};

	return (
		<div
			className={cx(
				"button",
				direction === "next" ? "next" : direction === "prev" ? "prev" : "",
				className
			)}
			onClick={handleSlide}
		>
			
			
				<div className={cx("box")} >
					{
					direction === "prev" && <LeftArrow width="22px" height="22px"/> ||
					direction === "next" && <RightArrow  width="22px" height="22px"/>
					}
					
				</div>
			
		</div>
	);
}

export default ButtonPreNext;
