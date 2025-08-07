import * as eventsService from '../../services/event.js';

export async function getEventsController(req, res) {
  try {
    const events = await eventsService.findAll();

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar eventos' });
  }
}
