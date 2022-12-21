import { BsGithub, BsLinkedin } from 'react-icons/bs';
import styles from '../styles/MyContato.module.scss';
export default function Contato(){
    return(
        <div className={styles.contato}>
            <a href='https://github.com/AdimarSarkis' target={"_blank"}><BsGithub /></a>
            <a href='https://www.linkedin.com/in/adimar-sarkis-21b3a6239/' target={"_blank"}><BsLinkedin /></a>
        </div>
    );
}