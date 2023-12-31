import styles from "./UserSettingPageLayout.module.scss";
import classNames from "classnames/bind";
import NavbarCustom from "../../Tools/Navbar/Navbar";
import SettingMenu from "./SettingMenu";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
const cx = classNames.bind(styles);

function UserSettingPageLayout({ children }) {
	const idUser = useSelector(state=>state.user.userId);
	const id = useParams();
	const navigate = useNavigate();
	useEffect(()=>{
		function checkRoute(){
			// console.log(idUser);
			// console.log(id);

			if(idUser !== +id.idUser){
				navigate(`/${idUser}/detail`)
			}
		}
		checkRoute();
	},[])
	return (
		<div className={cx("wrapper")}>
			<NavbarCustom />
			<div className={cx("container")}>
				<SettingMenu />
				<div className={cx("children")}>{children}</div>
			</div>
		</div>
	);
}

export default UserSettingPageLayout;
