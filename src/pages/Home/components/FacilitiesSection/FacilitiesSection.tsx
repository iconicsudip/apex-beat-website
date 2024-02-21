import { useEffect, useState } from 'react'
import Facility from '../../../../components/Facility'
import styles from './facilities-section.module.scss'
import { Button } from 'antd'

const facilities = [
  {
    id: 1,
    title: 'Qualified Doctors',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ab unde minima laborum dolorum illum provident placeat amet? Est, maiores quos illo nam beatae similique alias placeat saepe dolor accusantium.',
    rightContent: {
      image: 'https://via.placeholder.com/500',
      content: 'Right content for qualified doctors facility. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ab unde minima laborum dolorum illum provident placeat amet? Est, maiores quos illo nam beatae similique alias placeat saepe dolor accusantium.'
    }
  },
  {
    id: 2,
    title: 'Affordable Fees',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ab unde minima laborum dolorum illum provident placeat amet? Est, maiores quos illo nam beatae similique alias placeat saepe dolor accusantium.',
    rightContent: {
      image: 'https://via.placeholder.com/500',
      content: 'Random content for affordable fees facility. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ab unde minima laborum dolorum illum provident placeat amet? Est, maiores quos illo nam beatae similique alias placeat saepe dolor accusantium.'
    }
  },
  {
    id: 3,
    title: 'Best Services',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ab unde minima laborum dolorum illum provident placeat amet? Est, maiores quos illo nam beatae similique alias placeat saepe dolor accusantium.',
    rightContent: {
      image: 'https://via.placeholder.com/500',
      content: 'Random content for best services facility. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ab unde minima laborum dolorum illum provident placeat amet? Est, maiores quos illo nam beatae similique alias placeat saepe dolor accusantium.'
    }
  }
]
export default function FacilitiesSection() {
  const [currentFacility, setCurrentFacility] = useState(1)
  useEffect(() => {
    const facilityTimer = setInterval(() => {
      setCurrentFacility(prev => prev === facilities.length ? 1 : prev + 1)
    }, 5000)
    return () => {
      clearInterval(facilityTimer)
    }
  }, [])
  return (
    <div className={styles.facilities}>
      <div className="col-md-6">
        <div className={styles.left_wrapper}>
          <div className={styles.header}>
            <h1 className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus ab unde minima laborum dolorum illum provident placeat amet? Est, maiores quos illo nam beatae similique alias placeat saepe dolor accusantium.</p>
            <Button className="book_btn" type="primary">Book an appointment</Button>
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
