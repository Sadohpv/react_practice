import { useEffect, useState } from "react";
import { friendService, userService } from "../../../services";
import styles from "./CompCard.module.scss";
import classNames from "classnames/bind";
import { useParams } from "react-router-dom";

import { emitter } from "../../../utils/emitter";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { THEMES } from "../../../utils/constant";
import FriendBlock from "../../../components/Layout/ProfileLayout/FriendBlock";
import { set } from "lodash";
import ButtonAddFriend from "../../../components/Tools/ButtonAddFriend";
import { toast } from "react-toastify";
const cx = classNames.bind(styles);

function CompCard({ data, request = false }) {
	const userId = useSelector((state) => state.user.userId);
	const [dataFriend, setDataFriend] = useState(
		request === false ? data.friendAsking : data.friendAsked
	);
	const [res, setRes] = useState({});
	const [friend, setFriend] = useState({});
	const [numFriend, setNumFriend] = useState(0);
	const [result, setResult] = useState(0);
	// const currentTheme = useSelector((state) => state.app.theme);
		const [toggle,setToggle] = useState(false);
	// const idFriend = useParams();
	const [checkFriend,setCheckFriend] = useState(false);
	useEffect(() => {
		async function fetchData() {
			const resFriend = await friendService.handleGetMutualFriendService(
				dataFriend.idUser,
				userId
			);

			if (resFriend && resFriend.reg) {
				setNumFriend(resFriend.reg.length);

				if (resFriend.reg.length > 5) {
					setFriend(resFriend.reg.slice(0, 4));
				} else {
					// console.log(res)
					setFriend(resFriend.reg);
				}
			}
			const checkFriend = await friendService.handleIsFriendService(
				dataFriend.idUser,
				userId
			);
			if (checkFriend) {
				if (checkFriend.reg && checkFriend.reg.status) {
					setCheckFriend(checkFriend.reg.status);
				} else {
					setCheckFriend(null);
				}
				// console.log(isFriend.reg);
			}else{
				setCheckFriend(null);

			}
		}
		fetchData();
	}, []);
	console.log(checkFriend);
	const handleAcceptAddFriend = async () => {
		if (result === 0) {
			const resFriend = await friendService.handleAnswerFriendService(
				userId,
				dataFriend.idUser,
				true
			);
			setResult(2);
		}
	};
	const handleAcceptDenyFriend = async () => {
		if (result === 0) {
			const resFriend = await friendService.handleAnswerFriendService(
				userId,
				dataFriend.idUser,
				false
			);
			setResult(1);
		}
	};
	const handleCancelRequestAddFriend = async ()=>{

	}
	return (
		<div className={cx("card")}>
			<a href={`/${dataFriend.idUser}`} className={cx("user_pic")}>
				<img src={dataFriend.avatar} alt="user_pic" />
			</a>
			<div className={cx("user_infor")}>
				<div className={cx("name")}>{dataFriend.userName}</div>
				<div className={cx("friend")}>
					{friend.length > 0 &&
						friend.map((bro, index) => (
							<FriendBlock
								key={Math.random()}
								data={bro}
								index={index}
								idFriend={dataFriend.idUser}
								noPseudo
							/>
						))}
				</div>
				<div className={cx("number")}>
					{numFriend} <FormattedMessage id="Friend_Page.mutual_friend" />
				</div>
				
				{request === false && (
					<div className={cx("action", result !== 0 && "disable")}>
						{result !== 1 && (
							<div className={cx("button", "active")} onClick={handleAcceptAddFriend}>
								<FormattedMessage id="Friend_List_Page.accept" />
							</div>
						)}
						{result !== 2 && (
							<div className={cx("button")} onClick={handleAcceptDenyFriend}>
								<FormattedMessage id="Friend_List_Page.deny" />
							</div>
						)}
					</div>
				)}
				{request === true && (
					<div className={cx("action", "request")}>
						{/* {toggle === false ? (
							<div className={cx("button")} onClick={handleCancelRequestAddFriend}>
								<FormattedMessage id="Friend_Page.cancel_add_friend" />
							</div>
						) : (
							<div className={cx("button")}>
								<FormattedMessage id="Friend_Page.add_friend" />
							</div>
						)} */}
						<ButtonAddFriend idAked={dataFriend.idUser} isFriend={checkFriend}/>
					</div>
				)}
			</div>
		</div>
	);
}

export default CompCard;
