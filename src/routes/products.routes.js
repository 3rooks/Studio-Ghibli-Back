import {
    deleteProductController,
    getProductController,
    getProductIdController,
    postProductController,
    putProductController
} from '#controllers/products.controller.js';
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
