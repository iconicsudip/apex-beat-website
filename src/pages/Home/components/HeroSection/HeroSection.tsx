import { Button } from 'antd'
import styles from './hero-section.module.scss'
import { TbCircleCheckFilled } from 'react-icons/tb'
import { nanoid } from 'nanoid'
import DoctorHeroImage from '../../../../assets/Doctors-hero.png'

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
                        <small>Premium Polyclinic at Konnagar</small>
                    </div>
                    <h1 className={styles.title}>Welcome to Apexbeat Clinic</h1>
                    <p className={styles.description}>At our multi-site clinic, we put your health and well-being first by providing high-quality medical services. Our dedicated team of qualified physicians and specialists are committed to providing the best possible care in a comfortable and welcoming environment. We offer a wide range of medical services at affordable rates to meet all your healthcare needs.</p>
                </div>
                <a href='tel:+917439789989'>
                    <Button className="book_btn" type="primary">Book an appointment</Button>

                </a>
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
                    <img src={DoctorHeroImage} alt="Medical center" />
                </div>
            </div>

        </div>
    )
}
