import Stripe from 'stripe';

const secretkey =
    'sk_test_51M48DuBcDHSGoNoLhjgKDt6u1hDUDqsqOo05CQzIYGAVyu9PZ5LrEzuVfCVW1Yb5ELD6R00Qne85brf9w3WSHJHE00mCbmz9h3';

const stripe = new Stripe(secretkey);

export const createPayment = async (paymentInfo) => {
    const { id, amount } = paymentInfo;

    const payment = await stripe.paymentIntents.create({
        amount,
        currency: 'USD',
        payment_method: id,
        confirm: true
    });
    return payment;
};
