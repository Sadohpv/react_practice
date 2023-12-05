import { Fragment, useEffect, useState } from "react";
import styles from "./SavedPage.module.scss";
import classNames from "classnames/bind";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
const cx = classNames.bind(styles);

function SavedPage() {
	const idUser = useSelector((state) => state.user.userId);
	const id = useParams();
	const [endLoad, setEndLoad] = useState(false);
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
		checkRoute();
	}, []);

	return <>{endLoad && <div className={cx("wrapper")}></div>}</>;
}

export default SavedPage;
