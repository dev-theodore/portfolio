import { Link } from 'react-router-dom';
import { Moon, SunMedium } from 'lucide-react'
import styles from './NavBar.module.css'


function NavBar({ pages, theme, activePage, changeTheme, setActivePage }) {

    const [forward, backward] = [{rotate: '360deg'}, {rotate: '-360deg'}]

    return (
        <header className={styles.header}>
            <div className={styles.logo}>Logo</div>

            <nav aria-label="Main Naviagtion" className={styles.nav}>
                {pages.map(page => 
                    <Link 
                        key={page.id}
                        to={page.path}
                        className={`${styles.nav_link}  ${activePage === page.name ? styles.active : ''}`}
                        onClick={() => {setActivePage(page.name)}}
                    >{page.name}</Link>
                )}
            </nav>

            <div className={styles.divider}></div>
            
            <div 
                className={styles.toggle} 
                onClick={changeTheme}
                style={theme === 'dark' ? forward : backward}>
                    {
                        theme === 'dark' ? 
                        <SunMedium size={16} /> : 
                        <Moon size={16} />
                    }
            </div>
        </header>
    )
}

export default NavBar