import { BsGithub, BsLinkedin } from 'react-icons/bs';
import styles from './MyContato.module.scss';
export default function Contato(){
    return(
        <div className={styles.contato}>
            <a href='https://github.com/AdimarSarkis'><BsGithub /></a>
            <a href='https://www.linkedin.com/in/adimar-sarkis-21b3a6239/'><BsLinkedin /></a>
        </div>
    );
}