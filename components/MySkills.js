import styles from './MySkill.module.scss';
import Cards from './Cards';


export default function Skill(){
    /*
    <div>   
            <div className={styles.softskills}>
                <h3>Adaptabilidade</h3>
                <h3>Esforçado</h3>
                <h3>Proativo</h3>
                <h3>Metodologia ágil</h3>
                <h3>Flexibilidade</h3>
                <h3>Resiliência</h3>
                <h3>Paixão por Aprender</h3>
                <h3>Responsabilidade</h3>
                <h3>Colaboração</h3>
            </div>
        </div>
    */
    return(
    <div className={styles.container}>
        <div className={styles.skills}>
            <Cards
                image={`/imagens/vue.svg`}
                nome={"VueJs"}
                nivel={"Básico"}
            />
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
        </div>
            
    </div>    
    );
}