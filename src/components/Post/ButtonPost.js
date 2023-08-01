import styles from "./ButtonPost.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
					

function ButtonPost({icon,text}) {
    return ( 
    <>
        <div className={cx('wrapper')}>
            <div className={cx('icon')}>
                {icon}
            </div>
            <div className={cx('text')}>
                {text}
            </div>
        </div>

    </> );
}

export default ButtonPost;