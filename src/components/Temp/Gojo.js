import { useEffect, useState } from "react";
import styles from "./Gojo.module.scss";
import classNames from "classnames/bind";
import { THEMES } from "../../utils/constant";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import images from "../../asset/images/slideTest";
import { CommentIcon } from "../../asset/icons";
import { FormattedMessage } from "react-intl";
import { handleGojoRedux } from "../../redux/actions/appAction";

const cx = classNames.bind(styles);

function Gojo() {
    const [speech, setSpeech] = useState(false);
	const [location, setLocation] = useState(0);
	const [qoute, setQoute] = useState(0);
	const [technical, setTechnical] = useState(false);
	const [technical2, setTechnical2] = useState(false);

	const [technical3, setTechnical3] = useState(false);
	const [domain, setDomain] = useState(false);
	const dispatch = useDispatch();

	const handleGojoSaid = async() => {
		const random = Math.floor(Math.random() * (2 - 1 + 1) + 1);
		setLocation(random);
		const randomQuote = Math.floor(Math.random() * (9 - 1 + 1) + 1);
		if (randomQuote === 7) {
			setTechnical(true);
			dispatch(handleGojoRedux("red"));
			setTimeout(() => handleBack(1), 5000);
		}
		if (randomQuote === 9) {
			setTechnical3(true);

			dispatch(handleGojoRedux("blue"));
			setTimeout(() => handleBack(3), 5000);
		}
		if (randomQuote === 8) {
			setTechnical2(true);

			dispatch(handleGojoRedux("purple"));
			setTimeout(() => handleBack(2), 5000);
		}
		if (randomQuote === 2) {
			setTimeout(()=>setDomain(true),1000);
			

			setTimeout(() => handleBack(4), 6000);
		}
		setQoute(randomQuote);
		setSpeech(true);
	};
	const handleGojoUnSaid = () => {
		setSpeech(false);
	};
	const handleBack = async (tech) => {
		if (tech === 1) {
			setTechnical(false);
		}
		if (tech === 2) {
			setTechnical2(false);
		}
		if (tech === 3) {
			setTechnical3(false);
		}
		if (tech === 4) {
			setDomain(false);
		}
		await dispatch(handleGojoRedux("white"));
	}
    return ( <div className={cx("gojo")}>
    <div className={cx("title")}>
        <p>You don't have any post. Posting something on your wall and check again</p>
    </div>
    <div className={cx("qoutes")}>
        {speech && (
            <div className={cx(`qoute_${location}`)}>
                <CommentIcon width="200px" height="200px" fill="transparent" />
                <div className={cx("speech")}>
                    <p>
                        <FormattedMessage id={`Gojo_Satoru.${qoute}`} />
                    </p>
                </div>
            </div>
        )}
    </div>

    <div
        className={cx("no_post")}
        onMouseOver={handleGojoSaid}
        onMouseLeave={handleGojoUnSaid}
    >
        <img src={images.gojo} alt="Gravity Fall Gif" />
    </div>
    {technical && <div className={cx("waves", "red")}></div>}
    {technical2 && <div className={cx("waves", "purple")}></div> }
    
    {technical3 && <div className={cx("waves", "blue")}></div>}
    {domain && <img className={cx("domain")} src={images.unlimitedVoid} />}
</div> );
}

export default Gojo;