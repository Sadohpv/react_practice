import {useEffect, useState } from "react";
import styles from "./SavedPage.module.scss";
import classNames from "classnames/bind";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { postService } from "../../services";
import Post from "../../components/Post";
const cx = classNames.bind(styles);

function SavedPage() {
	const idUser = useSelector((state) => state.user.userId);
	const id = useParams();
	const [endLoad, setEndLoad] = useState(false);
	const [post, setPost] = useState([]);

	const navigate = useNavigate();
	useEffect(() => {
		function checkRoute() {
			// console.log(idUser);
			// console.log(id);

			if (idUser !== +id.idUser) {
				navigate(`/${idUser}/saved`);
			}
			setEndLoad(true);
		}

		async function fetchData() {
			const post = await postService.handleGetSavedPost(idUser);

			if (post && post.reg) {
				setPost(post.reg);
			}
		}
		checkRoute();
		fetchData();
	}, []);

	return (
		<>
			{endLoad && (
				<div className={cx("wrapper")}>
					<div className={cx("main")}>
						{post.length > 0 &&
							post.map((item, index) => (
								<Post
									key={item.id}
									index={index}
									data={item}
									idUser={idUser}
								/>
							))}
					</div>
				</div>
			)}
		</>
	);
}

export default SavedPage;
