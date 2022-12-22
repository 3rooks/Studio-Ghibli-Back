import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './Payment-form';

const publickey =
	'pk_test_51M48DuBcDHSGoNoLokxLynE1crLbquTIpUOjIVfbhf1WUwhCShBPuXpgRDUZH3prpbOsvvMhmxE7scqYH8Iq0yGM00zdC5uZJt';

const stripePromise = loadStripe(publickey);

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
