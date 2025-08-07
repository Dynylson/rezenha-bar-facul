import * as eventsService from '../../services/event.js';

export async function createEventController(req, res) {
  try {
    const event = await eventsService.create(req.body);

    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar evento' });
  }
}
