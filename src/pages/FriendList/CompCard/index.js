import { useEffect, useState } from "react";
import { userService } from "../../../services";
import styles from "./CompCard.module.scss";
import classNames from "classnames/bind";
import { useParams } from "react-router-dom";

import { emitter } from "../../../utils/emitter";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { THEMES } from "../../../utils/constant";
import FriendBlock from "../../../components/Layout/ProfileLayout/FriendBlock";

const cx = classNames.bind(styles);

function CompCard({data}) {
	const userId = useSelector((state) => state.user.userId);

	const [res, setRes] = useState({});
	const [friend, setFriend] = useState({});
	const [numFriend, setNumFriend] = useState(0);

	// const currentTheme = useSelector((state) => state.app.theme);

	const idFriend = useParams();
	useEffect(() => {
		async function fetchData() {
			const resFriend = await userService.handleGetAllFriendService(idFriend.idUser);

			if (resFriend && resFriend.EC === 0) {
				setNumFriend(resFriend.reg.length);

				if (resFriend.reg.length > 5) {
					setFriend(resFriend.reg.slice(0, 4));
				} else {
					// console.log(res)
					setFriend(resFriend.reg);
				}
			}
		}
		fetchData();
	}, []);

	return (
	
			<div className={cx("card")}>
				<div className={cx("user_pic")}>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYMH32LNHOFH68P8rGQ5akiUE_G3CvM6gZzm9pj8yq9G2R2EQRL2DqMRtYaMDugCIkcR8&usqp=CAU"
						alt="user_pic"
					/>
				</div>
				<div className={cx("user_infor")}>
					<div className={cx("name")}>Kusakari Leonado Davaci Alexander Junior</div>
					<div className={cx("friend")}>
						{friend.length > 0 &&
							friend.map((bro, index) => (
								<FriendBlock
									key={Math.random()}
									data={bro}
									index={index}
									idFriend={idFriend.idUser}
								/>
							))}
					</div>
					<div className={cx("action")}>
						<div className={cx("button")}>
							<FormattedMessage id="Friend_List_Page.accept"/>
						</div>
						<div className={cx("button")}>
						<FormattedMessage id="Friend_List_Page.deny"/>

						</div>
					</div>
				</div>
			</div>
	
	);
}

export default CompCard;
