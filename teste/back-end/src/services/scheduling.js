import * as schedulingRepository from '../repositories/scheduling.js';

export async function findAll() {
  return await schedulingRepository.findAll();
}

export async function create(data) {
  const { customer_name, date, time } = data;
  if (!customer_name || !date || !time) {
    throw new Error('Nome do cliente, data e hora são obrigatórios');
  }
  return await schedulingRepository.create({ customer_name, date, time });
}

export async function update(id, data) {
  const updated = await schedulingRepository.update(id, data);
  if (!updated) throw new Error('Agendamento não encontrado ou não alterado');
  return true;
}

export async function remove(id) {
  const deleted = await schedulingRepository.remove(id);
  if (!deleted) throw new Error('Agendamento não encontrado ou já removido');
  return true;
}
