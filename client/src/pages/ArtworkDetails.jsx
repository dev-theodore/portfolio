import Description from '../components/Description/Description'
import { BackButton } from '../components/Buttons/Buttons'
// import { SiGumroad, SiPatreon} from '@icons-pack/react-simple-icons'
import { Maximize2 } from 'lucide-react'
import imageSrc from '../data/imageSrc'
import styles from './ArtworkDetails.module.css'

export default function ArtworkDetails() {

    const artTabs = ['Blender', 'Maya', 'Unreal', 'Unity', 'Godot','Krita', 'DaVinci Resolve']

    return (
        <div className={styles.page}>
            <section className={styles.info}> {/*Left section of the page that contains info and images */}
                <BackButton path='/3d-artwork' />

                <h1>God of War</h1>

                <Description 
                    tabs={artTabs}
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio nec augue 
                    vehicula pretium non ut diam. Vestibulum et rhoncus nulla, id vulputate elit.'
                />

                <div className={styles.image_container}>
                    {imageSrc.map(image => (
                            <div key={image.id}>
                                <img src={image.url} alt='artwork image' />
                                <button><Maximize2 size={16} /></button>
                            </div>
                        )
                    )}
                </div>
            </section>

            <section className={styles.showcase}> {/* Right section of the page that contains project showacase */}
                    <div className={styles.background_art}></div>
                    <div className={styles.art}></div>
                    <div className={styles.more}></div>
            </section> 
        </div>
    )
}