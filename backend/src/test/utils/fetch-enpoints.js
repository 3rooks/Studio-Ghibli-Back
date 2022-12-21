import got from 'got';

export const userRegisterLogin = async (t, data, url) => {
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

export const unregister = async (t, token, data, url) => {
    try {
        const response = await got.delete(url, {
            headers: {
                authorization: `Bearer ${token}`
            },
            json: data,
            throwHttpErrors: false
        });
        return response;
    } catch (error) {
        t.fail(error);
    }
};
