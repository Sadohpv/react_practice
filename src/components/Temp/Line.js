import styles from "./Line.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Line({strong}){

    
    return (
        <div className={cx("line",strong ? "strong" : "")}></div>
    )
}
export default Line;