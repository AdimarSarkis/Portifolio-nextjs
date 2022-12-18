import styles from './MyCarousel.module.scss';
export default function CarouselBox({
    nome,
    descricao,
    image,
    num
}){
    return (
        <div className={`${styles.box} box${num}`}>
            <div className={styles.bg}></div>
            <div className={styles.details}>
                <h1>{nome}</h1>
                <p>{descricao}</p>

                <button>Check Now</button>
            </div>
            <div className={styles.illustration}><div className={styles.inner}></div></div>
        </div>

    );
}