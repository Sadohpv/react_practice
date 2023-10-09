import { useEffect, useState } from "react";
import styles from "./PhotoPage.module.scss";
import classNames from "classnames/bind";
// import { THEMES } from "../../utils/constant";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import images from "../../asset/images/slideTest";
// import { CommentIcon } from "../../asset/icons";
// import { FormattedMessage } from "react-intl";

// import { postService } from "../../services";
// import Post from "../../components/Post";
// import { NavItem } from "react-bootstrap";
const cx = classNames.bind(styles);

function CardPhoto({index,src="https://wallpapercave.com/wp/wp9083232.jpg" }) {
	// const idUser = useSelector((state) => state.user.userId);
	// const idFriend = useParams();

	// const currentTheme = useSelector((state) => state.app.theme);
	// const [post, setPost] = useState([]);
	useEffect(() => {
		
		function card() {
			let card = document.querySelector(`.card_id_${index}`);
			let glow = document.querySelector(`.glow_id_${index}`);

			let bounds;
			console.log(card);
			console.log(glow);

			function rotateToMouse(e) {
				const mouseX = e.clientX;
				const mouseY = e.clientY;
				const leftX = mouseX - bounds.x;
				const topY = mouseY - bounds.y;
				const center = {
					x: leftX - bounds.width / 2,
					y: topY - bounds.height / 2,
				};
				const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

				card.style.transform = `
	    scale3d(1.07, 1.07, 1.07)
	    rotate3d(
	      ${center.y / 100},
	      ${-center.x / 100},
	      0,
	      ${Math.log(distance) * 3}deg
	    )
	  `;
				//   console.log(glow);
				glow.style.backgroundImage = `
	    radial-gradient(
	      circle at
	      ${center.x * 2 + bounds.width / 2}px
	      ${center.y * 2 + bounds.height / 2}px,
	      #ffffff40,
	      #00000000
	    )
	  `;
			}

			card.addEventListener("mouseenter", () => {
				bounds = card.getBoundingClientRect();
				document.addEventListener("mousemove", rotateToMouse);
			});

			card.addEventListener("mouseleave", () => {
				document.removeEventListener("mousemove", rotateToMouse);
				card.style.transform = "";
				card.style.background = "";
				glow.style.backgroundImage = ``;
			});
		}
		card();
	}, []);

	return (
		<div className={cx("card", `card_id_${index}`)}>
			<img src={src} alt="test_sonat" />
			<div className={cx("glow", `glow_id_${index}`)} />
		</div>
	);
}

export default CardPhoto;
