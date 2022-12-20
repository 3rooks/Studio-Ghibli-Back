import { useContext } from 'react';
import deleteProduct from '../lib/api/delete-product';
import { UserContext } from '../lib/context/UserContext';

const ProductInCart = ({ products, setUserCart }) => {
	const { product, quantity } = products;

	const value = useContext(UserContext);
	const { user, setUser, token, setToken } = value;

	return (
		<div>
			<img src={product.image} height='50px' width='50px' />
			<p>Product: {product.title}</p>
			<p>Price: ${product.price}</p>
			<p>Quantity: {quantity}</p>
			<button
				onClick={() =>
					deleteProduct(token, user.cart, product._id, setUserCart)
				}
			>
				DELETE
			</button>
			<hr />
			<br />
		</div>
	);
};

export default ProductInCart;
