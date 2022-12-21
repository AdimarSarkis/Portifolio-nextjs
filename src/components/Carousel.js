import styles from '../styles/MyCarousel.module.scss';
import Image from 'next/image';
export default function CarouselBox({
    nome,
    descricao,
    image,
    breve,
    linkSite,
    linkGit,
}){
    return (
        
        <div className={`${styles.box}`}>
            
            {breve ? (
                <>
                <div className={styles.scroll}>
                    <div className={styles.breve}>
                        <span> Em Breve - Em Breve - Em Breve - Em Breve
                            - Em Breve - Em Breve - Em Breve - Em Breve
                            - Em Breve - Em Breve - Em Breve - Em Breve
                        </span>
                    </div>
                    <div className={styles.breve}>
                        <span> Em Breve - Em Breve - Em Breve - Em Breve
                            - Em Breve - Em Breve - Em Breve - Em Breve
                            - Em Breve - Em Breve - Em Breve - Em Breve
                        </span>
                    </div>
                </div>
                </>
            ) : (
                <>
                <Image src={image} className={styles.img} layout={`fill`}/>
                <div className={styles.details}>
                    <h2>{nome}</h2>
                    <p>{descricao}</p>
                    <div className={styles.btns}>
                        <button><a href={linkSite} target="_blank">VISITAR</a></button>
                        <button><a href={linkGit} target="_blank">GITHUB</a></button>

                    </div>
                </div>
                </>
            )}
            
            
        </div>

    );
}