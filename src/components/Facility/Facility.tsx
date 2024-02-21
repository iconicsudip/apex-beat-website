import styles from './facility.module.scss'
interface Props {
    title: string
    description: string
    isActive?: boolean
}
export default function Facility({ title, description, isActive = false }: Props) {
    return (
        <div className={`${styles.facility} ${isActive ? styles.active : ''}`}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
        </div>
    )
}
