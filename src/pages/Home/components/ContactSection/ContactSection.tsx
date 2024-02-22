import { Button, Form, Input } from 'antd'
import styles from './contact-section.module.scss'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useMemo } from 'react';

export default function ContactSection() {
    const [contactForm] = Form.useForm();
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",
    });
    const defaultProps = {
        center: {
            lat: 22.7055561,
            lng: 88.3378494
        },
        zoom: 13
    };
    const center = useMemo(() => ({ 
        lat: defaultProps.center.lat,
        lng: defaultProps.center.lng 
    }), []);
    return (
        <div id="contact" className={styles.contactWrapper}>
            <div className={styles.contactArea}>
                <div className="col-md-6">
                    <div className={styles.mapWrapper}>
                        {isLoaded &&
                            
                            <GoogleMap
                                mapContainerClassName={styles.mapWrapper}
                                center={center}
                                zoom={defaultProps.zoom}
                            >
                                <Marker
                                    position={{ lat: defaultProps.center.lat, lng: defaultProps.center.lng }} 
                                    icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
                                />
                            </GoogleMap>
                        }
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
