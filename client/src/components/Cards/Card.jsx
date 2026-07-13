import { descriptionTrimer, titleTrimer } from '../../utils/word-trim'
import styles from './Card.module.css'
import Tabs from '../Tabs/Tabs'
import { useState } from 'react'

function Card({ title, description, image, category, style}) {

    const [hover, setHover] = useState(false)
    const [display, noDisplay] = [{display: 'flex', zIndex: '1'}, {display: 'none', zIndex: '1'}]
    const cardTitle = titleTrimer(title)
    const cardDesc = descriptionTrimer(description)

    return (
        <article  className={styles.card} >

            <div 
                className={styles.image}
                onMouseEnter={() => setHover(true)} 
                onMouseLeave={()=> setHover(false)}>

                <img src={image} alt='artwork image' />
                <div className={styles.gradient} style={hover ? display : noDisplay}></div>

                <div className={styles.tags} style={hover ? display : noDisplay}>
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