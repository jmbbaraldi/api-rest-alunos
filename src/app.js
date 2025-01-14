import express from 'express';
import { resolve } from 'path';
import Routes from './routes/index';
import './database';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(resolve(__dirname, 'uploads')));
Routes(app);

export default app;
