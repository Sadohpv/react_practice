import styles from "./ConfigurePage.module.scss";
import classNames from "classnames/bind";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguageRedux, changeThemeRedux,handleCouldRainRedux } from "../../../redux/actions/appAction";
import Line from "../../../components/Temp/Line";
import { useState } from "react";
import { THEMES, LANGUAGES,CLOUD_RAIN } from "../../../utils/constant";
const cx = classNames.bind(styles);
function ConfigurePage() {
	const currentLang = useSelector((state) => state.app.language);
	const currentTheme = useSelector((state) => state.app.theme);
	const currentCLoud = useSelector((state)=> state.app.cloud_rain)
	const [lang, setLanguage] = useState(currentLang);
	const [curTheme, setCurTheme] = useState(currentTheme);
	const [cloudRain , setCloudRain] = useState(currentCLoud);
	const dispatch = useDispatch();

	const changLanguage = (language) => {
		dispatch(changeLanguageRedux(language));
		setLanguage(language);
	};
	const changeTheme = (theme) => {
		dispatch(changeThemeRedux(theme));

		setCurTheme(theme);
	};
	const changeCloudRain = (show)=>{
		dispatch(handleCouldRainRedux(show,""));
		setCloudRain(show);

	};
	
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
					<div className={cx("block")}>
						<div className={cx("content")}>
							<span>
								<FormattedMessage id="Configure_Page.cloud_rain" />
							</span>
							<div className={cx("swip")}>
								<span
									onClick={() => changeCloudRain(CLOUD_RAIN.ON)}
									className={cx(cloudRain ===  CLOUD_RAIN.ON ? "active" : "")}
								>
									<FormattedMessage id="Configure_Page.on" />
								</span>
								<span
									onClick={() => changeCloudRain(CLOUD_RAIN.OFF)}
									className={cx(cloudRain === CLOUD_RAIN.OFF ? "active" : "")}
								>
									<FormattedMessage id="Configure_Page.off" />
								</span>
							</div>
						</div>
					</div>
					<Line />
					<div className={cx("block")}>
						<div className={cx("content")}>
							<span>
								<FormattedMessage id="Configure_Page.cloud_rain_text" />
							</span>
							<div className={cx("swip")}>
								{/* <span
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
								</span> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ConfigurePage;
