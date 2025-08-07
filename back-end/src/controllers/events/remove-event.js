import * as eventsService from '../../services/event.js';

export async function removeEventController(req, res) {
  try {
    await eventsService.remove(req.params.id);

    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover evento' });
  }
}
