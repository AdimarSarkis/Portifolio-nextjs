import styles from '../styles/MySkill.module.scss';
import Cards from './Cards';


export default function Skill(){
   
    return(
    <div className={styles.container}>
        <div className={styles.skills}>
            
            <Cards 
                image={`/imagens/mongodb-svgrepo-com.svg`}
                nome={"MongoDB Atlas"}
                nivel={"Básico"}
            />
            <Cards
                image={`/imagens/express-svgrepo-com.svg`}
                nome={"Express"}
                nivel={"Básico"}
            />
            <Cards
                image={`/imagens/reactjs.svg`}
                nome={"Reactjs"}
                nivel={"Básico/Intermediário"}
            />
            <Cards 
                image={`/imagens/nodejs.svg`}
                nome={"Node.js"}
                nivel={"Básico"}
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
                image={`/imagens/microsoftsqlserver-svgrepo-com.svg`}
                nome={"SQL Server"}
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