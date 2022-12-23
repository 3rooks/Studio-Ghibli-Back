import { useContext } from 'react';
import deleteProduct from '../lib/api/delete-product';
import { UserContext } from '../lib/context/UserContext';
import Button from './Button';

const ProductInCart = ({ products, setUserCart }) => {
	const { product } = products;

	const value = useContext(UserContext);
	const { user, token } = value;

	return (
		<div className='w-full sm:w-3/4 md:w-2/4 lg:w-2/5 xl:w-1/3 flex items-center justify-center mb-4 gap-4'>
			<div className='w-1/4'>
				<img
					src={product.image}
					width='100px'
					className='shadow-md rounded-md'
				/>
			</div>
			<div className='w-2/4'>
				<p>
					Product: <b>{product.title}</b>
				</p>
				<p>
					Director: <b>{product.director}</b>
				</p>
				<p>
					Price: <b>${product.price}</b>
				</p>
				<div>
					<Button
						onClick={async () =>
							await deleteProduct(
								token,
								user.cart,
								product._id,
								setUserCart
							)
						}
					>
						<i>Delete product</i>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ProductInCart;
