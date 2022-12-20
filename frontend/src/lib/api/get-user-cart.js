import { API_FETCH } from '../../constants/urls';

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
		}
	} catch (error) {
		console.log(error);
	}
};

export default getUserCart;
