import { useEffect, useState } from 'react';
import ProductsContainer from '../components/ProductsContainer';
import getProducts from '../lib/api/get-products';

const Home = () => {
	const [products, setProducts] = useState(undefined);

	useEffect(() => {
		getProducts(setProducts);
	}, []);

	return <ProductsContainer products={products} />;
};

export default Home;
