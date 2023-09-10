import { useEffect } from "react";
import styles from "./ElectricSpider.module.scss";
import classNames from "classnames/bind";
import { Helmet } from 'react-helmet';
import { Script } from "./script";
const cx = classNames.bind(styles);

function ElectricSpider() {
    useEffect(()=>{
        Script();
    })
	return (
		<div className={cx("wrapper")}>
			<canvas id="canvas" className={cx("can")}></canvas>

           
          
		</div>
	);
}

export default ElectricSpider;
