export const PORT_TEST = 8081;

export const DB_TEST =
    process.env.DB_TEST || 'mongodb://127.0.0.1:27017/apitest';

export const FETCH_URL = {
    REGISTER: `http://localhost:${PORT_TEST}/api/register`,
    LOGIN: `http://localhost:${PORT_TEST}/api/login`,
    PRODUCT: `http://localhost:${PORT_TEST}/api/products`
};
