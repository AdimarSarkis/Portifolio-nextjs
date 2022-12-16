import styles from "./MyNavigation.module.scss";
import { useState } from "react";


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
                <li><a href="#about" onClick={() => scrollTo(sobre)}>About</a></li>
                <li><a href="#skills" onClick={() => scrollTo(habilidades)}>Skills</a></li>
                <li><a href="#projects" onClick={() => scrollTo(projetos)}>Projects</a></li>
            </ul>
        </div>
    );
}