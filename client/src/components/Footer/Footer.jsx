import { Copyright } from 'lucide-react';
import styles from './Footer.module.css'

function Footer() {
    var date = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
           <p>Copyright</p> <Copyright size={12} /> <p>{date} - Made by Theodore</p>
        </footer>
    )
}

export default Footer