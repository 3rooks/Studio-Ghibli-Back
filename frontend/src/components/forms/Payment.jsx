import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './form-payment';

const publickey =
	'pk_test_51M48DuBcDHSGoNoLokxLynE1crLbquTIpUOjIVfbhf1WUwhCShBPuXpgRDUZH3prpbOsvvMhmxE7scqYH8Iq0yGM00zdC5uZJt';

const stripePromise = loadStripe(publickey);

const Payment = ({ setContent, total, token, navigate }) => {
	return setContent(
		<Elements stripe={stripePromise}>
			<PaymentForm
				total={total}
				setContent={setContent}
				token={token}
				navigate={navigate}
			/>
		</Elements>
	);
};

export default Payment;
