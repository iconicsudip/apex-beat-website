import Testimonial from '../../../../components/Testmonial';
import styles from './testimonial-section.module.scss'
import Slider from "react-slick";

const testimonials = [
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate',
        name: 'John Doe',
        title: 'CEO, Company Name',
        image: 'https://via.placeholder.com/150'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate',
        name: 'John Doe',
        title: 'CEO, Company Name',
        image: 'https://via.placeholder.com/150'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate',
        name: 'John Doe',
        title: 'CEO, Company Name',
        image: 'https://via.placeholder.com/150'
    }
]

export default function TestimonialsSection() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };
    return (
        <div id="testimonials" className={styles.testimonialWrapper}>
            <div className="heading">
                <h2 className='title'>
                    What our patients and doctors say
                </h2>
                <p className='desc'>
                    Our patients and doctors are happy to share their experiences with us.
                </p>
            </div>
            <div className={styles.body}>
                <Slider {...settings} className={styles.slider}>
                    {testimonials.map((testimonial, index) => {
                        return (
                            <Testimonial key={index} testimonial={testimonial }/>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}
