import { API_FETCH } from '../../constants/urls';

const getProductById = async (id, setProductId) => {
	try {
		const res = await fetch(`${API_FETCH.GET_PRODUCT}/${id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (res.ok) {
			const { results } = await res.json();
			setProductId(results);
		}
	} catch (error) {
		console.log(error);
	}
};

export default getProductById;
