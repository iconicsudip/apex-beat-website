// import { Button, Form, Input, message } from 'antd'
import styles from './contact-section.module.scss'
// import { I_ContactForm } from '../../../../interfaces/pages';
// import { sendEmail } from '../../../../utils/functions';

const LOCATION_MAP_URL = import.meta.env.VITE_APP_LOCATION_MAP_URL;

export default function ContactSection() {
    // const [contactForm] = Form.useForm();
    // const handleSubmitContact = async (values: I_ContactForm) => {
    //     message.success('Your message has been sent successfully!');
    //     // await sendEmail(values).then(() => {
    //     //     message.success('Your message has been sent successfully!');
    //     // }).catch((err) => {
    //     //     message.error('An error occurred while sending your message!');
    //     //     console.log(err);
    //     // });
    //     console.log(values);
    //     contactForm.resetFields();
    // }
    return (
        <div id="contact" className={styles.contactWrapper}>
            <div className={styles.contactArea}>
                <div className="col-md-6">
                    <div className={styles.mapWrapper}>
                        <iframe src={LOCATION_MAP_URL} style={{ border: 0, width: "100%", height: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={styles.contactHeader}>
                        <h2 className={styles.contactHeading}>Contact Us</h2>
                        <p className={styles.contactDesc}>
                            Get the best out of our multi-hospital healthcare experience. Whether you need routine treatment, specialty treatment, or just a consultation, we are here to serve you. Your health and well-being is our top priority, and we are dedicated to providing you with the best possible treatment.
                            <br />
                            Please contact us for more information or to contact us. We look forward to welcoming you to our polyclinic and offering you exceptional healthcare services.
                        </p>
                    </div>
                    {/* <Form
                        form={contactForm}
                        layout="vertical"
                        name="contact-form"
                        onFinish={handleSubmitContact}
                    >
                        <Form.Item
                            name="name"
                            label={<h4>Name</h4>}
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input placeholder="Name" size="large" />
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            label={<h4>Phone</h4>}
                            rules={[
                                { required: true, message: 'Please input your phone number!' },
                                { pattern: /^[0-9]+$/, message: 'Please input valid phone number!' }
                            ]}
                        >
                            <Input placeholder="Phone" maxLength={10} size="large" prefix="+91" />
                        </Form.Item>
                        <Form.Item
                            name="message"
                            label={<h4>Message</h4>}
                            rules={[{ required: true, message: 'Please input your message!' }]}
                        >
                            <Input.TextArea placeholder="Message"
                                autoSize={{ minRows: 6, maxRows: 6 }}
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" block htmlType='submit' size="large">Leave a message</Button>
                        </Form.Item>
                    </Form> */}

                    <div className={styles.contact_details}>
                        <div>
                            <h3>Address</h3>
                            <p>20, Sarat Chatterjee Rd, near HIRALAL PAUL GIRLS HIGH SCHOOL, Nabagram, Konnagar, Nabagram Colony, West Bengal 712246</p>
                        </div>
                        <div>
                            <h3>Email</h3>
                            <p><a href='mailto:apexbeat.clinic@gmail.com'>apexbeat.clinic@gmail.com</a></p>
                        </div>
                        <div>
                            <h3>Phone</h3>
                            <p><a href='tel:+917439789989'>+91 7439789989</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
