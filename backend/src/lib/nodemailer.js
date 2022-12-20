import nodemailer from 'nodemailer';

export const mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: 'brookslynx@gmail.com',
        pass: 'vjpffldiobrqdjgg'
    }
});
