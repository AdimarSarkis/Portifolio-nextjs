import styles from './MyProjects.module.scss';
import CarouselBox from './Carousel';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import {motion} from 'framer-motion';
export default function Project({
    imageBox1,
    nomeBox1,
    descricaoBox1,
    imageBox2,
    nomeBox2,
    descricaoBox2,
    imageBox3,
    nomeBox3,
    descricaoBox3,
    imageBox4,
    nomeBox4,
    descricaoBox4,
    imageBox5,
    nomeBox5,
    descricaoBox5,
    breve
}){
    const slides = [
        {
            nome: nomeBox1,
            descricao: descricaoBox1,
            image: imageBox1,
            breve: true,
        },
        {
            nome: nomeBox2,
            descricao: descricaoBox2,
            image: imageBox2,
            breve: true,
        },
        {
            nome: nomeBox3,
            descricao: descricaoBox3,
            image: imageBox3,
            breve: true,
        },
        {
            nome: nomeBox4,
            descricao: descricaoBox4,
            image: imageBox4,
            breve: true,
        },
        {
            nome: nomeBox5,
            descricao: descricaoBox5,
            image: imageBox5,
            breve: true,
        }
    ]

    const carousel = useRef();
    const [width, setWidth] = useState(0);
    useEffect(() => {
        console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[])
    return(
        <motion.div ref={carousel} className={styles.container} whileTap={{cursor: "grabbing"}}>
            <motion.div className={styles.slider} 
            drag={"x"}
            dragConstraints={{right: 0, left: -width}}>
                {slides.map(item => (
                    <motion.div ClassName={"item"} key={slides}>
                        <CarouselBox 
                        nome={item.nome}
                        descricao={item.descricao}
                        image={item.image}
                        breve={item.breve}/>
                    </motion.div>
                ))}
              
            </motion.div>
            
        </motion.div>
    );
}