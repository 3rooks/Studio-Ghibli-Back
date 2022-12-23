import { useContext } from 'react';
import postUserCart from '../lib/api/post-user-cart';
import { UserContext } from '../lib/context/UserContext';
import Button from './Button';

const ProductInfo = ({ product }) => {
	const value = useContext(UserContext);
	const { user, token } = value;

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
		<article className='block gap-10 px-6 sm:block md:flex md:px-12 lg:px-28 xl:px-60 2xl:px-80'>
			<div className='w-full md:w-1/2 mb-4'>
				<div className={user && 'mb-3'}>
					{user && (
						<Button
							onClick={async () => {
								await postUserCart(token, user.cart, _id);
							}}
						>
							<i>Add to cart</i>
						</Button>
					)}
				</div>
				<p>
					<b>Price: </b> {price}$
				</p>
				<p>
					<b>Title: </b>
					{title}
				</p>
				<p>
					<b>Duration: </b>
					{minDuration} min
				</p>
				<p>
					<b>Release year: </b>
					{releaseYear}
				</p>
				<p>
					<b>Original title: </b>
					{originalTitleRomanised} ({originalTitle})
				</p>
				<p>
					<b>Director: </b>
					{director}
				</p>
				<p>
					<b>Producer: </b>
					{producer}
				</p>
				<p>
					<b>Description: </b>
					{description}
				</p>
				<a href={info} target='_blank' rel='noopener noreferrer'>
					<b>More info...</b>
				</a>
			</div>
			<div className='w-full h-full md:w-1/2 flex items-center justify-center mb-6'>
				<img
					src={image}
					className='block shadow-md object-contain h-full w-96'
				/>
			</div>
		</article>
	);
};

export default ProductInfo;
