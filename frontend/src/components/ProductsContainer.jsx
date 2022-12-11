import Loader from './loader/loader';
import ProductCard from './ProductCard';

const ProductsContainer = ({ products }) => {
	return (
		<div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4'>
			{products === null ? (
				<Loader />
			) : (
				products?.map((item) => (
					<ProductCard key={item._id} product={item} />
				))
			)}
		</div>
	);
};

export default ProductsContainer;
