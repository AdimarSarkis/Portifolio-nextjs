import Image from "next/image";
import styles from './MySection.module.scss';

export default function MySection({
    image,
    headline,
    scrollTo,
    goToSectionRef,
    showArrow,
    components,
}){
    return(
        <div className={styles.section}>
            <div className={styles.copy}>
                <h2>{headline}</h2>
            </div>
            <Image src={image} layout={`fill`}/>
            <div>{components}</div>
            {showArrow && (
                <button className={styles.downarrow}
                    onClick={() => scrollTo(goToSectionRef)}></button>
            )}
        
        
        </div>
    );
}