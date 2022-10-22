import PERSISTENCE_FORMATS from '#constants/persistence-types.js';

const type =
    PERSISTENCE_FORMATS[`${process.env.PERSISTENCE}`] ||
    PERSISTENCE_FORMATS.DB;

const { PRODUCTS } = await import(`#dao/${type}-dao/${type}-dao-products.js`);
const { CARTS } = await import(`#dao/${type}-dao/${type}-dao-carts.js`);
const { USERS } = await import(`#dao/${type}-dao/${type}-dao-users.js`);
const { POSTS } = await import(`#dao/${type}-dao/${type}-dao-posts.js`);

export { PRODUCTS, CARTS, USERS, POSTS };
