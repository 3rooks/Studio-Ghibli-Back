const PORT = process.env.PORT || 8080;

export const FETCH = {
    REGISTER: `http://localhost:${PORT}/api/register`,
    LOGIN: `http://localhost:${PORT}/api/login`,
    UNREGISTER: `http://localhost:${PORT}/api/unregister`
};
