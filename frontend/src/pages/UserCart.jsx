import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CartContainer from '../components/CartContainer';
import Loader from '../components/loader/loader';
import getUserCart from '../lib/api/get-user-cart';
import { UserContext } from '../lib/context/UserContext';

const UserCart = () => {
	const { id } = useParams();

	const value = useContext(UserContext);
	const { token } = value;

	const [userCart, setUserCart] = useState(undefined);

	useEffect(() => {
		if (!token) return;
		getUserCart(token, id, setUserCart);
	}, [token, id]);

	return (
		<div>
			{!userCart ? (
				<Loader />
			) : (
				<CartContainer userCart={userCart} setUserCart={setUserCart} />
			)}
		</div>
	);
};

export default UserCart;
