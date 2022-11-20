import got from 'got';

export const fetchRegisterLogin = async (t, data, url) => {
    try {
        const response = await got.post(url, {
            json: data,
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
