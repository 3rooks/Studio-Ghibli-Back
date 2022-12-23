import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './Payment-form';

const stripePromise = loadStripe(import.meta.env.VITE_STRAPI_PUBLIC_KEY);

const Payment = ({ setContent, token, total, navigate }) => {
	return setContent(
		<Elements stripe={stripePromise}>
			<PaymentForm
				setContent={setContent}
				token={token}
				total={total}
				navigate={navigate}
			/>
		</Elements>
	);
};

export default Payment;
