import { PERSISTENCES } from '#constants/persistences.js';
import FactoryPersistence from '#dao/factory.js';
import CartRepository from '../repositories/cart.repository.js';
import ProductRepository from '../repositories/product.repository.js';
import UserRepository from '../repositories/user.repository.js';

const u = process.env.DB_LOCAL || process.env.DB_TEST;
const p = PERSISTENCES[process.env.PERSISTENCE] || PERSISTENCES.FS;

const PERSISTENCE = await FactoryPersistence.setPersistence(p, u);

const PRODUCTS = new ProductRepository(PERSISTENCE);
const USERS = new UserRepository(PERSISTENCE);
const CARTS = new CartRepository(PERSISTENCE);

export { PRODUCTS, USERS, CARTS };
