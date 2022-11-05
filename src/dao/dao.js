import PERSISTENCE_FORMATS from '#constants/persistence-types.js';

const type =
    PERSISTENCE_FORMATS[`${process.env.PERSISTENCE}`] || PERSISTENCE_FORMATS.FS;

const { USERS } = await import(`#dao/${type}-dao/${type}-dao-users.js`);
const { PRODUCTS } = await import(`#dao/${type}-dao/${type}-dao-products.js`);
const { CARTS } = await import(`#dao/${type}-dao/${type}-dao-carts.js`);

export { USERS, PRODUCTS, CARTS };
