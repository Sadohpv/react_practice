import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/translucent.css";
import { useSelector } from "react-redux";
import { THEMES } from "../../utils/constant";
function TippyCustom({ children, content, place,offSet,customTheme }) {
	const currentTheme = useSelector((state) => state.app.theme);
	const theme = [
		"customTheme","dark"
	];
	return (
		<Tippy  content={content} theme={theme} placement={place} offset={offSet}>
			{children}
		</Tippy>
	);
}

export default TippyCustom;
