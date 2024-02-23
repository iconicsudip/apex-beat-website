import styles from './specialist-details.module.scss'
import { useParams } from 'react-router-dom'

export default function SpecialistDetails() {
    const { slug } = useParams();
    return (
        <div className={styles.specialistDetails}>{slug}</div>
    )
}
