import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/translucent.css";
import { useSelector } from "react-redux";
import { THEMES } from "../../utils/constant";
function TippyCustom({ children, content, place, offSet, customTheme=null,haveClick=false}) {
	const currentTheme = useSelector((state) => state.app.theme);
	// const theme = ["customTheme", "dark"];
	// console.log(customTheme);
	return (
		<Tippy
			content={content}
			theme={
				("customTheme",currentTheme == THEMES.DARK && "dark",customTheme)}
			placement={place}
			offset={offSet}
			trigger={haveClick === true ? "click" : "mouseenter"}
			zIndex={9999}
			interactive={haveClick}
			// popperOptions={['bottom', 'right']}
			
		>	
			{children}
		</Tippy>
	);
}

export default TippyCustom;
