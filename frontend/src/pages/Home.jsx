import { useEffect, useState } from 'react';
import ProductsContainer from '../components/ProductsContainer';
import getProducts from '../lib/api/get-products';
import Landing from './Landing';

const Home = () => {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		getProducts(setProducts);
	}, []);

	return (
		<>
			<Landing>
				<ProductsContainer products={products} />
			</Landing>
		</>
	);
};

export default Home;
