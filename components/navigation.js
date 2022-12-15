import styles from "./MyNavigation.module.scss";
import { useRef, useLayoutEffect, useState } from "react";

export default function Navigation(){
    const [isActive, setActive] = useState(false);
   
    function handleToggle(){
        isActive ? setActive(false) : setActive(true);
        console.log(isActive);
    }
    const className1 = styles.navigation;
    const className2 = styles.toggle;
    return(
        <div className={isActive ? `navigationToggle ${className1}` : styles.navigation} onClick={handleToggle}>
            <div className={isActive ? `toggleToggle ${className2}` : styles.toggle} onClick={handleToggle}><span></span></div>
            <ul>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Habilidades</a></li>
                <li><a href="#">Projetos</a></li>
            </ul>
        </div>
    );
}