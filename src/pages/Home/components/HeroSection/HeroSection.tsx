import { Button } from 'antd'
import styles from './hero-section.module.scss'
import { TbCircleCheckFilled } from 'react-icons/tb'
import { nanoid } from 'nanoid'

export default function HeroSection() {
    const offers = [
        {
            icon: <TbCircleCheckFilled />,
            id: nanoid(),
            title: 'Qualified Doctors'
        },
        {
            icon: <TbCircleCheckFilled />,
            id: nanoid(),
            title: 'Affordable Fees'
        },
        {
            icon: <TbCircleCheckFilled />,
            id: nanoid(),
            title: 'Best Services'
        }
    ]
    return (
        <div className={styles.heroWrapper}>
            <div className="col-md-6">
                <div className={styles.heroSection}>
                    <div className={styles.subtitle}>
                        <small>Apex Beat</small>
                    </div>
                    <h1 className={styles.title}>Welcome to the best medical center</h1>
                    <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ab unde minima laborum dolorum illum provident placeat amet? Est, maiores quos illo nam beatae similique alias placeat saepe dolor accusantium.</p>
                </div>
                <Button className={styles.book_btn} type="primary">Book an appointment</Button>
                <ul className={styles.offers}>
                    {offers.map(offer => (
                        <li key={offer.id}>
                            <span>{offer.icon}</span>
                            <span>{offer.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="col-md-6">
                <div className={styles.heroSection}>
                    <img src="https://via.placeholder.com/500" alt="Medical center" />
                </div>
            </div>
            
        </div>
    )
}
