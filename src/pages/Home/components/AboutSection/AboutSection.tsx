import { Button } from 'antd'
import styles from './about-section.module.scss'
import about from '../../../../assets/about.png'

export default function AboutSection() {
  return (
    <div id="about" className={styles.aboutSection}>
      <div className="heading">
        <h2 className='title'>What we are</h2>
        <p className='desc'>
          Where compassion meets knowledge and healing begins.
        </p>
      </div>
      <div className={styles.about}>
        <div className="col-md-6">
          <div className={styles.about_image}>
            <img src={about} />
          </div>
        </div>
        <div className="col-md-6">
          <p className={styles.desc}>
            At our medical center, we are more than just a health care facility – we are a beacon of hope, a sanctuary of healing, and a community of compassionate professionals dedicated to your well-being. We are committed to providing exceptional treatment that exceeds expectations, offering a wide range of services tailored to meet your unique healthcare needs. With a team of qualified doctors, state-of-the-art facilities and a patient-centered approach, we strive to be your partner in your health and life journey. At our medical practice, your health is our top priority, and we are here to help you every step of the way.
          </p>
          <a href='tel:+917439789989'>
            <Button className="book_btn" type="primary">Book an appointment</Button>
          </a>
        </div>
      </div>
    </div>
  )
}
