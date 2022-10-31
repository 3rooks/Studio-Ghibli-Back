import { Router } from 'express';
import productCreateDTO from '#dto/product-create.dto.js';
import productCreateController from '#controllers/product-create.controller.js';
import productDeleteDTO from '#dto/product-delete.dto.js';
import productDeleteController from '#controllers/product-delete.controller.js';
import productListController from '#controllers/product-list.controller.js';
import productIdController from '#controllers/product-id.controller.js';
import productIdDTO from '#dto/product-id.dto.js';

const productRoutes = Router();

productRoutes.get('/products', productListController);

productRoutes.get('/products/:id', productIdDTO, productIdController);

productRoutes.post('/products', productCreateDTO, productCreateController);

productRoutes.delete(
    '/products/:id',
    productDeleteDTO,
    productDeleteController
);

export default productRoutes;
