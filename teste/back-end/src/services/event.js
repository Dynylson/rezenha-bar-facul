import * as eventsRepository from '../repositories/event.js';

export async function findAll() {
  return await eventsRepository.findAll();
}

export async function create(data) {
  const { name, image } = data;

  if (!name || !image) {
    throw new Error('Nome e imagem são obrigatórios');
  }

  return await eventsRepository.create({ name, image });
}

export async function update(id, data) {
  const updated = await eventsRepository.update(id, data);
  if (!updated) throw new Error('Evento não encontrado ou não alterado');
  return true;
}

export async function remove(id) {
  const deleted = await eventsRepository.remove(id);
  if (!deleted) throw new Error('Evento não encontrado ou já removido');
  return true;
}
