import styles from "./ButtonPost.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
					

function ButtonPost({icon,text,onClick,liked}) {
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
            <div className={cx('text',liked &&'liked')}>
                {text}
            </div>
        </div>

    </> );
}

export default ButtonPost;