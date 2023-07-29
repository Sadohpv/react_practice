import styles from "./SlideStory.module.scss";
import classNames from "classnames/bind";
import "./SlideStory.css";
import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonPreNext from "../../components/Tools/ButtonPreNext/ButtonPreNext";
import images from "../../asset/images/slideTest";
import { PlusIcon } from "../../asset/icons";
import { THEMES } from "../../utils/constant";

const cx = classNames.bind(styles);

function SlideStory({ dark }) {
	const slider = useRef();
	const [numberSlide, setNumberSlide] = useState(0);

	const settings = {
		className: cx("slide_content"),
		infinite: false,
		slidesToShow: 4,
		speed: 200,
		slidesToScroll: 1,
		swipeToSlide: false,
	};
	

	const handleNextSlide = () => {
		if (numberSlide < 2) {
			slider.current.slickNext();
			setNumberSlide(numberSlide + 1);
		}
	};

	const handlePrevSlide = () => {
		if (numberSlide > 0) {
			slider.current.slickPrev();
			setNumberSlide(numberSlide - 1);
		}
	};

	return (
		<div className={cx("wrapper", dark && THEMES.DARK)}>
			<div className={cx("slide")}>
				<div className={cx("slide_header")}></div>
				<div className={cx("slide_body")}>
					<Slider ref={slider} {...settings}>
						<div className={cx("one_slide", "first_slide")}>
							<div className={cx("upper_layer")}
								onClick={()=> console.log('Here') }
							></div>
							<div className={cx("first_slide-cover")}>
								<div className={cx("first_slide-white-box")}></div>
								<div className={cx("first_slide-icon")}>
									<PlusIcon />
								</div>
							</div>
							<img className={cx("slide_img")} src={images.slide6} alt="None" />
						</div>
						<div className={cx("one_slide")}>
							<img className={cx("slide_img")} src={images.slide2} alt="None" />
						</div>
						<div className={cx("one_slide")}>
							<img className={cx("slide_img")} src={images.slide3} alt="None" />
						</div>
						<div className={cx("one_slide")}>
							<img className={cx("slide_img")} src={images.slide4} alt="None" />
						</div>
						<div className={cx("one_slide")}>
							<img className={cx("slide_img")} src={images.slide5} alt="None" />
						</div>
						<div className={cx("one_slide")}>
							<img className={cx("slide_img")} src={images.slide1} alt="None" />
						</div>
					</Slider>
					<div className={cx("control", "butPrev", numberSlide > 0 && "enable")}>
						<ButtonPreNext direction="prev" butFunc={() => handlePrevSlide()} />
					</div>
					<div className={cx("control", "butNext", numberSlide < 2 && "enable")}>
						<ButtonPreNext direction="next" butFunc={handleNextSlide} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default SlideStory;
