import styles from './NavBar.module.css'

function NavBar() {
    const pages = ['Home', 'Software Projects', '3D Artwork', 'About', 'Skills', 'Contact']

    return (
        <header className={styles.header}>
            <div className={styles.logo}>Logo</div>

            <nav aria-label="Main Naviagtion" className={styles.nav}>
                <ul className={styles.ul}>
                    {pages.map(page => <li value={page} className={styles.li}> {page} </li> )}
                </ul>
            </nav>
            
            <div className={styles.themeToggle}>x</div>
        </header>
    )
}

export default NavBar