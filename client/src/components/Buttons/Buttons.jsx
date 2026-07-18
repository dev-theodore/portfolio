import { ExternalLink, MoveUpRight, ArrowLeft  } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Buttons.module.css'


function PrimaryButton({ text }) {
    return (
        <button className={styles.primary}>
            <div>{text}</div>
            <MoveUpRight size={16} />
        </button>
    )
}

function SecondaryButton({ text }) {
    return (
        <button className={styles.secondary}>
            <div>{text}</div>
            <MoveUpRight size={16} />
        </button>
    )
}

function LinkButton({ link, text, icon }) {
    return (
        <a href={link} className={styles.link}>
            {icon}
            {text}
            <ExternalLink size={16} />
        </a>
    )
}

function BackButton({ path }) {
    return (
        <Link 
            to={path}
            className={styles.back}
        ><ArrowLeft size={20} /></Link>
    )
}


export default PrimaryButton
export { PrimaryButton, SecondaryButton, LinkButton, BackButton }
