import { Button, Form, Input } from 'antd'
import styles from './contact-section.module.scss'

export default function ContactSection() {
    const [contactForm] = Form.useForm();
    return (
        <div id="contact" className={styles.contactWrapper}>
            <div className={styles.contactArea}>
                <div className="col-md-6">
                    <div className={styles.mapWrapper}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d799.7283465423922!2d88.3374058277573!3d22.705495913426766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d8089deaf41%3A0x3fa0e0afe5549239!2sGolden%20Tower!5e0!3m2!1sen!2sin!4v1708698001875!5m2!1sen!2sin" style={{border:0,width:"100%",height:"100%"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
                    >
                        <Form.Item
                            name="name"
                            label={<h4>Name</h4>}
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input placeholder="Name" />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label={<h4>Email</h4>}
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            label={<h4>Phone</h4>}
                            rules={[
                                { required: true, message: 'Please input your phone number!' },
                                { pattern: /^[0-9]+$/, message: 'Please input valid phone number!' }
                            ]}
                        >
                            <Input placeholder="Phone" maxLength={10}/>
                        </Form.Item>
                        <Form.Item
                            name="message"
                            label={<h4>Message</h4>}
                            rules={[{ required: true, message: 'Please input your message!' }]}
                        >
                            <Input.TextArea placeholder="Message"
                                autoSize={{ minRows: 6, maxRows: 6 }}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" block htmlType='submit'>Leave a message</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}
