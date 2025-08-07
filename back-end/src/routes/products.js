import { Router } from "express";
import { getProductsController } from '../controllers/products/get-products.js';
import { createProductsController } from '../controllers/products/create-product.js';
import { updateProductController } from '../controllers/products/update-product.js';
import { removeProductController } from '../controllers/products/remove-product.js';

const productsRouter = Router();

productsRouter.get('/', getProductsController);
productsRouter.post('/', createProductsController);
productsRouter.put('/:id', updateProductController);
productsRouter.delete('/:id', removeProductController);

export default productsRouter;
