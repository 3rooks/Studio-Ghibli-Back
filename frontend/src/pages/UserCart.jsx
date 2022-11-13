import { useEffect, useState } from 'react';
import Loader from '../components/loader/loader';
import { getTokenLocalStorage } from '../constants/token-persistence';
import getUserCart from '../lib/api/get-user-cart';
import Landing from './Landing';

const UserCart = () => {
	const token = getTokenLocalStorage();
	const [userCart, setUserCart] = useState(null);

	useEffect(() => {
		if (!token) return;
		getUserCart(token, setUserCart);
	}, [token]);

	return (
		<Landing>
			<div>
				{userCart === null ? (
					<Loader />
				) : (
					userCart.products.map((e) => (
						<div key={e._id}>
							<p>Title: {e.product.title}</p>
							<p>Price: {e.product.price}</p>
							<p>Quantity: {e.quantity}</p>
							{/* <p>{console.log(e)}</p> */}
						</div>
					))
				)}
			</div>
		</Landing>
	);
};

export default UserCart;
