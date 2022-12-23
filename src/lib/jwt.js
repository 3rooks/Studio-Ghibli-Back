import jwt from 'jsonwebtoken';

const secret = process.env.JWT_PRIVATE_KEY || 'default_jwt_secret';
const options = { algorithm: 'HS512', expiresIn: '7d' };

export const signAsync = (payload) =>
    new Promise((resolve, reject) => {
        jwt.sign(payload, secret, options, (err, token) => {
            if (err) reject(err);
            else resolve(token);
        });
    });

export const verifyAsync = (token) =>
    new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, payload) => {
            if (err) reject(err);
            else resolve(payload);
        });
    });
