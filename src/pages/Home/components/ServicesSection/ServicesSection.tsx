import Marquee from 'react-fast-marquee'
import { I_Service } from '../../../../interfaces/components'
import styles from './services-section.module.scss'
import { Alert } from 'antd'
import Service from '../../../../components/Service'

export default function ServicesSection() {
    const services: I_Service[] = [
        {
            title: 'Gynaecologist',
            description: "Gynaecology specializes in women's reproductive health, addressing situations like menstrual problems, menopause, and fertility problems with expert and compassionate care.",
            backgroundColor: 'var(--red-50)'
        },
        {
            title: 'General Medicine',
            description: 'Holistic medicine covers the diagnosis and treatment of common diseases and chronic conditions, ensuring that your overall health and well-being is appropriately looked after.',
            backgroundColor: 'var(--blue-50)'
        },
        {
            title: 'Orthopedics',
            description: 'Osteopathology focuses on the diagnosis, treatment, and management of the musculoskeletal system, including bones, joints, muscles, and tendons. Our specialists provide expert care for fractures, joint replacements and sports injuries.',
            backgroundColor: 'var(--green-50)'
        },
        {
            title: 'Dermetology',
            description: 'Dermatology specializes in the diagnosis and treatment of pores and skin situations, ranging from pimples and eczema to skin most cancers. Our dermatologists offer expert care that will help you reap healthy and radiant skin.',
            backgroundColor: 'var(--yellow-50)'
        },
        {
            title: 'Pediatrics',
            description: 'Pediatrics makes a speciality of the medical care of toddlers, youngsters, and kids. Our pediatricians offer comprehensive healthcare services, including recurring check-ups, vaccinations, and remedy for early life ailments, ensuring the properly-being and development of your child.',
            backgroundColor: 'var(--purple-50)'
        }
    ]
    return (

        <div id="services" className={styles.servicesSection}>
            <div className="heading">
                <h2 className='title'>Our Services</h2>
                <p className='desc'>
                    We offer a wide range of services to meet your health needs.
                </p>
            </div>
            <div className={styles.services}>
                {services.map((service: I_Service, index) => (
                    <Service service={service} key={index} />
                ))}
            </div>
            <Alert
                banner
                type='success'
                message={
                    <Marquee pauseOnHover gradient={false} className={styles.marquee}>
                        <b style={{color:`var(--red-500)`}}>Welcome to Apexbeat Clinic - Providing Expert Care for Your Health Needs</b>
                    </Marquee>
                }
                showIcon={false}
                style={{
                    width: '100%',
                    padding: 12
                }}
            />
        </div>
    )
}
