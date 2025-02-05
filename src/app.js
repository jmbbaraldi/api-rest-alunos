import express from 'express';
import { resolve } from 'path';
import cors from 'cors';
import Routes from './routes/index';
import './database';

const whiteList = ['http://localhost:3001', 'http://35.199.80.53:81'];

const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

const app = express();

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(resolve(__dirname, 'uploads')));
Routes(app);

export default app;
