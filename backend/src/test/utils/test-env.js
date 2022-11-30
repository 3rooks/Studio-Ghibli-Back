const PORT = process.env.PORT || 8080;
const BASE_URL = `http://localhost:${PORT}/api`;

export const FETCH_URL = {
    REGISTER: `http://localhost:${PORT}/api/register`,
    LOGIN: `http://localhost:${PORT}/api/login`,
    PRODUCT: `http://localhost:${PORT}/api/products`
};

export class FetchEndpoints {
    constructor() {
        this.base = BASE_URL;
    }

    register = () => `${this.base}/register`;
    login = () => `${this.base}/login`;
    products = (id) => `${this.base}/products/${id || ''}`;
}

const url = new FetchEndpoints();

export default url;
