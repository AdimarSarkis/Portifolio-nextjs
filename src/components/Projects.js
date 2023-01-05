import styles from '../styles/MyProjects.module.scss';
import CarouselBox from './Carousel';
import { useEffect, useState, useRef } from 'react';
import {motion} from 'framer-motion';
export default function Project(){
    const slides = [
        {
            nome: "Comentario de livros",
            descricao: "Primeiro projeto web realizado com html, css e js puros",
            image: "/imagens/comentario-livro.png",
            linkSite: "https://comentarios-livros.netlify.app/galeria/galeria.html",
            linkGit: "https://github.com/AdimarSarkis/comentarios-Livros",
            breve: false,
        },
        {
            nome: "Protótipo do Portfólio",
            descricao: "Site desenvolvido como protótipo do portfólio sem framework",
            image: "/imagens/prototipo.png",
            linkGit: "https://github.com/AdimarSarkis/Portifolio-html",
            linkSite: "https://prototipohtml.netlify.app",
            breve: false,
        },
        {
            nome: "Projeto CRUD de usuários",
            descricao: "Projeto crud desenvolvido com nextjs e JSON server",
            image: "/imagens/crud.png",
            linkGit: "https://github.com/AdimarSarkis/nextjs-crud",
            linkSite: "https://nextjs-crud-rho.vercel.app",
            breve: false,
        },
        {
            nome: "Lorem ispuls",
            descricao: "Lorem Lorem Lorem Lorem Lorem Lorem",
            image: "",
            breve: true,
        },
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
                    <motion.div className={"item"} key={slides}>
                        <CarouselBox 
                        nome={item.nome}
                        descricao={item.descricao}
                        image={item.image}
                        breve={item.breve}
                        linkSite={item.linkSite}
                        linkGit={item.linkGit}/>
                    </motion.div>
                ))}
              
            </motion.div>
            
        </motion.div>
    );
}