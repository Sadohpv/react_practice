import { LocationIcon } from "../../asset/icons";
import Avartar from "../../components/Avatar/Avatar";
import FriendBlock from "../../components/Layout/ProfileLayout/FriendBlock";
import styles from "./FriendElementHover.module.scss";
import classNames from "classnames/bind";
import { FormattedMessage } from "react-intl";

const cx = classNames.bind(styles);

function FriendElementHover({ data }) {
	// console.log(data);
	return (
		<div className={cx("wrapper")}>
			<div className={cx("review_avatar")}>
				<Avartar src={data.avatar} borderCustom={"review_avatar"} />
			</div>
			<div className={cx("review_infor")}>
				{/* <div className={cx("infor")}>
                    <span className={cx("infor_big")}>
                        {data.userName}
                    </span>
                </div> */}
				<div className={cx("infor")}>
					<span className={cx("infor_big")}>{data.firstName}</span>
					<span className={cx("infor_big")}>{data.lastName}</span>
				</div>
				<div className={cx("infor")}>
					<span>
						<LocationIcon width="16px" height="16px" />
					</span>
					<span>{data.address}</span>
				</div>
				<div className={cx("infor")}>
					<span>21</span>
					<span>
						<FormattedMessage id="Friend_Page.mutual_friend" />
					</span>
				</div>
				<div className={cx("friend_mutual")}>
					{/* {/* <FriendBlock data={data}/> */}
					{/* <FriendBlock data={data}/> */}
					{/* <FriendBlock data={data}/> */}
				
						<FriendBlock data={data} />
						<FriendBlock data={data} />
						<FriendBlock data={data} />
						<FriendBlock data={data} />
						<FriendBlock data={data} />

				
				</div>
			</div>
		</div>
	);
}

export default FriendElementHover;
