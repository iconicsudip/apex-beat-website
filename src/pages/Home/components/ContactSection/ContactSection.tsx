import { Button, Form, Input, message } from 'antd'
import styles from './contact-section.module.scss'
import { I_ContactForm } from '../../../../interfaces/pages';
// import { sendEmail } from '../../../../utils/functions';

const LOCATION_MAP_URL = import.meta.env.VITE_APP_LOCATION_MAP_URL;

export default function ContactSection() {
    const [contactForm] = Form.useForm();
    const handleSubmitContact = async (values: I_ContactForm) => {
        message.success('Your message has been sent successfully!');
        // await sendEmail(values).then(() => {
        //     message.success('Your message has been sent successfully!');
        // }).catch((err) => {
        //     message.error('An error occurred while sending your message!');
        //     console.log(err);
        // });
        console.log(values);
        contactForm.resetFields();
    }
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero erat vitae justo. Sed nec felis ut massa volutpat dictum. Nulla nec purus et libero sollicitudin tincidunt
                        </p>
                    </div>
                    <Form
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
                            name="email"
                            label={<h4>Email</h4>}
                            rules={[
                                { type: 'email', message: 'Please input valid email!' }
                            ]}
                        >
                            <Input placeholder="Email" size="large" />
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
                    </Form>
                </div>
            </div>
        </div>
    )
}
