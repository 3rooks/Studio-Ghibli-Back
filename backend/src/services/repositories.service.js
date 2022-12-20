import { PERSISTENCES } from '#constants/persistences.js';
import { FactoryPersistence } from '#dao/factory.js';
import { CartRepository } from '#repositories/cart.repository.js';
import { ProductRepository } from '#repositories/product.repository.js';
import { UserRepository } from '#repositories/user.repository.js';

const url = process.env.DB_TEST || process.env.MONGODB_URL;
const per = PERSISTENCES[process.env.PERSISTENCE] || PERSISTENCES.FS;

const PERSISTENCE = await FactoryPersistence.setPersistence(per, url);

const PRODUCTS = new ProductRepository(PERSISTENCE);
const USERS = new UserRepository(PERSISTENCE);
const CARTS = new CartRepository(PERSISTENCE);

export { PRODUCTS, USERS, CARTS };
