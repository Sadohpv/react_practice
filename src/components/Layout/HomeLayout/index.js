import styles from "./HomeLayout.module.scss";
import classNames from "classnames/bind";
import NavbarCustom from "../../Tools/Navbar/Navbar";
import { THEMES } from "../../../utils/constant";
import { useSelector } from "react-redux";
// import Card from "../../Card";

import SideBarHome from "./side_bar";
import RightBarHome from "./right_bar";
import ChatBox from "./ChatBox";
import WaitChatBox from "./WaitChatBox";
const cx = classNames.bind(styles);

function HomeLayout({ children }) {
	const currentTheme = useSelector((state) => state.app.theme);
	const chatList = useSelector((state) => state.chat.chatList);
const waitChatList = useSelector((state) => state.chat.waitChatList);
	return (
		<div className={cx("wrapper", currentTheme === THEMES.DARK && THEMES.DARK)}>
			<NavbarCustom />

			<div className={cx("container")}>
				<SideBarHome />

				<div className={cx("content")}>{children}</div>

				<RightBarHome />
			</div>
			{/* <CloudRain /> */}
			{chatList.length > 0 && (
				<div className={cx("chat_wrapper", waitChatList.length == 0 && "wait")}>
					{chatList.map((item) => (
						<ChatBox key={item} id={item} />
					))}
				</div>
			)}
			{waitChatList.length > 0 && (
				<div className={cx("wait_chat_wrapper")}>
					{waitChatList.map((item) => (
						<WaitChatBox key={item} id={item} />
					))}
				</div>
			)}
		</div>
	);
}

export default HomeLayout;
