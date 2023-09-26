import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/translucent.css";
import { useSelector } from "react-redux";
import { THEMES } from "../../utils/constant";
function TippyCustom({ children, content, place,offSet }) {
	const currentTheme = useSelector((state) => state.app.theme);

	return (
		<Tippy  content={content} theme={"customTheme"} placement={place} offset={offSet}>
			{children}
		</Tippy>
	);
}

export default TippyCustom;
