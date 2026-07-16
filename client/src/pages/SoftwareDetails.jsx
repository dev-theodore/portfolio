import { LinkButton, BackButton } from '../components/Buttons/Buttons'
import { SiGithub, SiGooglechrome} from '@icons-pack/react-simple-icons'
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { useState, useRef } from 'react';
import Description from '../components/Description/Description'
import imageSrc from '../data/imageSrc'
import styles from './SoftwareDetails.module.css'


function SoftwareDetails() {

    const techTabs = ['HTML', 'CSS', 'JavaScript', 'Git', 'React', 'Express']
    const [activeID, setAvtiveID] = useState(1)
    // const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    const handleScroll = (direction) => {
        if (containerRef.current) {
        // Determine how far to scroll (e.g., 300px or containerRef.current.clientWidth for a full page)
            const scrollAmount = 200
            
            containerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    }

    // const buttonsVisibility = () => {
    //     isVisible ? setIsVisible(false) : setIsVisible(true)
    // }

    return (
        <div  className={styles.page}>
            <section className={styles.info}>

                <BackButton path='/software-projects' />

                <Description
                    title='Example Title Here!'
                    tabs={techTabs}
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed odio nec augue 
                    vehicula pretium non ut diam. Vestibulum et rhoncus nulla, id vulputate elit.' 
                />

                <LinkButton 
                    link=''
                    text='GitHub Repository'
                    icon={<SiGithub size={18} />}
                />
                <LinkButton 
                    link=''
                    text='Live Site'
                    icon={<SiGooglechrome size={18} />}
                />
            </section>

            <section className={styles.image_container}>
                <div>
                    <div className={styles.frame}>
                        <img 
                            src={ (imageSrc.find(img => img.id === activeID)).url } // match image url to active image id
                            alt='project image' 
                        />
                        <button><Maximize2 size={16} /></button>
                    </div>

                    <div className={styles.slides_container}>
                        <div className={styles.scroll_container} ref={containerRef}>  
                            {
                                imageSrc.map(image => (
                                    <img 
                                        key={image.id} 
                                        className={`${styles.slide} ${activeID === image.id ? styles.active : ''}`} 
                                        src={image.url} 
                                        onClick={() => setAvtiveID(image.id)} //set active image based in the unique image id
                                    />   
                                ))
                            }
                        </div>

                        <button onClick={() => handleScroll('left')} className={styles.left}><ChevronLeft size={16} /></button>
                        <button onClick={() => handleScroll('right')} className={styles.right}><ChevronRight size={16} /></button>
                    </div>
                </div>
            </section>
        </div>
    )  
}

export default SoftwareDetails