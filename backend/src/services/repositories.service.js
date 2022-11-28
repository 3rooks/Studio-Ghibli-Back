import FactoryPersistence from '#dao/factory.js';
import CartRepository from '../repositories/cart.repository.js';
import ProductRepository from '../repositories/product.repository.js';
import UserRepository from '../repositories/user.repository.js';

const PERSISTENCE = await FactoryPersistence.setPersistence();

const PRODUCTS = new ProductRepository(PERSISTENCE);
const USERS = new UserRepository(PERSISTENCE);
const CARTS = new CartRepository(PERSISTENCE);

export { PRODUCTS, USERS, CARTS };
