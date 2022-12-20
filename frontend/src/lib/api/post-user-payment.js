import { API_FETCH } from '../../constants/urls';
import emitEvent from '../events/alertEvent';

const postUserPayment = async (token, data, navigate) => {
	console.log(`${API_FETCH.USER_CART}/payments`);
	try {
		const res = await fetch(`${API_FETCH.USER_CART}/user/payments`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`
			},
			body: JSON.stringify(data)
		});

		if (res.status === 200) {
			navigate('/');
			emitEvent('payment succesfully - check your email');
		}
	} catch (error) {
		console.log(error);
	}
};

export default postUserPayment;