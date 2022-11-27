import FactoryPersistence from '#dao/factory.js';
import CartRepository from './cart.repository.js';
import ProductRepository from './product.repository.js';
import UserRepository from './user.repository.js';

const PERSISTENCE = await FactoryPersistence.setPersistence();

const PRODUCTS = new ProductRepository(PERSISTENCE);
const USERS = new UserRepository(PERSISTENCE);
const CARTS = new CartRepository(PERSISTENCE);

export { PRODUCTS, USERS, CARTS };
