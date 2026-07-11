import { ExternalLink, MoveUpRight } from 'lucide-react';
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
            <div className={styles.icon}>{icon}</div>
            <div>{text}</div>
            <ExternalLink size={16} />
        </a>
    )
}

export default PrimaryButton
export { PrimaryButton, SecondaryButton, LinkButton }
