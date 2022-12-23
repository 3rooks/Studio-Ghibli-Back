import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRAPI_API_KEY);

export const createPayment = async (paymentInfo) =>
    await stripe.paymentIntents.create({
        amount: paymentInfo.amount,
        currency: 'USD',
        payment_method: paymentInfo.pmid,
        confirm: true
    });
