import { useEffect, useState } from "react";
import styles from "./CloudRain.module.scss";
import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import { THEMES, CLOUD_RAIN } from "../../utils/constant";
import { clear } from "@testing-library/user-event/dist/clear";
import { emitter } from "../../utils/emitter";

const cx = classNames.bind(styles);
function CloudRain() {
	const currentTheme = useSelector((state) => state.app.theme);

	// const [interval,setInterval] = useState("");
	const cloudShow = useSelector((state) => state.app.cloud_rain);
	const rainText = useSelector((state) => state.app.cloud_rain_text);
	const [curRain,setRain] = useState(rainText);
	// function randomText() {
	// 	var text = rainText;
	// 	let letter = text[Math.floor(Math.random() * text.length)];
	// 	return letter;
	// }
	
	// function rain() {
	// 	let cloud = document.querySelector("#rain");

	// 	if (cloud) {
	// 		let e = document.createElement("div");
	// 		let left = Math.floor(Math.random() * 280);
	// 		let size = Math.random() * 1.5;
	// 		let duration = Math.random() * 1;
	// 		e.classList.add(cx("text"));
	// 		// e.appendChild(document.createTextNode());

	// 		cloud.appendChild(e);
	// 		e.innerText = randomText();
	// 		e.style.left = left + "px";
	// 		e.style.fontSize = 1.5 + size + "em";
	// 		e.style.animationDuration = 1 + duration + "s";
	// 		setTimeout(function () {
	// 			cloud.removeChild(e);
	// 		}, 2000);
	// 	}
	// }
	// const myInterval = setInterval(function () {
	// 	let cloud = document.querySelector("#rain");
	// 	if (cloud) {
	// 		rain();
	// 	} else {
	// 		clearInterval(myInterval);
	// 	}
	// }, 450);
	// console.log(rainColor);
	useEffect(()=>{
		function randomText() {
			var text = rainText;
			let letter = text[Math.floor(Math.random() * text.length)];
			return letter;
		}
		
		function rain() {
			let cloud = document.querySelector("#rain");
	
			if (cloud) {
				let e = document.createElement("div");
				let left = Math.floor(Math.random() * 280);
				let size = Math.random() * 1.5;
				let duration = Math.random() * 1;
				e.classList.add(cx("text"));
				// e.appendChild(document.createTextNode());
	
				cloud.appendChild(e);
				e.innerText = randomText();
				e.style.left = left + "px";
				e.style.fontSize = 1.5 + size + "em";
				e.style.animationDuration = 1 + duration + "s";
				setTimeout(function () {
					cloud.removeChild(e);
				}, 2000);
			}
		}
		const myInterval = setInterval(function () {
			let cloud = document.querySelector("#rain");
			if (cloud) {
				rain();
			} else {
				clearInterval(myInterval);
			}
		}, 450);
	},[])

	return (
		<div className={cx("wrapper", currentTheme === THEMES.DARK && THEMES.DARK)}>
			<div className={cx("cloud")}>
				<div id={cx("rain")}></div>
			</div>
		</div>
	);
}

export default CloudRain;
