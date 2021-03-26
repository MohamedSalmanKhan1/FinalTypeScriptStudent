import { Router } from 'express';

const routes = Router();

routes.get('/student', require('./app/api/studentrouter'))
routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

export default routes;