import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CartContainer from '../components/CartContainer';
import Loader from '../components/loader/loader';
import { getTokenLocalStorage } from '../constants/token-persistence';
import getUserCart from '../lib/api/get-user-cart';

const UserCart = () => {
	const { id } = useParams();
	const [userCart, setUserCart] = useState(undefined);

	useEffect(() => {
		const token = getTokenLocalStorage();
		if (!token) return;
		getUserCart(JSON.parse(token), id, setUserCart);
	}, [id]);

	return (
		<div>
			{!userCart ? (
				<Loader />
			) : (
				<CartContainer cart={userCart} setUserCart={setUserCart} />
			)}
		</div>
	);
};

export default UserCart;
