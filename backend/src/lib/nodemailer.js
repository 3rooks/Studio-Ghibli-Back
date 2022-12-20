import nodemailer from 'nodemailer';

export const mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: process.env.GOOGLE_EMAIL,
        pass: process.env.GOOGLE_PASS
    }
});

export const sendEmail = async (email, message, template) =>
    await mailTransporter.sendMail({
        from: `"Studio Ghibli" ${process.env.GOOGLE_EMAIL}`,
        to: email,
        subject: message,
        html: template
    });
