import { verifyAsync } from '#services/jwt.service.js';

const userJWTDTO = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization)
        return res.status(401).json({ error: 'User no authorized' });

    const jwt = authorization.split(' ')[1];
    if (!jwt) return res.status(401).json({ error: 'User no authorized' });

    try {
        const payload = await verifyAsync(jwt);
        req.id = payload.id;

        next();
    } catch (error) {
        return res.status(401).json({ error: 'User no authorized' });
    }
};
export default userJWTDTO;
