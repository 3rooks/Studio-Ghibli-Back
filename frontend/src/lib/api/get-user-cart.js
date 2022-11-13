import { API_FETCH } from '../../constants/urls';

const getUserCart = async (token, setUserCart) => {
	try {
		const res = await fetch(API_FETCH.GET_USER_CART, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${JSON.parse(token)}`
			}
		});

		if (res.ok) {
			const { result } = await res.json();
			setUserCart(result);
		}
	} catch (error) {
		console.log(error);
	}
};

export default getUserCart;
