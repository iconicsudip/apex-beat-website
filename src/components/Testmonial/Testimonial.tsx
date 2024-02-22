import styles from './testimonial.module.scss'

interface TestimonialProps {
    testimonial: {
        text: string;
        name: string;
        title: string;
        image: string;
    }

}

export default function Testimonial({ testimonial }: TestimonialProps) {
    return (
        <div className={styles.testimonial}>
            <div className={styles.testimonialContent}>
                <div className={styles.testimonialText}>
                    <p>
                        {testimonial.text}
                    </p>
                </div>
                <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAuthorImage}>
                        <img src={testimonial.image} alt="author" />
                    </div>
                    <div className={styles.testimonialAuthorInfo}>
                        <h3 className={styles.testimonialAuthorName}>{testimonial.name}</h3>
                        <p className={styles.testimonialAuthorTitle}>{testimonial.title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
