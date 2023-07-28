import styles from "./Line.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Line({strong,dark}){

    
    return (
        <div className={cx("line",strong && "strong" ,dark && "dark")}></div>
    )
}
export default Line;