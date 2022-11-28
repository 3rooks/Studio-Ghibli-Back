import deleteProductController from '#controllers/products/product-delete.controller.js';
import getProductIdController from '#controllers/products/product-get-id.controller.js';
import getProductController from '#controllers/products/product-get.controller.js';
import postProductController from '#controllers/products/product-post.controller.js';
import putProductController from '#controllers/products/product-put.controller.js';
import productIdParamsDTO from '#dto/products/product-get-id.dto.js';
import postProductDTO from '#dto/products/product-post.dto.js';
import putProductDTO from '#dto/products/product-put-id.dto.js';
import { Router } from 'express';

const productRoutes = Router();

productRoutes.get('/products', getProductController);

productRoutes.post('/products', postProductDTO, postProductController);

productRoutes.get(
    '/products/:productId',
    productIdParamsDTO,
    getProductIdController
);

productRoutes.put(
    '/products/:productId',
    productIdParamsDTO,
    putProductDTO,
    putProductController
);

productRoutes.delete(
    '/products/:productId',
    productIdParamsDTO,
    deleteProductController
);

export default productRoutes;
