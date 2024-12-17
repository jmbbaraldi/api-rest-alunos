import express from 'express';
import Routes from './src/routes/index';
import './src/database';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
Routes(app);

export default app;
