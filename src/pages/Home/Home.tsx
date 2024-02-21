import styles from './home.module.scss';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import FacilitiesSection from './components/FacilitiesSection';
import SpecialistsSection from './components/SpecialistsSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Home() {
    const params = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [params]);
    return (
        <div className={styles.home}>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <FacilitiesSection />
            <SpecialistsSection />
            <TestimonialsSection />
            {/* <ContactSection /> */}
        </div>
    )
}
