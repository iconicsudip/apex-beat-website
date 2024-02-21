import { Link } from 'react-router-dom'
import styles from './specialist.module.scss'
interface Props {
    specialist: {
        name: string
        degree: string
        specialty: string
        image: string,
        slug: string,
        description: string
    },
    maxLength: number

}

export default function Specialist({ specialist,maxLength }: Props) {
    const degree = typeof specialist.degree === 'string' ? specialist.degree.split(',') : specialist.degree;
    const minimumSizeDescription = specialist.description.slice(0, maxLength);
    return (
        <div className={styles.specialist}>
            <Link to={`/specialists/${specialist.slug}`} >
                <img src={specialist.image} alt={specialist.name} />
                <div className={styles.doctor}>
                    <div>
                        <h3 className={styles.name}>{specialist.name}</h3>
                        <small className={styles.specialty}>{specialist.specialty}</small>
                        <p className={styles.desc}>
                            {minimumSizeDescription}
                            {specialist.description.length > maxLength && <>... <span className={styles.see_more}>See more</span></>}
                        </p>
                    </div>
                    <div className={styles.degree}>
                        {degree.map((deg, index) => (
                            <small className={styles.badge} key={index}>{deg}</small>
                        ))}
                    </div>
                </div>
            </Link>
        </div>
    )
}
