import { Router } from "express";
import { getEventsController } from '../controllers/events/get-events.js';
import { createEventController } from '../controllers/events/create-event.js';
import { updateEventController } from '../controllers/events/update-event.js';
import { removeEventController } from '../controllers/events/remove-event.js';

const eventsRouter = Router();

eventsRouter.get('/', getEventsController);
eventsRouter.post('/', createEventController);
eventsRouter.put('/:id', updateEventController);
eventsRouter.delete('/:id', removeEventController);

export default eventsRouter;
