import { API_FETCH } from '../../constants/urls';
import emitEvent from '../events/alertEvent';

const getProducts = async (setProducts) => {
	try {
		const res = await fetch(API_FETCH.GET_ALL_PRODUCTS, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (res.status === 200) {
			const { results } = await res.json();
			setProducts(results);
		} else {
			emitEvent('error get products');
		}
	} catch (error) {
		console.log(error);
	}
};

export default getProducts;
