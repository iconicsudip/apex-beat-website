import Specialist from '../../../../components/Specialist'
import styles from './specialists-section.module.scss'
import Slider from 'react-slick'

const specialists = [
  {
    name: 'Dr. Achyut Pal',
    degree: 'MBBS, MD (Internal Medicine)',
    specialty: 'General Physician',
    description: 'General physicians are highly trained specialists who provide a range of non-surgical health care to adult patients.',
    image: 'https://via.placeholder.com/300',
    slug: 'dr-achyut-pal'
  },
  {
    name: 'Dr. Sayandeep Adhya',
    degree: 'MBBS, MD, CCEBDM (Diabetes)',
    specialty: 'General Physician',
    description: 'General physicians are highly trained specialists who provide a range of non-surgical health care to adult patients.',
    image: 'https://via.placeholder.com/300',
    slug: 'dr-jane-doe'
  },
  {
    name: 'Dr. A.K.Singh',
    degree: 'MBBS (WBUHS)',
    specialty: 'General Physician',
    description: 'General physicians are highly trained specialists who provide a range of non-surgical health care to adult patients.',
    image: 'https://via.placeholder.com/300',
    slug: 'dr-john-doe'
  }
  ,{
    name: 'Dr. V.K.Singh',
    degree: 'MBBS',
    specialty: 'General Physician',
    description: 'General physicians are highly trained specialists who provide a range of non-surgical health care to adult patients.',
    image: 'https://via.placeholder.com/300',
    slug: 'dr-jane-doe'
  }
  ,{
    name: 'Dr. Kakali Paul',
    degree: 'MBBS, DGO, (Infertility Specialist & Laproscopic Surgeon) ',
    specialty: 'Gynaecologist',
    description: 'Gynaecologists are highly trained specialists who provide a range of non-surgical health care to adult patients.',
    image: 'https://via.placeholder.com/300',
    slug: 'dr-jane-doe'
  }
  ,{
    name: 'Dr. Siddharth Gupta',
    degree: 'MBBS, MS (Gold Medallist), Fellowship in Spine Surgery, Fellowship in joint replacement, Arthoscopy(UK)',
    specialty: 'Orthopedic',
    description: 'Orthopedic are highly trained specialists who provide a range of non-surgical health care to adult patients.',
    image: 'https://via.placeholder.com/300',
    slug: 'dr-jane-doe'
  }
  ,{
    name: 'Dr. Avijit Mitra',
    degree: 'MBBS, DNB',
    specialty: 'Pediatric Surgeon',
    description: 'Pediatric Surgeon are highly trained specialists who provide a range of non-surgical health care to adult patients.',
    image: 'https://via.placeholder.com/300',
    slug: 'dr-jane-doe'
  }
  ,{
    name: 'Dr. Subhajit Sadhukhan',
    degree: 'MBBS (HONS), MD (AIIMS)',
    specialty: 'Skin Specialist',
    description: 'Skin Specialist are highly trained specialists who provide a range of non-surgical health care to adult patients.',
    image: 'https://via.placeholder.com/300',
    slug: 'dr-jane-doe'
  }
  ,{
    name: 'Dr. Debanjoy Goswami',
    degree: 'MBBS, PGDAC, MIM, FFA (USA)',
    specialty: 'Skin Specialist',
    description: 'Skin Specialist are highly trained specialists who provide a range of non-surgical health care to adult patients.',
    image: 'https://via.placeholder.com/300',
    slug: 'dr-jane-doe'
  }
  ,{
    name: 'Dr. Udayan Dasgupta',
    degree: 'MBBS (Cal), DIPCARD (Cal)',
    specialty: 'Cardiologist',
    description: 'Cardiologist are highly trained specialists who provide a range of non-surgical health care to adult patients.',
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
          Our specialists doctors are here to help you with your health needs.
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
