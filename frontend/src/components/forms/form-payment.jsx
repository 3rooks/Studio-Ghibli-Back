import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import postUserPayment from '../../lib/api/post-user-payment';

const PaymentForm = ({ total, setContent, token, navigate }) => {
	const stripe = useStripe();
	const elements = useElements();

	return (
		<form
			onSubmit={(ev) =>
				handleSubmit(
					ev,
					token,
					stripe,
					elements,
					total,
					setContent,
					navigate
				)
			}
		>
			<CardElement />
			<button type='submit'>BUY</button>
		</form>
	);
};

export default PaymentForm;

const handleSubmit = async (
	ev,
	token,
	stripe,
	elements,
	total,
	setContent,
	navigate
) => {
	ev.preventDefault();
	const { paymentMethod } = await stripe.createPaymentMethod({
		type: 'card',
		card: elements.getElement(CardElement)
	});

	const paymentInfo = {
		pmid: paymentMethod.id,
		amount: total * 100,
		total
	};

	postUserPayment(token, paymentInfo, navigate);
	setContent();
};
