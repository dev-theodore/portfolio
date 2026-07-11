import { useState } from 'react';
import { ChevronDown , ChevronUp, ListFilter} from 'lucide-react';
import styles from './Tabs.module.css'

function CategoryTab({ category }) {
    return (
        <button className={styles.category}>{category}</button>
    )
}

function FilterTab({ choice }) {

    const [isOpen, setIsOpen] = useState(false)
    let size = 12

    function handleClick() {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }

    return (
    <button className={styles.filter} onClick={handleClick}>
            <ListFilter size={size} />
            <p>Filter: {choice}</p>
            {isOpen ? <ChevronUp size={size} /> : <ChevronDown size={size}/>}
        </button>
    )
}

export default CategoryTab
export { CategoryTab, FilterTab }