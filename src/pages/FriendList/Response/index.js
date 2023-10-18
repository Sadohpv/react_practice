import { useEffect, useState } from "react";
import { userService } from "../../../services";
import styles from "./Response.module.scss";
import classNames from "classnames/bind";
import { useParams } from "react-router-dom";

import { emitter } from "../../../utils/emitter";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { THEMES} from "../../../utils/constant";

	

const cx = classNames.bind(styles);

function FriendResponsePage() {
	const userId = useSelector((state) => state.user.userId);
	
	const [res, setRes] = useState({});
	


	const currentTheme = useSelector((state) => state.app.theme);



	
	return (
		<div className={cx("container",currentTheme === THEMES.DARK && THEMES.DARK)}>
			
		</div>
	);
}

export default FriendResponsePage;
