import * as productService from '../../services/product.js';

export async function getProductsController(req, res) {
  try {
    const products = await productService.findAll();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar produtos' });
  }
}
