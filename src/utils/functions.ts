import { I_ContactForm } from "../interfaces/pages";
import nodemailer from 'nodemailer'

const RECIEVER_EMAIL = import.meta.env.VITE_APP_RECIEVER_EMAIL;
const CLIENT_ID = import.meta.env.VITE_APP_EMAIL_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_APP_EMAIL_CLIENT_SECRET;

export const sendEmail = async (data: I_ContactForm) => {
    // Create a SMTP transporter
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        service: 'gmail',
        auth: {
            type: "OAuth2",
            user: RECIEVER_EMAIL, // Your email address
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
        },
    });

    const firstName = data.name.split(' ')[0];
    const lastName = data.name.split(' ')[1];

    // Send mail with defined transport object
    await transporter.sendMail({
        to: RECIEVER_EMAIL, // list of receivers
        subject: `New message from ${firstName} ${lastName}`, // Subject line
        text: `You have received a new message:\n\nName: ${firstName} ${lastName}\nEmail: ${data.email}\nMessage: ${data.message}`, // plain text body
        html: `<p>You have received a new message:</p><p><strong>Name:</strong> ${firstName} ${lastName}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Message:</strong> ${data.message}</p>` // html body
    }).then((info) => {
        console.log(info);
        transporter.close();
    }).catch((err) => {
        console.log(err);
        transporter.close();
    });
}