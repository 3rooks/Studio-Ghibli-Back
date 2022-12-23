import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: process.env.GOOGLE_EMAIL,
        pass: process.env.GOOGLE_PASS
    }
});

export const sendEmail = async (email, message, template) =>
    await transporter.sendMail({
        from: `"Studio Ghibli" ${process.env.GOOGLE_EMAIL}`,
        to: email,
        subject: message,
        html: template
    });
