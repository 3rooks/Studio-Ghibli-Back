import productAllController from '#controllers/products/product-all.controller.js';
import productCreateController from '#controllers/products/product-create.controller.js';
import productDeleteController from '#controllers/products/product-delete.controller.js';
import productIdController from '#controllers/products/product-get-id.controller.js';
import productCreateDTO from '#dto/products/product-create.dto.js';
import productDeleteDTO from '#dto/products/product-delete.dto.js';
import productIdDTO from '#dto/products/product-id.dto.js';
import { Router } from 'express';

const productRoutes = Router();

productRoutes.get('/products', productAllController);

productRoutes.get('/products/:id', productIdDTO, productIdController);

productRoutes.post('/products', productCreateDTO, productCreateController);

productRoutes.delete(
    '/products/:id',
    productDeleteDTO,
    productDeleteController
);

export default productRoutes;
