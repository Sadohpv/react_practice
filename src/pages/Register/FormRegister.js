import { EmailIcon, KeyIcon, LeafIcon, PenIcon, PenclipIcon } from "../../asset/icons";
import styles from "./Register.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function FormRegister({
	value1,
	value2,
	value3,
	value4,
	setValue1,
	setValue2,
	setValue3,
	setValue4,
	handleOnClick,
	toggle,
	leaf = false,
	...props
}) {
	const handleSetEmail = (e) => {
		setValue1(e.target.value);
	};
	const handleSetPassword = (e) => {
		setValue2(e.target.value);
	};
	const handleSetFirstName = (e) => {
		setValue3(e.target.value);
	};
	const handleSetLastName = (e) => {
		setValue4(e.target.value);
	};
	console.log(leaf);
	return (
		<div
			className={cx(
				"right_body",
				toggle === null ? "" : toggle === true ? "move_in" : "move_out"
			)}
		>
			<div className={cx("right_cover")}>
				{leaf ? <LeafIcon /> : <EmailIcon />}

				<input
					placeholder={props.placehold1}
					value={value1}
					onChange={(e) => handleSetEmail(e)}
				/>
			</div>

			<div className={cx("right_cover")}>
				{leaf ? <LeafIcon /> : <KeyIcon />}

				<input
					placeholder={props.placehold2}
					value={value2}
					onChange={(e) => handleSetPassword(e)}
				/>
			</div>
			<div className={cx("right_cover")}>
				{leaf ? <LeafIcon /> : <PenIcon />}

				<input
					placeholder={props.placehold3}
					value={value3}
					onChange={(e) => handleSetFirstName(e)}
				/>
			</div>
			<div className={cx("right_cover")}>
				{leaf ? <LeafIcon /> : <PenclipIcon />}

				<input
					placeholder={props.placehold4}
					value={value4}
					onChange={(e) => handleSetLastName(e)}
				/>
			</div>
			<div className={cx("next_input")} onClick={handleOnClick}>
				{props.title}
			</div>
		</div>
	);
}

export default FormRegister;
