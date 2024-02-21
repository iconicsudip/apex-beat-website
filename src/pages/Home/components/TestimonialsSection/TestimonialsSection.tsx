import styles from './testimonial-section.module.scss'
import Slider from "react-slick";

export default function TestimonialsSection() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div id="testimonials" className={styles.testimonialWrapper}>
            <Slider {...settings}>
            </Slider>
        </div>
    )
}
