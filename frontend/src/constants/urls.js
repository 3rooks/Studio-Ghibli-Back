const LOCAL_HOST = 'http://localhost:8080';

export const API_FETCH = {
	USER_LOGIN: LOCAL_HOST + '/api/login',
	USER_REGISTER: LOCAL_HOST + '/api/register',
	GET_USER: LOCAL_HOST + '/api/user',
	GET_USER_PROFILE: LOCAL_HOST + '/api/profile',
	USER_CART: LOCAL_HOST + '/api/carts',
	GET_ALL_PRODUCTS: LOCAL_HOST + '/api/products',
	GET_PRODUCT: LOCAL_HOST + '/api/products',
	PATCH_IMG: LOCAL_HOST + '/api/update-img',
	PATCH_USERNAME: LOCAL_HOST + '/api/update-username',
	PATCH_EMAIL: LOCAL_HOST + '/api/update-email',
	PATCH_PASS: LOCAL_HOST + '/api/update-password',
	DELETE_USER: LOCAL_HOST + '/api/unregister'
};
