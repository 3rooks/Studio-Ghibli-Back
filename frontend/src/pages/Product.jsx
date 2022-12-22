import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/loader/loader';
import ProductInfo from '../components/ProductInfo';
import getProductById from '../lib/api/get-product-id';

const Product = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(undefined);

	useEffect(() => {
		if (!id) return;
		getProductById(id, setProduct);
	}, [id]);

	return <>{product ? <ProductInfo product={product} /> : <Loader />}</>;
};

export default Product;
