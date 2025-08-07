import * as productService from '../../services/product.js';

export async function removeProductController(req, res) {
  try {
    const { id } = req.params;

    await productService.remove(id);

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover produto' });
  }
}
