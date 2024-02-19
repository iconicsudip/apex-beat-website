import styles from './home.module.scss';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import FacilitiesSection from './components/FacilitiesSection';
import SpecialistsSection from './components/SpecialistsSection';

export default function Home() {
    return (
        <div className={styles.home}>
            <HeroSection />
            <ServicesSection />
            <FacilitiesSection />
            <SpecialistsSection />
            {/* <TestimonialsSection />
            <ContactSection /> */}
        </div>
    )
}
