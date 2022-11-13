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
			const { result } = await res.json();
			setProductId(result);
		}
	} catch (error) {
		console.log(error);
	}
};

export default getProductById;
