import * as eventsService from '../../services/event.js';

export async function updateEventController(req, res) {
  try {
    await eventsService.update(req.params.id, req.body);

    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar evento' });
  }
}
