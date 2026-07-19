import CategoryTab from '../Tabs/Tabs'
import { Icons } from '../../data/icons'
import styles from './Description.module.css'

function Description({ title, tabs, description }) {

    let size = 14

    return(
        <section className={styles.container}>
            <h1>{title}</h1>
            <div className={styles.tabs}>
                {tabs && tabs.map(tab => {
                    const tabIcon = Icons.find(icon => tab === icon.name);
                    const Icon = tabIcon.icon;

                    return (
                        <CategoryTab 
                            key={tabIcon.id}
                            category={tabIcon.name}    
                            icon={<Icon color={tabIcon.color} size={size} />} 
                        />
                    )
                })}
            </div>
            <p>{description}.</p>
        </section>
    )
}

export default Description