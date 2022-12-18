import styles from './MyProjects.module.scss';
import CarouselBox from './Carousel';
import Image from 'next/image';
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
}){
    return(
        <div className={styles.container}>
            <div className={styles.slider}>
                <CarouselBox 
                    image={imageBox1}
                    nome={nomeBox1}
                    descricao={descricaoBox1}
                    num={1}
                />
                <CarouselBox 
                    image={imageBox2}
                    nome={nomeBox2}
                    descricao={descricaoBox2}
                    num={2}
                />
                <CarouselBox 
                    image={imageBox3}
                    nome={nomeBox3}
                    descricao={descricaoBox3}
                    num={3}
                />
                <CarouselBox 
                    image={imageBox4}
                    nome={nomeBox4}
                    descricao={descricaoBox4}
                    num={4}
                />
                <CarouselBox 
                    image={imageBox5}
                    nome={nomeBox5}
                    descricao={descricaoBox5}
                    num={5}
                />
            </div>
        </div>
    );
}