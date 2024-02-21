import Marquee from 'react-fast-marquee'
import { I_Service } from '../../../../interfaces/components'
import styles from './services-section.module.scss'
import { Alert } from 'antd'
import Service from '../../../../components/Service'

export default function ServicesSection() {
    const services: I_Service[] = [
        {
            title: 'Cardiology',
            description: 'Cardiology is a branch of medicine that deals with the disorders of the heart as well as some parts of the circulatory system.',
            backgroundColor: 'var(--red-50)'
        },
        {
            title: 'Neurology',
            description: 'Neurology is a branch of medicine dealing with disorders of the nervous system.',
            backgroundColor: 'var(--blue-50)'
        },
        {
            title: 'Orthopedics',
            description: 'Orthopedics is a branch of medicine that focuses on the care of the musculoskeletal system.',
            backgroundColor: 'var(--green-50)'
        },
        {
            title: 'Oncology',
            description: 'Oncology is a branch of medicine that deals with the prevention, diagnosis, and treatment of cancer.',
            backgroundColor: 'var(--yellow-50)'
        }
    ]
    return (

        <div className={styles.servicesSection}>
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
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque accusamus facere voluptates, corporis veritatis accusantium cumque, dignissimos est consequatur culpa nisi impedit dolor. Aliquam velit odit voluptate suscipit similique cumque?
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
