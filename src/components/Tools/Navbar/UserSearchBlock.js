import styles from "./UserSearchBlock.module.scss";
import classNames from "classnames/bind";
import Avartar from "../../Avatar/Avatar";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function UserSearchBlock({ data }) {
	const link = `/${data.idUser}`;

  
	return (
		<a href={link} >
			<div className={cx("user_block")} >
				<Avartar width={"40px"} height={"40px"} src={data.avatar} alt={data.idUser}/>
				<div className={cx("user_infor")}>
					<div className={cx("user_infor-name")}>
						<span>{data.userName}</span>
					</div>
					<div className={cx("user_infor-random")}>
						<span>{data.address}</span>
					</div>
				</div>
			</div>
		</a>
	);
}

export default UserSearchBlock;
