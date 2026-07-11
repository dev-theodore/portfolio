import styles from './Recent.module.css'

function Recent({ heading }) {
    return (
        <section aria-labelledby='recent-content' className={styles.container}>
            <div className={styles.head}>
                <h2>{heading}</h2>
                <hr />
            </div>

            <div className={styles.content}></div>
        </section>
    )
}

export default Recent