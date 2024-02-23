import { Button } from 'antd'
import styles from './about-section.module.scss'
import about from '../../../../assets/about.png'

export default function AboutSection() {
  return (
      <div id="about" className={styles.aboutSection}>
          <div className="heading">
              <h2 className='title'>What we are</h2>
              <p className='desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
          </div>
          <div className={styles.about}>
              <div className="col-md-6">
                <div className={styles.about_image}>
                    <img src={about}  />
                </div>
              </div>
              <div className="col-md-6">
                <p className={styles.desc}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia in, maxime, similique repellat dolores ex expedita doloremque eos voluptatum, porro odit optio? Corrupti delectus numquam, nemo corporis eaque amet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam placeat numquam nobis atque ad fugit officia tempora laudantium enim eius, iusto rerum, quod nulla distinctio ratione, amet doloribus iure? Earum?
                </p>
                <Button className="book_btn" type="primary">Book an appointment</Button>
              </div>
          </div>
      </div>
  )
}
