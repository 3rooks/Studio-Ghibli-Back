import got from 'got';
import { PORT_TEST } from './setup-tests.js';

export const FETCH_URL = {
    REGISTER: `http://localhost:${PORT_TEST}/api/register`,
    LOGIN: `http://localhost:${PORT_TEST}/api/login`
};

export const fetchRegister = async (t, user, url) => {
    try {
        const response = await got.post(url, {
            json: user,
            throwHttpErrors: false
        });
        return response;
    } catch (error) {
        t.fail(error);
    }
};
