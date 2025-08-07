import { Router } from "express";
import { createSchedulingController } from '../controllers/scheduling/create-scheduling.js';
import { getSchedulingsController } from '../controllers/scheduling/get-schedulings.js';
import { updateSchedulingController } from '../controllers/scheduling/update-scheduling.js';
import { removeSchedulingController } from '../controllers/scheduling/remove-scheduling.js';

const schedulingRouter = Router();

schedulingRouter.get('/', getSchedulingsController);
schedulingRouter.post('/', createSchedulingController);
schedulingRouter.put('/:id', updateSchedulingController);
schedulingRouter.delete('/:id', removeSchedulingController);

export default schedulingRouter;
