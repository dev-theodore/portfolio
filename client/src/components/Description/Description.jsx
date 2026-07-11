import styles from './Description.module.css'

function Description({ title, description }) {
    return(
        <section className={styles.container}>
            <h1>{title}</h1>
            <p>{description}.</p>
        </section>
    )
}

export default Description