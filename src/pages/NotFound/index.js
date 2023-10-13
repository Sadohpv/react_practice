import { useEffect, useState } from "react";
import styles from "./NotFound.module.scss";
import classNames from "classnames/bind";
import { THEMES } from "../../utils/constant";
import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

import { FormattedMessage } from "react-intl";


const cx = classNames.bind(styles);


function NotFoundPage(code = 4) {
	const loading = useSelector((state) => state.user.isLoading);

	const auth = useSelector((state) => state.user.auth);
	const [message, setMessage] = useState(loading === null ? 0 : (auth ? 4 : 1));
	console.log(auth);
	useEffect(() => {
		
		const notFound = () => {
			
			function randomNum() {
				
				return Math.floor(Math.random() * 9) + 1;
			}
			var loop1,
				loop2,
				loop3,
				time = 30,
				i = 0,
			
				selector3 = document.querySelector(".thirdDigit"),
				selector2 = document.querySelector(".secondDigit"),
				selector1 = document.querySelector(".firstDigit");
			loop3 = setInterval(function () {
				
				if (i > 40) {
					clearInterval(loop3);
					selector3.textContent = 4;
				} else {
					selector3.textContent = randomNum();
					i++;
				}
			}, time);
			loop2 = setInterval(function () {
				
				if (i > 80) {
					clearInterval(loop2);
					selector2.textContent = 0;
				} else {
					selector2.textContent = randomNum();
					i++;
				}
			}, time);
			loop1 = setInterval(function () {
			
				if (i > 100) {
					clearInterval(loop1);
					if(message === 0){
						selector1.textContent = 0;

					}else if(auth){

						selector1.textContent = 4;
					}else{
						selector1.textContent = 1;
						
					}
				} else {
					selector1.textContent = randomNum();
					i++;
				}
			}, time);
		};
		notFound();
		async function fetchData() {
			// const post = await postService.handleGetOwnerPost(idFriend.idUser, idUser);
			// // console.log(post);
			// if (post && post.reg) {
			// 	setPost(post.reg);
			// }
		}

		fetchData();
	}, []);
	const currentTheme = useSelector((state) => state.app.theme);

	return (
		<div className={cx("wrapper", currentTheme === THEMES.DARK && THEMES.DARK)}>
			<div className={cx("error")}>
				<div className={cx("container-error-404")}>
					<div className={cx("msg")}>
						OH!<span className={cx("triangle")}></span>
					</div>
					<div className={cx("code")}>
						<div className={cx("clip")}>
							<div className={cx("shadow")}>
								<span className={cx("digit", "thirdDigit")}></span>
							</div>
						</div>
						<div className={cx("clip")}>
							<div className={cx("shadow")}>
								<span className={cx("digit", "secondDigit")}></span>
							</div>
						</div>
						<div className={cx("clip")}>
							<div className={cx("shadow")}>
								<span className={cx("digit", "firstDigit")}></span>
							</div>
						</div>
					</div>
				</div>
				<h2 className={cx("h1")}>
					{message !== 0 && message === 4 ? (
						<FormattedMessage id="Error_Page.not_found" />
					) : message === 2 ? (
						<FormattedMessage id="Error_Page.bad_req" />
					) : message === 1 ? (
						<FormattedMessage id="Error_Page.auth" />
					) : (
						<FormattedMessage id="Error_Page.all_wrong" />
					)}
				</h2>
			</div>
			<div className={cx("action")}>
				{auth && (
					<a className={cx("button")} href="/">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<FormattedMessage id="Error_Page.go_home" />
					</a>
				)}

				<a className={cx("button")} href="/login">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<FormattedMessage id="Error_Page.login" />
				</a>
			</div>
		</div>
	);
}

export default NotFoundPage;
