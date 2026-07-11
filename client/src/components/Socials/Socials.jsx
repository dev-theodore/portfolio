import { SiArtstation, SiYoutube, SiGithub, SiInstagram, SiX } from '@icons-pack/react-simple-icons'
import Links from "../Links/Links"
import URL from '../../data/URLs'
import styles from './Socials.module.css'


function Socials({ text }) {
   
    return (
        <div className={styles.socials}>
            <p>{text}</p>

            <div className={styles.container}>
                <Links
                    link={URL.github}
                    icon={<SiGithub title='GitHub' size={18} />}
                />
                <Links
                    link={URL.artsation}
                    icon={<SiArtstation title='Arstation' size={18} />}
                />
                <Links
                    link={URL.X}
                    icon={<SiX title='Twitter' size={18} />}
        
                />
                <Links
                    link={URL.instagram}
                    icon={<SiInstagram title='Instagram' size={18} />}
                />
                <Links
                    link={URL.youtube}
                    icon={<SiYoutube title='Youtube' size={18} />}
                />
            </div>
        </div>
    )
}

export default Socials