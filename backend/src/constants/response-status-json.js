export const USER_RESPONSE = {
    201: { results: 'user created' },
    202: { results: 'user acepted-updated' },
    400: { results: 'user bad request' },
    401: { results: 'user unauthorized' },
    409: { results: 'user conflict' }
};

export const PRODUCT_RESPONSE = {
    201: { results: 'product created' },
    404: { results: 'product not found' },
    409: { results: 'product conflict' }
};

export const CART_RESPONSE = {
    202: { results: 'cart user updated' },
    404: { results: 'cart user not found' }
};
