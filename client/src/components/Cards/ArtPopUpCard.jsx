import styles from './ArtPopUpCard.module.css'
import { shortTrimer } from '../../utils/word-trim'

function ArtPopUpCard({image, title}) {

    const trimedTitle = shortTrimer(title)
    const capitalizedTitle = trimedTitle.toUpperCase()

    return (
        <article className={styles.wrapper}>
            <div className={styles.container}>
                <img src={image} />
                <div className={styles.gradient}></div>
                <h2>{capitalizedTitle}</h2>
            </div>
        </article>
    )
}

export default ArtPopUpCard