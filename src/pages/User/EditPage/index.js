import { useEffect, useState } from "react";
import { userService } from "../../../services";
import styles from "./Edit.module.scss";
import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import EditBlock from "./EditBlock";
import { emitter } from "../../../utils/emitter";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { THEMES} from "../../../utils/constant";

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
	const [message, setMessage] = useState("Here is your message");
	const params = useParams();

	const currentTheme = useSelector((state) => state.app.theme);

	const listenToEmitter= ()=>{
		emitter.on('EVENT_EMIT_TEST',data=>{
			console.log("Listen emitter from parent: ",data);
		});
	}

	listenToEmitter();
	return (
		<div className={cx("container",currentTheme === THEMES.DARK && THEMES.DARK)}>
			<div className={cx("edit")}>
				<div className={cx("right")}>
					<div className={cx("right_main-head")}>
						<div className={cx("notify")}>
							<span>
								<FormattedMessage id="Edit_Page.setting-title"/>
							</span>
							<span className={cx("message")}>
								{message}
							</span>
						</div>
						<div className={cx("line")}></div>
					</div>
					<div className={cx("right_main-body")}>
						<div className={cx("right_content")}>
							<div className={cx("content")}>
								<EditBlock
									data={email}
									title="Email"
									api={"email"}
									changeData={setEmail}
									setMessage = {setMessage}
									disable
								/>
								<div className={cx("line")}></div>
							</div>
							<div className={cx("content")}>
								<EditBlock data={"***********"} 
								title={<FormattedMessage id="Edit_Page.password"/>} />
								<div className={cx("line")}></div>
							</div>
							<div className={cx("content")}>
								<EditBlock
									data={firstName}
									title={<FormattedMessage id="Edit_Page.first-name"/>}
									api={"firstName"}
									changeData={setFirstName}
									setMessage = {setMessage}

									
								/>

								<div className={cx("line")}></div>
							</div>
							<div className={cx("content")}>
								<EditBlock
									data={lastName}
									title={<FormattedMessage id="Edit_Page.last-name"/>}

									api={"lastName"}
									changeData={setLastName}
									setMessage = {setMessage}

								/>

								<div className={cx("line")}></div>
							</div>
							<div className={cx("content")}>
								<EditBlock
									data={address}
									title={<FormattedMessage id="Edit_Page.address"/>}

									api={"address"}
									changeData={setAddress}
									setMessage = {setMessage}

								/>
								<div className={cx("line")}></div>
							</div>
							<div className={cx("content")}>
								<EditBlock
									data={phoneNumber}
									title={<FormattedMessage id="Edit_Page.phone-number"/>}

									api={"phoneNumber"}
									changeData={setPhoneNumber}
									setMessage = {setMessage}

								/>
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
