import * as productService from '../../services/product.js';

export async function updateProductController(req, res) {
  try {
    const { id } = req.params;
    const payload = req.body;

    await productService.update(id, payload);

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar produto' });
  }
}
