import { API_FETCH } from '../../constants/urls';
import emitEvent from '../events/alertEvent';

const postUserPayment = async (token, data) => {
	try {
		const res = await fetch(`${API_FETCH.USER_CART}/payments-products`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`
			},
			body: JSON.stringify(data)
		});

		if (res.status === 200) {
			emitEvent('payment succesfully - check your email');
		} else if (res.status === 400) {
			emitEvent('invalid inputs');
		} else if (res.status === 401) {
			emitEvent('unauthorized');
		} else if (res.status === 404) {
			emitEvent('cart not exist');
		}
	} catch (error) {
		console.log(error);
	}
};

export default postUserPayment;
