import { API_FETCH } from '../../constants/urls';
import emitEvent from '../events/alertEvent';

const getProductById = async (id, setProductId) => {
	try {
		const res = await fetch(`${API_FETCH.GET_PRODUCT}/${id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (res.status === 200) {
			const { results } = await res.json();
			setProductId(results);
		} else if (res.status === 400) {
			emitEvent('invalid params');
		} else if (res.status === 404) {
			emitEvent('product not exist');
		}
	} catch (error) {
		console.log(error);
	}
};

export default getProductById;
