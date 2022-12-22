import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../lib/context/UserContext';
import Button from './Button';
import Payment from './forms/Payment';
import Modal from './modal/Modal';
import ProductInCart from './ProductInCart';

const CartContainer = ({ userCart, setUserCart }) => {
	const value = useContext(UserContext);
	const { token } = value;

	const navigate = useNavigate();

	const { products } = userCart;
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
				<div className='w-full text-center'>
					<b>EMPTY CART</b>
				</div>
			) : (
				<div className='w-full flex flex-col items-center justify-center'>
					{products.map((e) => (
						<ProductInCart
							key={e.product._id}
							products={e}
							setUserCart={setUserCart}
						/>
					))}
					<b>TOTAL: {total}</b>
					<div>
						<Button
							onClick={() =>
								Payment({ setContent, token, total, navigate })
							}
						>
							<i>BUY</i>
						</Button>
					</div>
				</div>
			)}
		</>
	);
};

export default CartContainer;
