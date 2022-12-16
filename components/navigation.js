import styles from "./MyNavigation.module.scss";
import { useState } from "react";
import {HashLink as Link} from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export default function Navigation({
    sobre,
    habilidades,
    projetos
}){
    const [isActive, setActive] = useState(false);
   
    function handleToggle(){
        isActive ? setActive(false) : setActive(true);
    }
    const navigation = styles.navigation;
    const navigationToggle = styles.navigationToggle;
    const toggleToggle = styles.toggleToggle;
    const toggle = styles.toggle;
    /*    
    <Router>
        <li><Link to={`#${sobre}`} smooth>Sobre</Link></li>
        <li><Link to={`#${habilidades}`} smooth>Habilidades</Link></li>
        <li><Link to={`#${projetos}`} smooth>Projetos</Link></li>
    </Router>

    */
    return(
        <div className={isActive ? `${navigationToggle} ${navigation}` : `${navigation}`} onClick={handleToggle}>
            <div className={isActive ? `${toggleToggle} ${toggle}` : `${toggle}`} onClick={handleToggle}><span></span></div>
            <ul>    
                <li><a href="#sobre" onClick={() => scrollTo(sobre)}>Sobre</a></li>
                <li><a href="#habilidade" onClick={() => scrollTo(habilidades)}>Habilidades</a></li>
                <li><a href="#projetos" onClick={() => scrollTo(projetos)}>Projetos</a></li>
            </ul>
        </div>
    );
}