import * as productService from '../../services/product.js';

export async function createProductsController(req, res) {
    try {
        const payload = req.body;

        const product = await productService.create(payload);

        res.status(201).json(product);
    } catch (error) {
        console.error('Erro ao criar produto:', error);
        return res.status(500).json({ message: 'Erro ao criar produto' });
    }
}
