import { API_FETCH } from '../../constants/urls';
import emitEvent from '../events/alertEvent';

const getUserCart = async (token, id, setUserCart) => {
	try {
		const res = await fetch(`${API_FETCH.USER_CART}/${id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`
			}
		});

		if (res.status === 200) {
			const { results } = await res.json();
			setUserCart(results);
		} else if (res.status === 400) {
			emitEvent('invalid params');
		} else if (res.status === 401) {
			emitEvent('unauthorized');
		} else if (res.status === 404) {
			emitEvent('cart not exist');
		}
	} catch (error) {
		console.log(error);
	}
};

export default getUserCart;
