import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
	const {
		_id,
		title,
		image,
		originalTitle,
		originalTitleRomanised,
		director
	} = product;
	return (
		<article className='shadow-md rounded-md overflow-hidden relative pb-7'>
			<img
				src={image}
				// className='grayscale hover:grayscale-0 delay-300'
			/>
			<div className='px-4 py-2'>
				<p>Title: {title}</p>
				<p>
					Original title: {originalTitleRomanised} ({originalTitle})
				</p>
				<p>Director: {director}</p>
			</div>
			<Link
				className='block w-full bg-slate-900 text-white rounded-md absolute bottom-0 text-center p-1'
				to={`/products/${_id}`}
			>
				See more...
			</Link>
		</article>
	);
};

export default ProductCard;
