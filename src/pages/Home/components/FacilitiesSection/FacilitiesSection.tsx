import { useEffect, useState } from 'react'
import Facility from '../../../../components/Facility'
import styles from './facilities-section.module.scss'
import qualfiedDoctors from '../../../../assets/doctor2.png'
import bestService from '../../../../assets/doctor1.png'
import affordableFees from '../../../../assets/doctor3.png'
import { Button } from 'antd'

const facilities = [
  {
    id: 1,
    title: 'Qualified Doctors',
    description: 'Our team consists of highly qualified and experienced doctors who are experts in their field. They are dedicated to providing personalized care and ensuring the best possible outcomes for our patients.',
    rightContent: {
      image: qualfiedDoctors,
      content: 'A group of smiling doctors in white, displaying diversity and expertise. Each physician is an expert in their field, ensuring that patients receive the care they desire and the best possible outcomes.'
    }
  },
  {
    id: 2,
    title: 'Affordability',
    description: 'We believe that health care should be accessible to all. Our services are priced affordably so that you receive the best possible care without having to worry about high costs.',
    rightContent: {
      image: affordableFees,
      content: 'A price tag symbolizing affordability, accompanied by means of a smiling circle of relatives. Our dedication to on hand healthcare is contemplated in our in your price range offerings, ensuring that excellent care is within reach for all.'
    }
  },
  {
    id: 3,
    title: 'Best Services',
    description: 'We are proud to offer a comprehensive range of medical services. From routine checkups to specialized treatments, our state-of-the-art facilities and advanced technology ensure the highest quality of care.',
    rightContent: {
      image: bestService,
      content: 'A modern-day clinical facility with superior system and a welcoming surroundings. From recurring test-usato specialised remedies, our latest facilities and cutting-edge technology make sure that sufferers acquire the best possible care.'
    }
  }
]
export default function FacilitiesSection() {
  const [currentFacility, setCurrentFacility] = useState(1)
  useEffect(() => {
    const facilityTimer = setInterval(() => {
      setCurrentFacility(prev => prev === facilities.length ? 1 : prev + 1)
    }, 3000)
    return () => {
      clearInterval(facilityTimer)
    }
  }, [])
  return (
    <div className={styles.facilities}>
      <div className="col-md-6">
        <div className={styles.left_wrapper}>
          <div className={styles.header}>
            <h1 className={styles.title}>
              Our Facilities
            </h1>
            <p className={styles.description}>
              We offer a wide range of services to meet your health needs. Our facilities are designed to provide the best possible care in a comfortable and welcoming environment.
            </p>
            <a href='tel:+917439789989'>
              <Button className="book_btn" type="primary">Book an appointment</Button>
            </a>
          </div>
          <div className={styles.facilities_wrapper}>
            {facilities.map((facility) => {
              return (
                <Facility key={facility.id}
                  title={facility.title}
                  description={facility.description}
                  isActive={facility.id === facilities[currentFacility - 1].id}
                />
              )
            })}
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className={styles.right_wrapper}>
          <img src={facilities[currentFacility - 1].rightContent.image} alt="Facility" />
          <p className={styles.description}>{facilities[currentFacility - 1].rightContent.content}</p>
        </div>
      </div>
    </div>
  )
}
