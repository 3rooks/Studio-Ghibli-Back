import { USER_RESPONSE } from '#constants/response-status-json.js';
import { verifyAsync } from '#lib/jwt.js';

const userAuth = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) return res.status(401).json(USER_RESPONSE[401]);

        const jwt = authorization.split(' ')[1];
        if (!jwt) return res.status(401).json(USER_RESPONSE[401]);

        const payload = await verifyAsync(jwt);
        req.id = payload.id;

        next();
    } catch (error) {
        return res.status(401).json(USER_RESPONSE[401]);
    }
};
export default userAuth;
