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

export const METHODS = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    PATCH: 'patch',
    DELETE: 'delete'
};

class RequestMethods {
    constructor() {
        this.methods = {
            [METHODS.GET]: got.get,
            [METHODS.POST]: got.post,
            [METHODS.PUT]: got.put,
            [METHODS.PATCH]: got.patch,
            [METHODS.DELETE]: got.delete
        };
    }

    to = async (t, method, url, data) => {
        try {
            const response = await this.methods[method](url, {
                json: data,
                throwHttpErrors: false
            });
            return response;
        } catch (error) {
            t.fail(error);
        }
    };
}

export const request = new RequestMethods();
