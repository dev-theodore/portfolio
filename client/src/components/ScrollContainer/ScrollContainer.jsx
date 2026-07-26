import { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import styles from './ScrollContainer.module.css'


export default function ScrollContainer({ projects, CardType, hoverState }) { // Recieves an *array* of contents and a *component* as prop

    const containerRef = useRef(null);

    const handleScroll = (direction) => {
        if (containerRef.current) {
        // Determine how far to scroll (e.g., 300px or containerRef.current.clientWidth for a full page)
            const scrollAmount = 300
            
            containerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    }   

    return (
        <div className={styles.slides_container}>
            <div className={styles.scroll_container} ref={containerRef}>  
                {
                    projects.map(project => (
                        <CardType
                            key={project.id} 
                            image={project.image}
                            title={project.title}
                        />  
                    ))
                }
            </div>

            <button onClick={() => handleScroll('left')} className={styles.left}><ChevronLeft size={16} /></button>
            <button onClick={() => handleScroll('right')} className={styles.right}><ChevronRight size={16} /></button>
        </div>
    )
}