import { API_FETCH } from '../../constants/urls';
import emitEvent from '../events/alertEvent';

const postUserCart = async (token, cartId, productId) => {
	try {
		const res = await fetch(
			`${API_FETCH.USER_CART}/${cartId}/${productId}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					authorization: `Bearer ${token}`
				}
			}
		);

		if (res.status === 202) {
			emitEvent('product added');
		} else if (res.status === 400) {
			emitEvent('invalid params');
		} else if (res.status === 401) {
			emitEvent('unauthorized');
		} else if (res.status === 404) {
			emitEvent('product not exist');
		} else if (res.status === 409) {
			emitEvent('product already exists in your cart');
		}
	} catch (error) {
		console.log(error);
	}
};

export default postUserCart;
