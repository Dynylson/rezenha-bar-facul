import { Router } from "express";
import productsRouter from "./products.js";
import eventsRouter from "./events.js";
import schedulingRouter from "./scheduling.js";

const apiRoutes = Router();

apiRoutes.use('/products', productsRouter);
apiRoutes.use('/events', eventsRouter);
apiRoutes.use('/scheduling', schedulingRouter);

export { apiRoutes };
