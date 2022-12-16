import styles from './MyCards.module.scss'
import Image from 'next/image';
export default function cards({
    image,
    nome,
    nivel
}){
    return(
        <div>
            <div className={styles.card}>
                <Image src={image} width={90} height={90}/>
                <h3>{nome}</h3>
                <p>{nivel}</p>
            </div>
        </div>
    );
}