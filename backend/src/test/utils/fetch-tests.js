import got from 'got';
import { PORT_TEST } from './setup-tests.js';

export const FETCH_URL = {
    REGISTER: `http://localhost:${PORT_TEST}/api/register`,
    LOGIN: `http://localhost:${PORT_TEST}/api/login`,
    PRODUCT: `http://localhost:${PORT_TEST}/api/products`
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

export const fetchProduct = async (t, url) => {
    try {
        const response = await got.get(url, {
            throwHttpErrors: false
        });
        return response;
    } catch (error) {
        t.fail(error);
    }
};
