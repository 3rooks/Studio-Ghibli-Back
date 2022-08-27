import PERSISTENCE_FORMATS from '#constants/persistence-types.js';

const type =
    PERSISTENCE_FORMATS[`${process.env.PERSISTENCE}`] ||
    PERSISTENCE_FORMATS.RAM;

const { PRODUCTS } = await import(`#dao/${type}-dao/${type}-dao-products.js`); // Works
const { CARTS } = await import(`#dao/${type}-dao/${type}-dao-carts.js`); // idc

export { PRODUCTS, CARTS };
