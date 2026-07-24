import styles from './Card.module.css'

function SuggestionCard({ image }) {
    return (
        <div className={styles.suggestion_card}>
            <img src={image} />
        </div>
    )
}

export default SuggestionCard