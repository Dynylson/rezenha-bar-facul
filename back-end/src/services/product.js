import * as productRepository from '../repositories/product.js';

export async function findAll() {
  return await productRepository.findAll();
}

export async function create(data) {
  const { name, price, image } = data;

  if (!name || price == null || !image) {
    throw new Error('Nome, preço e imagem são obrigatórios');
  }

  return await productRepository.create({ name, price, image });
}

export async function update(id, data) {
  const updated = await productRepository.update(id, data);

  if (!updated) throw new Error('Produto não encontrado ou não alterado');

  return true;
}

export async function remove(id) {
  const deleted = await productRepository.remove(id);

  if (!deleted) throw new Error('Produto não encontrado ou já removido');

  return true;
}