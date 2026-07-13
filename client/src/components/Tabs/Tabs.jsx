import { useState } from 'react';
import { ChevronDown ,ListFilter} from 'lucide-react';
import styles from './Tabs.module.css'

function CategoryTab({ category , active, setActiveTab }) {
    return (
        <button className={
            `${styles.category} 
            ${active === category ? styles.active : ''}`}
            onClick={() => setActiveTab(category)}
        >{category}</button>
    )
}

function FilterTab({ choice }) {

    let size = 12
    const [isOpen, setIsOpen] = useState(false)

    function handleClick() {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }
    
    return (
        <button className={`${styles.filter} ${isOpen && styles.active}`} onClick={handleClick}>
            <ListFilter size={size} />
            <p>Filter: {choice}</p>
            <div className={`${styles.icon} ${isOpen && styles.icon_rotate}`}><ChevronDown size={size} /></div>
        </button>
    )
}

export default CategoryTab
export { CategoryTab, FilterTab }