import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../lib/context/UserContext';
import Button from './Button';
import Payment from './forms/Payment';
import Modal from './modal/Modal';
import ProductInCart from './ProductInCart';

const CartContainer = ({ cart, setUserCart }) => {
	const value = useContext(UserContext);
	const { user, setUser, token, setToken } = value;

	const navigate = useNavigate();

	const { products } = cart;
	const [total, setTotal] = useState();
	const [content, setContent] = useState(undefined);

	useEffect(() => {
		if (products.length > 0) {
			const price = products.map((e) => e.product.price);
			const total = price.reduce((total, sum) => total + sum);
			setTotal(total);
		}
	}, [products]);

	return (
		<>
			<Modal closeModal={() => setContent()}>{content}</Modal>
			{products.length === 0 ? (
				<h1>EMPTY CART</h1>
			) : (
				<div className='px-4'>
					{products.map((e) => (
						<ProductInCart
							key={e.product._id}
							products={e}
							setUserCart={setUserCart}
						/>
					))}
					<b>TOTAL: {total}</b>
					<Button
						name='BUY'
						onClick={() =>
							Payment({ setContent, total, token, navigate })
						}
					/>
				</div>
			)}
		</>
	);
};

export default CartContainer;
