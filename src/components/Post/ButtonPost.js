import styles from "./ButtonPost.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
					

function ButtonPost({icon,text,onClick,liked,nopad}) {
    const handleOnClick = ()=>{
        if(typeof onClick==='function'){
            onClick();
        }
    }
    return ( 
    <>
        <div className={cx('wrapper')}
            onClick={handleOnClick}
        >
            <div className={cx('icon')}>
                {icon}
            </div>
            <div className={cx('text',liked &&'liked',nopad && "no_pad")}>
                {text}
            </div>
        </div>

    </> );
}

export default ButtonPost;