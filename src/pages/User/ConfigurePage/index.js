import styles from "./ConfigurePage.module.scss";
import classNames from "classnames/bind";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguageRedux } from "../../../redux/actions/appAction";
import Line from "../../../components/Temp/Line";
import { useState } from "react";
const cx = classNames.bind(styles);
function ConfigurePage() {


	const currentLang = useSelector(state => state.app.language);
	const [lang,setLanguage] = useState(currentLang);

	const dispatch = useDispatch();

	const changLanguage = (language) => {
		dispatch(changeLanguageRedux(language));
		setLanguage(language);
	};

	return (
		<>
			<div className={cx("body")}>
				<div className={cx("container")}>
					<div className={cx("title")}>
						<FormattedMessage id="Configure_Page.title" />
					</div>
					<Line strong />

					<div className={cx("block")}>
						<div className={cx("content")}>
							<span>
								<FormattedMessage id="Configure_Page.language" />
							</span>
							<div className={cx("language")}>
								<span onClick={() => changLanguage("vi")} className={cx(lang ==='vi' ? 'active' : "")}>Tiếng việt</span>
								<span onClick={() => changLanguage("en")}  className={cx(lang ==='en' ? 'active' : "")}>English</span>
							</div>
						</div>
					</div>
					<Line />
					<div className={cx("block")}>
						<div className={cx("content")}>
							<span>
								<FormattedMessage id="Configure_Page.test" />
							</span>
						</div>
					</div>
					<Line />
				</div>
			</div>
		</>
	);
}

export default ConfigurePage;
