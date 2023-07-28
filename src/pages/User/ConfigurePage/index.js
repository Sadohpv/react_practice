import styles from "./ConfigurePage.module.scss";
import classNames from "classnames/bind";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguageRedux, changeThemeRedux } from "../../../redux/actions/appAction";
import Line from "../../../components/Temp/Line";
import { useState } from "react";
import { THEMES, LANGUAGES } from "../../../utils/constant";
const cx = classNames.bind(styles);
function ConfigurePage() {
	const currentLang = useSelector((state) => state.app.language);
	const currentTheme = useSelector((state) => state.app.theme);
	const [lang, setLanguage] = useState(currentLang);
	const [curTheme, setCurTheme] = useState(currentTheme);
	const dispatch = useDispatch();

	const changLanguage = (language) => {
		dispatch(changeLanguageRedux(language));
		setLanguage(language);
	};
	const changeTheme = (theme) => {
		dispatch(changeThemeRedux(theme));

		setCurTheme(theme);
	};
	console.log(curTheme);
	return (
		<>
			<div className={cx("body", curTheme === THEMES.DARK && THEMES.DARK)}>
				<div className={cx("container")}>
					<div className={cx("title")}>
						<FormattedMessage id="Configure_Page.title" />
					</div>
					<Line strong dark={curTheme=== THEMES.DARK ? true : false} />

					<div className={cx("block")}>
						<div className={cx("content")}>
							<span>
								<FormattedMessage id="Configure_Page.language" />
							</span>
							<div className={cx("swip")}>
								<span
									onClick={() => changLanguage(LANGUAGES.VI)}
									className={cx(lang === LANGUAGES.VI ? "active" : "")}
								>
									<FormattedMessage id="Configure_Page.language-vietnam" />
								</span>
								<span
									onClick={() => changLanguage(LANGUAGES.EN)}
									className={cx(lang === LANGUAGES.EN ? "active" : "")}
								>
									<FormattedMessage id="Configure_Page.language-english" />
								</span>
							</div>
						</div>
					</div>
					<Line />
					<div className={cx("block")}>
						<div className={cx("content")}>
							<span>
								<FormattedMessage id="Configure_Page.theme" />
							</span>
							<div className={cx("swip")}>
								<span
									onClick={() => changeTheme(THEMES.LIGHT)}
									className={cx(curTheme === THEMES.LIGHT ? "active" : "")}
								>
									<FormattedMessage id="Configure_Page.light-theme" />
								</span>
								<span
									onClick={() => changeTheme(THEMES.DARK)}
									className={cx(curTheme === THEMES.DARK ? "active" : "")}
								>
									<FormattedMessage id="Configure_Page.dark-theme" />
								</span>
							</div>
						</div>
					</div>
					<Line />
				</div>
			</div>
		</>
	);
}

export default ConfigurePage;
