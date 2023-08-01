import styles from "./Avatar.module.scss";
import { THEMES } from "../../utils/constant";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";
import { LocationIcon } from "../../asset/icons";

const cx = classNames.bind(styles);

function Avartar({  }) {


	return (
		<div className={cx("wrapper")}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ7ai1K2JsaQon_7Fo8IzTaogvmolSx4UL3RjnXISJvnDLmBvyHyl3AGS4qrOTFxM3Xuk&usqp=CAU"/>
        </div>
	);
}

export default Avartar;
