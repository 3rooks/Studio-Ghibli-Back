import emitEvent from '../lib/events/alertEvent';
import AlertBox from './alerts/AlertBox';

const ProductInfo = ({ product }) => {
	const {
		_id,
		title,
		image,
		originalTitle,
		originalTitleRomanised,
		director,
		producer,
		description,
		releaseYear,
		minDuration,
		info,
		price
	} = product;
	return (
		<article className='flex container mx-auto gap-4'>
			<div className='w-1/2'>
				<img src={image} alt={title} className='block shadow-md' />
			</div>
			<div className='w-1/2 text-center'>
				<AlertBox />
				<button
					key={_id}
					className='bg-red-500 rounded-sm px-4'
					onClick={() => {
						emitEvent('Product added into cart');
					}}
				>
					Add to cart
				</button>
				<br />
				<br />
				<p className='font-bold'>Title</p>
				<p>{title}</p>
				<hr />
				<br />
				<p className='font-bold'>Original title</p>
				<p>
					{originalTitleRomanised} ({originalTitle})
				</p>
				<hr />
				<br />
				<p className='font-bold'>Director</p>
				<p>{director}</p>
				<hr />
				<br />
				<p className='font-bold'>Producer</p>
				<p>{producer}</p>
				<hr />
				<br />
				<p className='font-bold'>Description</p>
				<p>{description}</p>
				<hr />
				<br />
				<p className='font-bold'>Release year: {releaseYear}</p>
				<p className='font-bold'>Duration: {minDuration} min</p>
				<p className='font-bold'>Price: {price}$</p>
				<br />
				<a href={info} target='_blank' rel='noopener noreferrer'>
					More info...
				</a>
				<br />
				<hr />
				<br />
			</div>
		</article>
	);
};

export default ProductInfo;
