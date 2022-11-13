import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/loader/loader';
import ProductInfo from '../components/ProductInfo';
import getProductById from '../lib/api/get-product-id';
import Landing from './Landing';

const Product = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);

	useEffect(() => {
		if (!id) return;
		getProductById(id, setProduct);
	}, [id]);

	return (
		<Landing>
			<div>
				{product === null ? (
					<Loader />
				) : (
					<ProductInfo product={product} />
				)}
			</div>
		</Landing>
	);
};

export default Product;
