import Marquee from 'react-fast-marquee'
import Specialist from '../../../../components/Specialist'
import styles from './specialists-section.module.scss'
import useResponsive from '../../../../utils/useResponsive'

const specialists = [
  {
    name: 'Dr. John Doe',
    degree: 'MBBS, MD, PhD',
    specialty: 'Cardiologist',
    description: 'Cardiology is a branch of medicine that deals with the disorders of the heart as well as some parts of the circulatory system.',
    image: 'https://via.placeholder.com/300',
    slug: 'dr-john-doe'
  },
  {
    name: 'Dr. Jane Doe',
    degree: 'MD, PhD',
    specialty: 'Dermatologist',
    description: 'Dermatology is the branch of medicine dealing with the skin, nails, hair and its diseases.',
    image: 'https://via.placeholder.com/300',
    slug: 'dr-jane-doe'
  },
  {
    name: 'Dr. John Doe',
    degree: 'MBBS, MD, PhD',
    specialty: 'Cardiologist',
    description: 'Cardiology is a branch of medicine that deals with the disorders of the heart as well as some parts of the circulatory system.',
    image: 'https://via.placeholder.com/300',
    slug: 'dr-john-doe'
  },
  {
    name: 'Dr. Jane Doe',
    degree: 'MD, PhD',
    specialty: 'Dermatologist',
    description: 'Dermatology is the branch of medicine dealing with the skin, nails, hair and its diseases.',
    image: 'https://via.placeholder.com/300',
    slug: 'dr-jane-doe'
  }

]

export default function SpecialistsSection() {
  const {isMobile} = useResponsive()
  return (
    <div id="specialists" className={styles.specialists}>
      <div className="heading">
        <h2 className='title'>
          Our Specialists
        </h2>
        <p className='desc'>
          Our team of specialists are here to help you with your health needs.
        </p>
      </div>
      <div className={styles.body}>
        <Marquee pauseOnHover className={styles.marquee}
          gradient={isMobile ? false : true}
          gradientColor='#ffffff'

        >

          {specialists.map((specialist, index) => {
            const minimumSizeDescription = specialists.reduce((acc, current) => {
              return acc.description.length < current.description.length ? acc : current
            })
            return (
              <Specialist specialist={specialist} key={index} maxLength={minimumSizeDescription.description.length} />
            )
          })}
        </Marquee>
      </div>
    </div>
  )
}
