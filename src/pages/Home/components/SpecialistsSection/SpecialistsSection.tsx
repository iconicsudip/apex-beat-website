import Specialist from '../../../../components/Specialist'
import styles from './specialists-section.module.scss'
import Slider from 'react-slick'

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
  const minimumSizeDescription = specialists.reduce((acc, current) => {
    return acc.description.length < current.description.length ? acc : current
  })
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
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
        <Slider {...settings}>
          {specialists.map((specialist, index) => {
            
            return (
              <Specialist specialist={specialist} key={index} maxLength={minimumSizeDescription.description.length} />
            )
          })}
        </Slider>
      </div>
    </div>
  )
}
