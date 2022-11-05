import productCreateController from '#controllers/product-create.controller.js';
import productDeleteController from '#controllers/product-delete.controller.js';
import productIdController from '#controllers/product-id.controller.js';
import productListController from '#controllers/product-list.controller.js';
import productCreateDTO from '#dto/product-create.dto.js';
import productDeleteDTO from '#dto/product-delete.dto.js';
import productIdDTO from '#dto/product-id.dto.js';
import { Router } from 'express';

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
