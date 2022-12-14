import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from './MySection.module.scss';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function MySection({
    image,
    headline,
    scrollTo,
    goToSectionRef,
    showArrow,
}){
    const headlineRef = useRef();
    /*useEffect(() => {
        gsap.fromTo(
            headlineRef.current,
            {
                autoAlpha: 0,
                y: -20,
            },
            {
                autoAlpha: 1,
                duration: 1,

                scrollTrigger: {
                    scroller: ".cotainer",
                    trigger: headlineRef.current,
                    start: "top 60%",
                    end: "bottom 0%",
                    toggleActions: "play none restart reverse",
                },
            }
        );
    },[]);*/
    return(
        <div className={styles.section}>
            <div className={styles.copy}>
                <h2>{headline}</h2>
            </div>
            <Image src={image} layout={`fill`}/>
            {showArrow && (
                <button className={styles.downarrow}
                    onClick={() => scrollTo(goToSectionRef)}></button>
            )}
        
        
        </div>
    );
}