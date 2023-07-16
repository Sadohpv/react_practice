import { useEffect, useState } from "react";
import { userService } from "../../../services";
import styles from "./Edit.module.scss";
import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import EditBlock from "./EditBlock";

const cx = classNames.bind(styles);

function EditPage() {
	const [res, setRes] = useState({});
	useEffect(() => {
		async function fetchData() {
			const response = await userService.handleGetDataUserService(params.idUser);
			setRes(response.reg);
			setEmail(response.reg.email);
			setFirstName(response.reg.firstName);
			setLastName(response.reg.lastName);
			setAddress(response.reg.address);
			setPhoneNumber(response.reg.phoneNumber);
		}
		fetchData();
	}, []);
	
	const [email, setEmail] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [address, setAddress] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");



	const params = useParams();
	return (
		<div className={cx("container")}>
			<div className={cx("edit")}>
				<div className={cx("right")}>
					<div className={cx("right_main-head")}>
						Profile settings
						<div className={cx("line")}></div>
					</div>
					<div className={cx("right_main-body")}>
						<div className={cx("right_content")}>
							<div className={cx("content")}>
								<EditBlock data={email} title="Email" api={"email"} changeData={setEmail}/>
								<div className={cx("line")}></div>
							</div>
							<div className={cx("content")}>
								<EditBlock data={"***********"} title="Password" />
								<div className={cx("line")}></div>
							</div>
							<div className={cx("content")}>
								<EditBlock data={firstName} title="First Name" api={"firstName"} changeData={setFirstName} />

								<div className={cx("line")}></div>
							</div>
							<div className={cx("content")}>
								<EditBlock data={lastName} title="Last Name" api={"lastName"}  changeData={setLastName} />

								<div className={cx("line")}></div>
							</div>
							<div className={cx("content")}>
								<EditBlock data={address} title="Address"  api={"address"}  changeData={setAddress}/>
								<div className={cx("line")}></div>
							</div>
							<div className={cx("content")}>
								<EditBlock data={phoneNumber} title="Phone Number" api={"phoneNumber"}  changeData={setPhoneNumber}/>
								<div className={cx("line")}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EditPage;
