import { Router } from 'express';
import LinkController from '../controllers/LinkController';

const routes = Router();

routes.get('/links/:code', LinkController.hitLink);

routes.get('/links/:code/stats', LinkController.getLink);

routes.post('/links', LinkController.postLink);

export default routes;