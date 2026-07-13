import { descriptionTrimer, titleTrimer } from '../../utils/word-trim'
import styles from './Card.module.css'
import Tabs from '../Tabs/Tabs'

function Card({ title, description, image, category, style}) {

    const cardTitle = titleTrimer(title)
    const cardDesc = descriptionTrimer(description)

    return (
        <article className={styles.card}>

            <div className={styles.image}>

                <img src={image} alt='artwork image' />
                <div className={styles.gradient}></div>

                <div className={styles.tags}>
                    <Tabs category={category} />
                    <Tabs category={style} />
                </div>

            </div>

            <div className={styles.descriptions}>
                <h2>{cardTitle}</h2>
                <p>{cardDesc}</p>
            </div>

        </article>
    )
}

export default Card