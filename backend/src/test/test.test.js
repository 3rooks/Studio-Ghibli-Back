import test from 'ava';
import {
    gDeleteProduct,
    gGetProductById,
    gGetProducts,
    gPostProduct,
    gUpdateProduct
} from './products.js';
import setupTests from './utils/setup-tests.js';

setupTests(test);

test.serial('Post some product succesfully', gPostProduct);
test.serial('Get all products succesfully', gGetProducts);
test('Get product by id succesfully', gGetProductById);
test('Update product succesfully', gUpdateProduct);
test.after('Delete product succesfully', gDeleteProduct);
