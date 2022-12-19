import styles from './MyCarousel.module.scss';
import Image from 'next/image';
export default function CarouselBox({
    nome,
    descricao,
    image,
    num
}){
    return (
        
        <div className={`${styles.box} box${num}`}>
            <Image src={image} className={styles.img} layout={`fill`}/>
            <div className={styles.bg}></div>
            <div className={styles.details}>
                <h2>{nome}</h2>
                <p>{descricao}</p>

                <button><a>VISITAR</a></button>
            </div>
        </div>

    );
}