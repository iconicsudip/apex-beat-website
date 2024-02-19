import { I_Service } from '../../interfaces/components'
import styles from './service.module.scss'

interface Props {
    service: I_Service
}

export default function Service({ service }: Props) {
    return (
        
        <div className={`col-lg-3 col-md-6`} >
            <div className={styles.serviceWrapper} style={{ backgroundColor: service.backgroundColor }}>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.desc}>{service.description}</p>
            </div>
        </div>
    )
}
