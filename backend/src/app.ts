import express from 'express';
import routes from './routes';

//Instanciando o express
const app = express();

//Middlewares
app.use(express.json());

//Routes
app.use(routes);

export default app;