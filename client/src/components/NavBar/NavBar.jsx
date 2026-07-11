import { useState } from 'react'
import { Moon, SunMedium } from 'lucide-react'
import styles from './NavBar.module.css'


function NavBar() {
    const pages = ['Home', 'Software Projects', '3D Artwork', 'About', 'Skills', 'Contact'];
    const [theme, setTheme] = useState('dark')
    

    function changeTheme() {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>Logo</div>

            <nav aria-label="Main Naviagtion" className={styles.nav}>
                <ul className={styles.ul}>

                    {pages.map(page => 
                        <li value={page} 
                            key={page}
                            className={styles.li}> 
                            {page} 
                        </li> 
                    )}

                </ul>
            </nav>

            <div className={styles.divider}></div>
            
            <div className={styles.toggle} onClick={changeTheme}>
                {
                    theme === 'dark' ? 
                    <SunMedium size={16} /> : 
                    <Moon size={16}/>
                }
            </div>
        </header>
    )
}

export default NavBar