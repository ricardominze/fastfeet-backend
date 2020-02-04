import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';
import SessionController from './app/controllers/SessionController';

import UserController from './app/controllers/UserController';
import RecipientController from './app/controllers/RecipientController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients', RecipientController.update);

routes.use(authMiddleware);
routes.put('/users', UserController.update);

export default routes;
