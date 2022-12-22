import { API_FETCH } from '../../constants/urls';
import emitEvent from '../events/alertEvent';
import getUserCart from './get-user-cart';

const deleteProduct = async (token, cartId, productId, setUserCart) => {
	try {
		const res = await fetch(
			`${API_FETCH.USER_CART}/${cartId}/${productId}`,
			{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					authorization: `Bearer ${token}`
				}
			}
		);

		if (res.status === 202) {
			await getUserCart(token, cartId, setUserCart);
			emitEvent('product deleted');
		} else if (res.status === 400) {
			emitEvent('invalid inputs');
		} else if (res.status === 401) {
			emitEvent('unauthorized');
		} else if (res.status === 404) {
			emitEvent('product not exist');
		}
	} catch (error) {
		console.log(error);
	}
};

export default deleteProduct;
