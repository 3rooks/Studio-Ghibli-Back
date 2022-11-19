import got from 'got';

export const FETCH_URL = {
    REGISTER: 'http://localhost:8080/api/register',
    LOGIN: 'http://localhost:8080/api/login'
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
