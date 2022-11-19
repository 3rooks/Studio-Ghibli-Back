import { fetchProduct, FETCH_URL } from '#test/utils/fetch-tests.js';
import expectStatusCode from '#test/utils/status-expect.js';
import test from 'ava';

test('GET all products', async (t) => {
    const response = await fetchProduct(t, FETCH_URL.PRODUCT);
    expectStatusCode(t, 200, response);
});
