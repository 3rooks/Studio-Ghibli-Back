import { API_FETCH } from '../../constants/urls';

const getProducts = async (setProducts) => {
	try {
		const res = await fetch(API_FETCH.GET_ALL_PRODUCTS, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (res.ok) {
			const { result } = await res.json();
			setProducts(result);
		}
	} catch (error) {}
};

export default getProducts;