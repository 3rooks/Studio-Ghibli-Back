import { API_FETCH } from '../../constants/urls';
import emitEvent from '../events/alertEvent';

const addUserCart = async (token, cartId, product) => {
	try {
		const res = await fetch(`${API_FETCH.USER_CART}/${cartId}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`
			},
			body: JSON.stringify(product)
		});

		if (res.status === 202) {
			emitEvent('product added');
		} else if (res.status === 400) {
			emitEvent('wrong inputs');
		} else if (res.status === 401) {
			emitEvent('user unauthorized');
		} else if (res.status === 404) {
			emitEvent('product not found');
		} else if (res.status === 409) {
			emitEvent('product already exist into cart');
		}
	} catch (error) {
		console.log(error);
	}
};

export default addUserCart;
