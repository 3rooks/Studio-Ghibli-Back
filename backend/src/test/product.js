import test from 'ava';
import expectStatusCode from './expects/status-expect.js';
import { fetchProduct } from './utils/fetch-enpoints.js';
import { FETCH_URL } from './utils/test.env.js';

export const product = test.macro(async (t, input, expected) => {
    const response = await fetchProduct(t, FETCH_URL.PRODUCT);
    expectStatusCode(t, input, response);
});
