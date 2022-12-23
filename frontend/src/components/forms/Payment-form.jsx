import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import postUserPayment from '../../lib/api/post-user-payment';
import Button from '../Button';

const PaymentForm = ({ setContent, token, total, navigate }) => {
	const stripe = useStripe();
	const elements = useElements();

	return (
		<form
			onSubmit={(ev) =>
				handleSubmit(
					ev,
					token,
					total,
					setContent,
					navigate,
					stripe,
					elements
				)
			}
		>
			<p className='mb-2'>
				PAYMENT METHOD: <b>[4242-4242...]</b>
			</p>
			<CardElement />
			<div className='my-2 mt-4'>
				<Button>
					<i>Send</i>
				</Button>
			</div>
		</form>
	);
};

export default PaymentForm;

const handleSubmit = async (
	ev,
	token,
	total,
	setContent,
	navigate,
	stripe,
	elements
) => {
	ev.preventDefault();

	const { paymentMethod } = await stripe.createPaymentMethod({
		type: 'card',
		card: elements.getElement(CardElement)
	});

	setContent(undefined);
	navigate('/');

	const paymentInfo = {
		pmid: paymentMethod.id,
		amount: total * 100,
		total
	};
	await postUserPayment(token, paymentInfo);
};
