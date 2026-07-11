import styles from './Links.module.css'

function Links({ link, icon }) {
    return (
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.links}>
                {icon}
        </a>
    )
}

export default Links