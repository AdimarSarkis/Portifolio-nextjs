import styles from '../styles/MySkill.module.scss';
import Cards from './Cards';


export default function Skill(){
   
    return(
    <div className={styles.container}>
        <div className={styles.skills}>
            
            <Cards
                image={`/imagens/reactjs.svg`}
                nome={"Reactjs"}
                nivel={"Básico/Intermediário"}
            />
            <Cards
                image={`/imagens/sass.svg`}
                nome={"Sass"}
                nivel={"Básico"}
            />
            <Cards 
                image={`/imagens/html5.svg`}
                nome={"HTML 5"}
                nivel={"Intermediário"}
            />
            <Cards 
                image={`/imagens/css3.svg`}
                nome={"CSS 3"}
                nivel={"Intermediário"}
            />
            <Cards 
                image={`/imagens/js.svg`}
                nome={"JavaScript"}
                nivel={"Básico"}
            />
            <Cards 
                image={`/imagens/angular.svg`}
                nome={"Angular"}
                nivel={"Básico"}
            />
            <Cards 
                image={`/imagens/getbootstrap.svg`}
                nome={"Bootstrap"}
                nivel={"Básico"}
            />              
            <Cards 
                image={`/imagens/Tailwind_CSS_Logo.svg`}
                nome={"Tailwind css"}
                nivel={"Básico"}
            />              
        </div>
            
    </div>    
    );
}