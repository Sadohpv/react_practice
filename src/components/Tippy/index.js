import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import { useSelector } from "react-redux";
import { THEMES } from "../../utils/constant";
function TippyCustom({ children, content, place,offSet }) {
	const currentTheme = useSelector((state) => state.app.theme);

	return (
		<Tippy visible content={content} theme={currentTheme === THEMES.DARK && THEMES.LIGHT } placement={place} offset={offSet}>
			{children}
		</Tippy>
	);
}

export default TippyCustom;
