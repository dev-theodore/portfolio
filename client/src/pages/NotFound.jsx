import { PrimaryButton } from '../components/Buttons/Buttons'
import styles from './NotFound.module.css'

export default function NotFound() {
    return (
        <div className={styles.page}>
            <h1>404</h1>
            <h2>Sorry!, Page not found</h2>
            <p>The page you are looking for doesn't exist or another error occured. <br />
            Go back, or head over to any of the pages below </p>

            <div>
                <PrimaryButton text='Home' />
                <PrimaryButton text='Software Projects' />
                <PrimaryButton text='3D Artwork' />
            </div>
        </div>
    )
}